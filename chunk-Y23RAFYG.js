import{a as m,b as _,c as N,d as n,g as R}from"./chunk-SY6IRDBC.js";import"./chunk-ZVFB4VEC.js";import"./chunk-W2HQQ4M6.js";import{p as C}from"./chunk-4IXOWVSV.js";import{F as b,b as k,g as S}from"./chunk-NJ2QIPD5.js";import"./chunk-27Z67F35.js";import{Fa as u,Fb as v,G as d,Ib as y,Jb as g,Kb as B,La as x,h as a,vb as f}from"./chunk-6GUMKFW7.js";var I=`<div class="margin-top-large margin-bottom-large">
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
                [(componentsSorting)]="componentsSorting"
                [(componentsGrouping)]="componentsGrouping"
                [(displayType)]="typeOfDisplay"
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
`;var F=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var P=function(r,e,t,s){var i=arguments.length,o=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,s);else for(var p=r.length-1;p>=0;p--)(l=r[p])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},h,c=(h=class{constructor(e,t,s,i,o){a(this,"_basketService");a(this,"titleService");a(this,"complexPortalService");a(this,"route");a(this,"router");a(this,"_complexBasket");a(this,"complexSearchBasket",null);a(this,"allInteractorsInComplexSearchBasket",[]);a(this,"displayType");a(this,"componentsGrouping",N.DEFAULT);a(this,"componentsSorting",_.DEFAULT);a(this,"typeOfDisplay",n.DETAILED);a(this,"NavigatorDisplayType",n);this._basketService=e,this.titleService=t,this.complexPortalService=s,this.route=i,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(d(1)).subscribe(e=>{e===m.navigator?this.displayType=m.navigator:this.displayType=m.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}isDisplayComplexNavigatorView(){return this.displayType===m.navigator}ngAfterViewInit(){k.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.removeComplexFromSearchResult(this.complexBasket[e].id)}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.removeComplexFromSearchResult(e)}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{this.complexSearchBasket=t,this.setAllInteractorsFromComplexSearch()})}setAllInteractorsFromComplexSearch(){if(this.allInteractorsInComplexSearchBasket=[],this.complexSearchBasket.totalNumberOfResults!==0)for(let e=0;e<this.complexSearchBasket.elements.length;e++)for(let t of this.complexSearchBasket.elements[e].interactors)this.allInteractorsInComplexSearchBasket.some(s=>s.identifier===t.identifier)||this.allInteractorsInComplexSearchBasket.push(t)}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}removeComplexFromSearchResult(e){this.complexSearchBasket={size:this.complexSearchBasket.size-1,totalNumberOfResults:this.complexSearchBasket.totalNumberOfResults-1,elements:this.complexSearchBasket.elements.filter(t=>t.complexAC!==e),facets:null},this.setAllInteractorsFromComplexSearch()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},a(h,"ctorParameters",()=>[{type:C},{type:v},{type:S},{type:y},{type:g}]),h);c=P([u({selector:"cp-basket",template:I,styles:[F]})],c);var A=function(r,e,t,s){var i=arguments.length,o=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,s);else for(var p=r.length-1;p>=0;p--)(l=r[p])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},O=class{};O=A([x({imports:[B.forChild([{path:"",component:c}]),f,R,b],declarations:[c]})],O);export{O as BasketModule};
