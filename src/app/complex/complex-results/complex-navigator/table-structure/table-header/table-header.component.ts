import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css' /*, './table-header-style2.component.css' */]
})
export class TableHeaderComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;

  constructor() {
  }

  ngOnInit(): void {
  }

}
