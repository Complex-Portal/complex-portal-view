import {Component, input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

import {Pathway, ReactomeService} from './service/reactome.service';
import {ReactomeComplex} from './model/reactome-complex';
import {ReactomePathway} from './model/reactome-pathway';
import {NotificationService} from '../../../../shared/notification/service/notification.service';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';
import {Category} from '../../../../shared/google-analytics/types/category.enum';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'cp-reactome-cross-references',
  templateUrl: './reactome-cross-references.component.html',
  styleUrls: ['./reactome-cross-references.component.css']
})

export class ReactomeCrossReferencesComponent implements OnInit {
  crossReferences = input<CrossReference[]>();
  reactomeComplexes: { [stId: string]: ReactomeComplex } = {};
  reactomePathways: { [stId: string]: ReactomePathway } = {};
  selectedComplex: string;
  selectedPathway: string;
  isDataLoaded = false;
  displayedCrossReferences = 5;
  displayedRelatedPathways = 5;
  private diagramLoaded = false;

  constructor(private reactomeService: ReactomeService,
              private notificationService: NotificationService,
              private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.mapComplexeToPathways();
  }


  /**
   * TODO: If possible, this should be removed. This is very heavy lifting for the front end and should be done...
   * TODO: ...in the WS (Either CP-WS or Reactome-WS)
   * This request is doing the following:
   * We have Reactome XRefs in the CP, but Reactome doesn't provide CP XRefs.
   * 1a. Ask Reactome for every XRefs we have for all pathways in Reactome.
   * 1b. Ask Reactome for every XRefs we have for the corresponding name.
   * 2. Create arrays (reactomePathways & reactomeComplexes) to create m:n relationship
   * 3. Map pathways and complexes to each other.
   * *Info: One Complex can be in multiple pathways and one pathway can have multiple complexes.*
   */
  private mapComplexeToPathways(): void {
    for (let i = 0; i < this.crossReferences().length; i++) {
      forkJoin({
        relatedPathways: this.reactomeService.findRelatedPathways(this.crossReferences()[i].identifier),
        complexName: this.reactomeService.getComplexName(this.crossReferences()[i].identifier)
      }).subscribe({
        next: response => {
          const relatedPathways: Pathway[] = response.relatedPathways;
          const complexName = response.complexName;
          for (let count = 0; count < relatedPathways.length; count++) {
            const pathway: Pathway = relatedPathways[count];
            let currentPathway = this.reactomePathways[pathway.stId];
            let currentComplex = this.reactomeComplexes[this.crossReferences()[i].identifier];
            if (currentPathway === undefined) {
              currentPathway = this.reactomePathways[pathway.stId] = new ReactomePathway(pathway.stId);
              currentPathway.name = pathway.displayName;
            }
            if (currentComplex === undefined) {
              currentComplex = this.reactomeComplexes[this.crossReferences()[i].identifier.toString()]
                = new ReactomeComplex(this.crossReferences()[i].identifier);
              currentComplex.name = complexName;
            }
            currentPathway.complexes.push(this.crossReferences()[i].identifier);
            currentComplex.pathways.push(pathway.stId);
            if (i === this.crossReferences().length - 1 && count === relatedPathways.length - 1) {
              this.selectComplexWithFirstPathway(Object.keys(this.reactomeComplexes).sort()[0]);
              this.isDataLoaded = true;
            }
          }
        },

        error: error => {
          this.notificationService.onAPIRequestError('Reactome');
          this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.reactome, error.status ? error.status : 'unknown');
        }
      });
    }
  }

  onChildLoaded() {
    this.diagramLoaded = true;
  }

  public selectComplexByPathway(complexId: string, pathwayId: string): void {
    this.selectedComplex = complexId;
    this.selectedPathway = pathwayId;
  }

  public selectComplexWithFirstPathway(complexId: string): void {
    this.selectedComplex = complexId;
    this.selectedPathway = this.reactomeComplexes[complexId].pathways.sort()[0];
  }

  public getSortedKeys(object: any): string[] {
    return Object.keys(object).sort();
  }

  public getObjectLength(object: any): number {
    return Object.keys(object).length;
  }
}
