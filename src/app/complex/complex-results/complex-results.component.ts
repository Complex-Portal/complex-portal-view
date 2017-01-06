import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

  constructor(private route: ActivatedRoute,
              private complexPortalService: ComplexPortalService) {
  }


  ngOnInit() {
    this.route
      .queryParams
      .subscribe(queryParams => {
        this._query = queryParams['query'];
        this._currentPageIndex = Number(queryParams['page']);
        this.complexPortalService.findComplex(this._query, this._currentPageIndex).subscribe(complexSearch => {
          this.complexSearch = complexSearch;
          this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / complexSearch.size);
        });
      });
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
}
