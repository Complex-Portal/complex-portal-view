import {Component, computed, input, model, OnInit, output, OutputRef} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {interactorTypeIcon, organismIcon} from '../../complex-portal-utils';

interface Confidence {
  value: number;
  count: number;
  label: string;
  stars: string[];
}

@Component({
  selector: 'cp-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  facets = input<Facets>();

  minConfidence = model<number>(1);

  speciesFilter = input<string[]>();
  bioRoleFilter = input<string[]>();
  interactorTypeFilter = input<string[]>();
  predictedFilter = input<string[]>();

  speciesFilterChange = output<string[]>();
  bioRoleFilterChange = output<string[]>();
  interactorTypeFilterChange = output<string[]>();
  predictedFilterChange = output<string[]>();

  _allChanges: OutputRef<any>[] = [
    this.speciesFilterChange,
    this.bioRoleFilterChange,
    this.interactorTypeFilterChange,
    this.predictedFilterChange,
    this.minConfidence
  ];
  anyChange = output<void>();

  onResetAllFilters = output<boolean>();

  confidenceGap = input<number>(2);
  confidences = computed(() => {
      const confidences: Confidence[] = new Array(5).fill(0).map((e, i) => ({
        value: i + 1,
        count: 0,
        label: `${i + 1} star${i > 0 ? 's' : ''}`,
        stars: this._getStars(i + 1)
      }));
      this.facets().confidence_score_f.forEach(f => {
        const confidence = confidences[parseInt(f.name, 10) - 1];
        confidence.count = f.count;
      });
      return confidences;
    }
  );
  reversedConfidence = computed(() => [...this.confidences()].reverse());

  constructor(private googleAnalyticsService: AnalyticsService) {
    this._allChanges.forEach(change => change.subscribe(() => setTimeout(() => this.anyChange.emit())));
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
    this.speciesFilterChange.emit(this.speciesFilter());
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
    this.bioRoleFilterChange.emit(this.bioRoleFilter());
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
    this.interactorTypeFilterChange.emit(this.interactorTypeFilter());
  }

  public changePredictedFilter(filter: string, status: boolean) {
    if (status) {
      this.predictedFilter().push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.predictedFilter().splice(this.predictedFilter().indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.predictedFilterChange.emit(this.predictedFilter());
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


  private _getStars(amount: number): ('empty' | 'full')[] {
    const stars: ('empty' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];
    stars.fill('full');
    if (amount < stars.length) {
      stars.fill('empty', amount);
    }
    return stars;
  }
}

