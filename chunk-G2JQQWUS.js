import{a as c,d as b}from"./chunk-RIACBEGF.js";import"./chunk-ZVFB4VEC.js";import"./chunk-W2HQQ4M6.js";import{p as g}from"./chunk-4IXOWVSV.js";import{F as S,b as v,g as C}from"./chunk-NJ2QIPD5.js";import"./chunk-CWMRX7KN.js";import{Fa as d,Fb as f,G as h,Ib as k,Jb as B,Kb as y,La as u,h as r,vb as x}from"./chunk-6GUMKFW7.js";var _=`<div class="margin-top-large margin-bottom-large">
  @if (!isComplexBasketEmpty()) {
    <div class="columns medium-12">
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
          [displayType]="displayType"
          (displayTypeChange)="onDisplayTypeChange($event)">
        </cp-complex-list-display-buttons>
      </div>
      @if (!this.isDisplayComplexNavigatorView()) {
        <table class="hover">
          <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Organism</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            @for (pair of complexBasket | keyvalue; track pair.key) {
              <tr [class.predicted]="pair.value.predicted">
                <td>
                  <a [routerLink]="['/complex', pair.value.id]">{{ pair.value.name }}</a>
                  \xB7 <b class="tag">{{ !pair.value.predicted ? 'Curated' : 'Predicted' }} complex</b>
                </td>
                <td>{{ pair.value.id }}</td>
                <td>{{ pair.value.organism }}</td>
                <td>
                  <a class="button primary columns medium-12" (click)="deleteFromBasket(pair.key)">
                    <i class="icon icon-common" data-icon="\uF1F8"></i>
                  </a>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
      @if (isDisplayComplexNavigatorView()) {
        <div class="columns medium-12">
          @if (complexSearchBasket) {
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
          } @else {
            <cp-progress-spinner></cp-progress-spinner>
          }
        </div>
      }
    </div>
  }
  @if (isComplexBasketEmpty()) {
    <div class="columns medium-12">
      <div class="callout">
        <h3>Your basket is currently empty. :'(</h3>
        <h5>Search for a complex and click on <i class="icon icon-common" data-icon="\uF217"></i> symbol to create your own
          collection of favorite complexes.</h5>
      </div>
    </div>
  }
</div>
`;var R=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var O=function(i,e,t,a){var s=arguments.length,o=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,a);else for(var m=i.length-1;m>=0;m--)(l=i[m])&&(o=(s<3?l(o):s>3?l(e,t,o):l(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},n,p=(n=class{constructor(e,t,a,s,o){r(this,"_basketService");r(this,"titleService");r(this,"complexPortalService");r(this,"route");r(this,"router");r(this,"_complexBasket");r(this,"complexSearchBasket",null);r(this,"allInteractorsInComplexSearchBasket",[]);r(this,"displayType");this._basketService=e,this.titleService=t,this.complexPortalService=a,this.route=s,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(h(1)).subscribe(e=>{e===c.navigator?this.displayType=c.navigator:this.displayType=c.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}isDisplayComplexNavigatorView(){return this.displayType===c.navigator}ngAfterViewInit(){v.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.removeComplexFromSearchResult(this.complexBasket[e].id)}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.removeComplexFromSearchResult(e)}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{this.complexSearchBasket=t,this.setAllInteractorsFromComplexSearch()})}setAllInteractorsFromComplexSearch(){if(this.allInteractorsInComplexSearchBasket=[],this.complexSearchBasket.totalNumberOfResults!==0)for(let e=0;e<this.complexSearchBasket.elements.length;e++)for(let t of this.complexSearchBasket.elements[e].interactors)this.allInteractorsInComplexSearchBasket.some(a=>a.identifier===t.identifier)||this.allInteractorsInComplexSearchBasket.push(t)}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}removeComplexFromSearchResult(e){this.complexSearchBasket={size:this.complexSearchBasket.size-1,totalNumberOfResults:this.complexSearchBasket.totalNumberOfResults-1,elements:this.complexSearchBasket.elements.filter(t=>t.complexAC!==e),facets:null},this.setAllInteractorsFromComplexSearch()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},r(n,"ctorParameters",()=>[{type:g},{type:f},{type:C},{type:k},{type:B}]),n);p=O([d({selector:"cp-basket",template:_,styles:[R]})],p);var P=function(i,e,t,a){var s=arguments.length,o=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,a);else for(var m=i.length-1;m>=0;m--)(l=i[m])&&(o=(s<3?l(o):s>3?l(e,t,o):l(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},I=class{};I=P([u({imports:[y.forChild([{path:"",component:p}]),x,b,S],declarations:[p]})],I);export{I as BasketModule};
