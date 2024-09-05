import{a as c,b as U,c as V,d as W}from"./chunk-K2ZUAAP4.js";import{a as G}from"./chunk-XROBIGU3.js";import{a as $}from"./chunk-PPWNYIHJ.js";import{m as j,o as D,p as M}from"./chunk-WQOULTT3.js";import{C as z,b as F,f as h,g as q}from"./chunk-3R7ZRY4D.js";import{a as Q}from"./chunk-KPQVFUCC.js";import{Ab as A,Ba as d,Ca as w,Da as p,Db as E,Ea as m,Eb as L,Fb as B,Ha as k,O,R as T,h as r,ia as g,ja as f,qb as N}from"./chunk-RD2FM4QS.js";var X=`<div class="margin-top-large margin-bottom-large row expanded">
  @if (complexSearch) {
    @if (complexSearch.totalNumberOfResults !== 0) {
      <div class="columns medium-12">
        <h2 class="padding-left-large">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>
        <div class="row expanded">
          <div class="columns medium-12">
            @if (isDisplayComplexNavigatorView()) {
              <cp-complex-navigator-rating>
              </cp-complex-navigator-rating>
            }
          </div>
          <div class="columns medium-12 large-2 no-padding">
            @if (filters) {
              <cp-complex-filter
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
            }
          </div>
          <div class="columns medium-12 large-10">
            <div class="paginatorAndDisplay">
              <cp-complex-list-display-buttons [(displayType)]="displayType">
              </cp-complex-list-display-buttons>
              <cp-complex-paginator class="paginator"
                [currentPageIndex]="currentPageIndex"
                [lastPageIndex]="lastPageIndex"
                (onPageChange)="onPageChange($event)">
              </cp-complex-paginator>
            </div>
            <div class="listOfResults">
              @if (!isDisplayComplexNavigatorView()) {
                <cp-complex-list
                  [complexSearch]="complexSearch">
                </cp-complex-list>
              }
            </div>
            @if (isDisplayComplexNavigatorView()) {
              <div class="ComplexNavigator"
                [ngClass]="complexSearch.totalNumberOfResults <=6 ? 'smallCN' : 'largeCN'">
                <cp-complex-navigator class="Complex-navigator"
                  [complexSearch]="complexSearch"
                  [interactors]="allInteractorsInComplexSearch"
                  [canAddComplexesToBasket]="true"
                  [canRemoveComplexesFromBasket]="false">
                </cp-complex-navigator>
              </div>
            }
            <cp-complex-paginator class="paginator"
              [currentPageIndex]="currentPageIndex"
              [lastPageIndex]="lastPageIndex"
            (onPageChange)="onPageChange($event)"></cp-complex-paginator>
          </div>
        </div>
      </div>
    }
    @if (complexSearch.totalNumberOfResults === 0) {
      <div class="columns medium-12 callout alert">
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
    }
  } @else {
    <cp-progress-spinner [query]="query"></cp-progress-spinner>
  }
</div>
`;var Y=`.listOfResults{width:70%;margin-left:auto;margin-right:auto}
`;var ce=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},I,u=(I=class{constructor(e,t,a,o,i,s){r(this,"route");r(this,"router");r(this,"complexPortalService");r(this,"titleService");r(this,"googleAnalyticsService");r(this,"notificationService");r(this,"query");r(this,"complexSearch");r(this,"allInteractorsInComplexSearch",[]);r(this,"_displayType");r(this,"filters",{species:[],bioRole:[],interactorType:[],predicted:[],confidenceScore:[]});r(this,"_toast");r(this,"_listPageSize",15);r(this,"_navigatorPageSize",20);r(this,"_listCurrentPage");r(this,"_navigatorCurrentPage");r(this,"_listLastPageIndex");r(this,"_navigatorLastPageIndex");this.route=e,this.router=t,this.complexPortalService=a,this.titleService=o,this.googleAnalyticsService=i,this.notificationService=s}ngOnInit(){this.titleService.setTitle("Complex Portal - Results"),this.allInteractorsInComplexSearch=[],this.route.fragment.pipe(T(e=>{e===c.navigator?this._displayType=c.navigator:e===c.list&&(this._displayType=c.list)}),O(e=>this.route.queryParams)).subscribe(e=>{this.query=e.query,Object.keys(this.filters).forEach(t=>this.filters[t]=this.decodeURL(t,e)),this.currentPageIndex=e.page?Number(e.page):1,this.requestComplexResults(),document.body.scrollTop=0})}ngAfterViewInit(){}requestComplexResults(){this.complexPortalService.findComplex(this.query,this.filters.species,this.filters.bioRole,this.filters.interactorType,this.filters.predicted,this.filters.confidenceScore,this.currentPageIndex,this.pageSize).subscribe(e=>{if(this.complexSearch=e,this.processSearchResults(),this.allInteractorsInComplexSearch=[],this.complexSearch.totalNumberOfResults!==0){this.lastPageIndex=Math.ceil(e.totalNumberOfResults/this.pageSize);for(let t=0;t<e.elements.length;t++)for(let a of e.elements[t].interactors)this.allInteractorsInComplexSearch.some(o=>o.identifier===a.identifier)||this.allInteractorsInComplexSearch.push(a)}F.hide()})}reloadPage(){let e={};e.query=this.query,e.page=this.currentPageIndex,Object.keys(this.filters).forEach(a=>this.encodeURL(this.filters[a],a,e)),this.router.navigate([],{queryParams:e,fragment:this.displayType}),F.hide();let t=this.getFilterCount();1<t&&this.googleAnalyticsService.fireMultiFilterEvent(t.toString())}encodeURL(e,t,a){return e!==void 0&&e.length!==0&&(a[t]=e.join().replace(/ /g,"_")),a[t]}decodeURL(e,t){return t[e]?t[e].replace(/_/g," ").split(","):[]}getFilterCount(){return Object.values(this.filters).reduce((e,t)=>e+t.length,0)}onPageChange(e){this.currentPageIndex=e,this.reloadPage()}onResetAllFilters(){Object.keys(this.filters).forEach(e=>this.filters[e]=[]),this.currentPageIndex=1,this.reloadPage()}onSpeciesFilterChanged(e){this.filters.species=e,this.currentPageIndex=1,this.reloadPage()}onBiologicalRoleFilterChanged(e){this.filters.bioRole=e,this.currentPageIndex=1,this.reloadPage()}onInteractorTypeFilterChanged(e){this.filters.interactorType=e,this.currentPageIndex=1,this.reloadPage()}onPredictedFilterChanged(e){this.filters.predicted=e,this.currentPageIndex=1,this.reloadPage()}onConfidenceScoreFilterChanged(e){this.filters.confidenceScore=e,this.currentPageIndex=1,this.reloadPage()}get currentPageIndex(){return this._displayType===c.navigator?this._navigatorCurrentPage:this._listCurrentPage}set currentPageIndex(e){this._displayType===c.navigator?this._navigatorCurrentPage=e:this._listCurrentPage=e}get lastPageIndex(){return this._displayType===c.navigator?this._navigatorLastPageIndex:this._listLastPageIndex}set lastPageIndex(e){this._displayType===c.navigator?this._navigatorLastPageIndex=e:this._listLastPageIndex=e}get pageSize(){return this._displayType===c.navigator?this._navigatorPageSize:this._listPageSize}set displayType(e){this._displayType!==e&&(this._displayType=e,e===c.list?this.setListView():e===c.navigator&&this.setComplexNavigatorView())}get displayType(){return this._displayType}isDisplayComplexNavigatorView(){return this._displayType===c.navigator}setListView(){this._toast=this.notificationService.complexNavigatorAnnouncement(),this._displayType=c.list,this.reloadPage()}setComplexNavigatorView(){this._toast&&(this.notificationService.closeAnnouncement(this._toast.toastId),this._toast=null),this._displayType=c.navigator,this.reloadPage()}processSearchResults(){if(this.getFilterCount()===0&&this.complexSearch.totalNumberOfResults===1){let e=this.complexSearch.elements[0].complexAC;e&&this.router.navigate(["/complex",e])}else this._displayType||(this.complexSearch.totalNumberOfResults<=this._navigatorPageSize?this.setComplexNavigatorView():this.setListView())}},r(I,"ctorParameters",()=>[{type:E},{type:L},{type:q},{type:A},{type:h},{type:j}]),I);u=ce([d({selector:"cp-complex-results",template:X,styles:[Y]})],u);var H=`<div>
  <h5 class="text-center">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>
  <ul class="pagination text-center" role="navigation" aria-label="Pagination">
    @if (currentPageIndex != 1) {
      <li class="arrow unavailable" aria-disabled="true"><a
      (click)="getFirstPage()">&Lang; First</a></li>
    }
    @if (currentPageIndex != 1) {
      <li class="arrow unavailable" aria-disabled="true"><a
      (click)="getPreviousPage()">&lang; Previous</a></li>
    }
    @for (index of pagination; track index.pageNumber) {
      @if (index.isCurrent) {
        <li class="current"><span class="show-for-sr">You're on page</span>{{ index.pageNumber }}</li>
      } @else {
        <li><a (click)="getPage(index.pageNumber)">{{ index.pageNumber }}</a></li>
      }
    }
    @if (currentPageIndex != lastPageIndex) {
      <li class="arrow"><a (click)="getNextPage()">Next &rang;</a></li>
    }
    @if (currentPageIndex != lastPageIndex) {
      <li class="arrow"><a (click)="getLastPage()">Last &Rang;</a></li>
    }
  </ul>
</div>
`;var J="";var ge=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},x,v=(x=class{constructor(){r(this,"_lastPageIndex");r(this,"_currentPageIndex");r(this,"pagination",[]);r(this,"onPageChange",g())}ngOnInit(){this.updatePaginatior()}ngOnChanges(e){this.updatePaginatior()}updatePaginatior(){let e,t;for(this.pagination=[],this._lastPageIndex<5?(e=1,t=this._lastPageIndex):this._currentPageIndex===1||this._currentPageIndex===2?(e=1,t=5):this._currentPageIndex===this._lastPageIndex||this._currentPageIndex===this._lastPageIndex-1?(e=this._lastPageIndex-4,t=this._lastPageIndex):(e=this._currentPageIndex-2,t=this._currentPageIndex+2);e<=t;)this.pagination.push({pageNumber:e,isCurrent:this._currentPageIndex===e}),e++}getFirstPage(){this.onPageChange.emit(1)}getLastPage(){this.onPageChange.emit(this.lastPageIndex)}getPage(e){this.onPageChange.emit(e)}getPreviousPage(){this.onPageChange.emit(this.currentPageIndex-1)}getNextPage(){this.onPageChange.emit(this.currentPageIndex+1)}get lastPageIndex(){return this._lastPageIndex}set lastPageIndex(e){this._lastPageIndex=e}get currentPageIndex(){return this._currentPageIndex}set currentPageIndex(e){this._currentPageIndex=e}},r(x,"ctorParameters",()=>[]),r(x,"propDecorators",{onPageChange:[{type:m,args:["onPageChange"]}],lastPageIndex:[{type:p}],currentPageIndex:[{type:p}]}),x);v=ge([d({selector:"cp-complex-paginator",template:H,styles:[J]})],v);var Z=`<div class="filters row">
  <div class="columns medium-6"><h3>Filters</h3></div>
  <div class="columns medium-6">
    @if (anyFiltersSelected()) {
      <div>
        <a class="button" (click)="resetAllFilters()"><i class="icon icon-common" data-icon="\uF1F8"></i> Reset filters</a>
      </div>
    }
  </div>
  <div class="columns medium-12">
    @if (facets().predicted_complex_f) {
      <div>
        <b>Complex Type</b>
        <ul class="no-bullet">
          @for (facet of facets().predicted_complex_f; track facet.name) {
            <li [class.predicted]="facet.name === 'true'">
              <label>
                <input type="checkbox" #filter value="{{facet.name}}"
                  (change)="changePredictedFilter(filter.value, filter.checked)"
                  [checked]="isSelected(facet.name, predictedFilter())">
                <span class="tag">{{ formatPredictedFacetValue(facet.name) }}</span><span class="count">{{ facet.count }}</span>
              </label>
            </li>
          }
        </ul>
      </div>
    }

    @if (facets().confidence_score_f) {
      <div>
        <b>Confidence Score</b>
        <ul class="no-bullet">
          @for (facet of facets().confidence_score_f; track facet.name) {
            <li [class.predicted]="facet.name === '1' || facet.name === '2'">
              <label>
                <input type="checkbox" #filter value="{{facet.name}}"
                  (change)="changeConfidenceScoreFilter(filter.value, filter.checked)"
                  [checked]="isSelected(facet.name, confidenceScoreFilter())">
                <span class="stars">
                  @for (star of getStars(facet.name); let i = $index; track i) {
                    <i class="icon icon-common icon-star" [ngClass]="star"></i>
                  }
                </span>
                <span class="count">{{ facet.count }}</span>
              </label>
            </li>
          }
        </ul>
      </div>
    }

    @if (facets().species_f) {
      <div>
        <b>Species</b>
        <ul class="no-bullet">
          @for (facet of facets().species_f; track facet.name) {
            <li>
              <label [matTooltip]="facet.name">
                <input type="checkbox" #filter value="{{facet.name}}"
                  (change)="changeSpeciesFilter(filter.value, filter.checked)"
                  [checked]="isSelected(facet.name, speciesFilter())">
                <span>
                  @if (facetOrganismIcon(facet.name).startsWith('icon')) {
                    <i
                    [ngClass]="facetOrganismIcon(facet.name)" style="font-size: large;"></i>
                  } @else {
                    <img [src]="facetOrganismIcon(facet.name)" alt="" width="18px" height="18px"/>
                  }
                </span>
                {{ facet.name | species:true }} <span class="count">{{ facet.count }}</span>
              </label>
            </li>
          }
        </ul>
      </div>
    }

    @if (facets().pbiorole_f) {
      <div>
        <b>Biological Role</b>
        <ul class="no-bullet">
          @for (facet of facets().pbiorole_f; track facet.name) {
            <li>
              <label>
                <input type="checkbox" #filter value="{{facet.name}}"
                  (change)="changeBiologicalRoleFilter(filter.value, filter.checked)"
                  [checked]="isSelected(facet.name, bioRoleFilter())">
                {{ facet.name }} <span class="count">{{ facet.count }}</span>
              </label>
            </li>
          }
        </ul>
      </div>
    }

    @if (facets().ptype_f) {
      <div>
        <b>Component Type</b>
        <ul class="no-bullet">
          @for (facet of facets().ptype_f; track facet.name) {
            <li>
              <label>
                <input type="checkbox" #filter value="{{facet.name}}"
                  (change)="changeInteractorTypeFilter(filter.value, filter.checked)"
                  [checked]="isSelected(facet.name, interactorTypeFilter())">
                <span >
                  <i [ngClass]="facetTypeIcon(facet.name)" style="font-size: large;"></i>
                </span>
                {{ facet.name }} <span class="count">{{ facet.count }}</span>
              </label>
            </li>
          }
        </ul>
      </div>
    }

    @if (!facets().species_f && !facets().pbiorole_f && !facets().ptype_f && !facets().predicted_complex_f && !facets().confidence_score_f) {
      <div>
        <h6>No filters available</h6>
      </div>
    }
  </div>
</div>
`;var ee=`input{margin:0;vertical-align:middle}.icon,img{vertical-align:middle;margin:0 2px}label{line-height:1.8;vertical-align:middle}.count{padding:0 4px;border-radius:50px;border:1px solid black;font-size:small}.tag~.count{margin-left:6px}.predicted .count{border:1px solid black}input:checked~.count{background:var(--primary);color:var(--on-primary);font-weight:700;border:1px solid var(--primary)}.stars{gap:4px}.stars .icon{font-size:12pt}.empty{color:#d3d3d3}.full{color:var(--primary);-webkit-text-stroke:1px var(--on-primary);text-shadow:0 0 4px var(--primary)}
`;var he=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},C,y=(C=class{constructor(e){r(this,"googleAnalyticsService");r(this,"facets",f());r(this,"speciesFilter",f());r(this,"bioRoleFilter",f());r(this,"interactorTypeFilter",f());r(this,"predictedFilter",f());r(this,"confidenceScoreFilter",f());r(this,"onSpeciesFilterChanged",g());r(this,"onBiologicalRoleFilterChanged",g());r(this,"onInteractorTypeFilterChanged",g());r(this,"onPredictedFilterChanged",g());r(this,"onConfidenceScoreFilterChanged",g());r(this,"onResetAllFilters",g());this.googleAnalyticsService=e}ngOnInit(){}changeSpeciesFilter(e,t){t?(this.speciesFilter().push(e),this.googleAnalyticsService.fireAddedFilterEvent(e)):(this.speciesFilter().splice(this.speciesFilter().indexOf(e),1),this.googleAnalyticsService.fireRemovedFilterEvent(e)),this.onSpeciesFilterChanged.emit(this.speciesFilter())}changeBiologicalRoleFilter(e,t){t?(this.bioRoleFilter().push(e),this.googleAnalyticsService.fireAddedFilterEvent(e)):(this.bioRoleFilter().splice(this.bioRoleFilter().indexOf(e),1),this.googleAnalyticsService.fireRemovedFilterEvent(e)),this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter())}changeInteractorTypeFilter(e,t){t?(this.interactorTypeFilter().push(e),this.googleAnalyticsService.fireAddedFilterEvent(e)):(this.interactorTypeFilter().splice(this.interactorTypeFilter().indexOf(e),1),this.googleAnalyticsService.fireRemovedFilterEvent(e)),this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter())}changePredictedFilter(e,t){t?(this.predictedFilter().push(e),this.googleAnalyticsService.fireAddedFilterEvent(e)):(this.predictedFilter().splice(this.predictedFilter().indexOf(e),1),this.googleAnalyticsService.fireRemovedFilterEvent(e)),this.onPredictedFilterChanged.emit(this.predictedFilter())}changeConfidenceScoreFilter(e,t){t?(this.confidenceScoreFilter().push(e),this.googleAnalyticsService.fireAddedFilterEvent(e)):(this.confidenceScoreFilter().splice(this.confidenceScoreFilter().indexOf(e),1),this.googleAnalyticsService.fireRemovedFilterEvent(e)),this.onConfidenceScoreFilterChanged.emit(this.confidenceScoreFilter())}resetAllFilters(){this.onResetAllFilters.emit(!0)}anyFiltersSelected(){return this.speciesFilter().length!==0||this.bioRoleFilter().length!==0||this.interactorTypeFilter().length!==0||this.predictedFilter().length!==0||this.confidenceScoreFilter().length!==0}isSelected(e,t){return t.indexOf(e)!==-1}facetTypeIcon(e){return U(e)}facetOrganismIcon(e){return V(e)}formatPredictedFacetValue(e){return e==="true"?"Predicted complex":"Curated complex"}getStars(e){return this._getStars(Number(e))}_getStars(e){let t=["empty","empty","empty","empty","empty"];return t.fill("full"),e<t.length&&t.fill("empty",e),t}},r(C,"ctorParameters",()=>[{type:h}]),r(C,"propDecorators",{facets:[{type:p,args:[{isSignal:!0,alias:"facets",required:!1,transform:void 0}]}],speciesFilter:[{type:p,args:[{isSignal:!0,alias:"speciesFilter",required:!1,transform:void 0}]}],bioRoleFilter:[{type:p,args:[{isSignal:!0,alias:"bioRoleFilter",required:!1,transform:void 0}]}],interactorTypeFilter:[{type:p,args:[{isSignal:!0,alias:"interactorTypeFilter",required:!1,transform:void 0}]}],predictedFilter:[{type:p,args:[{isSignal:!0,alias:"predictedFilter",required:!1,transform:void 0}]}],confidenceScoreFilter:[{type:p,args:[{isSignal:!0,alias:"confidenceScoreFilter",required:!1,transform:void 0}]}],onSpeciesFilterChanged:[{type:m,args:["onSpeciesFilterChanged"]}],onBiologicalRoleFilterChanged:[{type:m,args:["onBiologicalRoleFilterChanged"]}],onInteractorTypeFilterChanged:[{type:m,args:["onInteractorTypeFilterChanged"]}],onPredictedFilterChanged:[{type:m,args:["onPredictedFilterChanged"]}],onConfidenceScoreFilterChanged:[{type:m,args:["onConfidenceScoreFilterChanged"]}],onResetAllFilters:[{type:m,args:["onResetAllFilters"]}]}),C);y=he([d({selector:"cp-complex-filter",template:Z,styles:[ee]})],y);var te=`<ul class="no-bullet">
  @for (complex of complexSearch().elements; track complex.complexAC) {
    <li [class.predicted]="complex.predictedComplex">
      <div class="container">
        <div class="basketButtonContainer"
          [matTooltip]="isInBasket(complex) ? 'Remove from basket' : 'Add to basket'">
          <a class="button" (click)="toggleBasket(complex)">
            <i class="icon icon-common" [attr.data-icon]="isInBasket(complex) ? '\uF1F8':'\uF217'"></i>
          </a>
        </div>
        <div class="complexesAndDescription">
          <h3><a [routerLink]="['/complex', complex.complexAC]">{{ complex.complexName | truncate:114 }}</a></h3>
          <div class="description" style="background-color: white">
            <b>Complex AC:</b> {{ complex.complexAC }} \xB7 <b>Organism:</b> {{ complex.organismName | species }}
            \xB7 <b class="tag">{{ !complex.predictedComplex ? 'Curated' : 'Predicted'}} complex</b>
            <br>
              @if (complex.description) {
                <b>Description:</b> {{ complex.description | truncate:250}}
              }
            </div>
          </div>
        </div>
      </li>
    }
  </ul>
`;var ie=`.description{width:90%;text-align:justify}.container{display:inline-flex;width:-webkit-fill-available}.complexesAndDescription{padding:10px;width:95%}.basketButtonContainer{width:fit-content;height:fit-content;margin-top:10px}.basket-icons{margin-left:5px}.predicted h3{font-family:Roboto Mono,monospace;font-optical-sizing:auto;font-weight:500;font-style:normal;font-size:22px}
`;var ve=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},_,P=(_=class{constructor(e){r(this,"basketService");r(this,"complexSearch",f());this.basketService=e}ngOnInit(){}saveComplex(e){this.basketService.saveInBasket(e)}removeComplexFromBasket(e){this.basketService.deleteFromBasket(e.complexAC)}isInBasket(e){return this.basketService.isInBasket(e.complexAC)}toggleBasket(e){this.isInBasket(e)?this.removeComplexFromBasket(e):this.saveComplex(e)}},r(_,"ctorParameters",()=>[{type:M}]),r(_,"propDecorators",{complexSearch:[{type:p,args:[{isSignal:!0,alias:"complexSearch",required:!1,transform:void 0}]}]}),_);P=ve([d({selector:"cp-complex-list",template:te,styles:[ie]})],P);var re=`@if (!hidden) {
  <div class="ratingComponent">
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
}
`;var ae=`.star{font-size:1.5em;cursor:pointer;color:#fff}.star.selected{color:gold}.ratingComponent{background-color:var(--primary);padding:5px;width:350px;text-align:center;position:fixed;z-index:5;top:54vh;right:-350px;border:1px solid white;visibility:hidden;animation:ratingComponentMove 1s forwards 7s}.ratingComponent input{background-color:#fff;color:var(--primary)}.text{display:-webkit-box;color:#fff;width:96%;text-align:-webkit-center;padding-left:10px;margin-bottom:-15px}@keyframes ratingComponentMove{0%{right:-10vw;visibility:visible}to{right:4vw;visibility:visible}}.buttonContainer{width:100%;height:1ch;text-align:end;padding-right:5px}.close{color:#fff}.ratingComponentStars{padding-bottom:5px}
`;var _e=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},oe="already_rated",R,b=(R=class{constructor(e){r(this,"analyticsService");r(this,"selectedRating");r(this,"hidden",!1);this.analyticsService=e}ngOnInit(){this.hidden=localStorage.getItem(oe)==="true"||!1}selectRating(e){this.selectedRating=e,this.analyticsService.rateComplexNavigator(this.selectedRating),localStorage.setItem(oe,"true"),setTimeout(()=>this.hidden=!0,2e3)}},r(R,"ctorParameters",()=>[{type:h}]),R);b=_e([d({selector:"cp-complex-navigator-rating",template:re,styles:[ae]})],b);var Pe=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},S=class{transform(e,t=200){return e.length>t?e.substring(0,t-1)+"\u2026":e}};S=Pe([w({name:"truncate",standalone:!0})],S);var be=function(n,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,a);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},se=class{};se=be([k({imports:[B.forChild([{path:"",component:u}]),N,z,G,W,$,Q,S,D],exports:[],declarations:[u,P,y,v,b]})],se);export{se as ComplexResultsModule};
