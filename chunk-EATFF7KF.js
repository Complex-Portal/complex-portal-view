import{a as _,b as R,c as N,d as O}from"./chunk-W4FKOZGB.js";import{f as c}from"./chunk-INBWJGXP.js";import"./chunk-OHE57VOK.js";import"./chunk-F46A322Y.js";import{p as y}from"./chunk-IPMVLNO3.js";import{N as S,b as g,i as B}from"./chunk-VVZRIPMK.js";import"./chunk-GHQOMD2T.js";import{H as h,Ha as d,Ja as u,Jb as v,Mb as b,Nb as k,Ob as C,Pa as f,h as a,zb as x}from"./chunk-3FSLCVCX.js";var I=`<div class="margin-top-large margin-bottom-large">
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
                       class="columns medium-centered small-12 medium-10 large-10">
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
              @if (complexSearchBasket) {
                <div class="ComplexNavigator"
                     [ngClass]="complexSearchBasket.totalNumberOfResults <=6 ? 'smallCN' : ''">
                  <cp-complex-navigator
                    [complexSearch]="complexSearchBasket"
                    [components]="allComponentsInComplexSearchBasket"
                    (onComplexRemovedFromBasket)="deleteFromBasket($event)">
                  </cp-complex-navigator>
                </div>
              } @else {
                <cp-progress-spinner></cp-progress-spinner>
              }
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
`;var F=`.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}:host ::ng-deep .mat-mdc-tab-body-wrapper,:host ::ng-deep .mat-mdc-tab-body,:host ::ng-deep .mat-mdc-tab-body-content{overflow-y:clip!important;overflow-x:visible!important;max-width:100%}
`;var T=function(l,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,r);else for(var m=l.length-1;m>=0;m--)(s=l[m])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},n,p=(n=class{constructor(e,t,r,i,o){a(this,"_basketService");a(this,"titleService");a(this,"complexPortalService");a(this,"route");a(this,"router");a(this,"_complexBasket");a(this,"complexSearchBasket",null);a(this,"allComponentsInComplexSearchBasket",[]);a(this,"displayType");a(this,"navigator");a(this,"SearchDisplay",c);this._basketService=e,this.titleService=t,this.complexPortalService=r,this.route=i,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(h(1)).subscribe(e=>{e===c.navigator?this.displayType=c.navigator:this.displayType=c.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType})),e===c.navigator&&this.navigator?.adjustColWidth()}ngAfterViewInit(){g.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.removeComplexFromSearchResult(e)}get complexBasket(){return this._complexBasket}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{this.complexSearchBasket=t,this.setAllInteractorsFromComplexSearch()})}setAllInteractorsFromComplexSearch(){if(this.allComponentsInComplexSearchBasket=[],this.complexSearchBasket.totalNumberOfResults!==0)for(let e=0;e<this.complexSearchBasket.elements.length;e++)for(let t of this.complexSearchBasket.elements[e].interactors)this.allComponentsInComplexSearchBasket.some(r=>r.identifier===t.identifier)||this.allComponentsInComplexSearchBasket.push(t)}complexNavigatorLoading(){this.complexSearchBasket=null,this.allComponentsInComplexSearchBasket=[],this.requestComplexesForNavigator()}removeComplexFromSearchResult(e){this.complexSearchBasket={size:this.complexSearchBasket.size-1,totalNumberOfResults:this.complexSearchBasket.totalNumberOfResults-1,elements:this.complexSearchBasket.elements.filter(t=>t.complexAC!==e),facets:null},this.setAllInteractorsFromComplexSearch()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteFromBasket(e.id))}},a(n,"ctorParameters",()=>[{type:y},{type:v},{type:B},{type:b},{type:k}]),a(n,"propDecorators",{navigator:[{type:d,args:[_]}]}),n);p=T([u({selector:"cp-basket",template:I,styles:[F]})],p);var D=function(l,e,t,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,r);else for(var m=l.length-1;m>=0;m--)(s=l[m])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},P=class{};P=D([f({imports:[C.forChild([{path:"",component:p}]),x,O,S,N,R],declarations:[p]})],P);export{P as BasketModule};
