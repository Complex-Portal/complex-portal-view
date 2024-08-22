import{a as te}from"./chunk-JI4X6Z2J.js";import{a as ie}from"./chunk-5IAXMLOP.js";import{o as Y}from"./chunk-KI7AEWC4.js";import{C as ee,g as Z}from"./chunk-VCUDXDI7.js";import{a as Q}from"./chunk-VADJW74U.js";import{Ca as d,Ea as l,Fa as m,Hb as J,Ia as $,fb as u,h as o,hb as X,ia as h,ja as p,s as W,sb as K,v as U,za as x}from"./chunk-QLATQDYN.js";var re=`<div class="ComplexNavigator">
  <div class="Buttons" [ngClass]="complexSearch().totalNumberOfResults <=6 ? 'smallCNButtons' : ''">
    <cp-complex-navigator-buttons
      [(interactorsSorting)]="interactorsSorting"
      [(organismIconDisplay)]="organismIconDisplay"
      [(interactorTypeDisplay)]="interactorTypeDisplay"
      [(idDisplay)]="idDisplay">
    </cp-complex-navigator-buttons>
  </div>
  <cp-table-structure [complexSearch]="complexSearch()"
                      [interactors]="interactors()"
                      [interactorsSorting]="interactorsSorting"
                      [organismIconDisplay]="organismIconDisplay"
                      [interactorTypeDisplay]="interactorTypeDisplay"
                      [idDisplay]="idDisplay"
                      [canAddComplexesToBasket]="canAddComplexesToBasket()"
                      [canRemoveComplexesFromBasket]="canRemoveComplexesFromBasket()"
                      (onComplexRemovedFromBasket)="onComplexRemovedFromBasket.emit($event)">
  </cp-table-structure>
</div>

`;var ne="";var Ee=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},A,y=(A=class{constructor(){o(this,"complexSearch",p());o(this,"interactors",p());o(this,"canAddComplexesToBasket",p());o(this,"canRemoveComplexesFromBasket",p());o(this,"onComplexRemovedFromBasket",h());o(this,"interactorsSorting","Occurrence");o(this,"organismIconDisplay",!0);o(this,"interactorTypeDisplay",!0);o(this,"idDisplay",!0)}},o(A,"propDecorators",{complexSearch:[{type:l,args:[{isSignal:!0,alias:"complexSearch",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],canAddComplexesToBasket:[{type:l,args:[{isSignal:!0,alias:"canAddComplexesToBasket",required:!1,transform:void 0}]}],canRemoveComplexesFromBasket:[{type:l,args:[{isSignal:!0,alias:"canRemoveComplexesFromBasket",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),A);y=Ee([d({selector:"cp-complex-navigator",template:re,styles:[ne]})],y);var oe=`<div class="complexNavigatorTable">
  <div class="header"
       (scroll)="body.scrollLeft = header.scrollLeft" #header>

    <cp-table-header [complexes]="sortedComplexes()"
                     [interactorsSorting]="interactorsSorting()"
                     (onComplexRemovedFromBasket)="onComplexRemovedFromBasket.emit($event)">
    </cp-table-header>
  </div>
  <div class="interactors"
       (scroll)="header.scrollLeft = body.scrollLeft" #body>
    <cp-table-interactor-column
      [complexes]="sortedComplexes()"
      [interactors]="interactors()"
      [interactorsSorting]="interactorsSorting()"
      [organismIconDisplay]="organismIconDisplay()"
      [interactorTypeDisplay]="interactorTypeDisplay()"
      [idDisplay]="idDisplay()">
    </cp-table-interactor-column>
  </div>
  <div class="spaceHolder"></div>
</div>

`;var ae=`.complexNavigatorTable{border-collapse:separate;height:100%}.header{position:sticky;top:20px;z-index:2;overflow-x:auto;overflow-y:hidden;transform:rotateX(180deg)}.interactors{z-index:1;position:relative;overflow-y:hidden}
`;var Ae=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},z,I=(z=class{constructor(){o(this,"complexSearch",p());o(this,"interactors",p());o(this,"interactorsSorting",p());o(this,"organismIconDisplay",p());o(this,"interactorTypeDisplay",p());o(this,"idDisplay",p());o(this,"canAddComplexesToBasket",p());o(this,"canRemoveComplexesFromBasket",p());o(this,"onComplexRemovedFromBasket",h());o(this,"sortedComplexes",u(()=>this.classifyComplexesSimilaritiesV2(this.complexSearch().elements)))}getComponentAsComplex(e){return this.complexSearch().elements.find(t=>t.complexAC===e.identifier)}getAllComponents(e,t=[]){for(let i of e.interactors)if(i.interactorType==="stable complex"){let n=this.getComponentAsComplex(i);n?t.push(...this.getAllComponents(n)):t.push(i)}else t.push(i);return t}calculateSimilarity(e,t){if(e===t)return new Set(this.getAllComponents(e)).size;let[i,n]=[e,t].map(r=>new Set(this.getAllComponents(r).map(s=>s.identifier)));return[...i.values()].reduce((r,s)=>n.has(s)?r+1:r,0)}classifyComplexesSimilaritiesV2(e){let t=[];for(let n of e)for(let r of e)n.complexAC>=r.complexAC&&t.push([n,r,this.calculateSimilarity(n,r)]);t.sort((n,r)=>r[2]-n[2]);let i=this.uniqueComplexesListOrderedBySimilarity(t);return Array.from(i)}uniqueComplexesListOrderedBySimilarity(e){let t=new Set;for(let i=0;i<e.length;i++){let[n,r,s]=e[i];if(s!==0){t.add(n),t.add(r);for(let c=i+1;c<e.length;c++){let[Oe,Le,Re]=e[c];n===Oe&&Re!==0&&t.add(Le)}if(t.size===this.complexSearch().elements.length)return t}if(t.size===this.complexSearch().elements.length)return t}return t}},o(z,"propDecorators",{complexSearch:[{type:l,args:[{isSignal:!0,alias:"complexSearch",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],canAddComplexesToBasket:[{type:l,args:[{isSignal:!0,alias:"canAddComplexesToBasket",required:!1,transform:void 0}]}],canRemoveComplexesFromBasket:[{type:l,args:[{isSignal:!0,alias:"canRemoveComplexesFromBasket",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),z);I=Ae([d({selector:"cp-table-structure",template:oe,styles:[ae]})],I);var se=`<div class="Complex-navigator">
  <table class="table CN-table">
    <!-- When table is not overflowing -->
    <thead class="tableHead" *ngIf="complexes().length<=6">
    <tr>
      <th *ngIf="isInteractorSortingSet()" class="spaceHolderSorting"></th>
      <th class="interactorsHeader horizontal">
        Components
      </th>
      <th class="horizontal" *ngFor="let complex of complexes()" [class.predicted]="complex.predictedComplex">
        <div>
          <a [routerLink]="['/complex', complex.complexAC]"
             target="_blank">
            <div>
              <span [matTooltip]="complex.complexName+ ' - '+ complex.complexAC + ' - ' + complex.organismName" class="horizontal-label">
                <div class="line"></div>
                <i class="{{iconOrganism(complex.organismName)}}"></i>
                <i class="icon icon-generic small" data-icon="x"></i>
                {{ complex.complexName }}
              </span>
            </div>
          </a>
        </div>
        <div class="basketButton">
          <a class="button" (click)="toggleBasket(complex)">
            <i class="icon icon-common" [attr.data-icon]="isInBasket(complex.complexAC) ? '\uF1F8':'\uF217'"></i>
          </a>
        </div>
      </th>
    </tr>
    </thead>
    <!-- When table is overflowing -->
    <thead class="tableHeadOverflow" *ngIf="complexes().length > 6"
           [ngClass]="isInteractorSortingSet() ? 'tableHeadOverflowWithSorting' : 'tableHeadOverflow'">
    <tr [style.--cols]="complexes().length"
        [style.--intHeader]="isInteractorSortingSet() ? '156px':''"
        [style.--sizeSpaceHolder]="'185px'">
      <th class="spaceHolderHeaderOverflow"
          [style]="isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''">
      </th>
      <th class="rotate" *ngFor="let complex of complexes()"
          [class.predicted]="complex.predictedComplex"
          [style.--cols]="complexes().length">
        <a [routerLink]="['/complex', complex.complexAC]"
           [matTooltip]="complex.complexName+ ' - '+ complex.complexAC"
           target="_blank">
          <div>
            <span>
              <div class="tilted-label">
                <i class="icon icon-generic small" data-icon="x"></i>
                {{ complex.complexName }}
              </div>
            </span>
          </div>
        </a>
      </th>
      <div class="spaceHolder"></div>
    </tr>
    <!-- icons row -->
    <tr [style.--cols]="complexes().length"
        [style.--intHeader]="isInteractorSortingSet() ? '156px':''"
        [style.--sizeSpaceHolder]="'185px'">
      <th class="interactorsHeader overflow"
          [style]="isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''">
        Components
      </th>
      <ng-container *ngFor=" let complex of complexes();">
        <th class="iconOrganism" [class.predicted]="complex.predictedComplex">
          <div>
            <a class="button" (click)="toggleBasket(complex)">
              <i class="icon icon-common" [attr.data-icon]="isInBasket(complex.complexAC) ? '\uF1F8':'\uF217'"></i>
            </a>
          </div>
          <div>
            <i class="{{iconOrganism(complex.organismName)}}" [matTooltip]="complex.organismName"></i>
          </div>
        </th>
      </ng-container>
      <div class="spaceHolder"></div>
    </tr>
    </thead>
  </table>
</div>


`;var le=`.CN-table{transform:rotateX(180deg)}thead{border:0;background-color:#fff;border-right:0 solid white;overflow:scroll}.CN-table{clip-path:fill-box;overflow:scroll}.spaceHolderSorting{width:3ch;border-bottom:3px solid var(--primary)}.spaceHolderHeaderOverflow{min-width:130px;max-width:130px;position:sticky;left:0;z-index:4;color:var(--primary);background-color:var(--on-primary);padding-top:173px;text-align:right}.iconOrganism{position:sticky;text-align:center;background-color:var(--primary);color:var(--on-primary);border-left:1px solid white;font-size:medium;height:60px}.tilted-label{text-overflow:ellipsis;width:28ch;white-space:nowrap;overflow:hidden}.CN-table .tableHeadOverflow tr{--cols: 1;--intHeader: 130px;--parentWidth: 100%;--sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));display:grid;grid-template-columns:var(--intHeader) repeat(auto-fit,70px);width:calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));overflow:hidden}.CN-table .tableHeadOverflowWithSorting tr{--cols: 1;--intHeader: 130px;--parentWidth: 100%;--sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));display:grid;grid-template-columns:var(--intHeader) repeat(auto-fit,70px);width:calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder) - 3ch);overflow:hidden}.CN-table .tableHeadOverflow th.rotate{position:relative;width:350px;height:51px!important;color:var(--on-primary);font-size:14px;text-align:left;border:1px solid white;top:70px;left:-52px;display:flex;align-items:center;align-content:center;padding:0;transform:rotate(-45deg);border-collapse:collapse}.CN-table .tableHeadOverflow th.rotate a{width:100%;height:100%;align-content:center;background-color:var(--primary);padding:0 0 0 70px;border:none}.spaceHolder{width:183px;background-color:var(--primary);border-left:1px solid white}.interactorsHeader.overflow{min-width:130px;max-width:130px;width:130px;position:sticky;left:0;z-index:4;background-color:var(--on-primary);border-bottom:3px solid var(--primary);height:60px;line-height:70px;text-align:right;color:var(--primary)}.CN-table th.horizontal.interactorsHeader{padding:5px;min-width:130px;max-width:130px;font-size:medium;border-left:none;text-align:right;color:var(--primary);background-color:var(--on-primary);border-bottom:3px solid var(--primary)}.horizontal-label{text-align:center;text-overflow:ellipsis;width:90%;white-space:nowrap;overflow:hidden;margin:auto;display:block}.CN-table th.horizontal{color:#fff;background-color:var(--primary);border-left:1px solid white;min-width:80px;max-width:80px;height:35px;font-size:15px}a:visited,a{color:var(--on-primary)}.basket-icons{margin-left:5px}.button{padding:0;margin:0}.basketButton{text-align:center}
`;function ce(a){switch(a){case"small molecule":return"icon icon-conceptual icon-chemical";case"protein":case"peptide":return"icon icon-conceptual icon-structures-3d";case"stable complex":return"icon icon-conceptual icon-systems";case"molecule set":return"icon icon-generic icon-math";case"single stranded deoxyribonucleic acid":case"double stranded deoxyribonucleic acid":case"small nuclear rna":case"small nucleolar rna":case"ribosomal rna":case"messenger rna":case"transfer rna":case"signal recognition particle rna":case"ribonucleic acid":case"nucleic acid":case"long non-coding ribonucleic acid":return"icon icon-conceptual icon-dna"}}function _(a){switch(qe(a)){case"Homo sapiens":return"icon icon-species icon-human";case"Mus musculus":return"icon icon-species icon-mouse";case"Schizosaccharomyces pombe":case"Saccharomyces cerevisiae":return"icon icon-species icon-yeast";case"Escherichia coli":case"Pseudomonas aeruginosa":case"Klebsiella pneumoniae":case"Chlamydomonas reinhardtii":return"icon icon-species icon-ecoli";case"Rattus norvegicus":return"icon icon-species icon-rat";case"Caenorhabditis elegans":return"icon icon-species icon-c-elegans";case"Gallus gallus":return"icon icon-species icon-chicken";case"Drosophila melanogaster":return"icon icon-species icon-fly";case"Bos taurus":return"icon icon-species icon-cow";case"Oryctolagus cuniculus":return"icon icon-species icon-rabbit";case"Ovis aries":return"icon icon-species icon-sheep";case"Xenopus laevis":return"icon icon-species icon-frog";case"Canis lupus":case"Canis familiaris":return"icon icon-species icon-dog";case"Vibrio cholerae":return"assets/images/EMBL_Species_Vibrio_cholerae.svg";case"Crotalus durissus":return"assets/images/EMBL_Species_RattleSnake.svg";case"Sus scrofa":return"icon icon-species icon-pig";case"Torpedo marmorata":case"Tetronarce californica":return"icon icon-species icon-ray";case"Lymnaea stagnalis":return"icon icon-species icon-snail";case"Arabidopsis thaliana":return"icon icon-species icon-brassica";case"Danio rerio":return"icon icon-species icon-zebrafish";case"Severe acute":case"Human SARS":case"SARS-CoV-2":case"Middle East":case"Human betacoronavirus":return"icon icon-species icon-virus"}return""}function qe(a){return(a||"?").split(";")[0].split(" ").slice(0,2).join(" ")}var He=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},v,S=(v=class{constructor(e){o(this,"basketService");o(this,"complexes",p());o(this,"interactorsSorting",p());o(this,"onComplexRemovedFromBasket",h());this.basketService=e}isInteractorSortingSet(){return this.interactorsSorting()==="Type"||this.interactorsSorting()==="Organism"}iconOrganism(e){return _(e)}toggleBasket(e){this.isInBasket(e.complexAC)?this.removeComplex(e.complexAC):this.saveComplex(e)}saveComplex(e){this.basketService.saveInBasket(e)}removeComplex(e){this.basketService.deleteFromBasket(e),this.onComplexRemovedFromBasket.emit(e)}isInBasket(e){return this.basketService.isInBasket(e)}},o(v,"ctorParameters",()=>[{type:Y}]),o(v,"propDecorators",{complexes:[{type:l,args:[{isSignal:!0,alias:"complexes",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),v);S=He([d({selector:"cp-table-header",template:se,styles:[le]})],S);var pe=`<div class="Complex-navigator">
  <table class="interactors-table"
         [ngClass]="{'inheritedWidth': complexes().length > 6}"
         [style.--cols]="complexes().length">
    <ng-container *ngFor=" let interactor of enrichedInteractorsArray; let i=index">
      <tr *ngIf="!interactor.hidden">
        <ng-container *ngFor="let oneType of ranges" class="interactorsOrdering">
          <td *ngIf="oneType[2]===i" [attr.rowspan]="oneType[1]" class="interactorSeparation"
              [matTooltip]="oneType[0]">
            <div class="interactorNameContainer" [style.--rowspanSize]="oneType[1]">
              {{ oneType[0] }}
            </div>
          </td>
        </ng-container>
        <td class="interactorsColumn"
            [ngClass]="complexes().length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'"
            [style]="!!ranges && ranges.length!=0 ? 'left:3ch':''">
          <cp-table-interactor-name
            [interactorName]="interactor.interactor.name"
            [interactorType]="interactor.interactor.interactorType"
            [interactorId]="interactor.interactor.identifier"
            [interactorOrganism]="interactor.interactor.organismName"
            [identifierLink]="interactor.interactor.identifierLink"
            [organismIconDisplay]="organismIconDisplay()"
            [interactorTypeDisplay]="interactorTypeDisplay()"
            [idDisplay]="idDisplay()"
          ></cp-table-interactor-name>
          <!-- Icon for the expandable -->
          <div class="container" *ngIf="interactor.isSubComplex">
            <a (click)="toggleSubcomplexExpandable(i)"
               [matTooltip]="interactor.interactor.name + ' components'">
              Components
              <i class="icon icon-common" data-icon="&#xf078;"
                 style="font-size:small;
                "></i>
            </a>
          </div>
        </td>
        <!-- Interactors' stoichiometry -->
        <ng-container *ngFor="let complex of enrichedComplexes">
          <td class="intStoich" [ngClass]="{'intStoichFixedWidth': complexes().length > 6}"
              [class.predicted]="complex.complex.predictedComplex">
            <cp-table-main-interactor
              [complex]="complex"
              [i]="i"
              [enrichedInteractors]="enrichedInteractorsArray"
            ></cp-table-main-interactor>
          </td>
        </ng-container>
        <div *ngIf="complexes().length>6"
             [ngClass]="isInteractorSortingSet() ? 'spaceHolderWithSorting' : 'spaceHolder'"></div>
      </tr>
      <!-- Expandable menu for subcomplexes -->
      <ng-container *ngIf="interactor.expanded">
        <ng-container *ngIf="!!interactor.subComponents">
          <tr *ngFor="let el of interactor.subComponents; let j=index"
              class="expandedRows"
              [ngClass]="getExpandedRowClass(j, interactor.subComponents.length)">
            <td [attr.rowspan]="interactor.subComponents.length" class="interactorSeparation"
                [matTooltip]="interactor.interactor.name + ' components'"
                *ngIf="j === 0 && (interactorsSorting() === 'Type' || interactorsSorting() === 'Organism')">
              <div class="interactorSeparationName"
                   [style.--rowspanSize]="interactor.subComponents.length"> {{ interactor.interactor.name }} components
              </div>
            </td>
            <td class="subComponentColumn"
                [ngClass]="complexes().length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'"
                [style]="ranges.length!=0 ? 'left:3ch':''">
              <div>
                <cp-table-interactor-name
                  [interactorName]="el.name"
                  [interactorType]="el.interactorType"
                  [interactorId]="el.identifier"
                  [interactorOrganism]="interactor.interactor.organismName"
                  [identifierLink]="el.identifierLink"
                  [organismIconDisplay]="organismIconDisplay()"
                  [interactorTypeDisplay]="interactorTypeDisplay()"
                  [idDisplay]="idDisplay()"
                ></cp-table-interactor-name>
              </div>
            </td>
            <ng-container *ngFor="let complex of enrichedComplexes">
              <td class="intStoich" [ngClass]="{'intStoichFixedWidth': complexes().length > 6}">
                <cp-table-subcomponent-interactor
                  [complex]="complex"
                  [i]="i"
                  [j]="j"
                  [enrichedInteractors]="enrichedInteractorsArray"
                ></cp-table-subcomponent-interactor>
              </td>
            </ng-container>
            <div class="spaceHolder" *ngIf="complexes().length > 6"></div>
          </tr>
        </ng-container>
      </ng-container>
    </ng-container>
  </table>
</div>
`;var de=`table{--cols: 1;height:1px;overflow:scroll}.inheritedWidth{width:calc(130px + var(--cols) * 70px + 183px)}.interactorsColumn{position:sticky;left:0;z-index:5;height:45px;min-width:130px;max-width:130px;padding:5px;text-align:end;color:#0e6f76;font-weight:700;background:inherit}.interactorsColumnFixedWidth{width:130px}.interactorsColumn a{font-weight:400}.intStoich{height:100%;max-width:70px;min-width:70px;font-size:medium;text-align:end;z-index:1}.intStoichFixedWidth{width:70px}i:not(.small){font-size:large}tr:nth-child(2n){background-color:#f7f7f7}tr:nth-child(odd){background-color:#fff}a,a:visited{color:#0e6f76}.spaceHolder{width:183px}.spaceHolderWithSorting{width:calc(183px - 3ch)}.subComponentColumn{left:0;z-index:30;height:45px;min-width:130px;max-width:130px;padding:5px;text-align:end;color:#0e6f76;font-weight:700;background:inherit;position:sticky}.expandedRows{color:#0e6f76;position:relative}.firstExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(180deg,#0e6f7696 0px,transparent 10px)}.lastExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(0deg,#0e6f7696 0px,transparent 10px)}.singleExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(180deg,#0e6f7696 0px,transparent 10px),linear-gradient(0deg,#0e6f7696 0px,transparent 10px)}.interactorSeparation{max-width:3ch;min-width:3ch;background-color:#0e6f76;border:1px solid white;overflow:hidden;width:1%;text-align:-webkit-center;position:sticky;z-index:31;left:0}.interactorNameContainer,.interactorSeparationName{--rowspanSize: 1;writing-mode:vertical-rl;transform:rotate(-180deg);font-size:small;color:#fff;line-height:.8;text-align:center;text-overflow:ellipsis;height:calc(var(--rowspanSize) * 48px);white-space:nowrap;overflow:hidden}.container{font-size:14px}.horizontalHeader{min-width:114px;max-width:114px}@supports (-webkit-hyphens:none){.interactorsColumn{height:45px!important}.intStoich{height:45px;overflow-y:visible}}
`;var T=class{constructor(e){o(this,"complex");o(this,"_startInteractorIndex");o(this,"_endInteractorIndex");o(this,"_startSubComponentIndex");o(this,"_endSubComponentIndex");o(this,"_startInteractorIncludedWhenExpanded");this.complex=e,this._startInteractorIndex=null,this._endInteractorIndex=null,this._startSubComponentIndex=null,this._endSubComponentIndex=null,this._startInteractorIncludedWhenExpanded=!0}calculateStartAndEndIndexes(e){for(let t=0;t<e.interactors.length;t++)if(!e.interactors[t].hidden){if(e.findInteractorInComplex(t,this.complex))this.updateInteractorIndexes(e,t);else if(e.interactors[t].isExpandedSubComplex())for(let i=0;i<e.interactors[t].subComponents.length;i++)e.findSubcomponentInComplex(t,i,this.complex)&&this.updateSubcomponentIndexes(t,i)}}doesLineCrossInteractorCell(e,t){return!!(this._startInteractorIndex!=null&&this._endInteractorIndex!=null&&(this._startInteractorIndex<t&&this._endInteractorIndex>t||this._startInteractorIndex<t&&this._endInteractorIndex===t&&e[t].isExpandedSubComplex()&&this._startSubComponentIndex!=null&&this._endSubComponentIndex!=null))}doesLineStartOnInteractorCell(e,t){return!!(this._startInteractorIndex!=null&&this._startInteractorIndex===t&&(!e[t].isSubComplex||this._startInteractorIncludedWhenExpanded))}doesLineEndOnInteractorCell(e,t){return this._endInteractorIndex!=null&&this._endInteractorIndex===t?!(e[t].isExpandedSubComplex()&&this._startSubComponentIndex!=null&&this._endSubComponentIndex!=null):!1}doesLineCrossSubcomponentCell(e,t){return this._startInteractorIndex!=null&&this._endInteractorIndex!=null&&(this._startInteractorIndex<e&&this._endInteractorIndex>e||this._startSubComponentIndex!=null&&this._endSubComponentIndex!=null&&(this._startSubComponentIndex<t&&this._endSubComponentIndex>t||this._startInteractorIndex<e&&this._endSubComponentIndex>t||this._startSubComponentIndex<t&&this._endInteractorIndex>e))}doesLineStartOnSubcomponentCell(e,t,i){return this._startInteractorIndex!=null&&this._startInteractorIndex===t&&this._startSubComponentIndex!=null&&this._startSubComponentIndex===i?!this.complex.interactors.some(n=>e[t].interactor.identifier===n.identifier):!1}doesLineEndOnSubcomponentCell(e,t){return this._endInteractorIndex!=null&&this._endInteractorIndex===e&&this._endSubComponentIndex!=null&&this._endSubComponentIndex===t}updateInteractorIndexes(e,t){this._startInteractorIndex=this.getMinValue(this._startInteractorIndex,t),this._startInteractorIndex===t&&(this._startInteractorIncludedWhenExpanded=!0),this._endInteractorIndex=this.getMaxValue(this._endInteractorIndex,t),e.interactors[t].isExpandedSubComplex()&&(this._startSubComponentIndex=-1,this._endSubComponentIndex=e.interactors[t].subComponents.length-1)}updateSubcomponentIndexes(e,t){this._startInteractorIndex=this.getMinValue(this._startInteractorIndex,e),this._startInteractorIndex===e&&(this._startInteractorIncludedWhenExpanded=!1),this._endInteractorIndex=this.getMaxValue(this._endInteractorIndex,e),this._startSubComponentIndex=this.getMinValue(this._startSubComponentIndex,t),this._endSubComponentIndex=this.getMaxValue(this._endSubComponentIndex,t)}getMinValue(e,t){return t===null?e:e===null?t:Math.min(e,t)}getMaxValue(e,t){return t===null?e:e===null?t:Math.max(e,t)}};function g(a,e,t){let i=me(a.interactors,e,t);return i?{identifier:i.identifier,stochiometryValue:i.stochiometryValue,stochiometryText:$e(i.stochiometryValue),stochiometryValueFormatted:Ue(i.stochiometryValue)}:null}function me(a,e,t){let i=!1,n=null;for(let r of a){let s=Pe(r,e,t);s&&(i=!0,s.stochiometryValue&&(n?n=[n[0]+s.stochiometryValue[0],n[1]+s.stochiometryValue[1]]:n=[s.stochiometryValue[0],s.stochiometryValue[1]]))}return i?{identifier:e,stochiometryValue:n}:null}function Pe(a,e,t){let i=We(a.stochiometry);if(a.identifier===e)return{identifier:e,stochiometryValue:i};if(a.interactorType==="stable complex"){let n=t.find(r=>r.interactor.identifier===a.identifier);if(n&&n.subComponents){let r=me(n.subComponents,e,t);if(r)return r.stochiometryValue?i?{identifier:e,stochiometryValue:[i[0]*r.stochiometryValue[0],i[1]*r.stochiometryValue[1]]}:{identifier:e,stochiometryValue:r.stochiometryValue}:{identifier:e,stochiometryValue:i}}}return null}function Ge(a){return a.match("minValue: ([0-9+]), maxValue: ([0-9+])")}function We(a){if(a){let e=Ge(a);if(e){let t=parseInt(e[1],10),i=parseInt(e[2],10);if(!isNaN(t)&&!isNaN(i))return[t,i]}}return null}function Ue(a){if(a){let e=a[0],t=a[1];return e===t?e.toString():`${e}-${t}`}return" "}function $e(a){return a?"Stoichiometry values: minValue: "+a[0]+", maxValue: "+a[1]:"No stoichiometry data available"}var w=class{constructor(e,t){o(this,"interactor");o(this,"hidden");o(this,"isSubComplex");o(this,"expanded");o(this,"subComponents");o(this,"timesAppearing");this.interactor=e,this.isSubComplex=t,this.hidden=!1,this.expanded=!1,this.timesAppearing=0,this.subComponents=null}isExpandedSubComplex(){return this.isSubComplex&&!!this.subComponents&&this.expanded}},D=class{constructor(e){o(this,"species");o(this,"_interactors");o(this,"_timesAppearingByType");o(this,"_timesAppearingByOrganism");o(this,"_ranges");this.species=e,this._interactors=[]}get interactors(){return this._interactors}get ranges(){return this._ranges}toggleSubcomplexExpandable(e){this._interactors[e].expanded=!this._interactors[e].expanded,this._interactors[e].expanded?(this.collapseAllButOne(e),this.hideInteractorsDisplayedAsSubComponents(e)):this.displayAllInteractors()}findInteractorInComplex(e,t){return g(t,this._interactors[e].interactor.identifier,this._interactors)}findSubcomponentInComplex(e,t,i){return g(i,this._interactors[e].subComponents[t].identifier,this._interactors)}calculateTimesAppearing(e){this._timesAppearingByType=new Map,this._timesAppearingByOrganism=new Map;for(let t of this._interactors){t.timesAppearing=0;for(let i of e)g(i,t.interactor.identifier,this._interactors)&&(t.timesAppearing+=1,this._timesAppearingByType.set(t.interactor.interactorType,(this._timesAppearingByType.get(t.interactor.interactorType)||0)+1),this._timesAppearingByOrganism.set(t.interactor.organismName,(this._timesAppearingByOrganism.get(t.interactor.organismName)||0)+1))}}classifyInteractors(e){return e&&this._interactors&&this._interactors.length>0&&(e==="Type"?this.classifyInteractorsByType():e==="Organism"?this.classifyInteractorsByOrganism():this.classifyInteractorsByOccurrence()),this._interactors}collapseAllButOne(e){for(let t=0;t<this._interactors.length;t++)e!==t&&(this._interactors[t].expanded=!1)}hideInteractorsDisplayedAsSubComponents(e){if(this._interactors[e].subComponents){let t=this._interactors[e].subComponents.map(i=>i.identifier);for(let i=0;i<this._interactors.length;i++)e!==i&&(this._interactors[i].hidden=!!t.includes(this._interactors[i].interactor.identifier))}}displayAllInteractors(){for(let e=0;e<this._interactors.length;e++)this._interactors[e].hidden=!1}classifyInteractorsByOrganism(){this._interactors.sort((e,t)=>{if(t.interactor.organismName===e.interactor.organismName)return t.timesAppearing-e.timesAppearing;{let i=this._timesAppearingByOrganism.get(t.interactor.organismName),n=this._timesAppearingByOrganism.get(e.interactor.organismName);return i===n?t.interactor.organismName.localeCompare(e.interactor.organismName):i-n}}),this.rangeOfInteractorOrganism()}classifyInteractorsByType(){this._interactors.sort((e,t)=>{if(t.interactor.interactorType===e.interactor.interactorType)return t.timesAppearing-e.timesAppearing;{let i=this._timesAppearingByType.get(t.interactor.interactorType),n=this._timesAppearingByType.get(e.interactor.interactorType);return i===n?t.interactor.interactorType.localeCompare(e.interactor.interactorType):i-n}}),this.rangeOfInteractorType()}classifyInteractorsByOccurrence(){this._interactors.sort((e,t)=>t.timesAppearing-e.timesAppearing),this._ranges=[]}rangeOfInteractorType(){let e=[],t=0,i=null;for(let n=0;n<this._interactors.length;n++){let r=[];this._interactors[n].hidden||(t+=1,i===null&&(i=n)),(!this._interactors[n+1]||this._interactors[n].isExpandedSubComplex()||this._interactors[n].interactor.interactorType!==this._interactors[n+1].interactor.interactorType)&&(i!==null&&(r.push(this._interactors[n].interactor.interactorType,t,i),e.push(r),i=null),t=0)}this._ranges=e}rangeOfInteractorOrganism(){let e=[],t=0,i=null;for(let n=0;n<this._interactors.length;n++){let r=[];this._interactors[n].hidden||(t+=1,i===null&&(i=n)),(!this._interactors[n+1]||this._interactors[n].isExpandedSubComplex()||this._interactors[n].interactor.organismName!==this._interactors[n+1].interactor.organismName)&&(i!==null&&(r.push(this.species.transform(this._interactors[n].interactor.organismName),t,i),e.push(r),i=null),t=0)}this._ranges=e}};var Xe=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},O,L=(O=class{constructor(e,t){o(this,"complexPortalService");o(this,"species");o(this,"complexes",p([]));o(this,"interactorsSorting",p());o(this,"interactors",p([]));o(this,"organismIconDisplay",p(!0));o(this,"interactorTypeDisplay",p(!0));o(this,"idDisplay",p(!0));o(this,"enrichedInteractors",u(()=>this.enrichInteractors(this.complexes(),this.interactors())));o(this,"enrichedInteractorsArray");o(this,"enrichedComplexes");o(this,"ranges");this.complexPortalService=e,this.species=t,X(()=>this.sortInteractors(this.enrichedInteractors(),this.complexes(),this.interactorsSorting()))}sortInteractors(e,t,i){e&&t&&(this.enrichedInteractorsArray=e.classifyInteractors(i),this.ranges=e.ranges,this.enrichedComplexes=this.createEnrichedComplexes(t,e))}enrichInteractors(e,t){let i=new D(this.species);for(let n of t){let r=n.interactorType==="stable complex",s=new w(n,r);r&&this.loadSubInteractors(s,e).subscribe(c=>s.subComponents=c),i.interactors.push(s)}return i.calculateTimesAppearing(e),i}toggleSubcomplexExpandable(e){this.enrichedInteractors().toggleSubcomplexExpandable(e),this.sortInteractors(this.enrichedInteractors(),this.complexes(),this.interactorsSorting())}loadSubInteractors(e,t){let i=t.find(n=>n.complexAC===e.interactor.identifier);return i?W(i.interactors):this.complexPortalService.getSimplifiedComplex(e.interactor.identifier).pipe(U(n=>n?.interactors))}createEnrichedComplexes(e,t){let i=[];for(let n of e)i.push(new T(n));return this.calculateAllStartAndEndIndexes(t,i),i}calculateAllStartAndEndIndexes(e,t){for(let i of t)i.calculateStartAndEndIndexes(e)}isInteractorSortingSet(){return this.interactorsSorting()==="Type"||this.interactorsSorting()==="Organism"}getExpandedRowClass(e,t){return e===0?t===1?"singleExpandedRow":"firstExpandedRow":e===t-1?"lastExpandedRow":null}},o(O,"ctorParameters",()=>[{type:Z},{type:Q}]),o(O,"propDecorators",{complexes:[{type:l,args:[{isSignal:!0,alias:"complexes",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}]}),O);L=Xe([d({selector:"cp-table-interactor-column",template:pe,styles:[de]})],L);var ue=`<div class="container">
  <div class="nameAndIcons" [ngClass]="{inlineDisplay: interactorType()==='stable complex'}">
    <i *ngIf="organismIconDisplay()"
       class="{{interactorOrganismIcon}}"
       [matTooltip]="interactorOrganism()"></i>

    <i *ngIf="interactorTypeDisplay()"
       class="{{interactorTypeIcon}}"
       [matTooltip]="interactorType()"></i>

    <div class="name" *ngIf="idDisplay()" [matTooltip]="interactorId()"> {{ interactorName() }}
    </div>
    <a *ngIf="idDisplay()"
       [routerLink]="['/complex/search']"
       [queryParams]="{query: interactorId(), page: 1}"
       target="_blank">
      <i class="icon icon-functional small" data-icon="1"
         [matTooltip]="'More complexes containing ' + interactorName() "></i>
    </a>

    <div class="nameCompact" *ngIf="!idDisplay()">
      <div class="name" *ngIf="!idDisplay()" [matTooltip]="'More information about ' + interactorName()">
        <a *ngIf="!!identifierLink()" href="{{identifierLink()}}" target="_blank" class="externalLinkContainer">
          {{ interactorName() }}
        </a>
      </div>
      <a [routerLink]="['/complex/search']"
         [queryParams]="{query: interactorId(), page: 1}"
         target="_blank">
        <i class="icon icon-functional small" data-icon="1"
           [matTooltip]="'More complexes containing ' + interactorName() "></i>
      </a>
    </div>
  </div>
  <cp-table-interactor-external-link
    *ngIf="idDisplay()"
    [interactorId]="interactorId()"
    [identifierLink]="identifierLink()"
    [interactorType]="interactorType()"
    [isMainInteractor]="isMainInteractor()"
    [idDisplay]="idDisplay()"
    (externalLinkVisible)="externalLinkVisibleHandler($event)">
  </cp-table-interactor-external-link>
</div>
`;var fe=`a{font-weight:700}a,a:visited{color:#0e6f76}i:not(.small){font-size:medium}.nameAndIcons{font-size:14px;display:flex;width:inherit;justify-content:flex-end}.inlineDisplay{display:flex;justify-content:flex-end}.name{width:inherit;text-overflow:ellipsis;overflow:hidden;text-wrap:nowrap;text-align:end;padding-right:5px}.nameCompact{display:inline-flex;width:-webkit-fill-available}
`;var Qe=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},j,R=(j=class{constructor(){o(this,"interactorName",p());o(this,"interactorType",p());o(this,"interactorId",p());o(this,"interactorOrganism",p());o(this,"identifierLink",p());o(this,"organismIconDisplay",p());o(this,"interactorTypeDisplay",p());o(this,"idDisplay",p());o(this,"isMainInteractor",p());o(this,"interactorTypeIcon");o(this,"interactorOrganismIcon");o(this,"externalLinkVisible")}ngOnInit(){this.interactorTypeIcon=ce(this.interactorType()),this.interactorOrganismIcon=_(this.interactorOrganism())}externalLinkVisibleHandler(e){this.externalLinkVisible=e}},o(j,"propDecorators",{interactorName:[{type:l,args:[{isSignal:!0,alias:"interactorName",required:!1,transform:void 0}]}],interactorType:[{type:l,args:[{isSignal:!0,alias:"interactorType",required:!1,transform:void 0}]}],interactorId:[{type:l,args:[{isSignal:!0,alias:"interactorId",required:!1,transform:void 0}]}],interactorOrganism:[{type:l,args:[{isSignal:!0,alias:"interactorOrganism",required:!1,transform:void 0}]}],identifierLink:[{type:l,args:[{isSignal:!0,alias:"identifierLink",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],isMainInteractor:[{type:l,args:[{isSignal:!0,alias:"isMainInteractor",required:!1,transform:void 0}]}]}),j);R=Qe([d({selector:"cp-table-interactor-name",template:ue,styles:[fe]})],R);var he=`<div class="externalLinkContainer" [matTooltip]="'More information about ' + interactorId()">
  <a *ngIf="externalLinkVisible" href="{{identifierLink()}}" target="_blank" class="externalLinkContainer">
    {{ interactorId() }}
    <i class="icon icon-generic small" data-icon="x" title="More information about {{ interactorId() }}"></i>
  </a>
</div>
`;var ge=`a{font-weight:400}a,a:visited{color:#0e6f76}i:not(.small){font-size:large}.externalLinkContainer{justify-content:end;grid-gap:5px;font-size:14px;line-break:anywhere;word-break:break-word}
`;var et=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},q,k=(q=class{constructor(){o(this,"interactorId",p());o(this,"identifierLink",p());o(this,"interactorType",p());o(this,"isMainInteractor",p());o(this,"idDisplay",p());o(this,"externalLinkVisible",h())}ngOnInit(){this.showExternalLink()}showExternalLink(){return this.isMainInteractor()&&this.interactorType()==="stable complex"?(this.externalLinkVisible.emit(!1),!1):(this.externalLinkVisible.emit(!!this.identifierLink()),!!this.identifierLink())}},o(q,"propDecorators",{interactorId:[{type:l,args:[{isSignal:!0,alias:"interactorId",required:!1,transform:void 0}]}],identifierLink:[{type:l,args:[{isSignal:!0,alias:"identifierLink",required:!1,transform:void 0}]}],interactorType:[{type:l,args:[{isSignal:!0,alias:"interactorType",required:!1,transform:void 0}]}],isMainInteractor:[{type:l,args:[{isSignal:!0,alias:"isMainInteractor",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],externalLinkVisible:[{type:m,args:["externalLinkVisible"]}]}),q);k=et([d({selector:"cp-table-interactor-external-link",template:he,styles:[ge]})],k);var xe=`<ng-container>
  <div class="stoichNum" [matTooltip]="stoichiometryText()">
    {{ stoichiometryValue() }}
  </div>
</ng-container>
`;var ye=`.stoichNum{width:4ch;height:4ch;border-radius:4ch;background-color:var(--primary);text-align:center;padding-top:.5ch;color:var(--on-primary);font-size:small;margin-left:auto;margin-right:auto;position:relative;z-index:1}
`;var rt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},H,N=(H=class{constructor(){o(this,"stoichiometryText",p());o(this,"stoichiometryValue",p())}},o(H,"propDecorators",{stoichiometryText:[{type:l,args:[{isSignal:!0,alias:"stoichiometryText",required:!1,transform:void 0}]}],stoichiometryValue:[{type:l,args:[{isSignal:!0,alias:"stoichiometryValue",required:!1,transform:void 0}]}]}),H);N=rt([d({selector:"cp-table-interactor-stoichiometry",template:xe,styles:[ye]})],N);var be=`<div [ngClass]="topLineClass()"></div>
<cp-table-interactor-stoichiometry
  *ngIf="!!interactorComponent()"
  [stoichiometryText]="interactorComponent().stochiometryText"
  [stoichiometryValue]="interactorComponent().stochiometryValueFormatted"
></cp-table-interactor-stoichiometry>
<div [ngClass]="bottomLineClass()"></div>
`;var Ce=`:host{display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;align-content:center;flex-wrap:nowrap}:host *{flex:1}.verticalLine,.transparentVerticalLine{margin-left:auto;margin-right:auto;min-width:1%;max-width:1%;min-height:50%;z-index:0;position:relative;height:50%}.verticalLine{border-right:3px solid var(--primary)}.transparentVerticalLine{border-right:0}
`;var at=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},M,E=(M=class{constructor(){o(this,"complex",p());o(this,"i",p());o(this,"enrichedInteractors",p());o(this,"interactorComponent",u(()=>g(this.complex().complex,this.interactor.interactor.identifier,this.enrichedInteractors())));o(this,"topLineClass",u(()=>this.displayTopLineClass(this.complex(),this.i())));o(this,"bottomLineClass",u(()=>this.displayBottomLineClass(this.complex(),this.i())))}get interactor(){return this.enrichedInteractors()[this.i()]}displayTopLineClass(e,t){return e.doesLineCrossInteractorCell(this.enrichedInteractors(),t)||e.doesLineEndOnInteractorCell(this.enrichedInteractors(),t)&&!e.doesLineStartOnInteractorCell(this.enrichedInteractors(),t)?"verticalLine":"transparentVerticalLine"}displayBottomLineClass(e,t){return e.doesLineCrossInteractorCell(this.enrichedInteractors(),t)||e.doesLineStartOnInteractorCell(this.enrichedInteractors(),t)&&!e.doesLineEndOnInteractorCell(this.enrichedInteractors(),t)?"verticalLine":"transparentVerticalLine"}},o(M,"propDecorators",{complex:[{type:l,args:[{isSignal:!0,alias:"complex",required:!1,transform:void 0}]}],i:[{type:l,args:[{isSignal:!0,alias:"i",required:!1,transform:void 0}]}],enrichedInteractors:[{type:l,args:[{isSignal:!0,alias:"enrichedInteractors",required:!1,transform:void 0}]}]}),M);E=at([d({selector:"cp-table-main-interactor",template:be,styles:[Ce]})],E);var Ie=`<div [ngClass]="displayTopLineClass()"></div>
<cp-table-interactor-stoichiometry
  *ngIf="!!interactorComponent()"
  [stoichiometryText]="interactorComponent().stochiometryText"
  [stoichiometryValue]="interactorComponent().stochiometryValueFormatted"
></cp-table-interactor-stoichiometry>
<div [ngClass]="displayBottomLineClass()"></div>
`;var _e=`.verticalLine,.transparentVerticalLine{margin-left:auto;margin-right:auto;min-width:1%;max-width:1%;max-height:50%;min-height:50%;z-index:0}.verticalLine{border-right:3px solid #0e6f76}.transparentVerticalLine{border-right:0}
`;var ct=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},F,B=(F=class{constructor(){o(this,"complex",p());o(this,"i",p());o(this,"j",p());o(this,"enrichedInteractors",p());o(this,"interactorComponent",u(()=>g(this.complex().complex,this.el.identifier,this.enrichedInteractors())));o(this,"displayTopLineClass",u(()=>this.displayTopLineClassExpanded(this.complex(),this.i(),this.j())));o(this,"displayBottomLineClass",u(()=>this.displayBottomLineClassExpanded(this.complex(),this.i(),this.j())))}get interactor(){return this.enrichedInteractors()[this.i()]}get el(){return this.enrichedInteractors()[this.i()].subComponents[this.j()]}displayTopLineClassExpanded(e,t,i){return e.doesLineCrossSubcomponentCell(t,i)||e.doesLineEndOnSubcomponentCell(t,i)&&!e.doesLineStartOnSubcomponentCell(this.enrichedInteractors(),t,i)?"verticalLine":"transparentVerticalLine"}displayBottomLineClassExpanded(e,t,i){return e.doesLineCrossSubcomponentCell(t,i)||e.doesLineStartOnSubcomponentCell(this.enrichedInteractors(),t,i)&&!e.doesLineEndOnSubcomponentCell(t,i)?"verticalLine":"transparentVerticalLine"}},o(F,"propDecorators",{complex:[{type:l,args:[{isSignal:!0,alias:"complex",required:!1,transform:void 0}]}],i:[{type:l,args:[{isSignal:!0,alias:"i",required:!1,transform:void 0}]}],j:[{type:l,args:[{isSignal:!0,alias:"j",required:!1,transform:void 0}]}],enrichedInteractors:[{type:l,args:[{isSignal:!0,alias:"enrichedInteractors",required:!1,transform:void 0}]}]}),F);B=ct([d({selector:"cp-table-subcomponent-interactor",template:Ie,styles:[_e]})],B);var ve=`<div class="filters">
  <div class="sortingInteractors">
    <input type="submit" name="classificationButton" value="Sort components" class="button">
    <div class="typeOfSorting">
      <input type="button" name="occurrenceClassification" value="Occurrence" class="button"
             (click)="interactorsSortingChanges('Occurrence')">
      <input type="button" name="typeClassification" value="Type" class="button"
             (click)="interactorsSortingChanges('Type')">
      <input type="button" name="organismClassification" value="Organism" class="button"
             (click)="interactorsSortingChanges('Organism')">
      <!--      <input type="submit" name="geneClassification" value="Orthology (Not available yet)" class="button"-->
      <!--             (click)="InteractorsSortingChanges('Orthology')">-->
    </div>
  </div>

  <div class="dropdown">
    <input type="submit" name="classificationButton" value="Display Options" class="button">
    <ul class="displaySize">
      <li>
        <label>
          <input type="radio" name="displayType" value="Compact" class="checkbox compact"
                 (click)="setDisplayType('compact')" [checked]="typeOfDisplay === 'compact'">
          Compact display
        </label>
      </li>
      <li class="detailedDisplay">
        <label>
          <input type="radio" name="displayType" value="Detailed" class="checkbox detailed"
                 (click)="setDisplayType('detailed')" [checked]="typeOfDisplay === 'detailed'">
          Detailed display
        </label>
        <ul class="detailedDisplayOptions">
          <li>
            <input type="checkbox" name="organism" value="organism" class="checkbox" [checked]="organismIconDisplay()"
                   (change)="toggleOrganism()">
            Organism
          </li>
          <li>
            <input type="checkbox" name="type" value="type" class="checkbox" [checked]="interactorTypeDisplay()"
                   (change)="toggleType()">
            Type
          </li>
          <li>
            <input type="checkbox" name="id" value="id" class="checkbox" [checked]="idDisplay()"
                   (change)="toggleId()">
            Interactor ID
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
`;var Se=`.typeOfSorting{display:none}.sortingInteractors:hover .typeOfSorting{display:flex;margin-top:-15px;flex-direction:row;position:absolute;z-index:5}.typeOfSorting .button{border-right:1px solid white;font-size:14px}.filters{display:flex;justify-content:center;grid-gap:10px;height:67px;z-index:5;text-align:center}.displaySize,.detailedDisplayOptions{display:none}label{color:var(--on-primary)}.dropdown:hover .displaySize{display:flex;list-style:none;width:300px;background-color:var(--primary);color:var(--on-primary);margin-top:-15px;flex-direction:row;position:absolute;height:40px;align-content:center;z-index:5}.dropdown:hover .displaySize li{width:200px;background-color:var(--primary);margin-left:-21px;text-align:left;padding-left:6px;z-index:5}li{text-align:center;align-items:center;font-size:14px;border-left:1px solid white;padding-top:10px;max-width:171px}.detailedDisplay:hover .detailedDisplayOptions{display:flex;list-style:none;align-content:baseline;flex-direction:column;position:absolute;z-index:5;margin-left:14px}.detailedDisplayOptions li{text-align:left;z-index:5}
`;var mt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},P,V=(P=class{constructor(){o(this,"interactorsSorting",x());o(this,"organismIconDisplay",x());o(this,"interactorTypeDisplay",x());o(this,"idDisplay",x());o(this,"typeOfDisplay")}ngOnInit(){this.updateDisplay()}interactorsSortingChanges(e){this.interactorsSorting.set(e),this.typeOfDisplay==="detailed"&&(e==="Type"?(this.interactorTypeDisplay.set(!1),this.organismIconDisplay.set(!0)):e==="Organism"&&(this.organismIconDisplay.set(!1),this.interactorTypeDisplay.set(!0)),this.updateDisplay())}toggleOrganism(){this.organismIconDisplay.update(e=>!e),this.updateDisplay()}toggleType(){this.interactorTypeDisplay.update(e=>!e),this.updateDisplay()}toggleId(){this.idDisplay.update(e=>!e),this.updateDisplay()}setDisplayType(e){e==="compact"?this.compactDisplay():e==="detailed"&&this.detailedDisplay()}compactDisplay(){this.organismIconDisplay.set(!1),this.interactorTypeDisplay.set(!1),this.idDisplay.set(!1),this.typeOfDisplay="compact"}detailedDisplay(){this.organismIconDisplay.set(!0),this.interactorTypeDisplay.set(!0),this.idDisplay.set(!0),this.typeOfDisplay="detailed"}updateDisplay(){this.organismIconDisplay()||this.interactorTypeDisplay()||this.idDisplay()?this.typeOfDisplay="detailed":this.typeOfDisplay="compact"}},o(P,"propDecorators",{interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1}]},{type:m,args:["interactorsSortingChange"]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1}]},{type:m,args:["organismIconDisplayChange"]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1}]},{type:m,args:["interactorTypeDisplayChange"]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1}]},{type:m,args:["idDisplayChange"]}]}),P);V=mt([d({selector:"cp-complex-navigator-buttons",template:ve,styles:[Se]})],V);var Te=`<div class="displayButton columns medium-12" [ngClass]="">
  <button class="button view-button"
          (click)="setListView()" [class.selected]="displayType() !== SearchDisplay.navigator">
    View list
  </button>
  <button class="button view-button cnButton"
          (click)="setComplexNavigatorView()" [class.selected]="displayType() === SearchDisplay.navigator">
    View Complex Navigator
    <span class="new-tag">NEW!</span>
  </button>
</div>
`;var we=`.displayButton{text-align:center}.view-button{width:225px;margin-right:5px;background-color:#fff;color:#555;border:1px dotted var(--primary)}.view-button:hover{color:var(--primary);background-color:#eaeaea;border:transparent;border-bottom:1px dotted var(--primary)}.selected,.selected:hover{background-color:var(--primary);color:#fff}.new-tag{color:red;font-weight:700;font-size:x-small}.selected .new-tag{color:#ff0}.cnButton{outline-offset:0;outline:rgba(0,124,130,.75) solid 1px;animation:animateOutline 4s ease infinite}.cnButton.selected{animation:none}@keyframes animateOutline{0%,50%,to{outline-width:6px;outline-offset:4px;outline-color:#007c8200}10%{outline-color:#007c82bf}}
`;var ht=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},b;(function(a){a.list="view_list",a.navigator="view_navigator"})(b||(b={}));var G,C=(G=class{constructor(){o(this,"displayType",x());o(this,"SearchDisplay",b)}setListView(){this.displayType.set(b.list)}setComplexNavigatorView(){this.displayType.set(b.navigator)}},o(G,"propDecorators",{displayType:[{type:l,args:[{isSignal:!0,alias:"displayType",required:!1}]},{type:m,args:["displayTypeChange"]}]}),G);C=ht([d({selector:"cp-complex-list-display-buttons",template:Te,styles:[we]})],C);var gt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},De=class{};De=gt([$({imports:[J,K,ee,te,ie],exports:[y,C],declarations:[y,I,S,L,R,k,N,E,B,V,C]})],De);export{b as a,ce as b,_ as c,De as d};
