import {Component, OnInit, Input} from '@angular/core';
import {Facets} from "../../shared/model/complex-results/facets.model";

@Component({
  selector: 'app-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  @Input() facets: Facets;

  constructor() { }

  ngOnInit() {
  }

}
