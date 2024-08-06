import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {organismIcon} from '../../../../complex-portal-utils';
import {BasketService} from '../../../../../shared/basket/service/basket.service';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent {
  @Input() complexes: Element[];
  @Input() interactorsSorting: string;
  @Input() canAddComplexesToBasket: boolean;
  @Input() canRemoveComplexesFromBasket: boolean;
  @Output() onComplexRemovedFromBasket: EventEmitter<string> = new EventEmitter<string>();

  constructor(private basketService: BasketService) {
  }

  isInteractorSortingSet() {
    return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
  }

  iconOrganism(organismName: string) {
    return organismIcon(organismName);
  }

  toggleBasket(complexName: string, complexAC: string, complexOrganism: string) {
    if (this.isInBasket(complexAC)) {
      this.removeComplex(complexAC);
    } else {
      this.saveComplex(complexName, complexAC, complexOrganism);
    }
  }

  saveComplex(complexName: string, complexAC: string, complexOrganism: string) {
    this.basketService.saveInBasket(complexName, complexAC, complexOrganism);
  }

  removeComplex(complexAC: string): void {
    const key = this.basketService.getKey(complexAC);
    this.basketService.deleteFromBasket(key);
    this.onComplexRemovedFromBasket.emit(complexAC);
  }

  isInBasket(complexAC: string): boolean {
    return this.basketService.isInBasket(complexAC);
  }
}
