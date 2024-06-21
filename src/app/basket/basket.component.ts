import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BasketService} from '../shared/basket/service/basket.service';
import {BasketItem} from '../shared/basket/model/basketItem';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {ComplexPortalService} from '../complex/shared/service/complex-portal.service';
import {ComplexSearchResult} from '../complex/shared/model/complex-results/complex-search.model';
import {Interactor} from '../complex/shared/model/complex-results/interactor.model';
import {Element} from '../complex/shared/model/complex-results/element.model';

@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, AfterViewInit {
  private _complexBasket: { [name: string]: BasketItem };
  complexSearchBasket: ComplexSearchResult = null;
  allInteractorsInComplexSearchBasket: Interactor[] = [];
  private _complexes: Element[];

  constructor(private _basketService: BasketService, private titleService: Title, private complexPortalService: ComplexPortalService) {
    this._complexBasket = this._basketService.complexBasket;
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Basket');
    this.complexNavigatorLoading();
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  deleteFromBasket(key: string): void {
    this._basketService.deleteFromBasket(key);
    this.complexNavigatorLoading();
  }

  get complexBasket(): { [name: string]: BasketItem } {
    return this._complexBasket;
  }

  set complexBasket(value: { [name: string]: BasketItem }) {
    this._complexBasket = value;
  }

  public isComplexBasketEmpty(): boolean {
    return this.getKeys(this._complexBasket).length === 0;

  }

  // Candidate for Util
  public getKeys(object: any) {
    return Object.keys(object);
  }

  private createQuery(object: any): string {
    let query = '';
    for (const key of this.getKeys(object)) {
      if (object[key] !== undefined) {
        let queryPerObject = ' complex_id:';
        queryPerObject += object[key].id;
        query += queryPerObject;
      }
    }
    return query;
  }

  private requestComplexesForNavigator() {
    this.complexPortalService.findComplex(this.createQuery(this._complexBasket)).subscribe(complexSearch => {
      this.complexSearchBasket = complexSearch;
      if (this.complexSearchBasket.totalNumberOfResults !== 0) {
        for (let i = 0; i < complexSearch.elements.length; i++) {
          this._complexes.push(complexSearch.elements[i]);
          for (const component of complexSearch.elements[i].interactors) {
            if (!this.allInteractorsInComplexSearchBasket.some(interactor => interactor.identifier === component.identifier)) {
              this.allInteractorsInComplexSearchBasket.push(
                new Interactor(
                  component.identifier,
                  component.identifierLink,
                  component.name,
                  component.description,
                  component.interactorType,
                  component.organismName));
            }
          }
        }
      }
    });
  }

  complexNavigatorLoading() {
    this.complexSearchBasket = null;
    this.allInteractorsInComplexSearchBasket = [];
    this._complexes = [];
    this.requestComplexesForNavigator();
  }

}
