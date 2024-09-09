import {Component, computed, input, model, OnInit, output, ViewEncapsulation} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {interactorTypeIcon, organismIcon} from '../../complex-portal-utils';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'cp-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplexFilterComponent implements OnInit {

  facets = input<Facets>();
  speciesFilter = input<string[]>();
  bioRoleFilter = input<string[]>();
  interactorTypeFilter = input<string[]>();
  predictedFilter = input<string[]>();

  onSpeciesFilterChanged = output<string[]>();
  onBiologicalRoleFilterChanged = output<string[]>();
  onInteractorTypeFilterChanged = output<string[]>();
  onPredictedFilterChanged = output<string[]>();
  onResetAllFilters = output<boolean>();

  options: Options = {
    floor: 1,
    ceil: 5,
    showTicks: true,
    showTicksValues: false,
    showSelectionBarEnd: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
  };

  confidenceHeight = input<number>(64);
  confidenceWidth = input<number>(128);
  minConfidence = model<number>(1);
  maxConfidenceCount = computed(() =>
    this.facets().confidence_score_f
      .map(facet => facet.count)
      .reduce((max, v) => v > max ? v : max)
  );
  confidences = computed(() => {
      const confidences: { value: number, count: number, height: number }[] = new Array(5).fill(0).map((e, i) => ({
        value: i + 1,
        count: 0,
        height: 0
      }));
      this.facets().confidence_score_f.forEach(f => {
        const confidence = confidences[parseInt(f.name, 10) - 1];
        confidence.count = f.count;
        confidence.height = (this.confidenceHeight() * f.count / this.maxConfidenceCount());
      });
      return confidences;
    }
  );
  totalCount = computed(() => this.confidences().slice(this.minConfidence() - 1).reduce((a, b) => a + b.count, 0));

  constructor(private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeSpeciesFilter(filter: string, status: boolean) {
    if (status) {
      this.speciesFilter().push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.speciesFilter().splice(this.speciesFilter().indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onSpeciesFilterChanged.emit(this.speciesFilter());
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeBiologicalRoleFilter(filter: string, status: boolean) {
    if (status) {
      this.bioRoleFilter().push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.bioRoleFilter().splice(this.bioRoleFilter().indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter());
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeInteractorTypeFilter(filter: string, status: boolean) {
    if (status) {
      this.interactorTypeFilter().push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.interactorTypeFilter().splice(this.interactorTypeFilter().indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter());
  }

  public changePredictedFilter(filter: string, status: boolean) {
    if (status) {
      this.predictedFilter().push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.predictedFilter().splice(this.predictedFilter().indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onPredictedFilterChanged.emit(this.predictedFilter());
  }

  /**
   * Emit event to parent component to remove all filters
   */
  public resetAllFilters() {
    this.minConfidence.set(1);
    this.onResetAllFilters.emit(true);
  }

  anyFiltersSelected = computed(() =>
    this.speciesFilter().length !== 0 || this.bioRoleFilter().length !== 0 ||
    this.interactorTypeFilter().length !== 0 || this.predictedFilter().length !== 0 ||
    this.minConfidence() !== 1);

  /**
   *
   * @param element filter to check if already selected
   * @param filter selected filters
   * @returns {boolean} true if filter is already in selected filters
   */
  public isSelected(element: string, filter: string[]): boolean {
    return filter.indexOf(element) !== -1;
  }

  public facetTypeIcon(facet: string): string {
    return interactorTypeIcon(facet);
  }

  public facetOrganismIcon(facet): string {
    return organismIcon(facet);
  }

  formatPredictedFacetValue(facetName: string): string {
    if (facetName === 'true') {
      return 'Predicted complex';
    } else {
      return 'Curated complex';
    }
  }

  public getStars(amount: string): ('empty' | 'full')[] {
    return this._getStars(Number(amount));
  }

  private _getStars(amount: number): ('empty' | 'full')[] {
    const stars: ('empty' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];
    stars.fill('full');
    if (amount < stars.length) {
      stars.fill('empty', amount);
    }
    return stars;
  }
}

