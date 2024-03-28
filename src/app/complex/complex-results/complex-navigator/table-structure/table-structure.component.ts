import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {Router} from '@angular/router';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _interactors: Set<Interactor>;

  // _overFlowing: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  get interactors(): Set<Interactor> {
    return this._interactors;
  }

  @Input()
  set interactors(value: Set<Interactor>) {
    this._interactors = value;
  }

  /*
get overFlowing(): boolean {
  return this._overFlowing;
}

set overFlowing(value: boolean) {
  this._overFlowing = this.isOverFlowing();
}


isOverFlowing(): boolean {
  const tablePart = document.querySelector<HTMLElement>('.header');
  console.log(tablePart.scrollWidth > tablePart.offsetWidth);
  this._overFlowing = tablePart.scrollWidth > tablePart.offsetWidth;
  return tablePart.scrollWidth > tablePart.offsetWidth;
}
*/
}
