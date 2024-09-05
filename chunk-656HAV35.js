import{a as m,d as _}from"./chunk-K2ZUAAP4.js";import"./chunk-XROBIGU3.js";import"./chunk-PPWNYIHJ.js";import{p as B}from"./chunk-WQOULTT3.js";import{C as b,b as v,g as C}from"./chunk-3R7ZRY4D.js";import"./chunk-KPQVFUCC.js";import{Ab as x,Ba as d,Db as k,Eb as g,Fb as y,G as h,Ha as u,h as s,qb as f}from"./chunk-RD2FM4QS.js";var S=`<div class="margin-top-large margin-bottom-large">
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
`;var N=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var P=function(r,e,t,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var p=r.length-1;p>=0;p--)(l=r[p])&&(o=(a<3?l(o):a>3?l(e,t,o):l(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},n,c=(n=class{constructor(e,t,i,a,o){s(this,"_basketService");s(this,"titleService");s(this,"complexPortalService");s(this,"route");s(this,"router");s(this,"_complexBasket");s(this,"complexSearchBasket",null);s(this,"allInteractorsInComplexSearchBasket",[]);s(this,"displayType");this._basketService=e,this.titleService=t,this.complexPortalService=i,this.route=a,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(h(1)).subscribe(e=>{e===m.navigator?this.displayType=m.navigator:this.displayType=m.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}isDisplayComplexNavigatorView(){return this.displayType===m.navigator}ngAfterViewInit(){v.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.complexNavigatorLoading()}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.complexNavigatorLoading()}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{if(this.complexSearchBasket=t,this.complexSearchBasket.totalNumberOfResults!==0)for(let i=0;i<t.elements.length;i++)for(let a of t.elements[i].interactors)this.allInteractorsInComplexSearchBasket.some(o=>o.identifier===a.identifier)||this.allInteractorsInComplexSearchBasket.push(a)})}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},s(n,"ctorParameters",()=>[{type:B},{type:x},{type:C},{type:k},{type:g}]),n);c=P([d({selector:"cp-basket",template:S,styles:[N]})],c);var T=function(r,e,t,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var p=r.length-1;p>=0;p--)(l=r[p])&&(o=(a<3?l(o):a>3?l(e,t,o):l(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},R=class{};R=T([u({imports:[y.forChild([{path:"",component:c}]),f,_,b],declarations:[c]})],R);export{R as BasketModule};
