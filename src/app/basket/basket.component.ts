import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BasketService} from '../shared/basket/service/basket.service';
import {BasketItem} from '../shared/basket/model/basketItem';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {ComplexPortalService} from '../complex/shared/service/complex-portal.service';
import {ComplexSearchResult} from '../complex/shared/model/complex-results/complex-search.model';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {
  SearchDisplay
} from '../complex/complex-results/complex-navigator/service/state/complex-navigator-display.service';
import {ComplexNavigatorComponent} from '../complex/complex-results/complex-navigator/complex-navigator.component';
import {ComplexComponent} from '../complex/shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, AfterViewInit {
  private _complexBasket: { [name: string]: BasketItem };
  complexSearchBasket: ComplexSearchResult = null;
  allComponentsInComplexSearchBasket: ComplexComponent[] = [];
  displayType: SearchDisplay;

  @ViewChild(ComplexNavigatorComponent) navigator: ComplexNavigatorComponent;

  constructor(private _basketService: BasketService,
              private titleService: Title,
              private complexPortalService: ComplexPortalService,
              private route: ActivatedRoute,
              private router: Router) {
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
    if (displayType === SearchDisplay.navigator) {
      this.navigator?.adjustColWidth();
    }
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  deleteFromBasket(complexAc: string): void {
    this._basketService.deleteFromBasket(complexAc);
    this.removeComplexFromSearchResult(complexAc);
  }

  get complexBasket(): { [name: string]: BasketItem } {
    return this._complexBasket;
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
    this.allComponentsInComplexSearchBasket = [];
    if (this.complexSearchBasket.totalNumberOfResults !== 0) {
      for (let i = 0; i < this.complexSearchBasket.elements.length; i++) {
        for (const component of this.complexSearchBasket.elements[i].interactors) {
          if (!this.allComponentsInComplexSearchBasket.some(interactor => interactor.identifier === component.identifier)) {
            this.allComponentsInComplexSearchBasket.push(component);
          }
        }
      }
    }
  }

  complexNavigatorLoading() {
    this.complexSearchBasket = null;
    this.allComponentsInComplexSearchBasket = [];
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
    Object.values(this._complexBasket).map((v: BasketItem) => this.deleteFromBasket(v.id));
  }

  protected readonly SearchDisplay = SearchDisplay;
}
