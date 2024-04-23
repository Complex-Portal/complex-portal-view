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
  @Input() interactorsSorting: string;
  @Input() interactors: Set<Interactor>;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
