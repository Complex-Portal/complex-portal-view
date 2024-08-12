import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {interactorTypeIcon, organismIcon} from '../../complex-portal-utils';

@Component({
  selector: 'cp-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  @Input() facets: Facets;
  @Input() speciesFilter: string[];
  @Input() bioRoleFilter: string[];
  @Input() interactorTypeFilter: string[];
  @Input() predictedFilter: string[];
  @Input() starsFilter: string[];

  @Output() onSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onBiologicalRoleFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onPredictedFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onStarsFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      this.speciesFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.speciesFilter.splice(this.speciesFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onSpeciesFilterChanged.emit(this.speciesFilter);
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeBiologicalRoleFilter(filter: string, status: boolean) {
    if (status) {
      this.bioRoleFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeInteractorTypeFilter(filter: string, status: boolean) {
    if (status) {
      this.interactorTypeFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
  }

  public changePredictedFilter(filter: string, status: boolean) {
    if (status) {
      this.predictedFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.predictedFilter.splice(this.predictedFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onPredictedFilterChanged.emit(this.predictedFilter);
  }

  public changeStarFilter(filter: string, status: boolean) {
    if (status) {
      this.starsFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.starsFilter.splice(this.starsFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onStarsFilterChanged.emit(this.starsFilter);
  }

  /**
   * Emit event to parent component to remove all filters
   */
  public resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }

  /**
   *
   * @returns {boolean} true is any filter array contains an filter
   */
  public anyFiltersSelected() {
    return this.speciesFilter.length !== 0 || this.bioRoleFilter.length !== 0 || this.interactorTypeFilter.length !== 0 ||
      this.predictedFilter.length !== 0 || this.starsFilter.length !== 0;
  }

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
