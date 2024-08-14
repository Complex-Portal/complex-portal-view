import {
  COMPLEX_NAVIGATOR_VIEW,
  ComplexNavigatorModule,
  LIST_VIEW
} from "./chunk-TPUGELIU.js";
import "./chunk-FDEZDPFJ.js";
import "./chunk-6UWN3T3X.js";
import {
  BasketService
} from "./chunk-4YU3Q6PZ.js";
import {
  ComplexPortalService,
  ProgressBarComponent,
  ProgressSpinnerComponent
} from "./chunk-2OKYUNHS.js";
import "./chunk-JCGHHBMG.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgModule,
  Router,
  RouterModule,
  Title,
  __publicField
} from "./chunk-2DYKJXQN.js";

// angular:jit:template:file:src/app/basket/basket.component.html
var basket_component_default = `<div class="margin-top-large margin-bottom-large">
  <div *ngIf="!isComplexBasketEmpty()" class="columns medium-12">
    <h2>Personal collection of favourite complexes

      <a class="button primary columns medium-2 deleteAllButton float-right"
         (click)="deleteAllComplexes()">
        <i class="icon icon-common" data-icon="\uF1F8"></i>
        Remove all complexes
      </a>
    </h2>
    <h4>{{ getKeys(complexBasket).length }} complexes in your basket</h4>
    <div class="row">
      <cp-complex-list-display-buttons
        [displayType]="DisplayType"
        (displayTypeChange)="onDisplayTypeChange($event)">
      </cp-complex-list-display-buttons>
    </div>
    <table class="hover" *ngIf="!this.isDisplayComplexNavigatorView()">
      <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Organism</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let key of getKeys(complexBasket)" [class.predicted]="complexBasket[key].predicted">
        <td>
          <a [routerLink]="['/complex', complexBasket[key].id]">{{ complexBasket[key].name }}</a>
          \xB7 <b class="tag">{{ !complexBasket[key].predicted ? 'Curated' : 'Predicted'}} complex</b>
        </td>
        <td>
          {{ complexBasket[key].id }}
        </td>
        <td>
          {{ complexBasket[key].organism }}
        </td>
        <td>
          <!--          <a class="button primary columns medium-12" (click)="deleteFromBasket(key)"> <span-->
          <!--            class="icon icon-functional" data-icon="d"></span></a>-->
          <a class="button primary columns medium-12" (click)="deleteFromBasket(key)">
            <i class="icon icon-common" data-icon="\uF1F8"></i>

          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <div *ngIf="isDisplayComplexNavigatorView()" class="columns medium-12">
      <ng-container *ngIf="complexSearchBasket;else loadingSpinner">
        <div class="ComplexNavigator"
             [ngClass]="complexSearchBasket.totalNumberOfResults <=6 ? 'smallCN' : ''">
          <cp-complex-navigator
            [complexSearch]="complexSearchBasket"
            [interactors]="allInteractorsInComplexSearchBasket"
            [canAddComplexesToBasket]="false"
            [canRemoveComplexesFromBasket]="true"
            (onComplexRemovedFromBasket)="deleteComplexFromBasket($event)">
          </cp-complex-navigator>
        </div>
      </ng-container>
      <ng-template #loadingSpinner>
        <cp-progress-spinner></cp-progress-spinner>
      </ng-template>
    </div>

  </div>
  <div *ngIf="isComplexBasketEmpty()" class="columns medium-12">
    <div class="callout">
      <h3>Your basket is currently empty. :'(</h3>
      <h5>Search for a complex and click on <i class="icon icon-common" data-icon="\uF217"></i> symbol to create your own
        collection of favorite complexes.</h5>
    </div>
  </div>
</div>
`;

// angular:jit:style:file:src/app/basket/basket.component.css
var basket_component_default2 = "/* src/app/basket/basket.component.css */\n.ComplexNavigator,\n.hover {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.basket-icons {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n.deleteAllButton {\n  width: 225px;\n}\nh2 {\n  line-height: 1;\n}\n/*# sourceMappingURL=basket.component.css.map */\n";

