import {Component, input} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-stoichiometry',
  templateUrl: './table-interactor-stoichiometry.component.html',
  styleUrls: ['./table-interactor-stoichiometry.component.css']
})
export class TableInteractorStoichiometryComponent {
  stoichiometryText = input<string>();
  stoichiometryValue = input<string>();
}
