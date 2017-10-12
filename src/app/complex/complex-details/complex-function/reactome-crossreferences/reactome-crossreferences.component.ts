import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {ReactomeService} from './service/reactome.service';
import {ReactomeComplex} from './model/reactome-complex';
import {ReactomePathway} from './model/reactome-pathway';
import {NotificationService} from '../../../../shared/notification/service/notification.service';
import {GoogleAnalyticsService} from '../../../../shared/google-analytics/service/google-analytics.service';
import {Category} from '../../../../shared/google-analytics/types/category.enum';

@Component({
  selector: 'cp-reactome-crossreferences',
  templateUrl: './reactome-crossreferences.component.html',
  styleUrls: ['./reactome-crossreferences.component.css']
})

export class ReactomeCrossreferencesComponent implements OnInit {

  private _crossReferences: CrossReference[];
  private _reactomeComplexes = {};
  private _reactomePathways = {};
  private _selectedComplex: string;
  private _selectedPathway: string;
  private _isDataLoaded = false;
  private _displayedElements = 5;
  private diagramLoaded = false;

  constructor(private reactomeService: ReactomeService, private notificationService: NotificationService,
              private googleAnalyticsService: GoogleAnalyticsService) {
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
    for (let i = 0; i < this._crossReferences.length; i++) {
      Observable.forkJoin(this.reactomeService.findRelatedPathways(this._crossReferences[i].identifier),
        this.reactomeService.getComplexName(this._crossReferences[i].identifier)).subscribe(
        response => {
          const relatedPathways: any = response[0];
          const complexName = response[1];
          for (let count = 0; count < relatedPathways.length; count++) {
            const pathway: any = relatedPathways[count];
            let currentPathway = this._reactomePathways[pathway.stId];
            let currentComplex = this._reactomeComplexes[this._crossReferences[i].identifier];
            if (currentPathway === undefined) {
              currentPathway = this._reactomePathways[pathway.stId] = new ReactomePathway(pathway.stId);
              currentPathway.name = pathway.displayName;
            }
            if (currentComplex === undefined) {
              currentComplex = this._reactomeComplexes[this._crossReferences[i].identifier.toString()]
                = new ReactomeComplex(this._crossReferences[i].identifier);
              currentComplex.name = complexName;
            }
            currentPathway.complexes.push(this._crossReferences[i].identifier);
            currentComplex.pathways.push(pathway.stId);
            if (i === this._crossReferences.length - 1 && count === relatedPathways.length - 1) {
              this.selectComplexWithFirstPathway(Object.keys(this._reactomeComplexes).sort()[0]);
              this._isDataLoaded = true;
            }
          }
        },
        error => {
          this.notificationService.onAPIRequestError('Reactome');
          this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.reactome, error.status ? error.status : 'unknown');
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
    this.selectedPathway = this._reactomeComplexes[complexId].pathways.sort()[0];
  }

  public getSortedKeys(object: any) {
    return Object.keys(object).sort();
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get selectedComplex(): string {
    return this._selectedComplex;
  }

  set selectedComplex(value: string) {
    this._selectedComplex = value;
  }

  get selectedPathway(): string {
    return this._selectedPathway;
  }

  set selectedPathway(value: string) {
    this._selectedPathway = value;
  }

  get reactomeComplexes(): {} {
    return this._reactomeComplexes;
  }

  set reactomeComplexes(value: {}) {
    this._reactomeComplexes = value;
  }

  get reactomePathways(): {} {
    return this._reactomePathways;
  }

  set reactomePathways(value: {}) {
    this._reactomePathways = value;
  }

  get isDataLoaded(): boolean {
    return this._isDataLoaded;
  }

  set isDataLoaded(value: boolean) {
    this._isDataLoaded = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
