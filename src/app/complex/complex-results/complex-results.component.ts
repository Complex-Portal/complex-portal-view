import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComplexSearch} from "../shared/model/complex-results/complex-search.model";
import {ComplexPortalService} from "../shared/service/complex-portal.service";


@Component({
  selector: 'app-complex-results',
  templateUrl: './complex-results.component.html',
  styleUrls: ['./complex-results.component.css']
})
export class ComplexResultsComponent implements OnInit {

  private query;
  private page: number;
  private _complexSearch: ComplexSearch;
  private _firstPage: number;
  private _lastPage: number;
  private _pagination: any = [];

  constructor(private route: ActivatedRoute,
              private complexPortalService: ComplexPortalService) {
  }


  ngOnInit() {
    this.route
      .queryParams
      .subscribe(queryParams => {
        this.query = queryParams['query'];
        this.page = Number(queryParams['page']);
        this.complexPortalService.findComplex(this.query, this.page ).subscribe(
          complexSearch => this.processResponse(complexSearch));
        // error => this.errorMessage = <any>error);
      });
  }

  private processResponse(complexSearch: ComplexSearch): void {
    this.complexSearch = complexSearch;
    this.lastPage = Math.ceil(complexSearch.totalNumberOfResults / complexSearch.size);
    this.pagination = [];
    let start: number;
    let end: number;
    if (this.lastPage < 5) {
      start = 1;
      end = this.lastPage + 1;
    } else {
      if (this.page === 1 || this.page === 2) {
        start = 1;
        end = 5;
      }
      else if (this.page == this.lastPage || this.page == this.lastPage - 1) {
        start = this.lastPage - 4;
        end = this.lastPage;
      }
      else {
        start = this.page - 2;
        end = this.page + 2;
      }
    }
    for (; start <= end; start++) {
      if (start === this.page) {
        this.pagination.push([[this.page], [true]]);
      } else {
        this.pagination.push([[start], [false]]);
      }
    }
    console.log(this.pagination)
  }


  get pagination(): Array<any> {
    return this._pagination;
  }

  set pagination(value: Array<any>) {
    this._pagination = value;
  }

  get firstPage(): number {
    return this._firstPage;
  }

  set firstPage(value: number) {
    this._firstPage = value;
  }

  get lastPage(): number {
    return this._lastPage;
  }

  set lastPage(value: number) {
    this._lastPage = value;
  }

  set complexSearch(value: ComplexSearch) {
    this._complexSearch = value;
  }

  get complexSearch(): ComplexSearch {
    return this._complexSearch;
  }
}
