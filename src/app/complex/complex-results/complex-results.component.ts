import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComplexSearchResult} from "../shared/model/complex-results/complex-search.model";
import {ComplexPortalService} from "../shared/service/complex-portal.service";


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
  private _spicesFilter: string[] = [];
  private _bioRoleFilter: string[] = [];
  private _interactorTypeFilter: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
              private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(queryParams => {
        this.query = queryParams['query'];
        this.spicesFilter = queryParams['species'] ? queryParams['species'].split(';') : null;
        this.bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split(';') : null;
        this.interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split(';') : null;
        this.currentPageIndex = Number(queryParams['page']);
        this.pageSize = Number(queryParams['size']);
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
          this.complexSearch = complexSearch;
          this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / complexSearch.size);
        });
      });
  }

  public onPageChange(pageIndex : number): void {
    this.router.navigate(['search'], { queryParams: { query: this.query, page: pageIndex }});
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
