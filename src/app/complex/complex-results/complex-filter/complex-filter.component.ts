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

  private _facets: Facets;
  private _spicesFilter: string[];
  private _bioRoleFilter: string[];
  private _interactorTypeFilter: string[];
  @Output() onSpicesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onBiologicalRoleFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
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
    return (this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
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

  get facets(): Facets {
    return this._facets;
  }

  @Input()
  set facets(value: Facets) {
    this._facets = value;
  }

  get spicesFilter(): string[] {
    return this._spicesFilter;
  }

  @Input()
  set spicesFilter(value: string[]) {
    this._spicesFilter = value;
  }

  get bioRoleFilter(): string[] {
    return this._bioRoleFilter;
  }

  @Input()
  set bioRoleFilter(value: string[]) {
    this._bioRoleFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  @Input()
  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  public facetTypeIcon(facet: string): string {
    return interactorTypeIcon(facet);
  }

  public facetOrganismIcon(facet): string {
    return organismIcon(facet);
  }
}
