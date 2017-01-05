import {Component, OnInit, Input} from '@angular/core';
import {ComplexSearch} from "../../shared/model/complex-results/complex-search.model";

@Component({
  selector: 'app-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  @Input() complexSearch: ComplexSearch;

  constructor() { }

  ngOnInit() {
  }

}
