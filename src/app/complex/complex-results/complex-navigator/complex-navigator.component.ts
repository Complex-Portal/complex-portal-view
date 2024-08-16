import {Component, output, input } from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';

@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.css']
})

export class ComplexNavigatorComponent {
  complexSearch = input<ComplexSearchResult>();
  interactors = input<Interactor[]>();
  canAddComplexesToBasket = input<boolean>();
  canRemoveComplexesFromBasket = input<boolean>();
  onComplexRemovedFromBasket = output<string>();

  interactorsSorting = 'Occurrence';
  organismIconDisplay = true;
  interactorTypeDisplay = true;
  idDisplay = true;
}
