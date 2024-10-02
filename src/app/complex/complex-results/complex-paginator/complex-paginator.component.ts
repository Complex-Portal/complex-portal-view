import {Component, Input, OnChanges, OnInit, output} from '@angular/core';

@Component({
  selector: 'cp-complex-paginator',
  templateUrl: './complex-paginator.component.html',
  styleUrls: ['./complex-paginator.component.scss']
})
export class ComplexPaginatorComponent implements OnInit, OnChanges {
  private _lastPageIndex: number;
  private _currentPageIndex: number;
  pagination: { pageNumber: number; isCurrent: boolean }[] = [];

  onPageChange = output<number>();


  constructor() {
  }

  ngOnInit() {
    this.updatePaginator();
  }


  ngOnChanges(): void {
    this.updatePaginator();
  }

  public updatePaginator(): void {
    let start: number;
    let end: number;
    this.pagination = [];
    if (this._lastPageIndex < 5) {
      start = 1;
      end = this._lastPageIndex;

    } else {
      if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
        start = 1;
        end = 5;
      } else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
        start = this._lastPageIndex - 4;
        end = this._lastPageIndex;
      } else {
        start = this._currentPageIndex - 2;
        end = this._currentPageIndex + 2;
      }
    }
    while (start <= end) {
      this.pagination.push({pageNumber: start, isCurrent: this._currentPageIndex === start});
      start++;
    }
  }

  public getFirstPage(): void {
    this.onPageChange.emit(1);
  }

  public getLastPage(): void {
    this.onPageChange.emit(this.lastPageIndex);
  }

  public getPage(pageIndex: number) {
    this.onPageChange.emit(pageIndex);
  }

  public getPreviousPage(): void {
    this.onPageChange.emit(this.currentPageIndex - 1);
  }

  public getNextPage(): void {
    this.onPageChange.emit(this.currentPageIndex + 1);
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
}
