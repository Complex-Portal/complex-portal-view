import {
  Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'cp-complex-paginator',
  templateUrl: './complex-paginator.component.html',
  styleUrls: ['./complex-paginator.component.css']
})
export class ComplexPaginatorComponent implements OnInit, OnChanges {
  private _lastPageIndex: number;
  private _currentPageIndex: number;
  private _pagination: any;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit() {
    this.updatePaginatior();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.updatePaginatior();
  }

  public updatePaginatior(): void {
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
      if (start === this._currentPageIndex) {
        this._pagination.push([[this._currentPageIndex], [true]]);
      } else {
        this._pagination.push([[start], [false]]);
      }
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

  get pagination() {
    return this._pagination;
  }

  set pagination(value) {
    this._pagination = value;
  }
}
