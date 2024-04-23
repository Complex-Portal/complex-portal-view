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
  @Input() interactors: Set<Interactor>;
  @Input() interactorsSorting: string;

  // _overFlowing: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
