import {EventEmitter, Injectable} from '@angular/core';
import {BasketItem} from '../model/basketItem';
import {Complex} from '../../../complex/shared/model/complex-results/complex.model';
import {NotificationService} from '../../notification/service/notification.service';
import {AnalyticsService} from '../../google-analytics/service/analytics.service';
import {LocalStorageService} from '../../local-storage/service/local-storage.service';
import {ComplexDetails} from '../../../complex/shared/model/complex-details/complex-details.model';
import {SpeciesPipe} from '../../../complex/shared/pipe/species.pipe';

const COMPLEX_STORE = 'cp_complex_store';

@Injectable()
export class BasketService {
  private _complexBasket: { [name: string]: BasketItem } = {};
  public onBasketCountChanged$: EventEmitter<number>;

  constructor(
    private notificationService: NotificationService,
    private googleAnalyticsService: AnalyticsService,
    private species: SpeciesPipe
  ) {
    this.onBasketCountChanged$ = new EventEmitter<number>();
    this.initialiseBasket();
  }

  private initialiseBasket() {
    const complexStore = LocalStorageService.getLocalStorage(COMPLEX_STORE);
    if (!complexStore) {
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.initialiseBasket();
    } else {
      const keys = Object.keys(complexStore);
      for (let i = 0; i < keys.length; i++) {
        const complex = complexStore[keys[i]];
        if (complex) {
          this._complexBasket[keys[i]] = complex;
        }
      }
    }
  }

  private isElement(complex: Complex | ComplexDetails): complex is Complex {
    return (complex as Complex).complexAC !== undefined;
  }

  public saveInBasket(complex: Complex | ComplexDetails): void {
    const item: BasketItem = this.isElement(complex) ? {
      id: complex.complexAC,
      name: complex.complexName,
      organism: complex.organismName,
      predicted: complex.predictedComplex,
      date: new Date()
    } : {
      id: complex.complexAc,
      name: complex.name,
      organism: complex.species,
      predicted: complex.predictedComplex,
      date: new Date(),
    };

    item.organism = this.species.transform(item.organism, false);

    if (!this.isInBasket(item.id)) {
      this._complexBasket[item.id] = item;
      LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
      this.onBasketCountChanged$.emit(this.getBasketCount());

      this.googleAnalyticsService.fireAddToBasketEvent(item.id);
      this.notificationService.onAddedComplexToBasket(item.id);
    }
  }

  public deleteFromBasket(id: string): void {
    delete this._complexBasket[id];
    LocalStorageService.saveInLocalStorage(COMPLEX_STORE, this._complexBasket);
    this.onBasketCountChanged$.emit(this.getBasketCount());

    this.googleAnalyticsService.fireRemoveFromBasketEvent(id);
    this.notificationService.onRemovedComplexFromBasket(id);
  }

  public isInBasket(id: string): boolean {
    return !!this._complexBasket[id];
  }

  get complexBasket() {
    return this._complexBasket;
  }

  public getBasketCount(): number {
    return Object.keys(this._complexBasket).length;
  }
}
