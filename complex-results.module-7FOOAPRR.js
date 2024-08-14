import {
  ComplexModule
} from "./chunk-4XIC55BZ.js";
import {
  COMPLEX_NAVIGATOR_VIEW,
  ComplexNavigatorModule,
  LIST_VIEW,
  interactorTypeIcon,
  organismIcon
} from "./chunk-4ASGIWF7.js";
import {
  MarkdownModule
} from "./chunk-EU7EGZ5R.js";
import {
  MatTooltipModule
} from "./chunk-XIBCTU4T.js";
import {
  BasketService,
  NotificationService
} from "./chunk-2VCLLS4E.js";
import {
  AnalyticsService,
  ComplexPortalService,
  ProgressBarComponent,
  ProgressSpinnerComponent
} from "./chunk-VAAOO3WK.js";
import "./chunk-JD75RUVK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Router,
  RouterModule,
  Title,
  __publicField
} from "./chunk-I4WWFSLP.js";

// angular:jit:template:file:src/app/complex/complex-results/complex-results.component.html
var complex_results_component_default = `<div class="margin-top-large margin-bottom-large row expanded">
  <ng-container *ngIf="complexSearch;else loadingSpinner">
    <div class="columns medium-12" *ngIf="complexSearch.totalNumberOfResults !== 0">
      <h2 class="padding-left-large">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>
      <div class="row expanded">
        <div class="columns medium-12">
          <cp-complex-navigator-rating *ngIf="isDisplayComplexNavigatorView()">
          </cp-complex-navigator-rating>

        </div>

        <div class="columns medium-12 large-2 no-padding">
          <cp-complex-filter *ngIf="filters"
                             [speciesFilter]="filters.species"
                             [bioRoleFilter]="filters.bioRole"
                             [interactorTypeFilter]="filters.interactorType"
                             [predictedFilter]="filters.predicted"
                             [confidenceScoreFilter]="filters.confidenceScore"
                             [facets]="complexSearch.facets"
                             (onResetAllFilters)="onResetAllFilters()"
                             (onSpeciesFilterChanged)="onSpeciesFilterChanged($event)"
                             (onBiologicalRoleFilterChanged)="onBiologicalRoleFilterChanged($event)"
                             (onInteractorTypeFilterChanged)="onInteractorTypeFilterChanged($event)"
                             (onPredictedFilterChanged)="onPredictedFilterChanged($event)"
                             (onConfidenceScoreFilterChanged)="onConfidenceScoreFilterChanged($event)">
          </cp-complex-filter>
        </div>
        <div class="columns medium-12 large-10">
          <div class="paginatorAndDisplay">
            <cp-complex-list-display-buttons
              [displayType]="DisplayType"
              (displayTypeChange)="onDisplayTypeChange($event)">
            </cp-complex-list-display-buttons>
            <cp-complex-paginator class="paginator"
                                  [currentPageIndex]="currentPageIndex"
                                  [lastPageIndex]="lastPageIndex"
                                  (onPageChange)="onPageChange($event)">
            </cp-complex-paginator>
          </div>
          <div class="listOfResults">
            <cp-complex-list *ngIf="!isDisplayComplexNavigatorView()"
                             [complexSearch]="complexSearch">
            </cp-complex-list>
          </div>
          <div class="ComplexNavigator" *ngIf="isDisplayComplexNavigatorView()"
               [ngClass]="complexSearch.totalNumberOfResults <=6 ? 'smallCN' : 'largeCN'">
            <cp-complex-navigator class="Complex-navigator"
                                  [complexSearch]="complexSearch"
                                  [interactors]="allInteractorsInComplexSearch"
                                  [canAddComplexesToBasket]="true"
                                  [canRemoveComplexesFromBasket]="false">
            </cp-complex-navigator>
          </div>
          <cp-complex-paginator class="paginator"
                                [currentPageIndex]="currentPageIndex"
                                [lastPageIndex]="lastPageIndex"
                                (onPageChange)="onPageChange($event)"></cp-complex-paginator>
        </div>
      </div>
    </div>


    <div class="columns medium-12 callout alert" *ngIf="complexSearch.totalNumberOfResults === 0">
      <h2>No Complex Portal results found</h2>
      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>
      <h4>Please consider refining your terms:</h4>
      <ul>
        <li>Make sure all words are spelled correctly</li>
        <li>Try different keywords</li>
        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>
        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results
          than "bike shed"
        </li>
      </ul>
    </div>
  </ng-container>
  <ng-template #loadingSpinner>
    <cp-progress-spinner [query]="query"></cp-progress-spinner>
  </ng-template>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-results.component.css
var complex_results_component_default2 = "/* src/app/complex/complex-results/complex-results.component.css */\n.listOfResults {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=complex-results.component.css.map */\n";

// src/app/complex/complex-results/complex-results.component.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var ComplexResultsComponent = (_a = class {
  constructor(route, router, complexPortalService, titleService, googleAnalyticsService, notificationService) {
    __publicField(this, "route");
    __publicField(this, "router");
    __publicField(this, "complexPortalService");
    __publicField(this, "titleService");
    __publicField(this, "googleAnalyticsService");
    __publicField(this, "notificationService");
    __publicField(this, "query");
    __publicField(this, "complexSearch");
    __publicField(this, "allInteractorsInComplexSearch", []);
    __publicField(this, "DisplayType");
    __publicField(this, "filters", {
      species: [],
      bioRole: [],
      interactorType: [],
      predicted: [],
      confidenceScore: []
    });
    __publicField(this, "_toast");
    __publicField(this, "_listPageSize", 15);
    // This is where we set the size of the pages for list view
    __publicField(this, "_navigatorPageSize", 20);
    // This is where we set the size of the pages for navigator view
    __publicField(this, "_listCurrentPage");
    __publicField(this, "_navigatorCurrentPage");
    __publicField(this, "_listLastPageIndex");
    __publicField(this, "_navigatorLastPageIndex");
    this.route = route;
    this.router = router;
    this.complexPortalService = complexPortalService;
    this.titleService = titleService;
    this.googleAnalyticsService = googleAnalyticsService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.titleService.setTitle("Complex Portal - Results");
    this.allInteractorsInComplexSearch = [];
    this.route.fragment.subscribe((fragment) => {
      if (fragment === COMPLEX_NAVIGATOR_VIEW) {
        this.DisplayType = COMPLEX_NAVIGATOR_VIEW;
      } else if (fragment === LIST_VIEW) {
        this.DisplayType = LIST_VIEW;
      }
      this.route.queryParams.subscribe((queryParams) => {
        this.query = queryParams["query"];
        Object.keys(this.filters).forEach((filter) => this.filters[filter] = this.decodeURL(filter, queryParams));
        this.currentPageIndex = queryParams["page"] ? Number(queryParams["page"]) : 1;
        this.requestComplexResults();
        document.body.scrollTop = 0;
      });
    });
  }
  ngAfterViewInit() {
  }
  requestComplexResults() {
    this.complexPortalService.findComplex(this.query, this.filters.species, this.filters.bioRole, this.filters.interactorType, this.filters.predicted, this.filters.confidenceScore, this.currentPageIndex, this.pageSize).subscribe((complexSearch) => {
      this.complexSearch = complexSearch;
      this.processSearchResults();
      this.allInteractorsInComplexSearch = [];
      if (this.complexSearch.totalNumberOfResults !== 0) {
        this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
        for (let i = 0; i < complexSearch.elements.length; i++) {
          for (const component of complexSearch.elements[i].interactors) {
            if (!this.allInteractorsInComplexSearch.some((interactor) => interactor.identifier === component.identifier)) {
              this.allInteractorsInComplexSearch.push(component);
            }
          }
        }
      }
      ProgressBarComponent.hide();
    });
  }
  /**
   * Prepare query params to build new URL after filter or pagination has changed
   */
  reloadPage() {
    const queryParams = {};
    queryParams["query"] = this.query;
    queryParams["page"] = this.currentPageIndex;
    Object.keys(this.filters).forEach((filter) => this.encodeURL(this.filters[filter], filter, queryParams));
    this.router.navigate([], {
      queryParams,
      fragment: this.DisplayType
    });
    ProgressBarComponent.hide();
    const filterCount = this.getFilterCount();
    if (1 < filterCount) {
      this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
    }
  }
  encodeURL(filter, filterName, params) {
    if (filter !== void 0 && filter.length !== 0) {
      params[filterName] = filter.join().replace(/ /g, "_");
    }
    return params[filterName];
  }
  decodeURL(filterName, params) {
    return params[filterName] ? params[filterName].replace(/_/g, " ").split(",") : [];
  }
  getFilterCount() {
    return Object.values(this.filters).reduce((total, f) => total + f.length, 0);
  }
  /**
   *
   * @param pageIndex new page index after hitting the paginator to update the URL and reload content
   */
  onPageChange(pageIndex) {
    this.currentPageIndex = pageIndex;
    this.reloadPage();
  }
  onResetAllFilters() {
    Object.keys(this.filters).forEach((f) => this.filters[f] = []);
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  onSpeciesFilterChanged(filter) {
    this.filters.species = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  onBiologicalRoleFilterChanged(filter) {
    this.filters.bioRole = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  onInteractorTypeFilterChanged(filter) {
    this.filters.interactorType = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  onPredictedFilterChanged(filter) {
    this.filters.predicted = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  onConfidenceScoreFilterChanged(filter) {
    this.filters.confidenceScore = filter;
    this.currentPageIndex = 1;
    this.reloadPage();
  }
  get currentPageIndex() {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorCurrentPage;
    } else {
      return this._listCurrentPage;
    }
  }
  set currentPageIndex(value) {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      this._navigatorCurrentPage = value;
    } else {
      this._listCurrentPage = value;
    }
  }
  get lastPageIndex() {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorLastPageIndex;
    } else {
      return this._listLastPageIndex;
    }
  }
  set lastPageIndex(value) {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      this._navigatorLastPageIndex = value;
    } else {
      this._listLastPageIndex = value;
    }
  }
  get pageSize() {
    if (this.DisplayType === COMPLEX_NAVIGATOR_VIEW) {
      return this._navigatorPageSize;
    } else {
      return this._listPageSize;
    }
  }
  onDisplayTypeChange(displayType) {
    if (this.DisplayType !== displayType) {
      this.DisplayType = displayType;
      if (displayType === LIST_VIEW) {
        this.setListView();
      } else if (displayType === COMPLEX_NAVIGATOR_VIEW) {
        this.setComplexNavigatorView();
      }
    }
  }
  isDisplayComplexNavigatorView() {
    return this.DisplayType === COMPLEX_NAVIGATOR_VIEW;
  }
  setListView() {
    this._toast = this.notificationService.complexNavigatorAnnouncement();
    this.reloadPage();
  }
  setComplexNavigatorView() {
    if (!!this._toast) {
      this.notificationService.closeAnnouncement(this._toast.toastId);
      this._toast = null;
    }
    this.reloadPage();
  }
  processSearchResults() {
    if (this.getFilterCount() === 0 && this.complexSearch.totalNumberOfResults === 1) {
      const complexId = this.complexSearch.elements[0].complexAC;
      if (!!complexId) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
        this.router.navigate(["/complex", complexId]);
      }
    } else if (!this.DisplayType) {
      if (this.complexSearch.totalNumberOfResults <= this._navigatorPageSize) {
        this.setComplexNavigatorView();
      } else {
        this.setListView();
      }
    }
  }
}, __publicField(_a, "ctorParameters", () => [
  { type: ActivatedRoute },
  { type: Router },
  { type: ComplexPortalService },
  { type: Title },
  { type: AnalyticsService },
  { type: NotificationService }
]), _a);
ComplexResultsComponent = __decorate([
  Component({
    selector: "cp-complex-results",
    template: complex_results_component_default,
    styles: [complex_results_component_default2]
  })
], ComplexResultsComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-paginator/complex-paginator.component.html
var complex_paginator_component_default = `<div>
  <h5 class="text-center">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>
  <ul class="pagination text-center" role="navigation" aria-label="Pagination">
    <li class="arrow unavailable" *ngIf="currentPageIndex != 1" aria-disabled="true"><a
      (click)="getFirstPage()">&Lang; First</a></li>
    <li class="arrow unavailable" *ngIf="currentPageIndex != 1" aria-disabled="true"><a
      (click)="getPreviousPage()">&lang; Previous</a></li>
    <ng-container *ngFor="let index of pagination">
      <li *ngIf="index[1] == 'true'" class="current"><span class="show-for-sr">You're on page</span>{{ index[0] }}</li>
      <li *ngIf="index[1] == 'false'"><a (click)="getPage(index[0])">{{ index[0] }}</a></li>
    </ng-container>
    <li class="arrow" *ngIf="currentPageIndex != lastPageIndex"><a (click)="getNextPage()">Next &rang;</a></li>
    <li class="arrow" *ngIf="currentPageIndex != lastPageIndex"><a (click)="getLastPage()">Last &Rang;</a></li>
  </ul>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-paginator/complex-paginator.component.css
