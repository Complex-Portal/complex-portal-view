import {Component, Input, OnInit, input } from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {MIJson} from 'complexviewer';

@Component({
  selector: 'cp-complex-expression',
  templateUrl: './complex-expression.component.html',
  styleUrls: ['./complex-expression.component.scss']
})
export class ComplexExpressionComponent implements OnInit {
  private _gxa = null;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _crossReferences: CrossReference[];
  private _gxaParamsQueries: string;
  private _goCellularXRefs: CrossReference[];

  complexMIJSON = input<MIJson>();

  constructor() {
  }

  ngOnInit() {
    this.findXRefs();
    this.findGXAQueries();
  }

  private findXRefs() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      const crossRef = this._crossReferences[i];
      const database = this._crossReferences[i].database;
      const qualifier = this._crossReferences[i].qualifier;

      if (database === 'gene ontology' && qualifier === 'cellular component') {
        if (this.goCellularXRefs === undefined) {
          this.goCellularXRefs = [];
        }
        this.goCellularXRefs.push(crossRef);
      }
    }
  }

  private findGXAQueries() {
    this.gxaParamsQueries = [...new Set(this.complexMIJSON().data
      .filter(e => e.object === 'interactor')
      .map(e => e.identifier)
      .filter(i => i.db === 'uniprotkb')
      .map(i => i.id)
      .map(id => id.split('-')[0])) // extract canonical id
    ].join(' ');
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

  get gxaParamsQueries(): string {
    return this._gxaParamsQueries;
  }

  @Input()
  set gxaParamsQueries(value: string) {
    this._gxaParamsQueries = value;
  }

  get goCellularXRefs(): CrossReference[] {
    return this._goCellularXRefs;
  }

  set goCellularXRefs(value: CrossReference[]) {
    this._goCellularXRefs = value;
  }
}
