import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ComplexSearchResult} from '../shared/model/complex-results/complex-search.model';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {AnalyticsService} from '../../shared/google-analytics/service/analytics.service';
import {Interactor} from '../shared/model/complex-results/interactor.model';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {
  COMPLEX_NAVIGATOR_VIEW,
  LIST_VIEW
} from './complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component';
import {Facets} from '../shared/model/complex-results/facets.model';

@Component({
  selector: 'cp-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css'],
})
export class ComplexResultsComponent implements OnInit, AfterViewInit {
  private _query: string;
  private _complexSearch: ComplexSearchResult;
  private _complexSearchNoFilters: ComplexSearchResult;
  private _spicesFilter: string[];
  private _bioRoleFilter: string[];
  private _interactorTypeFilter: string[];
  private _allInteractorsInComplexSearch: Interactor[] = [];
  DisplayType: string;
  toast;

  private _listPageSize = 15; // This is where we set the size of the pages for list view
  private _navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
  private _listCurrentPage: number;
  private _navigatorCurrentPage: number;
  private _listLastPageIndex;
  private _navigatorLastPageIndex;

  constructor(private route: ActivatedRoute, private router: Router,
              private complexPortalService: ComplexPortalService, private titleService: Title,
              private googleAnalyticsService: AnalyticsService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Results');
    this._allInteractorsInComplexSearch = [];
    this.route.fragment.subscribe(fragment => {
      if (fragment === COMPLEX_NAVIGATOR_VIEW) {
        this.DisplayType = COMPLEX_NAVIGATOR_VIEW;
      } else if (fragment === LIST_VIEW) {
        this.DisplayType = LIST_VIEW;
      }
      this.route
        .queryParams
        .subscribe(queryParams => {
          this._query = queryParams['query'];
          this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
          this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
          this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
          this.currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
          // TODO This is out for now, but CP-84 (JIRA )should fix that!!
          // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
          this.requestComplexResults();
          document.body.scrollTop = 0;
        });
    });
  }

  ngAfterViewInit(): void {
  }


  private requestComplexResults() {
    this.complexPortalService.findComplexFacets(this.query).subscribe(complexSearch => {
      this.complexSearchNoFilters = complexSearch;
    });
    this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter,
      this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
      this.complexSearch = complexSearch;
      this._allInteractorsInComplexSearch = [];
      if (this.complexSearch.totalNumberOfResults !== 0) {
        this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
        for (let i = 0; i < complexSearch.elements.length; i++) {
          for (const component of complexSearch.elements[i].interactors) {
            if (!this._allInteractorsInComplexSearch.some(interactor => interactor.identifier === component.identifier)) {
              this._allInteractorsInComplexSearch.push(component);
            }
          }
        }
      }
      ProgressBarComponent.hide();
    });
  }

  /**
   * Prepare query params to build new URL after filter or pagination has changed
   */
  private reloadPage(): void {
    const queryParams: NavigationExtras = {};
    queryParams['query'] = this._query;
    queryParams['page'] = this.currentPageIndex;
    if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
      queryParams['species'] = this.prepareFiltersForParams(this.spicesFilter);
    }
    if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
      queryParams['bioRole'] = this.prepareFiltersForParams(this._bioRoleFilter);
    }
    if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
      queryParams['interactorType'] = this.prepareFiltersForParams(this._interactorTypeFilter);
    }
    this.router.navigate([], {
      queryParams,
      fragment: this.DisplayType
    });
    ProgressBarComponent.hide();
    // This is a test case event for GA, to monitor if users ever use more then one filter.
    const filterCount = this.getFilterCount();
    if (1 < filterCount) {
      this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
    }
  }

  private prepareFiltersForParams(filter: string[]): string {
    return filter.toString().replace(/,/g, '+');
  }

  private getFilterCount(): number {
    return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
  }

  /**
   *
   * @param pageIndex new page index after hitting the paginator to update the URL and reload content
   */
  public onPageChange(pageIndex: number): void {
    this.currentPageIndex = pageIndex;
    this.reloadPage();
  }

  public onResetAllFilters(): void {
    this.spicesFilter = [];
    this.bioRoleFilter = [];
    this.interactorTypeFilter = [];
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onSpicesFilterChanged(filter: string[]): void {
    this.spicesFilter = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onBiologicalRoleFilterChanged(filter: string[]): void {
    this.bioRoleFilter = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onInteractorTypeFilterChanged(filter: string[]): void {
    this.interactorTypeFilter = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  get query(): string {
    return this._query;
  }

  set query(value) {
    this._query = value;
  }

  get currentPageIndex(): number {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorCurrentPage;
    } else {
      return this._listCurrentPage;
    }
  }

  set currentPageIndex(value: number) {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      this._navigatorCurrentPage = value;
    } else {
      this._listCurrentPage = value;
    }
  }

  get complexSearch(): ComplexSearchResult {
    return this._complexSearch;
  }

  set complexSearch(value: ComplexSearchResult) {
    this._complexSearch = value;
    this.processSearchResults();
  }

  get complexSearchNoFilters(): ComplexSearchResult {
    return this._complexSearchNoFilters;
  }

  set complexSearchNoFilters(value: ComplexSearchResult) {
    this._complexSearchNoFilters = value;
  }

  get lastPageIndex(): number {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorLastPageIndex;
    } else {
      return this._listLastPageIndex;
    }
  }

  set lastPageIndex(value: number) {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      this._navigatorLastPageIndex = value;
    } else {
      this._listLastPageIndex = value;
    }
  }

  get pageSize(): number {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorPageSize;
    } else {
      return this._listPageSize;
    }
  }

  get spicesFilter(): string[] {
    return this._spicesFilter;
  }

  set spicesFilter(value: string[]) {
    this._spicesFilter = value;
  }

  get bioRoleFilter(): string[] {
    return this._bioRoleFilter;
  }

  set bioRoleFilter(value: string[]) {
    this._bioRoleFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  public get allInteractorsInComplexSearch(): Interactor[] {
    return this._allInteractorsInComplexSearch;
  }

  onDisplayTypeChange(displayType: string) {
    if (this.DisplayType !== displayType) {
      this.DisplayType = displayType;
      if (displayType === LIST_VIEW) {
        this.setListView();
      } else if (displayType === COMPLEX_NAVIGATOR_VIEW) {
        this.setComplexNavigatorView();
      }
    }
  }

  isDisplayComplexNavigatorView(): boolean {
    return this.DisplayType === COMPLEX_NAVIGATOR_VIEW;
  }

  private setListView() {
    this.toast = this.notificationService.complexNavigatorAnnouncement();
    this.reloadPage();
  }

  private setComplexNavigatorView() {
    if (!!this.toast) {
      this.notificationService.closeAnnouncement(this.toast.toastId);
      this.toast = null;
    }
    this.reloadPage();
  }

  processSearchResults(): void {
    // No filters and only one result, then we redirect to complex details page
    // This allows users to enable filters to see even one result without redirecting them out from the results page,
    // but we ensure redirection of a new search has only one result.
    if (this.getFilterCount() === 0 && this._complexSearch.totalNumberOfResults === 1) {
      const complexId = this._complexSearch.elements[0].complexAC;
      if (!!complexId) {
        // For some reason this is needed so the navigate call works
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
        this.router.navigate(['/complex', complexId]);
      }
    } else if (!this.DisplayType) {
      // Currently the list view is the default, as we are just launching the navigator view
      // Later on we can change the default view to be the list or navigator view based on number of results
      if (this._complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
        this.setComplexNavigatorView();
      } else {
        this.setListView();
      }
    }
  }

}
