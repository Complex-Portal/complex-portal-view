import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
import {ComplexSearchResult} from '../shared/model/complex-results/complex-search.model';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {AnalyticsService} from '../../shared/google-analytics/service/analytics.service';
import {Interactor} from '../shared/model/complex-results/interactor.model';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {SearchDisplay} from './complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component';
import {NavigatorComponentGrouping, NavigatorComponentSorting, NavigatorDisplayType} from './complex-navigator/complex-navigator-utils';

@Component({
  selector: 'cp-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css'],
})
export class ComplexResultsComponent implements OnInit, AfterViewInit {
  query: string;
  complexSearch: ComplexSearchResult;

  allInteractorsInComplexSearch: Interactor[] = [];
  _displayType: SearchDisplay;

  filters = {
    species: [],
    bioRole: [],
    interactorType: [],
    predicted: [],
  };

  confidenceFilter = 1;
  componentsGrouping = NavigatorComponentGrouping.DEFAULT;
  componentsSorting = NavigatorComponentSorting.DEFAULT;
  typeOfDisplay = NavigatorDisplayType.DETAILED;

  private _toast;
  private _listPageSize = 15; // This is where we set the size of the pages for list view
  private _navigatorPageSize = 20; // This is where we set the size of the pages for navigator view
  private _listCurrentPage: number;
  private _navigatorCurrentPage: number;
  private _listLastPageIndex: number;
  private _navigatorLastPageIndex: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private complexPortalService: ComplexPortalService, private titleService: Title,
              private googleAnalyticsService: AnalyticsService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Results');
    this.allInteractorsInComplexSearch = [];
    this.route.queryParams.pipe().subscribe(queryParams => {
      this.query = queryParams['query'];
      Object.keys(this.filters).forEach(filter => this.filters[filter] = this.decodeURL(filter, queryParams));
      this.confidenceFilter = queryParams['minConfidence'] ? Number(queryParams['minConfidence']) : 1;
      this.componentsGrouping = queryParams['componentsGrouping'] ? queryParams['componentsGrouping'] : NavigatorComponentGrouping.DEFAULT;
      this.componentsSorting = queryParams['componentsSorting'] ? queryParams['componentsSorting'] : NavigatorComponentSorting.DEFAULT;
      this.typeOfDisplay = queryParams['typeOfDisplay'] ? queryParams['typeOfDisplay'] : NavigatorDisplayType.DETAILED;
      // Only set the mode if in the params, otherwise rely on the default behaviour
      if (!!queryParams['displayMode']) {
        this._displayType = queryParams['displayMode'];
      }
      this.currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
      // TODO This is out for now, but CP-84 (JIRA )should fix that!!
      // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
      this.requestComplexResults();
      document.body.scrollTop = 0;
    });
  }

  ngAfterViewInit(): void {
  }


  private requestComplexResults() {
    this.complexPortalService.findComplex(this.query, this.filters.species, this.filters.bioRole,
      this.filters.interactorType, this.filters.predicted, this.confidenceFilter,
      this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
      this.complexSearch = complexSearch;
      this.processSearchResults();
      this.allInteractorsInComplexSearch = [];
      if (this.complexSearch.totalNumberOfResults !== 0) {
        this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
        for (let i = 0; i < complexSearch.elements.length; i++) {
          for (const component of complexSearch.elements[i].interactors) {
            if (!this.allInteractorsInComplexSearch.some(interactor => interactor.identifier === component.identifier)) {
              this.allInteractorsInComplexSearch.push(component);
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
  reloadPage(): void {
    const queryParams: NavigationExtras = {};
    queryParams['query'] = this.query;
    queryParams['page'] = this.currentPageIndex;
    queryParams['minConfidence'] = this.confidenceFilter;
    queryParams['componentsGrouping'] = this.componentsGrouping;
    queryParams['componentsSorting'] = this.componentsSorting;
    queryParams['typeOfDisplay'] = this.typeOfDisplay;
    queryParams['displayMode'] = this._displayType;

    Object.keys(this.filters).forEach(filter => this.encodeURL(this.filters[filter], filter, queryParams));

    this.router.navigate([], {
      queryParams
    });
    ProgressBarComponent.hide();
    // This is a test case event for GA, to monitor if users ever use more then one filter.
    const filterCount = this.getFilterCount();
    if (1 < filterCount) {
      this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
    }
  }

  private encodeURL(filter: string[], filterName: string, params: Params): string {
    if (filter !== undefined && filter.length !== 0) {
      params[filterName] = filter.join().replace(/ /g, '_');
    }
    return params[filterName];
  }

  private decodeURL(filterName: string, params: Params): string[] {
    return params[filterName] ? params[filterName].replace(/_/g, ' ').split(',') : [];
  }

  private getFilterCount(): number {
    return Object.values(this.filters).reduce((total, f) => total + f.length, 0);
  }

  public onAnyChange() {
    this.currentPageIndex = 1;
    this.reloadPage();
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
    Object.keys(this.filters).forEach(f => this.filters[f] = []);
    this.confidenceFilter = 1;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  get currentPageIndex(): number {
    if (this._displayType === SearchDisplay.navigator) {
      return this._navigatorCurrentPage;
    } else {
      return this._listCurrentPage;
    }
  }

  set currentPageIndex(value: number) {
    if (this._displayType === SearchDisplay.navigator) {
      this._navigatorCurrentPage = value;
    } else {
      this._listCurrentPage = value;
    }
  }

  get lastPageIndex(): number {
    if (this._displayType === SearchDisplay.navigator) {
      return this._navigatorLastPageIndex;
    } else {
      return this._listLastPageIndex;
    }
  }

  set lastPageIndex(value: number) {
    if (this._displayType === SearchDisplay.navigator) {
      this._navigatorLastPageIndex = value;
    } else {
      this._listLastPageIndex = value;
    }
  }

  get pageSize(): number {
    if (this._displayType === SearchDisplay.navigator) {
      return this._navigatorPageSize;
    } else {
      return this._listPageSize;
    }
  }

  set displayType(displayType: SearchDisplay) {
    if (this._displayType !== displayType) {
      this._displayType = displayType;
      if (displayType === SearchDisplay.list) {
        this.setListView();
      } else if (displayType === SearchDisplay.navigator) {
        this.setComplexNavigatorView();
      }
    }
  }

  get displayType(): SearchDisplay {
    return this._displayType;
  }

  isDisplayComplexNavigatorView(): boolean {
    return this._displayType === SearchDisplay.navigator;
  }

  private setListView() {
    this._toast = this.notificationService.complexNavigatorAnnouncement();
    this._displayType = SearchDisplay.list;
    this.reloadPage();
  }

  private setComplexNavigatorView() {
    if (!!this._toast) {
      this.notificationService.closeAnnouncement(this._toast.toastId);
      this._toast = null;
    }
    this._displayType = SearchDisplay.navigator;
    this.reloadPage();
  }

  processSearchResults(): void {
    // No filters and only one result, then we redirect to complex details page
    // This allows users to enable filters to see even one result without redirecting them out from the results page,
    // but we ensure redirection of a new search has only one result.
    if (this.getFilterCount() === 0 && this.complexSearch.totalNumberOfResults === 1) {
      const complexId = this.complexSearch.elements[0].complexAC;
      if (!!complexId) {
        this.router.navigate(['/complex', complexId]);
      }
    } else if (!this._displayType) {
      // Currently the list view is the default, as we are just launching the navigator view
      // Later on we can change the default view to be the list or navigator view based on number of results
      if (this.complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
        this.setComplexNavigatorView();
      } else {
        this.setListView();
      }
    }
  }
}
