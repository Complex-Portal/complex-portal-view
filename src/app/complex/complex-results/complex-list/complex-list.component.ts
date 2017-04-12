import {Component, OnInit, Input} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;

  constructor() { }

  ngOnInit() {
  }

}
