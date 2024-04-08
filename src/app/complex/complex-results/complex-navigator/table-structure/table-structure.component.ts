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
  _interactorsSorting: string;

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

  @Input()
  set interactorsSorting(value: string) {
    this._interactorsSorting = value;
  }

  get interactorsSorting(): string {
    return this._interactorsSorting;
  }
}
