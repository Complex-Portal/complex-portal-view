import{a as b,b as p,e as _}from"./chunk-J4G7B5ZJ.js";import"./chunk-2KXQA66R.js";import"./chunk-VDNG76UK.js";import{o as v}from"./chunk-YMCJUFMT.js";import{D as C,b as f,h as B}from"./chunk-7Q6ZDWGY.js";import"./chunk-LEWSQDVT.js";import{Ab as k,Bb as g,Cb as y,Ea as d,h as i,nb as u,xb as x,ya as h}from"./chunk-TSD2EAZW.js";var S=`<div class="margin-top-large margin-bottom-large">
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
`;var I=`.ComplexNavigator,.hover{width:70%;margin-left:auto;margin-right:auto}.basket-icons{margin-left:5px;margin-bottom:5px}.deleteAllButton{width:225px}h2{line-height:1}
`;var D=function(l,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,s);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(o=(a<3?r(o):a>3?r(e,t,o):r(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},n,m=(n=class{constructor(e,t,s,a,o){i(this,"_basketService");i(this,"titleService");i(this,"complexPortalService");i(this,"route");i(this,"router");i(this,"_complexBasket");i(this,"complexSearchBasket",null);i(this,"allInteractorsInComplexSearchBasket",[]);i(this,"DisplayType");this._basketService=e,this.titleService=t,this.complexPortalService=s,this.route=a,this.router=o,this._complexBasket=this._basketService.complexBasket}ngOnInit(){this.titleService.setTitle("Complex Portal - Basket"),this.complexNavigatorLoading(),this.route.fragment.subscribe(e=>{e===p?this.DisplayType=p:this.DisplayType=b})}onDisplayTypeChange(e){this.DisplayType!==e&&(this.DisplayType=e,this.router.navigate([],{fragment:this.DisplayType}))}isDisplayComplexNavigatorView(){return this.DisplayType===p}ngAfterViewInit(){f.hide()}deleteFromBasket(e){this._basketService.deleteFromBasket(e),this.complexNavigatorLoading()}deleteComplexFromBasket(e){for(let t of this.getKeys(this.complexBasket))this.complexBasket[t].id===e&&this._basketService.deleteFromBasket(t);this.complexNavigatorLoading()}get complexBasket(){return this._complexBasket}set complexBasket(e){this._complexBasket=e}isComplexBasketEmpty(){return this.getKeys(this._complexBasket).length===0}getKeys(e){return Object.keys(e)}createQuery(e){return"complex_id:("+Object.values(e).map(t=>'"'+t.id+'"').join(",")+")"}requestComplexesForNavigator(){let e=Object.values(this._complexBasket).length;this.complexPortalService.findComplexNoFilters(this.createQuery(this._complexBasket),1,e).subscribe(t=>{if(this.complexSearchBasket=t,this.complexSearchBasket.totalNumberOfResults!==0)for(let s=0;s<t.elements.length;s++)for(let a of t.elements[s].interactors)this.allInteractorsInComplexSearchBasket.some(o=>o.identifier===a.identifier)||this.allInteractorsInComplexSearchBasket.push(a)})}complexNavigatorLoading(){this.complexSearchBasket=null,this.allInteractorsInComplexSearchBasket=[],this.requestComplexesForNavigator()}deleteAllComplexes(){Object.values(this._complexBasket).map(e=>this.deleteComplexFromBasket(e.id))}},i(n,"ctorParameters",()=>[{type:v},{type:x},{type:B},{type:k},{type:g}]),n);m=D([h({selector:"cp-basket",template:S,styles:[I]})],m);var T=function(l,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,t,s);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(o=(a<3?r(o):a>3?r(e,t,o):r(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},N=class{};N=T([d({imports:[y.forChild([{path:"",component:m}]),u,_,C],declarations:[m]})],N);export{N as BasketModule};
