import {Component, OnInit, Input} from '@angular/core';
import {Participant} from "../../shared/model/complex-details/participant.model";

interface ParamsQuery {
  value: string,
  category: string
}

@Component({
  selector: 'app-complex-disease',
  templateUrl: './complex-disease.component.html',
  styleUrls: ['./complex-disease.component.css']
})

export class ComplexDiseaseComponent implements OnInit {
  private _gxa;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _paramsQueries: ParamsQuery[] = [];
  private _isLoaded: boolean = true;

  constructor() {
  }

  ngOnInit() {
    for (let participant: Participant in this._participants) {
      if (this._participants[participant].interactorType === 'protein') {
        this._paramsQueries.push({
          value: this._participants[participant].identifier,
          category: 'uniprot'
        });
      }
    }
    let context = this;
    this.gxa.render({
      params: 'geneQuery=' + JSON.stringify(this._paramsQueries) + '&species=' + this._complexSpecies.split(";")[0].toLowerCase(),
      isMultiExperiment: false,
      target: 'heatmapContainer',
      fail: function () {
        context._isLoaded = false;
      }
    });
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

  get paramsQueries(): ParamsQuery[] {
    return this._paramsQueries;
  }

  set paramsQueries(value: Array) {
    this._paramsQueries = value;
  }

  get isLoaded(): boolean {
    return this._isLoaded;
  }

  set isLoaded(value: boolean) {
    this._isLoaded = value;
  }
}
