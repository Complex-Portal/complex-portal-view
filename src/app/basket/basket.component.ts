import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BasketService} from '../shared/basket/service/basket.service';
import {BasketItem} from '../shared/basket/model/basketItem';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {ComplexPortalService} from '../complex/shared/service/complex-portal.service';
import {ComplexSearchResult} from '../complex/shared/model/complex-results/complex-search.model';
import {Interactor} from '../complex/shared/model/complex-results/interactor.model';
import {ActivatedRoute, Router} from '@angular/router';
import {
  SearchDisplay
} from '../complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component';
import {take} from 'rxjs/operators';
import {
  NavigatorStateService,
  SearchDisplay
} from '../complex/complex-results/complex-navigator/service/state/complex-navigator-display.service';


@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, AfterViewInit {
  private _complexBasket: { [name: string]: BasketItem };
  complexSearchBasket: ComplexSearchResult = null;
  allInteractorsInComplexSearchBasket: Interactor[] = [];
  displayType: SearchDisplay;

  constructor(private _basketService: BasketService,
              private titleService: Title,
              private complexPortalService: ComplexPortalService,
              private route: ActivatedRoute,
              private router: Router, private state: NavigatorStateService) {
    this._complexBasket = this._basketService.complexBasket;
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Basket');
    this.complexNavigatorLoading();
    this.route.fragment.pipe(take(1)).subscribe(fragment => {
      if (fragment === SearchDisplay.navigator) {
        this.displayType = SearchDisplay.navigator;
      } else {
        this.displayType = SearchDisplay.list;
      }
    });
  }

  onDisplayTypeChange(displayType: SearchDisplay) {
    if (this.displayType !== displayType) {
      this.displayType = displayType;
      this.router.navigate([], {fragment: this.displayType});
    }
  }

  isDisplayComplexNavigatorView(): boolean {
    return this.displayType === SearchDisplay.navigator;
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  deleteFromBasket(key: string): void {
    this._basketService.deleteFromBasket(key);
    this.removeComplexFromSearchResult(this.complexBasket[key].id);
  }

  deleteComplexFromBasket(complexAc: string): void {
    for (const key of this.getKeys(this.complexBasket)) {
      if (this.complexBasket[key].id === complexAc) {
        this._basketService.deleteFromBasket(key);
      }
    }
    this.removeComplexFromSearchResult(complexAc);
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
    return 'complex_id:(' + Object.values(object).map((v: BasketItem) => '"' + v.id + '"').join(',') + ')';
  }

  private requestComplexesForNavigator() {
    const pageSize = Object.values(this._complexBasket).length;
    this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket), 1, pageSize)
      .subscribe(complexSearch => {
        this.complexSearchBasket = complexSearch;
        this.setAllInteractorsFromComplexSearch();
      });
  }

  private setAllInteractorsFromComplexSearch(): void {
    this.allInteractorsInComplexSearchBasket = [];
    if (this.complexSearchBasket.totalNumberOfResults !== 0) {
      for (let i = 0; i < this.complexSearchBasket.elements.length; i++) {
        for (const component of this.complexSearchBasket.elements[i].interactors) {
          if (!this.allInteractorsInComplexSearchBasket.some(interactor => interactor.identifier === component.identifier)) {
            this.allInteractorsInComplexSearchBasket.push(component);
          }
        }
      }
    }
  }

  complexNavigatorLoading() {
    this.complexSearchBasket = null;
    this.allInteractorsInComplexSearchBasket = [];
    this.requestComplexesForNavigator();
  }

  removeComplexFromSearchResult(complexId: string) {
    this.complexSearchBasket = {
      size: this.complexSearchBasket.size - 1,
      totalNumberOfResults: this.complexSearchBasket.totalNumberOfResults - 1,
      elements: this.complexSearchBasket.elements.filter(complex => complex.complexAC !== complexId),
      facets: null,
    };
    this.setAllInteractorsFromComplexSearch();
  }

  deleteAllComplexes() {
    Object.values(this._complexBasket).map((v: BasketItem) => this.deleteComplexFromBasket(v.id));
  }

  protected readonly SearchDisplay = SearchDisplay;
}
