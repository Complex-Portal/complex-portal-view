import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ComplexSearchResult} from '../shared/model/complex-results/complex-search.model';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {AnalyticsService} from '../../shared/google-analytics/service/analytics.service';
import {Interactor} from '../shared/model/complex-results/interactor.model';

@Component({
  selector: 'cp-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css'],
})
export class ComplexResultsComponent implements OnInit, AfterViewInit {
  private _query: string;
  private _currentPageIndex: number;
  private _complexSearch: ComplexSearchResult;
  private _lastPageIndex: number;
  private _pageSize = 15;
  private _spicesFilter: string[];
  private _bioRoleFilter: string[];
  private _interactorTypeFilter: string[];
  private _allInteractorsInComplexSearch: Interactor[] = [];
  DisplayType = true;
  _interactorsSorting = 'Occurrence';

  constructor(private route: ActivatedRoute, private router: Router,
              private complexPortalService: ComplexPortalService, private titleService: Title,
              private googleAnalyticsService: AnalyticsService,
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Results');
    this._allInteractorsInComplexSearch = [];
    this._interactorsSorting = this.interactorsSorting;
    this.route
      .queryParams
      .subscribe(queryParams => {
        this._query = queryParams['query'];
        this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
        this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
        this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
        this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
        // TODO This is out for now, but CP-84 (JIRA )should fix that!!
        // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
        this.requestComplexResults();
        document.body.scrollTop = 0;
      });
  }

  ngAfterViewInit(): void {
  }

  private requestComplexResults() {
    this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter,
      this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
      this.complexSearch = complexSearch;
      this._allInteractorsInComplexSearch = [];
      if (this.complexSearch.totalNumberOfResults !== 0) {
        this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
        for (let i = 0; i < complexSearch.elements.length; i++) {
          for (const component of complexSearch.elements[i].interactors) {
            if (!this._allInteractorsInComplexSearch.some(interactor => interactor.identifier === component.identifier)) {
              this._allInteractorsInComplexSearch.push(
                new Interactor(
                  component.identifier,
                  component.identifierLink,
                  component.name,
                  component.description,
                  component.interactorType));
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
    queryParams['page'] = this._currentPageIndex;
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
      queryParams
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
    return this._currentPageIndex;
  }

  set currentPageIndex(value: number) {
    this._currentPageIndex = value;
  }

  get complexSearch(): ComplexSearchResult {
    return this._complexSearch;
  }

  set complexSearch(value: ComplexSearchResult) {
    this._complexSearch = value;
  }

  get lastPageIndex(): number {
    return this._lastPageIndex;
  }

  set lastPageIndex(value: number) {
    this._lastPageIndex = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
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

  set allInteractorsInComplexSearch(value: Interactor[]) {
    this._allInteractorsInComplexSearch = value;
  }

  toggleDisplayType() {
    this.DisplayType = !this.DisplayType;
  }

  get interactorsSorting(): string {
    return this._interactorsSorting;
  }

  setInteractorsSorting(typeOfSorting: string) {
    this._interactorsSorting = typeOfSorting;
  }
}