var complex_paginator_component_default2 = "/* src/app/complex/complex-results/complex-paginator/complex-paginator.component.css */\n/*# sourceMappingURL=complex-paginator.component.css.map */\n";

// src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a2;
var ComplexPaginatorComponent = (_a2 = class {
  constructor() {
    __publicField(this, "_lastPageIndex");
    __publicField(this, "_currentPageIndex");
    __publicField(this, "_pagination");
    __publicField(this, "onPageChange", new EventEmitter());
  }
  ngOnInit() {
    this.updatePaginatior();
  }
  ngOnChanges(changes) {
    this.updatePaginatior();
  }
  updatePaginatior() {
    let start;
    let end;
    this.pagination = [];
    if (this._lastPageIndex < 5) {
      start = 1;
      end = this._lastPageIndex;
    } else {
      if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
        start = 1;
        end = 5;
      } else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
        start = this._lastPageIndex - 4;
        end = this._lastPageIndex;
      } else {
        start = this._currentPageIndex - 2;
        end = this._currentPageIndex + 2;
      }
    }
    while (start <= end) {
      if (start === this._currentPageIndex) {
        this._pagination.push([[this._currentPageIndex], [true]]);
      } else {
        this._pagination.push([[start], [false]]);
      }
      start++;
    }
  }
  getFirstPage() {
    this.onPageChange.emit(1);
  }
  getLastPage() {
    this.onPageChange.emit(this.lastPageIndex);
  }
  getPage(pageIndex) {
    this.onPageChange.emit(pageIndex);
  }
  getPreviousPage() {
    this.onPageChange.emit(this.currentPageIndex - 1);
  }
  getNextPage() {
    this.onPageChange.emit(this.currentPageIndex + 1);
  }
  get lastPageIndex() {
    return this._lastPageIndex;
  }
  set lastPageIndex(value) {
    this._lastPageIndex = value;
  }
  get currentPageIndex() {
    return this._currentPageIndex;
  }
  set currentPageIndex(value) {
    this._currentPageIndex = value;
  }
  get pagination() {
    return this._pagination;
  }
  set pagination(value) {
    this._pagination = value;
  }
}, __publicField(_a2, "ctorParameters", () => []), __publicField(_a2, "propDecorators", {
  onPageChange: [{ type: Output }],
  lastPageIndex: [{ type: Input }],
  currentPageIndex: [{ type: Input }]
}), _a2);
ComplexPaginatorComponent = __decorate2([
  Component({
    selector: "cp-complex-paginator",
    template: complex_paginator_component_default,
    styles: [complex_paginator_component_default2]
  })
], ComplexPaginatorComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-filter/complex-filter.component.html
var complex_filter_component_default = `<div class="filters row">
  <div class="columns medium-6"><h3>Filters</h3></div>
  <div class="columns medium-6">
    <div *ngIf="anyFiltersSelected()">
      <a class="button" (click)="resetAllFilters()"><i class="icon icon-common" data-icon="\uF1F8"></i> Reset filters</a>
    </div>
  </div>
  <div class="columns medium-12">
    <div *ngIf="facets.predicted_complex_f">
      <b>Complex Type</b>
      <ul class="no-bullet">
        <li *ngFor="let facet of facets.predicted_complex_f" [class.predicted]="facet.name === 'true'">
          <label>
            <input type="checkbox" #filter value="{{facet.name}}"
                   (change)="changePredictedFilter(filter.value, filter.checked)"
                   [checked]="isSelected(facet.name, predictedFilter)">
            <span class="tag">{{ formatPredictedFacetValue(facet.name) }}</span><span class="count">{{ facet.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div *ngIf="facets.confidence_score_f">
      <b>Confidence Score</b>
      <ul class="no-bullet">
        <li *ngFor="let facet of facets.confidence_score_f" [class.predicted]="facet.name === '1' || facet.name === '2'">
          <label>
            <input type="checkbox" #filter value="{{facet.name}}"
                   (change)="changeConfidenceScoreFilter(filter.value, filter.checked)"
                   [checked]="isSelected(facet.name, confidenceScoreFilter)">

            <span class="stars">
              <i *ngFor="let star of getStars(facet.name)" class="icon icon-common icon-star" [ngClass]="star"></i>
            </span>
            <span class="count">{{ facet.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div *ngIf="facets.species_f">
      <b>Species</b>
      <ul class="no-bullet">
        <li *ngFor="let facet of facets.species_f">
          <label [matTooltip]="facet.name">
            <input type="checkbox" #filter value="{{facet.name}}"
                   (change)="changeSpeciesFilter(filter.value, filter.checked)"
                   [checked]="isSelected(facet.name, speciesFilter)">

            <span>
              <i *ngIf="facetOrganismIcon(facet.name).startsWith('icon'); else img"
                 [ngClass]="facetOrganismIcon(facet.name)" style="font-size: large;"></i>
            <ng-template #img>
              <img [src]="facetOrganismIcon(facet.name)" alt="" width="18px" height="18px"/>
            </ng-template>
            </span>

            {{ facet.name | species:true }} <span class="count">{{ facet.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div *ngIf="facets.pbiorole_f">
      <b>Biological Role</b>
      <ul class="no-bullet">
        <li *ngFor="let facet of facets.pbiorole_f">
          <label>
            <input type="checkbox" #filter value="{{facet.name}}"
                   (change)="changeBiologicalRoleFilter(filter.value, filter.checked)"
                   [checked]="isSelected(facet.name, bioRoleFilter)">

            {{ facet.name }} <span class="count">{{ facet.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div *ngIf="facets.ptype_f">
      <b>Component Type</b>
      <ul class="no-bullet">
        <li *ngFor="let facet of facets.ptype_f">
          <label>
            <input type="checkbox" #filter value="{{facet.name}}"
                   (change)="changeInteractorTypeFilter(filter.value, filter.checked)"
                   [checked]="isSelected(facet.name, interactorTypeFilter)">

            <span >
              <i [ngClass]="facetTypeIcon(facet.name)" style="font-size: large;"></i>
            </span>
            {{ facet.name }} <span class="count">{{ facet.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div *ngIf="!facets.species_f && !facets.pbiorole_f && !facets.ptype_f && !facets.predicted_complex_f && !facets.confidence_score_f">
      <h6>No filters available</h6>
    </div>
  </div>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-filter/complex-filter.component.css
var complex_filter_component_default2 = "/* src/app/complex/complex-results/complex-filter/complex-filter.component.css */\ninput {\n  margin: 0;\n  vertical-align: middle;\n}\n.icon,\nimg {\n  vertical-align: middle;\n  margin: 0 2px;\n}\nlabel {\n  line-height: 1.8;\n  vertical-align: middle;\n}\n.count {\n  padding: 0 4px;\n  border-radius: 50px;\n  border: 1px solid black;\n  font-size: small;\n}\n.tag ~ .count {\n  margin-left: 6px;\n}\n.predicted .count {\n  border: 1px solid black;\n}\ninput:checked ~ .count {\n  background: var(--primary);\n  color: var(--on-primary);\n  font-weight: bold;\n  border: 1px solid var(--primary);\n}\n.stars {\n  gap: 4px;\n}\n.stars .icon {\n  font-size: 12pt;\n}\n.empty {\n  color: lightgray;\n}\n.full {\n  color: var(--primary);\n  -webkit-text-stroke: 1px var(--on-primary);\n  text-shadow: 0 0 4px var(--primary);\n}\n/*# sourceMappingURL=complex-filter.component.css.map */\n";

// src/app/complex/complex-results/complex-filter/complex-filter.component.ts
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a3;
var ComplexFilterComponent = (_a3 = class {
  constructor(googleAnalyticsService) {
    __publicField(this, "googleAnalyticsService");
    __publicField(this, "facets");
    __publicField(this, "speciesFilter");
    __publicField(this, "bioRoleFilter");
    __publicField(this, "interactorTypeFilter");
    __publicField(this, "predictedFilter");
    __publicField(this, "confidenceScoreFilter");
    __publicField(this, "onSpeciesFilterChanged", new EventEmitter());
    __publicField(this, "onBiologicalRoleFilterChanged", new EventEmitter());
    __publicField(this, "onInteractorTypeFilterChanged", new EventEmitter());
    __publicField(this, "onPredictedFilterChanged", new EventEmitter());
    __publicField(this, "onConfidenceScoreFilterChanged", new EventEmitter());
    __publicField(this, "onResetAllFilters", new EventEmitter());
    this.googleAnalyticsService = googleAnalyticsService;
  }
  ngOnInit() {
  }
  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  changeSpeciesFilter(filter, status) {
    if (status) {
      this.speciesFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.speciesFilter.splice(this.speciesFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onSpeciesFilterChanged.emit(this.speciesFilter);
  }
  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  changeBiologicalRoleFilter(filter, status) {
    if (status) {
      this.bioRoleFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
  }
  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  changeInteractorTypeFilter(filter, status) {
    if (status) {
      this.interactorTypeFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
  }
  changePredictedFilter(filter, status) {
    if (status) {
      this.predictedFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.predictedFilter.splice(this.predictedFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onPredictedFilterChanged.emit(this.predictedFilter);
  }
  changeConfidenceScoreFilter(filter, status) {
    if (status) {
      this.confidenceScoreFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.confidenceScoreFilter.splice(this.confidenceScoreFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onConfidenceScoreFilterChanged.emit(this.confidenceScoreFilter);
  }
  /**
   * Emit event to parent component to remove all filters
   */
  resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }
  /**
   *
   * @returns {boolean} true is any filter array contains an filter
   */
  anyFiltersSelected() {
    return this.speciesFilter.length !== 0 || this.bioRoleFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.predictedFilter.length !== 0 || this.confidenceScoreFilter.length !== 0;
  }
  /**
   *
   * @param element filter to check if already selected
   * @param filter selected filters
   * @returns {boolean} true if filter is already in selected filters
   */
  isSelected(element, filter) {
    return filter.indexOf(element) !== -1;
  }
  facetTypeIcon(facet) {
    return interactorTypeIcon(facet);
  }
  facetOrganismIcon(facet) {
    return organismIcon(facet);
  }
  formatPredictedFacetValue(facetName) {
    if (facetName === "true") {
      return "Predicted complex";
    } else {
      return "Curated complex";
    }
  }
  getStars(amount) {
    return this._getStars(Number(amount));
  }
  _getStars(amount) {
    const stars = ["empty", "empty", "empty", "empty", "empty"];
    stars.fill("full");
    if (amount < stars.length) {
      stars.fill("empty", amount);
    }
    return stars;
  }
}, __publicField(_a3, "ctorParameters", () => [
  { type: AnalyticsService }
]), __publicField(_a3, "propDecorators", {
  facets: [{ type: Input }],
  speciesFilter: [{ type: Input }],
  bioRoleFilter: [{ type: Input }],
  interactorTypeFilter: [{ type: Input }],
  predictedFilter: [{ type: Input }],
  confidenceScoreFilter: [{ type: Input }],
  onSpeciesFilterChanged: [{ type: Output }],
  onBiologicalRoleFilterChanged: [{ type: Output }],
  onInteractorTypeFilterChanged: [{ type: Output }],
  onPredictedFilterChanged: [{ type: Output }],
  onConfidenceScoreFilterChanged: [{ type: Output }],
  onResetAllFilters: [{ type: Output }]
}), _a3);
ComplexFilterComponent = __decorate3([
  Component({
    selector: "cp-complex-filter",
    template: complex_filter_component_default,
    styles: [complex_filter_component_default2]
  })
], ComplexFilterComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-list/complex-list.component.html
var complex_list_component_default = `<ul class="no-bullet">
  <li *ngFor="let complex of complexSearch.elements" [class.predicted]="complex.predictedComplex">
    <div class="container">
      <div class="basketButtonContainer"
           [matTooltip]="isInBasket(complex) ? 'Remove from basket' : 'Add to basket'">
        <a class="button" (click)="toggleBasket(complex)">
          <i class="icon icon-common" [attr.data-icon]="isInBasket(complex) ? '\uF1F8':'\uF217'"></i>
        </a>
      </div>
      <div class="complexesAndDescription">
        <h3>
          <a [routerLink]="['/complex', complex.complexAC]">{{ complex.complexName }}</a></h3>
        <div class="description" style="background-color: white">
          <b>Complex AC:</b> {{ complex.complexAC }} \xB7 <b>Organism:</b> {{ complex.organismName | species }}
          \xB7 <b class="tag">{{ !complex.predictedComplex ? 'Curated' : 'Predicted'}} complex</b>
          <br>
          <ng-container *ngIf="complex.description">
            <b>Description:</b>
            <div *ngIf="complex.description.length <= 250">
              {{ complex.description }}<a [routerLink]="['/complex', complex.complexAC]">...</a>
            </div>
            <div *ngIf="complex.description.length > 250">
              {{ complex.description.substr(0, 250) }}<a [routerLink]="['/complex', complex.complexAC]">...</a>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  </li>
</ul>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-list/complex-list.component.css
var complex_list_component_default2 = "/* src/app/complex/complex-results/complex-list/complex-list.component.css */\n.description {\n  width: 90%;\n  text-align: justify;\n}\n.container {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n.complexesAndDescription {\n  padding: 10px;\n  width: 95%;\n}\n.basketButtonContainer {\n  width: fit-content;\n  height: fit-content;\n  margin-top: 10px;\n}\n.basket-icons {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=complex-list.component.css.map */\n";

// src/app/complex/complex-results/complex-list/complex-list.component.ts
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a4;
var ComplexListComponent = (_a4 = class {
  constructor(basketService) {
    __publicField(this, "basketService");
    __publicField(this, "complexSearch");
    this.basketService = basketService;
  }
  ngOnInit() {
  }
  saveComplex(complex) {
    this.basketService.saveInBasket(complex);
  }
  removeComplexFromBasket(complex) {
    this.basketService.deleteFromBasket(complex.complexAC);
  }
  isInBasket(complex) {
    return this.basketService.isInBasket(complex.complexAC);
  }
  toggleBasket(complex) {
    if (this.isInBasket(complex)) {
      this.removeComplexFromBasket(complex);
    } else {
      this.saveComplex(complex);
    }
  }
}, __publicField(_a4, "ctorParameters", () => [
  { type: BasketService }
]), __publicField(_a4, "propDecorators", {
  complexSearch: [{ type: Input }]
}), _a4);
ComplexListComponent = __decorate4([
  Component({
    selector: "cp-complex-list",
    template: complex_list_component_default,
    styles: [complex_list_component_default2]
  })
], ComplexListComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.html
var complex_navigator_rating_component_default = `<div class="ratingComponent" *ngIf="!hidden">
  <div class="buttonContainer">
    <button class="close" id="closePopup" (click)="hidden = true">&times;</button>
  </div>
  <div class="text">
    <p>Tell us about your experience with the Complex Navigator!</p>
  </div>
  <div class="ratingComponentStars">
    <span class="star" [ngClass]="{'selected': selectedRating >= 1}" (click)="selectRating(1)"> &#9733; </span>
    <span class="star" [ngClass]="{'selected': selectedRating >= 2}" (click)="selectRating(2)"> &#9733; </span>
    <span class="star" [ngClass]="{'selected': selectedRating >= 3}" (click)="selectRating(3)"> &#9733; </span>
    <span class="star" [ngClass]="{'selected': selectedRating >= 4}" (click)="selectRating(4)"> &#9733; </span>
    <span class="star" [ngClass]="{'selected': selectedRating >= 5}" (click)="selectRating(5)"> &#9733; </span>
  </div>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css
var complex_navigator_rating_component_default2 = "/* src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.css */\n.star {\n  font-size: 1.5em;\n  cursor: pointer;\n  color: white;\n}\n.star.selected {\n  color: gold;\n}\n.ratingComponent {\n  background-color: var(--primary);\n  padding: 5px;\n  width: 350px;\n  text-align: center;\n  position: fixed;\n  z-index: 5;\n  top: 54vh;\n  right: -350px;\n  border: 1px solid white;\n  visibility: hidden;\n  animation: ratingComponentMove 1s forwards 7s;\n}\n.ratingComponent input {\n  background-color: white;\n  color: var(--primary);\n}\n.text {\n  display: -webkit-box;\n  color: white;\n  width: 96%;\n  text-align: -webkit-center;\n  padding-left: 10px;\n  margin-bottom: -15px;\n}\n@keyframes ratingComponentMove {\n  from {\n    right: -10vw;\n    visibility: visible;\n  }\n  to {\n    right: 4vw;\n    visibility: visible;\n  }\n}\n.buttonContainer {\n  width: 100%;\n  height: 1ch;\n  text-align: end;\n  padding-right: 5px;\n}\n.close {\n  color: white;\n}\n.ratingComponentStars {\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=complex-navigator-rating.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/complex-navigator-rating/complex-navigator-rating.component.ts
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var COMPLEX_NAVIGATOR_RATING = "already_rated";
var _a5;
var ComplexNavigatorRatingComponent = (_a5 = class {
  constructor(analyticsService) {
    __publicField(this, "analyticsService");
    __publicField(this, "selectedRating");
    __publicField(this, "hidden", false);
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.hidden = localStorage.getItem(COMPLEX_NAVIGATOR_RATING) === "true" || false;
  }
  selectRating(rating) {
    this.selectedRating = rating;
    this.analyticsService.rateComplexNavigator(this.selectedRating);
    localStorage.setItem(COMPLEX_NAVIGATOR_RATING, "true");
    setTimeout(() => this.hidden = true, 2e3);
  }
}, __publicField(_a5, "ctorParameters", () => [
  { type: AnalyticsService }
]), _a5);
ComplexNavigatorRatingComponent = __decorate5([
  Component({
    selector: "cp-complex-navigator-rating",
    template: complex_navigator_rating_component_default,
    styles: [complex_navigator_rating_component_default2]
  })
], ComplexNavigatorRatingComponent);

// src/app/complex/complex-results/complex-results.module.ts
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComplexResultsModule = class ComplexResultsModule2 {
};
ComplexResultsModule = __decorate6([
  NgModule({
    imports: [
      RouterModule.forChild([
        { path: "", component: ComplexResultsComponent }
      ]),
      CommonModule,
      ProgressSpinnerComponent,
      MarkdownModule,
      ComplexNavigatorModule,
      MatTooltipModule,
      ComplexModule
    ],
    exports: [],
    declarations: [
      ComplexResultsComponent,
      ComplexListComponent,
      ComplexFilterComponent,
      ComplexPaginatorComponent,
      ComplexNavigatorRatingComponent
    ]
  })
], ComplexResultsModule);
export {
  ComplexResultsModule
};
//# sourceMappingURL=complex-results.module-7FOOAPRR.js.map
