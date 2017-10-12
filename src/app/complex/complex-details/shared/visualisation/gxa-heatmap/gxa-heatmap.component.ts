import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../../../shared/model/complex-details/participant.model';

@Component({
  selector: 'cp-gxa-heatmap',
  templateUrl: 'gxa-heatmap.component.html',
  styleUrls: ['gxa-heatmap.component.css']
})
export class GxaHeatmapComponent implements OnInit {
  private _gxa;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _gxaParamsQueries: string;
  private _isLoaded = true;
  private _experimentId: string;

  constructor() {
  }

  ngOnInit() {
    switch (this._complexSpecies) {
      case 'Homo sapiens; 9606':
        this._experimentId = 'E-MTAB-5214';
        break;
      case 'Mus musculus; 10090':
        this._experimentId = 'E-MTAB-4644';
        break;
      case 'Rattus norvegicus; 10116':
        this._experimentId = 'E-GEOD-53960';
        break;
      case 'Gallus gallus (Chicken); 9031':
        this._experimentId = 'E-MTAB-2797';
        break;
      case 'Caenorhabditis elegans; 6239':
        this._experimentId = 'E-MTAB-2812';
        break;
      case 'Sus scrofa (Pig); 9823':
        this._experimentId = 'E-MTAB-5895';
        break;
      default:
        this._isLoaded = false;
    }

    if (this._experimentId) {
      const context = this;
      this._gxa.render({
        target: 'highchartsContainer',
        experiment: this._experimentId,
        atlasUrl: 'https://www.ebi.ac.uk/gxa/',
        query: {
          gene: this.gxaParamsQueries
        },
        fail: function () {
          context._isLoaded = false;
        }
      });
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

  get gxaParamsQueries(): string {
    return this._gxaParamsQueries;
  }

  @Input()
  set gxaParamsQueries(value: string) {
    this._gxaParamsQueries = value;
  }

  get isLoaded(): boolean {
    return this._isLoaded;
  }

  set isLoaded(value: boolean) {
    this._isLoaded = value;
  }
}
