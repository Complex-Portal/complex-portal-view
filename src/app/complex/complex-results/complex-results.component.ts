import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import {ComplexSearchResult} from '../shared/model/complex-results/complex-search.model';
import {ComplexPortalService} from '../shared/service/complex-portal.service';


@Component({
  selector: 'app-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css']
})
export class ComplexResultsComponent implements OnInit {

  private _query;
  private _currentPageIndex: number;
  private _complexSearch: ComplexSearchResult;
  private _lastPageIndex: number;
  private _pageSize: number = 10;
  private _spicesFilter: string[];
  private _bioRoleFilter: string[];
  private _interactorTypeFilter: string[];

  constructor(private route: ActivatedRoute, private router: Router,
              private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(queryParams => {
        this._query = queryParams['query'] ? queryParams['query'] : console.log('Error');
        this._spicesFilter = queryParams['species'] ? queryParams['species'].split(',') : [];
        this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split(',') : [];
        this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split(',') : [];
        this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
        // TODO This is out for now, but CP-84 should fix that!!
        // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter,
          this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
          this.complexSearch = complexSearch;
          this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
        });
      });
  }

  private reloadPage(): void {
    let queryParams: NavigationExtras = {};
    queryParams['query'] = this._query;
    queryParams['page'] = this._currentPageIndex;
    this.prepareFiltersForParams(queryParams);
    this.router.navigate(['search'], {
      queryParams
    });
  }

  private prepareFiltersForParams(queryParams: NavigationExtras): void {
    if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
      queryParams['species'] = this._spicesFilter;
    }
    if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
      queryParams['bioRole'] = this._bioRoleFilter;
    }
    if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
      queryParams['interactorType'] = this._interactorTypeFilter;
    }
  }

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

  public onInteractorTyoeFilterChanged(filter: string[]): void {
    this.interactorTypeFilter = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }

  get query() {
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
}
