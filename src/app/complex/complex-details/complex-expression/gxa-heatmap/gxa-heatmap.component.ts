import {Component, OnInit, Input} from '@angular/core';
import {Participant} from "../../../shared/model/complex-details/participant.model";

interface GXAQueryParams {
  value: string,
  category: string
}

@Component({
  selector: 'app-gxa-heatmap',
  templateUrl: './gxa-heatmap.component.html',
  styleUrls: ['./gxa-heatmap.component.css']
})
export class GxaHeatmapComponent implements OnInit {
  private _gxa;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _gxaParamsQueries: GXAQueryParams[];
  private _isLoaded: boolean = true;

  constructor() {
  }

  ngOnInit() {
    let context = this;
    this.gxa.render({
      params: 'geneQuery=' + JSON.stringify(this._gxaParamsQueries) + '&species=' + this._complexSpecies.split(";")[0].toLowerCase(),
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

  get gxaParamsQueries(): GXAQueryParams[] {
    return this._gxaParamsQueries;
  }

  @Input()
  set gxaParamsQueries(value: GXAQueryParams[]) {
    this._gxaParamsQueries = value;
  }

  get isLoaded(): boolean {
    return this._isLoaded;
  }

  set isLoaded(value: boolean) {
    this._isLoaded = value;
  }
}
