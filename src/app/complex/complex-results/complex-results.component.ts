import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
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

@Component({
  selector: 'cp-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css'],
})
export class ComplexResultsComponent implements OnInit, AfterViewInit {
  query: string;
  complexSearch: ComplexSearchResult;

  allInteractorsInComplexSearch: Interactor[] = [];
  DisplayType: string;

  filters = {
    species: [],
    bioRole: [],
    interactorType: [],
    predicted: [],
    stars: [],
  };

  private _toast;
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
    this.allInteractorsInComplexSearch = [];
    this.route.fragment.subscribe(fragment => {
      if (fragment === COMPLEX_NAVIGATOR_VIEW) {
        this.DisplayType = COMPLEX_NAVIGATOR_VIEW;
      } else if (fragment === LIST_VIEW) {
        this.DisplayType = LIST_VIEW;
      }
      this.route
        .queryParams
        .subscribe(queryParams => {
          this.query = queryParams['query'];
          Object.keys(this.filters).forEach(filter => this.filters[filter] = this.decodeURL(filter, queryParams));
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
    this.complexPortalService.findComplex(this.query, this.filters.species, this.filters.bioRole,
      this.filters.interactorType, this.filters.predicted, this.filters.stars,
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
  private reloadPage(): void {
    const queryParams: NavigationExtras = {};
    queryParams['query'] = this.query;
    queryParams['page'] = this.currentPageIndex;

    Object.keys(this.filters).forEach(filter => this.encodeURL(this.filters[filter], filter, queryParams));

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
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onSpeciesFilterChanged(filter: string[]): void {
    this.filters.species = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onBiologicalRoleFilterChanged(filter: string[]): void {
    this.filters.bioRole = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onInteractorTypeFilterChanged(filter: string[]): void {
    this.filters.interactorType = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onPredictedFilterChanged(filter: string[]): void {
    this.filters.predicted = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  public onStarsFilterChanged(filter: string[]): void {
    this.filters.stars = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
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
    this._toast = this.notificationService.complexNavigatorAnnouncement();
    this.reloadPage();
  }

  private setComplexNavigatorView() {
    if (!!this._toast) {
      this.notificationService.closeAnnouncement(this._toast.toastId);
      this._toast = null;
    }
    this.reloadPage();
  }

  processSearchResults(): void {
    // No filters and only one result, then we redirect to complex details page
    // This allows users to enable filters to see even one result without redirecting them out from the results page,
    // but we ensure redirection of a new search has only one result.
    if (this.getFilterCount() === 0 && this.complexSearch.totalNumberOfResults === 1) {
      const complexId = this.complexSearch.elements[0].complexAC;
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
      if (this.complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
        this.setComplexNavigatorView();
      } else {
        this.setListView();
      }
    }
  }

}
