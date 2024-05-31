import {Component, Input} from '@angular/core';

@Component({
  selector: 'cp-table-interactor-stoichiometry',
  templateUrl: './table-interactor-stoichiometry.component.html',
  styleUrls: ['./table-interactor-stoichiometry.component.css']
})
export class TableInteractorStoichiometryComponent {
  @Input() stoichiometryText: string;
  @Input() stoichiometryValue: string;
}
