import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {ecoCodeName, interactorTypeIcon, organismIcon} from '../../complex-portal-utils';

@Component({
  selector: 'cp-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  @Input() facets: Facets;
  @Input() spicesFilter: string[];
  @Input() bioRoleFilter: string[];
  @Input() interactorTypeFilter: string[];
  @Input() predictedFilter: string[];
  @Input() evidenceTypeFilter: string[];

  @Output() onSpicesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onBiologicalRoleFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onPredictedFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onEvidenceTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
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
      this.spicesFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onSpicesFilterChanged.emit(this.spicesFilter);
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

  public changeEvidenceTypeFilter(filter: string, status: boolean) {
    if (status) {
      this.evidenceTypeFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.evidenceTypeFilter.splice(this.evidenceTypeFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onEvidenceTypeFilterChanged.emit(this.evidenceTypeFilter);
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
    return this.spicesFilter.length !== 0 || this.bioRoleFilter.length !== 0 || this.interactorTypeFilter.length !== 0 ||
      this.predictedFilter.length !== 0 || this.evidenceTypeFilter.length !== 0;
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
      return 'Predicted Complex';
    } else {
      return 'Manually curated complex';
    }
  }

  formatEvidenceTypeFacetValue(facetName: string): string {
    return ecoCodeName(facetName);
  }
}
