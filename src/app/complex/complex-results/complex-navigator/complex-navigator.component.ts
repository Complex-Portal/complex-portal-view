import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';
import {Router} from '@angular/router';


@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.css']
})
export class ComplexNavigatorComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _interactorsSorting: string;
  _interactors: Set<Interactor>;


  constructor(private router: Router) {
  }

  ngOnInit() {
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
