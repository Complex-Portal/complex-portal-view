import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";
import {Observable} from "rxjs";
import {ReactomeService} from "./service/reactome.service";
import {ReactomeComplex} from "./shared/reactome-complex";
import {ReactomePathway} from "./shared/reactome-pathway";

@Component({
  selector: 'app-reactome-crossreferences',
  templateUrl: './reactome-crossreferences.component.html',
  styleUrls: ['./reactome-crossreferences.component.css']
})

export class ReactomeCrossreferencesComponent implements OnInit {

  private _crossReferences: CrossReference[];
  private _reactomeComplexes = {};
  private _reactomePathways = {};
  private _selectedComplex: string;
  private _selectedPathway: string;
  private _isDataLoaded: boolean = false;

  constructor(private reactomeService: ReactomeService) {
  }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      Observable.forkJoin(this.reactomeService.findRelatedPathways(this._crossReferences[i].identifier),
        this.reactomeService.getComplexName(this._crossReferences[i].identifier)).subscribe(response => {
        let relatedPathways: any[] = response[0];
        let complexName = response[1];
        for (let count = 0; count < relatedPathways.length; count++) {
          let pathway: any = relatedPathways[count];
          let currentPathway = this._reactomePathways[pathway.stId];
          let currentComplex = this._reactomeComplexes[this._crossReferences[i].identifier];
          if (currentPathway === undefined) {
            currentPathway = this._reactomePathways[pathway.stId] = new ReactomePathway(pathway.stId);
            currentPathway.name = pathway.displayName;
          }
          if (currentComplex === undefined) {
            currentComplex = this._reactomeComplexes[this._crossReferences[i].identifier.toString()] = new ReactomeComplex(this._crossReferences[i].identifier);
            currentComplex.name = complexName;
          }
          currentPathway.complexes.push(this._crossReferences[i].identifier);
          currentComplex.pathways.push(pathway.stId);
          if (i === this._crossReferences.length - 1 && count === relatedPathways.length - 1) {
            this.selectComplexWithFirstPathway(Object.keys(this._reactomeComplexes).sort()[0]);
            this._isDataLoaded = true;
          }
        }
      });
    }
  }

  public selectComplexByPathway(complexId: string, pathwayId: string): void {
    this.selectedComplex = complexId;
    this.selectedPathway = pathwayId;
  }

  public selectComplexWithFirstPathway(complexId: string): void {
    this.selectedComplex = complexId;
    this.selectedPathway = this._reactomeComplexes[complexId].pathways.sort()[0];
  }

  public getSortedKeys(object : any) {
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
}
