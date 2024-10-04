import{a as C,b as _,c as I}from"./chunk-NOIBD7Z7.js";import{f as c}from"./chunk-Z5LNLOUS.js";import"./chunk-NY6W22E7.js";import"./chunk-JI7VLGHS.js";import{p as y}from"./chunk-2EI36JGA.js";import{M as S,b as v,h as B}from"./chunk-6Y53KJL3.js";import"./chunk-W7CDA5Y4.js";import{H as h,Ja as d,Jb as f,Mb as b,Nb as k,Ob as g,Pa as u,h as r,zb as x}from"./chunk-3FSLCVCX.js";var R=`<div class="margin-top-large margin-bottom-large">
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
      <div class="row expanded">
        <mat-tab-group [tabIndex]="displayType === SearchDisplay.list ? 0 : 1"
                       (selectedTabChange)="onDisplayTypeChange($event.index === 0 ? SearchDisplay.list : SearchDisplay.navigator)"
                       class="columns medium-centered small-12 medium-10 large-8">
          <mat-tab label="List view">
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
          </mat-tab>
          <mat-tab label="Navigator view">
            <div class="columns medium-12">
              @if (complexSearchBasket) {
                <div class="ComplexNavigator"
                     [ngClass]="complexSearchBasket.totalNumberOfResults <=6 ? 'smallCN' : ''">
                  <cp-complex-navigator
                    [complexSearch]="complexSearchBasket"
                    [interactors]="allInteractorsInComplexSearchBasket"
                    (onComplexRemovedFromBasket)="deleteFromBasket($event)">
                  </cp-complex-navigator>
                </div>
              } @else {
                <cp-progress-spinner></cp-progress-spinner>
              }
            </div>
          </mat-tab>
        </mat-tab-group>
      </div>
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
`;var O=`.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}:host ::ng-deep .mat-mdc-tab-body-wrapper,:host ::ng-deep .mat-mdc-tab-body,:host ::ng-deep .mat-mdc-tab-body-content{overflow-y:clip!important;overflow-x:visible!important;max-width:100%}
`;var T=function(s,e,t,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,a);else for(var m=s.length-1;m>=0;m--)(i=s[m])&&(o=(l<3?i(o):l>3?i(e,t,o):i(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o},n,p=(n=class{constructor(e,t,a,l,o){r(this,"_basketService");r(this,"titleService");r(this,"complexPortalService");r(this,"route");r(this,"router");r(this,"_complexBasket");r(this,"complexSearchBasket",null);r(this,"allInteractorsInComplexSearchBasket",[]);r(this,"displayType");r(this,"SearchDisplay",c);this._basketService=e,this.titleService=t,this.complexPortalService=a,this.route=l,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(h(1)).subscribe(e=>{e===c.navigator?this.displayType=c.navigator:this.displayType=c.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}ngAfterViewInit(){v.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.removeComplexFromSearchResult(e)}get complexBasket(){return this._complexBasket}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{this.complexSearchBasket=t,this.setAllInteractorsFromComplexSearch()})}setAllInteractorsFromComplexSearch(){if(this.allInteractorsInComplexSearchBasket=[],this.complexSearchBasket.totalNumberOfResults!==0)for(let e=0;e<this.complexSearchBasket.elements.length;e++)for(let t of this.complexSearchBasket.elements[e].interactors)this.allInteractorsInComplexSearchBasket.some(a=>a.identifier===t.identifier)||this.allInteractorsInComplexSearchBasket.push(t)}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}removeComplexFromSearchResult(e){this.complexSearchBasket={size:this.complexSearchBasket.size-1,totalNumberOfResults:this.complexSearchBasket.totalNumberOfResults-1,elements:this.complexSearchBasket.elements.filter(t=>t.complexAC!==e),facets:null},this.setAllInteractorsFromComplexSearch()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteFromBasket(e.id))}},r(n,"ctorParameters",()=>[{type:y},{type:f},{type:B},{type:b},{type:k}]),n);p=T([d({selector:"cp-basket",template:R,styles:[O]})],p);var w=function(s,e,t,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,a);else for(var m=s.length-1;m>=0;m--)(i=s[m])&&(o=(l<3?i(o):l>3?i(e,t,o):i(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o},N=class{};N=w([u({imports:[g.forChild([{path:"",component:p}]),x,I,S,_,C],declarations:[p]})],N);export{N as BasketModule};
