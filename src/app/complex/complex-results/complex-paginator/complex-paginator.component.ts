import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-complex-paginator',
  templateUrl: './complex-paginator.component.html',
  styleUrls: ['./complex-paginator.component.css']
})
export class ComplexPaginatorComponent implements OnInit {
  private _query: string;
  private _lastPageIndex: number;
  private _currentPageIndex: number;
  private _pagination: any;

  constructor() {
  }

  ngOnInit() {
    this.updatePaginatior();
  }

  private updatePaginatior(): void {
    let start: number;
    let end: number;
    this.pagination = [];
    if (this._lastPageIndex < 5) {
      start = 1;
      end = this._lastPageIndex + 1;
    } else {
      if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
        start = 1;
        end = 5;
      }
      else if (this._currentPageIndex == this._lastPageIndex || this._currentPageIndex == this._lastPageIndex - 1) {
        start = this._lastPageIndex - 4;
        end = this._lastPageIndex;
      }
      else {
        start = this._currentPageIndex - 2;
        end = this._currentPageIndex + 2;
      }
    }
    while (start <= end) {
      if (start === this._currentPageIndex) {
        this._pagination.push([[this._currentPageIndex], [true]]);
      } else {
        this._pagination.push([[start], [false]]);
      }
      start++;
    }
  }

  @Input()
  get query() {
    return this._query;
  }

  set query(value) {
    this._query = value;
  }

  get lastPageIndex() {
    return this._lastPageIndex;
  }

  @Input()
  set lastPageIndex(value) {
    this._lastPageIndex = value;
  }

  get currentPageIndex() {
    return this._currentPageIndex;
  }

  @Input()
  set currentPageIndex(value) {
    this._currentPageIndex = value;
  }

  get pagination() {
    return this._pagination;
  }

  set pagination(value) {
    this._pagination = value;
  }
}