// src/app/basket/basket.component.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var BasketComponent = (_a = class {
  constructor(_basketService, titleService, complexPortalService, route, router) {
    __publicField(this, "_basketService");
    __publicField(this, "titleService");
    __publicField(this, "complexPortalService");
    __publicField(this, "route");
    __publicField(this, "router");
    __publicField(this, "_complexBasket");
    __publicField(this, "complexSearchBasket", null);
    __publicField(this, "allInteractorsInComplexSearchBasket", []);
    __publicField(this, "DisplayType");
    this._basketService = _basketService;
    this.titleService = titleService;
    this.complexPortalService = complexPortalService;
    this.route = route;
    this.router = router;
    this._complexBasket = this._basketService.complexBasket;
  }
  ngOnInit() {
    this.titleService.setTitle("Complex Portal - Basket");
    this.complexNavigatorLoading();
    this.route.fragment.subscribe((fragment) => {
      if (fragment === COMPLEX_NAVIGATOR_VIEW) {
        this.DisplayType = COMPLEX_NAVIGATOR_VIEW;
      } else {
        this.DisplayType = LIST_VIEW;
      }
    });
  }
  onDisplayTypeChange(displayType) {
    if (this.DisplayType !== displayType) {
      this.DisplayType = displayType;
      this.router.navigate([], {
        fragment: this.DisplayType
      });
    }
  }
  isDisplayComplexNavigatorView() {
    return this.DisplayType === COMPLEX_NAVIGATOR_VIEW;
  }
  ngAfterViewInit() {
    ProgressBarComponent.hide();
  }
  deleteFromBasket(key) {
    this._basketService.deleteFromBasket(key);
    this.complexNavigatorLoading();
  }
  deleteComplexFromBasket(complexAc) {
    for (const key of this.getKeys(this.complexBasket)) {
      if (this.complexBasket[key].id === complexAc) {
        this._basketService.deleteFromBasket(key);
      }
    }
    this.complexNavigatorLoading();
  }
  get complexBasket() {
    return this._complexBasket;
  }
  set complexBasket(value) {
    this._complexBasket = value;
  }
  isComplexBasketEmpty() {
    return this.getKeys(this._complexBasket).length === 0;
  }
  // Candidate for Util
  getKeys(object) {
    return Object.keys(object);
  }
  createQuery(object) {
    return "complex_id:(" + Object.values(object).map((v) => '"' + v.id + '"').join(",") + ")";
  }
  requestComplexesForNavigator() {
    const pageSize = Object.values(this._complexBasket).length;
    this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket), 1, pageSize).subscribe((complexSearch) => {
      this.complexSearchBasket = complexSearch;
      if (this.complexSearchBasket.totalNumberOfResults !== 0) {
        for (let i = 0; i < complexSearch.elements.length; i++) {
          for (const component of complexSearch.elements[i].interactors) {
            if (!this.allInteractorsInComplexSearchBasket.some((interactor) => interactor.identifier === component.identifier)) {
              this.allInteractorsInComplexSearchBasket.push(component);
            }
          }
        }
      }
    });
  }
  complexNavigatorLoading() {
    this.complexSearchBasket = null;
    this.allInteractorsInComplexSearchBasket = [];
    this.requestComplexesForNavigator();
  }
  deleteAllComplexes() {
    Object.values(this._complexBasket).map((v) => this.deleteComplexFromBasket(v.id));
  }
}, __publicField(_a, "ctorParameters", () => [
  { type: BasketService },
  { type: Title },
  { type: ComplexPortalService },
  { type: ActivatedRoute },
  { type: Router }
]), _a);
BasketComponent = __decorate([
  Component({
    selector: "cp-basket",
    template: basket_component_default,
    styles: [basket_component_default2]
  })
], BasketComponent);

// src/app/basket/basket.module.ts
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BasketModule = class BasketModule2 {
};
BasketModule = __decorate2([
  NgModule({
    imports: [
      RouterModule.forChild([
        { path: "", component: BasketComponent }
      ]),
      CommonModule,
      ComplexNavigatorModule,
      ProgressSpinnerComponent
    ],
    declarations: [BasketComponent]
  })
], BasketModule);
export {
  BasketModule
};
//# sourceMappingURL=basket.module-E24ELOSO.js.map
