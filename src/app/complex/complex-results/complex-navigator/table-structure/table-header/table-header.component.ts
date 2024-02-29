import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Router} from '@angular/router';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
