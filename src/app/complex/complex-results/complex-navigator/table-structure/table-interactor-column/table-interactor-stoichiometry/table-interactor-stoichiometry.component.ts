import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-stoichiometry',
  templateUrl: './table-interactor-stoichiometry.component.html',
  styleUrls: ['./table-interactor-stoichiometry.component.css']
})
export class TableInteractorStoichiometryComponent implements OnInit {

  @Input() stoichiometryText: string;
  @Input() stoichiometryValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
