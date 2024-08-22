import{a as m,d as _}from"./chunk-M5ZMCICK.js";import"./chunk-JI4X6Z2J.js";import"./chunk-5IAXMLOP.js";import{o as B}from"./chunk-KI7AEWC4.js";import{C as b,b as k,g as C}from"./chunk-VCUDXDI7.js";import"./chunk-VADJW74U.js";import{Ca as h,Cb as f,Fb as g,G as d,Gb as y,Hb as v,Ia as u,h as s,sb as x}from"./chunk-QLATQDYN.js";var S=`<div class="margin-top-large margin-bottom-large">
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
`;var I=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var F=function(l,e,t,a){var i=arguments.length,o=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,a);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(o=(i<3?r(o):i>3?r(e,t,o):r(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},n,p=(n=class{constructor(e,t,a,i,o){s(this,"_basketService");s(this,"titleService");s(this,"complexPortalService");s(this,"route");s(this,"router");s(this,"_complexBasket");s(this,"complexSearchBasket",null);s(this,"allInteractorsInComplexSearchBasket",[]);s(this,"displayType");this._basketService=e,this.titleService=t,this.complexPortalService=a,this.route=i,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.pipe(d(1)).subscribe(e=>{e===m.navigator?this.displayType=m.navigator:this.displayType=m.list})}onDisplayTypeChange(e){this.displayType!==e&&(this.displayType=e,this.router.navigate([],{fragment:this.displayType}))}isDisplayComplexNavigatorView(){return this.displayType===m.navigator}ngAfterViewInit(){k.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.complexNavigatorLoading()}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.complexNavigatorLoading()}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{if(this.complexSearchBasket=t,this.complexSearchBasket.totalNumberOfResults!==0)for(let a=0;a<t.elements.length;a++)for(let i of t.elements[a].interactors)this.allInteractorsInComplexSearchBasket.some(o=>o.identifier===i.identifier)||this.allInteractorsInComplexSearchBasket.push(i)})}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},s(n,"ctorParameters",()=>[{type:B},{type:f},{type:C},{type:g},{type:y}]),n);p=F([h({selector:"cp-basket",template:S,styles:[I]})],p);var P=function(l,e,t,a){var i=arguments.length,o=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,a);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(o=(i<3?r(o):i>3?r(e,t,o):r(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},N=class{};N=P([u({imports:[v.forChild([{path:"",component:p}]),x,_,b],declarations:[p]})],N);export{N as BasketModule};
