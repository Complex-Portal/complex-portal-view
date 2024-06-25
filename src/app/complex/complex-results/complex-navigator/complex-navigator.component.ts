import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';

@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.css']
})

export class ComplexNavigatorComponent {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactors: Interactor[];
  @Input() canAddComplexesToBasket: boolean;
  @Input() canRemoveComplexesFromBasket: boolean;
  @Output() onComplexRemovedFromBasket: EventEmitter<string> = new EventEmitter<string>();

  interactorsSorting = 'Occurrence';
  organismIconDisplay = true;
  interactorTypeDisplay = true;
  IDDisplay = true;
}
