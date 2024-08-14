import{a as _,b as p,e as S}from"./chunk-V32W245I.js";import"./chunk-LR2WEGVW.js";import"./chunk-SOXLDXFF.js";import{o as B}from"./chunk-27DJEI65.js";import{C as b,b as k,g as C}from"./chunk-TQXB222I.js";import"./chunk-KSH2OIV6.js";import{Aa as h,Cb as g,Db as y,Eb as v,G as d,Ga as u,h as a,pb as x,zb as f}from"./chunk-YRBNI7KA.js";var I=`<div class="margin-top-large margin-bottom-large">
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
        [displayType]="displayType"
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
`;var N=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var P=function(l,e,t,s){var i=arguments.length,o=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,s);else for(var m=l.length-1;m>=0;m--)(r=l[m])&&(o=(i<3?r(o):i>3?r(e,t,o):r(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},n,c=(n=class{constructor(e,t,s,i,o){a(this,"_basketService");a(this,"titleService");a(this,"complexPortalService");a(this,"route");a(this,"router");a(this,"_complexBasket");a(this,"complexSearchBasket",null);a(this,"allInteractorsInComplexSearchBasket",[]);a(this,"displayType");this._basketService=e,this.titleService=t,this.complexPortalService=s,this.route=i,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(d(1)).subscribe(e=>{e===p?this.displayType=p:this.displayType=_})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}isDisplayComplexNavigatorView(){return this.displayType===p}ngAfterViewInit(){k.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.complexNavigatorLoading()}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.complexNavigatorLoading()}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{if(this.complexSearchBasket=t,this.complexSearchBasket.totalNumberOfResults!==0)for(let s=0;s<t.elements.length;s++)for(let i of t.elements[s].interactors)this.allInteractorsInComplexSearchBasket.some(o=>o.identifier===i.identifier)||this.allInteractorsInComplexSearchBasket.push(i)})}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},a(n,"ctorParameters",()=>[{type:B},{type:f},{type:C},{type:g},{type:y}]),n);c=P([h({selector:"cp-basket",template:I,styles:[N]})],c);var F=function(l,e,t,s){var i=arguments.length,o=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,s);else for(var m=l.length-1;m>=0;m--)(r=l[m])&&(o=(i<3?r(o):i>3?r(e,t,o):r(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},R=class{};R=F([u({imports:[v.forChild([{path:"",component:c}]),x,S,b],declarations:[c]})],R);export{R as BasketModule};
