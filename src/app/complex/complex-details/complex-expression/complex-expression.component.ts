import {Component, OnInit, Input} from '@angular/core';
import {Participant} from "../../shared/model/complex-details/participant.model";
import {CrossReference} from "../../shared/model/complex-details/cross-reference.model";

interface GXAQueryParams {
  value: string,
  category: string
}

@Component({
  selector: 'app-complex-expression',
  templateUrl: './complex-expression.component.html',
  styleUrls: ['./complex-expression.component.css']
})
export class ComplexExpressionComponent implements OnInit {
  private _gxa;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _crossReferences: CrossReference[];
  private _gxaParamsQueries: GXAQueryParams[];
  private _goCellularXRefs: CrossReference[];

  constructor() {
  }

  ngOnInit() {
    for (let participant in this._participants) {
      if (this._participants[participant].interactorType === 'protein') {
        if (this._gxaParamsQueries === undefined) {
          this._gxaParamsQueries = [];
        }
        this._gxaParamsQueries.push({
          value: this._participants[participant].identifier,
          category: 'uniprot'
        });
      }
    }
    for (let pos in this._crossReferences) {
      let crossRef = this._crossReferences[pos];
      let database = this._crossReferences[pos].database;
      let qualifier = this._crossReferences[pos].qualifier;

      if (database === 'gene ontology' && qualifier === 'cellular component') {
        if (this.goCellularXRefs === undefined) {
          this.goCellularXRefs = [];
        }
        this.goCellularXRefs.push(crossRef);
      }
    }
  }

  get gxa() {
    return this._gxa;
  }

  @Input()
  set gxa(value) {
    this._gxa = value;
  }

  get participants(): Participant[] {
    return this._participants;
  }

  @Input()
  set participants(value: Participant[]) {
    this._participants = value;
  }

  get complexSpecies(): string {
    return this._complexSpecies;
  }

  @Input()
  set complexSpecies(value: string) {
    this._complexSpecies = value;
  }


  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get gxaParamsQueries(): GXAQueryParams[] {
    return this._gxaParamsQueries;
  }

  @Input()
  set gxaParamsQueries(value: GXAQueryParams[]) {
    this._gxaParamsQueries = value;
  }

  get goCellularXRefs(): CrossReference[] {
    return this._goCellularXRefs;
  }

  set goCellularXRefs(value: CrossReference[]) {
    this._goCellularXRefs = value;
  }
}
