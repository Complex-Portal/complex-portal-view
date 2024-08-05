import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../../../shared/model/complex-details/participant.model';
import {SpeciesPipe} from '../../../../shared/pipe/species.pipe';

@Component({
  selector: 'cp-gxa-heatmap',
  templateUrl: 'gxa-heatmap.component.html',
  styleUrls: ['gxa-heatmap.component.css'],
  providers: [SpeciesPipe]
})
export class GxaHeatmapComponent implements OnInit {
  private _gxa;
  private _participants: Participant[];
  private _complexSpecies: string;
  private _gxaParamsQueries: string;
  private _isLoaded = true;
  private _experimentId: string;

  constructor(private species: SpeciesPipe) {
  }

  exceptions = new Map<string, string>([
    ['homo sapiens', 'E-GTEX-8'],
    ['mus musculus', 'E-MTAB-4644'],
  ]);

  ngOnInit() {
    this._complexSpecies = this.species.transform(this.complexSpecies, false).toLowerCase();

    this._experimentId = this.exceptions.get(this._complexSpecies);

    const context = this;
    this._gxa.render({
      target: 'highchartsContainer',
      experiment: this._experimentId || 'reference',
      atlasUrl: 'https://www.ebi.ac.uk/gxa/',
      query: {
        gene: this.gxaParamsQueries,
        species: this._complexSpecies
      },
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
