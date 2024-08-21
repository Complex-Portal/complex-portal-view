import{a as Q}from"./chunk-WUW3CFQD.js";import{a as Y}from"./chunk-4T5D3YNV.js";import{o as X}from"./chunk-GQTIVNO3.js";import{C as J,g as K}from"./chunk-JHLYVLYJ.js";import{a as $}from"./chunk-6JFLSNBU.js";import{Ca as d,Ea as l,Fa as m,Gb as U,Ia as G,fb as u,h as o,ia as h,ja as c,rb as W,s as F,v as P,za as y}from"./chunk-6LTPJDRH.js";var Z=`<div class="ComplexNavigator">
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

`;var ee="";var Le=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},B,x=(B=class{constructor(){o(this,"complexSearch",c());o(this,"interactors",c());o(this,"canAddComplexesToBasket",c());o(this,"canRemoveComplexesFromBasket",c());o(this,"onComplexRemovedFromBasket",h());o(this,"interactorsSorting","Occurrence");o(this,"organismIconDisplay",!0);o(this,"interactorTypeDisplay",!0);o(this,"idDisplay",!0)}},o(B,"propDecorators",{complexSearch:[{type:l,args:[{isSignal:!0,alias:"complexSearch",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],canAddComplexesToBasket:[{type:l,args:[{isSignal:!0,alias:"canAddComplexesToBasket",required:!1,transform:void 0}]}],canRemoveComplexesFromBasket:[{type:l,args:[{isSignal:!0,alias:"canRemoveComplexesFromBasket",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),B);x=Le([d({selector:"cp-complex-navigator",template:Z,styles:[ee]})],x);var te=`<div class="complexNavigatorTable">
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

`;var ie=`.complexNavigatorTable{border-collapse:separate;height:100%}.header{position:sticky;top:20px;z-index:2;overflow-x:auto;overflow-y:hidden;transform:rotateX(180deg)}.interactors{z-index:1;position:relative;overflow-y:hidden}
`;var Ne=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},E,b=(E=class{constructor(){o(this,"complexSearch",c());o(this,"interactors",c());o(this,"interactorsSorting",c());o(this,"organismIconDisplay",c());o(this,"interactorTypeDisplay",c());o(this,"idDisplay",c());o(this,"canAddComplexesToBasket",c());o(this,"canRemoveComplexesFromBasket",c());o(this,"onComplexRemovedFromBasket",h());o(this,"sortedComplexes",u(()=>this.classifyComplexesSimilaritiesV2(this.complexSearch().elements)))}getComponentAsComplex(e){return this.complexSearch().elements.find(t=>t.complexAC===e.identifier)}getAllComponents(e,t=[]){for(let i of e.interactors)if(i.interactorType==="stable complex"){let n=this.getComponentAsComplex(i);n?t.push(...this.getAllComponents(n)):t.push(i)}else t.push(i);return t}calculateSimilarity(e,t){if(e===t)return new Set(this.getAllComponents(e)).size;let[i,n]=[e,t].map(r=>new Set(this.getAllComponents(r).map(s=>s.identifier)));return[...i.values()].reduce((r,s)=>n.has(s)?r+1:r,0)}classifyComplexesSimilaritiesV2(e){let t=[];for(let n of e)for(let r of e)n.complexAC>=r.complexAC&&t.push([n,r,this.calculateSimilarity(n,r)]);t.sort((n,r)=>r[2]-n[2]);let i=this.uniqueComplexesListOrderedBySimilarity(t);return Array.from(i)}uniqueComplexesListOrderedBySimilarity(e){let t=new Set;for(let i=0;i<e.length;i++){let[n,r,s]=e[i];if(s!==0){t.add(n),t.add(r);for(let p=i+1;p<e.length;p++){let[_e,Te,we]=e[p];n===_e&&we!==0&&t.add(Te)}if(t.size===this.complexSearch().elements.length)return t}if(t.size===this.complexSearch().elements.length)return t}return t}},o(E,"propDecorators",{complexSearch:[{type:l,args:[{isSignal:!0,alias:"complexSearch",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],canAddComplexesToBasket:[{type:l,args:[{isSignal:!0,alias:"canAddComplexesToBasket",required:!1,transform:void 0}]}],canRemoveComplexesFromBasket:[{type:l,args:[{isSignal:!0,alias:"canRemoveComplexesFromBasket",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),E);b=Ne([d({selector:"cp-table-structure",template:te,styles:[ie]})],b);var re=`<div class="Complex-navigator">
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


`;var ne=`.CN-table{transform:rotateX(180deg)}thead{border:0;background-color:#fff;border-right:0 solid white;overflow:scroll}.CN-table{clip-path:fill-box;overflow:scroll}.spaceHolderSorting{width:3ch;border-bottom:3px solid var(--primary)}.spaceHolderHeaderOverflow{min-width:130px;max-width:130px;position:sticky;left:0;z-index:4;color:var(--primary);background-color:var(--on-primary);padding-top:173px;text-align:right}.iconOrganism{position:sticky;text-align:center;background-color:var(--primary);color:var(--on-primary);border-left:1px solid white;font-size:medium;height:60px}.tilted-label{text-overflow:ellipsis;width:28ch;white-space:nowrap;overflow:hidden}.CN-table .tableHeadOverflow tr{--cols: 1;--intHeader: 130px;--parentWidth: 100%;--sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));display:grid;grid-template-columns:var(--intHeader) repeat(auto-fit,70px);width:calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));overflow:hidden}.CN-table .tableHeadOverflowWithSorting tr{--cols: 1;--intHeader: 130px;--parentWidth: 100%;--sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));display:grid;grid-template-columns:var(--intHeader) repeat(auto-fit,70px);width:calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder) - 3ch);overflow:hidden}.CN-table .tableHeadOverflow th.rotate{position:relative;width:350px;height:51px!important;color:var(--on-primary);font-size:14px;text-align:left;border:1px solid white;top:70px;left:-52px;display:flex;align-items:center;align-content:center;padding:0;transform:rotate(-45deg);border-collapse:collapse}.CN-table .tableHeadOverflow th.rotate a{width:100%;height:100%;align-content:center;background-color:var(--primary);padding:0 0 0 70px;border:none}.spaceHolder{width:183px;background-color:var(--primary);border-left:1px solid white}.interactorsHeader.overflow{min-width:130px;max-width:130px;width:130px;position:sticky;left:0;z-index:4;background-color:var(--on-primary);border-bottom:3px solid var(--primary);height:60px;line-height:70px;text-align:right;color:var(--primary)}.CN-table th.horizontal.interactorsHeader{padding:5px;min-width:130px;max-width:130px;font-size:medium;border-left:none;text-align:right;color:var(--primary);background-color:var(--on-primary);border-bottom:3px solid var(--primary)}.horizontal-label{text-align:center;text-overflow:ellipsis;width:90%;white-space:nowrap;overflow:hidden;margin:auto;display:block}.CN-table th.horizontal{color:#fff;background-color:var(--primary);border-left:1px solid white;min-width:80px;max-width:80px;height:35px;font-size:15px}a:visited,a{color:var(--on-primary)}.basket-icons{margin-left:5px}.button{padding:0;margin:0}.basketButton{text-align:center}
`;function oe(a){switch(a){case"small molecule":return"icon icon-conceptual icon-chemical";case"protein":case"peptide":return"icon icon-conceptual icon-structures-3d";case"stable complex":return"icon icon-conceptual icon-systems";case"molecule set":return"icon icon-generic icon-math";case"single stranded deoxyribonucleic acid":case"double stranded deoxyribonucleic acid":case"small nuclear rna":case"small nucleolar rna":case"ribosomal rna":case"messenger rna":case"transfer rna":case"signal recognition particle rna":case"ribonucleic acid":case"nucleic acid":case"long non-coding ribonucleic acid":return"icon icon-conceptual icon-dna"}}function v(a){switch(Ve(a)){case"Homo sapiens":return"icon icon-species icon-human";case"Mus musculus":return"icon icon-species icon-mouse";case"Schizosaccharomyces pombe":case"Saccharomyces cerevisiae":return"icon icon-species icon-yeast";case"Escherichia coli":case"Pseudomonas aeruginosa":case"Klebsiella pneumoniae":case"Chlamydomonas reinhardtii":return"icon icon-species icon-ecoli";case"Rattus norvegicus":return"icon icon-species icon-rat";case"Caenorhabditis elegans":return"icon icon-species icon-c-elegans";case"Gallus gallus":return"icon icon-species icon-chicken";case"Drosophila melanogaster":return"icon icon-species icon-fly";case"Bos taurus":return"icon icon-species icon-cow";case"Oryctolagus cuniculus":return"icon icon-species icon-rabbit";case"Ovis aries":return"icon icon-species icon-sheep";case"Xenopus laevis":return"icon icon-species icon-frog";case"Canis lupus":case"Canis familiaris":return"icon icon-species icon-dog";case"Vibrio cholerae":return"assets/images/EMBL_Species_Vibrio_cholerae.svg";case"Crotalus durissus":return"assets/images/EMBL_Species_RattleSnake.svg";case"Sus scrofa":return"icon icon-species icon-pig";case"Torpedo marmorata":case"Tetronarce californica":return"icon icon-species icon-ray";case"Lymnaea stagnalis":return"icon icon-species icon-snail";case"Arabidopsis thaliana":return"icon icon-species icon-brassica";case"Danio rerio":return"icon icon-species icon-zebrafish";case"Severe acute":case"Human SARS":case"SARS-CoV-2":case"Middle East":case"Human betacoronavirus":return"icon icon-species icon-virus"}return""}function Ve(a){return(a||"?").split(";")[0].split(" ").slice(0,2).join(" ")}var ze=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},S,_=(S=class{constructor(e){o(this,"basketService");o(this,"complexes",c());o(this,"interactorsSorting",c());o(this,"onComplexRemovedFromBasket",h());this.basketService=e}isInteractorSortingSet(){return this.interactorsSorting()==="Type"||this.interactorsSorting()==="Organism"}iconOrganism(e){return v(e)}toggleBasket(e){this.isInBasket(e.complexAC)?this.removeComplex(e.complexAC):this.saveComplex(e)}saveComplex(e){this.basketService.saveInBasket(e)}removeComplex(e){this.basketService.deleteFromBasket(e),this.onComplexRemovedFromBasket.emit(e)}isInBasket(e){return this.basketService.isInBasket(e)}},o(S,"ctorParameters",()=>[{type:X}]),o(S,"propDecorators",{complexes:[{type:l,args:[{isSignal:!0,alias:"complexes",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],onComplexRemovedFromBasket:[{type:m,args:["onComplexRemovedFromBasket"]}]}),S);_=ze([d({selector:"cp-table-header",template:re,styles:[ne]})],_);var ae=`<div class="Complex-navigator">
  <table class="interactors-table"
         [ngClass]="{'inheritedWidth': complexes().length > 6}"
         [style.--cols]="complexes().length">
    <ng-container *ngFor=" let interactor of enrichedInteractors; let i=index">
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
            [style]="ranges.length!=0 ? 'left:3ch':''">
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
              [enrichedInteractors]="enrichedInteractors"
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
                  [enrichedInteractors]="enrichedInteractors"
                ></cp-table-subcomponent-interactor>
              </td>
            </ng-container>
            <div class="spaceHolder" *ngIf="enrichedComplexes.length > 6"></div>
          </tr>
        </ng-container>
      </ng-container>
    </ng-container>
  </table>
</div>
`;var se=`table{--cols: 1;height:1px;overflow:scroll}.inheritedWidth{width:calc(130px + var(--cols) * 70px + 183px)}.interactorsColumn{position:sticky;left:0;z-index:5;height:45px;min-width:130px;max-width:130px;padding:5px;text-align:end;color:#0e6f76;font-weight:700;background:inherit}.interactorsColumnFixedWidth{width:130px}.interactorsColumn a{font-weight:400}.intStoich{height:100%;max-width:70px;min-width:70px;font-size:medium;text-align:end;z-index:1}.intStoichFixedWidth{width:70px}i:not(.small){font-size:large}tr:nth-child(2n){background-color:#f7f7f7}tr:nth-child(odd){background-color:#fff}a,a:visited{color:#0e6f76}.spaceHolder{width:183px}.spaceHolderWithSorting{width:calc(183px - 3ch)}.subComponentColumn{left:0;z-index:30;height:45px;min-width:130px;max-width:130px;padding:5px;text-align:end;color:#0e6f76;font-weight:700;background:inherit;position:sticky}.expandedRows{color:#0e6f76;position:relative}.firstExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(180deg,#0e6f7696 0px,transparent 10px)}.lastExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(0deg,#0e6f7696 0px,transparent 10px)}.singleExpandedRow:after{z-index:40;content:"";position:absolute;inset:-2px -1px;pointer-events:none;background:linear-gradient(180deg,#0e6f7696 0px,transparent 10px),linear-gradient(0deg,#0e6f7696 0px,transparent 10px)}.interactorSeparation{max-width:3ch;min-width:3ch;background-color:#0e6f76;border:1px solid white;overflow:hidden;width:1%;text-align:-webkit-center;position:sticky;z-index:31;left:0}.interactorNameContainer,.interactorSeparationName{--rowspanSize: 1;writing-mode:vertical-rl;transform:rotate(-180deg);font-size:small;color:#fff;line-height:.8;text-align:center;text-overflow:ellipsis;height:calc(var(--rowspanSize) * 48px);white-space:nowrap;overflow:hidden}.container{font-size:14px}.horizontalHeader{min-width:114px;max-width:114px}@supports (-webkit-hyphens:none){.interactorsColumn{height:45px!important}.intStoich{height:45px;overflow-y:visible}}
`;function g(a,e,t){let i=le(a.interactors,e,t);return i?{identifier:i.identifier,stochiometryValue:i.stochiometryValue,stochiometryText:Pe(i.stochiometryValue),stochiometryValueFormatted:Fe(i.stochiometryValue)}:null}function le(a,e,t){let i=!1,n=null;for(let r of a){let s=qe(r,e,t);s&&(i=!0,s.stochiometryValue&&(n?n=[n[0]+s.stochiometryValue[0],n[1]+s.stochiometryValue[1]]:n=[s.stochiometryValue[0],s.stochiometryValue[1]]))}return i?{identifier:e,stochiometryValue:n}:null}function qe(a,e,t){let i=Me(a.stochiometry);if(a.identifier===e)return{identifier:e,stochiometryValue:i};if(a.interactorType==="stable complex"){let n=t.find(r=>r.interactor.identifier===a.identifier);if(n&&n.subComponents){let r=le(n.subComponents,e,t);if(r)return r.stochiometryValue?i?{identifier:e,stochiometryValue:[i[0]*r.stochiometryValue[0],i[1]*r.stochiometryValue[1]]}:{identifier:e,stochiometryValue:r.stochiometryValue}:{identifier:e,stochiometryValue:i}}}return null}function He(a){return a.match("minValue: ([0-9+]), maxValue: ([0-9+])")}function Me(a){if(a){let e=He(a);if(e){let t=parseInt(e[1],10),i=parseInt(e[2],10);if(!isNaN(t)&&!isNaN(i))return[t,i]}}return null}function Fe(a){if(a){let e=a[0],t=a[1];return e===t?e.toString():`${e}-${t}`}return" "}function Pe(a){return a?"Stoichiometry values: minValue: "+a[0]+", maxValue: "+a[1]:"No stoichiometry data available"}var Ge=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};var T,w=(T=class{constructor(e,t){o(this,"complexPortalService");o(this,"species");o(this,"complexes",c([]));o(this,"interactorsSorting",c());o(this,"interactors",c([]));o(this,"organismIconDisplay",c(!0));o(this,"interactorTypeDisplay",c(!0));o(this,"idDisplay",c(!0));o(this,"enrichedInteractors");o(this,"enrichedComplexes");o(this,"ranges");o(this,"_timesAppearingByType");o(this,"_timesAppearingByOrganism");this.complexPortalService=e,this.species=t}ngOnChanges(e){e.interactors&&(this.enrichInteractors(),this.calculateTimesAppearing()),this.classifyInteractors(),this.calculateAllStartAndEndIndexes()}classifyInteractors(){this.interactorsSorting()&&this.enrichedInteractors&&this.enrichedInteractors.length>0&&(this.interactorsSorting()==="Type"?this.classifyInteractorsByType():this.interactorsSorting()==="Organism"?this.classifyInteractorsByOrganism():this.classifyInteractorsByOccurrence())}enrichInteractors(){this.enrichedInteractors=[];for(let e of this.interactors()){let t=e.interactorType==="stable complex",i={interactor:e,hidden:!1,isSubComplex:t,expanded:!1,subComponents:null,partOfComplex:[],timesAppearing:0};t&&this.loadSubInteractors(i).subscribe(n=>i.subComponents=n),this.enrichedInteractors.push(i)}}toggleSubcomplexExpandable(e){if(this.enrichedInteractors[e].expanded=!this.enrichedInteractors[e].expanded,this.enrichedInteractors[e].expanded){for(let t=0;t<this.enrichedInteractors.length;t++)e!==t&&(this.enrichedInteractors[t].expanded=!1);if(this.enrichedInteractors[e].subComponents){let t=this.enrichedInteractors[e].subComponents.map(i=>i.identifier);for(let i=0;i<this.enrichedInteractors.length;i++)e!==i&&(this.enrichedInteractors[i].hidden=!!t.includes(this.enrichedInteractors[i].interactor.identifier))}}else for(let t=0;t<this.enrichedInteractors.length;t++)this.enrichedInteractors[t].hidden=!1;this.classifyInteractors(),this.calculateAllStartAndEndIndexes()}loadSubInteractors(e){let t=this.complexes().find(i=>i.complexAC===e.interactor.identifier);return t?F(t.interactors):this.complexPortalService.getSimplifiedComplex(e.interactor.identifier).pipe(P(i=>i?.interactors))}calculateAllStartAndEndIndexes(){this.enrichedComplexes=[];for(let e of this.complexes())this.enrichedComplexes.push(this.calculateStartAndEndIndexes(e))}getMinValue(e,t){return t===null?e:e===null?t:Math.min(e,t)}getMaxValue(e,t){return t===null?e:e===null?t:Math.max(e,t)}calculateStartAndEndIndexes(e){let t={complex:e,startInteractorIndex:null,endInteractorIndex:null,startSubComponentIndex:null,endSubComponentIndex:null,startInteractorIncludedWhenExpanded:!0};for(let i=0;i<this.enrichedInteractors.length;i++)if(!this.enrichedInteractors[i].hidden){if(g(e,this.enrichedInteractors[i].interactor.identifier,this.enrichedInteractors))t.startInteractorIndex=this.getMinValue(t.startInteractorIndex,i),t.startInteractorIndex===i&&(t.startInteractorIncludedWhenExpanded=!0),t.endInteractorIndex=this.getMaxValue(t.endInteractorIndex,i),this.enrichedInteractors[i].isSubComplex&&this.enrichedInteractors[i].subComponents&&this.enrichedInteractors[i].expanded&&(t.startSubComponentIndex=-1,t.endSubComponentIndex=this.enrichedInteractors[i].subComponents.length-1);else if(this.enrichedInteractors[i].isSubComplex&&this.enrichedInteractors[i].subComponents&&this.enrichedInteractors[i].expanded)for(let n=0;n<this.enrichedInteractors[i].subComponents.length;n++)g(e,this.enrichedInteractors[i].subComponents[n].identifier,this.enrichedInteractors)&&(t.startInteractorIndex=this.getMinValue(t.startInteractorIndex,i),t.startInteractorIndex===i&&(t.startInteractorIncludedWhenExpanded=!1),t.endInteractorIndex=this.getMaxValue(t.endInteractorIndex,i),t.startSubComponentIndex=this.getMinValue(t.startSubComponentIndex,n),t.endSubComponentIndex=this.getMaxValue(t.endSubComponentIndex,n))}return t}classifyInteractorsByOrganism(){this.enrichedInteractors.sort((e,t)=>{if(t.interactor.organismName===e.interactor.organismName)return t.timesAppearing-e.timesAppearing;{let i=this._timesAppearingByOrganism.get(t.interactor.organismName),n=this._timesAppearingByOrganism.get(e.interactor.organismName);return i===n?t.interactor.organismName.localeCompare(e.interactor.organismName):i-n}}),this.rangeOfInteractorOrganism()}classifyInteractorsByType(){this.enrichedInteractors.sort((e,t)=>{if(t.interactor.interactorType===e.interactor.interactorType)return t.timesAppearing-e.timesAppearing;{let i=this._timesAppearingByType.get(t.interactor.interactorType),n=this._timesAppearingByType.get(e.interactor.interactorType);return i===n?t.interactor.interactorType.localeCompare(e.interactor.interactorType):i-n}}),this.rangeOfInteractorType()}classifyInteractorsByOccurrence(){this.enrichedInteractors.sort((e,t)=>t.timesAppearing-e.timesAppearing),this.ranges=[]}rangeOfInteractorType(){let e=[],t=0,i=null;for(let n=0;n<this.enrichedInteractors.length;n++){let r=[];this.enrichedInteractors[n].hidden||(t+=1,i===null&&(i=n)),(!this.enrichedInteractors[n+1]||this.enrichedInteractors[n].isSubComplex&&this.enrichedInteractors[n].expanded||this.enrichedInteractors[n].interactor.interactorType!==this.enrichedInteractors[n+1].interactor.interactorType)&&(i!==null&&(r.push(this.enrichedInteractors[n].interactor.interactorType,t,i),e.push(r),i=null),t=0)}this.ranges=e}rangeOfInteractorOrganism(){let e=[],t=0,i=null;for(let n=0;n<this.enrichedInteractors.length;n++){let r=[];this.enrichedInteractors[n].hidden||(t+=1,i===null&&(i=n)),(!this.enrichedInteractors[n+1]||this.enrichedInteractors[n].isSubComplex&&this.enrichedInteractors[n].expanded||this.enrichedInteractors[n].interactor.organismName!==this.enrichedInteractors[n+1].interactor.organismName)&&(i!==null&&(r.push(this.species.transform(this.enrichedInteractors[n].interactor.organismName),t,i),e.push(r),i=null),t=0)}this.ranges=e}isInteractorSortingSet(){return this.interactorsSorting()==="Type"||this.interactorsSorting()==="Organism"}getExpandedRowClass(e,t){return e===0?t===1?"singleExpandedRow":"firstExpandedRow":e===t-1?"lastExpandedRow":null}calculateTimesAppearing(){this._timesAppearingByType=new Map,this._timesAppearingByOrganism=new Map;for(let e of this.enrichedInteractors){e.timesAppearing=0;for(let t of this.complexes())g(t,e.interactor.identifier,this.enrichedInteractors)&&(e.timesAppearing+=1,this._timesAppearingByType.set(e.interactor.interactorType,(this._timesAppearingByType.get(e.interactor.interactorType)||0)+1),this._timesAppearingByOrganism.set(e.interactor.organismName,(this._timesAppearingByOrganism.get(e.interactor.organismName)||0)+1))}}},o(T,"ctorParameters",()=>[{type:K},{type:$}]),o(T,"propDecorators",{complexes:[{type:l,args:[{isSignal:!0,alias:"complexes",required:!1,transform:void 0}]}],interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1,transform:void 0}]}],interactors:[{type:l,args:[{isSignal:!0,alias:"interactors",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}]}),T);w=Ge([d({selector:"cp-table-interactor-column",template:ae,styles:[se]})],w);var ce=`<div class="container">
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
`;var pe=`a{font-weight:700}a,a:visited{color:#0e6f76}i:not(.small){font-size:medium}.nameAndIcons{font-size:14px;display:flex;width:inherit;justify-content:flex-end}.inlineDisplay{display:flex;justify-content:flex-end}.name{width:inherit;text-overflow:ellipsis;overflow:hidden;text-wrap:nowrap;text-align:end;padding-right:5px}.nameCompact{display:inline-flex;width:-webkit-fill-available}
`;var $e=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},V,D=(V=class{constructor(){o(this,"interactorName",c());o(this,"interactorType",c());o(this,"interactorId",c());o(this,"interactorOrganism",c());o(this,"identifierLink",c());o(this,"organismIconDisplay",c());o(this,"interactorTypeDisplay",c());o(this,"idDisplay",c());o(this,"isMainInteractor",c());o(this,"interactorTypeIcon");o(this,"interactorOrganismIcon");o(this,"externalLinkVisible")}ngOnInit(){this.interactorTypeIcon=oe(this.interactorType()),this.interactorOrganismIcon=v(this.interactorOrganism())}externalLinkVisibleHandler(e){this.externalLinkVisible=e}},o(V,"propDecorators",{interactorName:[{type:l,args:[{isSignal:!0,alias:"interactorName",required:!1,transform:void 0}]}],interactorType:[{type:l,args:[{isSignal:!0,alias:"interactorType",required:!1,transform:void 0}]}],interactorId:[{type:l,args:[{isSignal:!0,alias:"interactorId",required:!1,transform:void 0}]}],interactorOrganism:[{type:l,args:[{isSignal:!0,alias:"interactorOrganism",required:!1,transform:void 0}]}],identifierLink:[{type:l,args:[{isSignal:!0,alias:"identifierLink",required:!1,transform:void 0}]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1,transform:void 0}]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],isMainInteractor:[{type:l,args:[{isSignal:!0,alias:"isMainInteractor",required:!1,transform:void 0}]}]}),V);D=$e([d({selector:"cp-table-interactor-name",template:ce,styles:[pe]})],D);var de=`<div class="externalLinkContainer" [matTooltip]="'More information about ' + interactorId()">
  <a *ngIf="externalLinkVisible" href="{{identifierLink()}}" target="_blank" class="externalLinkContainer">
    {{ interactorId() }}
    <i class="icon icon-generic small" data-icon="x" title="More information about {{ interactorId() }}"></i>
  </a>
</div>
`;var me=`a{font-weight:400}a,a:visited{color:#0e6f76}i:not(.small){font-size:large}.externalLinkContainer{justify-content:end;grid-gap:5px;font-size:14px;line-break:anywhere;word-break:break-word}
`;var Je=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},z,O=(z=class{constructor(){o(this,"interactorId",c());o(this,"identifierLink",c());o(this,"interactorType",c());o(this,"isMainInteractor",c());o(this,"idDisplay",c());o(this,"externalLinkVisible",h())}ngOnInit(){this.showExternalLink()}showExternalLink(){return this.isMainInteractor()&&this.interactorType()==="stable complex"?(this.externalLinkVisible.emit(!1),!1):(this.externalLinkVisible.emit(!!this.identifierLink()),!!this.identifierLink())}},o(z,"propDecorators",{interactorId:[{type:l,args:[{isSignal:!0,alias:"interactorId",required:!1,transform:void 0}]}],identifierLink:[{type:l,args:[{isSignal:!0,alias:"identifierLink",required:!1,transform:void 0}]}],interactorType:[{type:l,args:[{isSignal:!0,alias:"interactorType",required:!1,transform:void 0}]}],isMainInteractor:[{type:l,args:[{isSignal:!0,alias:"isMainInteractor",required:!1,transform:void 0}]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1,transform:void 0}]}],externalLinkVisible:[{type:m,args:["externalLinkVisible"]}]}),z);O=Je([d({selector:"cp-table-interactor-external-link",template:de,styles:[me]})],O);var ue=`<ng-container>
  <div class="stoichNum" [matTooltip]="stoichiometryText()">
    {{ stoichiometryValue() }}
  </div>
</ng-container>
`;var fe=`.stoichNum{width:4ch;height:4ch;border-radius:4ch;background-color:var(--primary);text-align:center;padding-top:.5ch;color:var(--on-primary);font-size:small;margin-left:auto;margin-right:auto;position:relative;z-index:1}
`;var Ze=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},A,L=(A=class{constructor(){o(this,"stoichiometryText",c());o(this,"stoichiometryValue",c())}},o(A,"propDecorators",{stoichiometryText:[{type:l,args:[{isSignal:!0,alias:"stoichiometryText",required:!1,transform:void 0}]}],stoichiometryValue:[{type:l,args:[{isSignal:!0,alias:"stoichiometryValue",required:!1,transform:void 0}]}]}),A);L=Ze([d({selector:"cp-table-interactor-stoichiometry",template:ue,styles:[fe]})],L);var he=`<div [ngClass]="topLineClass()"></div>
<cp-table-interactor-stoichiometry
  *ngIf="!!interactorComponent()"
  [stoichiometryText]="interactorComponent().stochiometryText"
  [stoichiometryValue]="interactorComponent().stochiometryValueFormatted"
></cp-table-interactor-stoichiometry>
<div [ngClass]="bottomLineClass()"></div>
`;var ge=`:host{display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;align-content:center;flex-wrap:nowrap}:host *{flex:1}.verticalLine,.transparentVerticalLine{margin-left:auto;margin-right:auto;min-width:1%;max-width:1%;min-height:50%;z-index:0;position:relative;height:50%}.verticalLine{border-right:3px solid var(--primary)}.transparentVerticalLine{border-right:0}
`;var it=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},j,R=(j=class{constructor(){o(this,"complex",c());o(this,"i",c());o(this,"enrichedInteractors",c());o(this,"interactorComponent",u(()=>g(this.complex().complex,this.interactor.interactor.identifier,this.enrichedInteractors())));o(this,"topLineClass",u(()=>this.displayTopLineClass(this.complex(),this.i())));o(this,"bottomLineClass",u(()=>this.displayBottomLineClass(this.complex(),this.i())))}get interactor(){return this.enrichedInteractors()[this.i()]}displayTopLineClass(e,t){return this.doesLineCrossInteractorCell(e,t)||this.doesLineEndOnInteractorCell(e,t)&&!this.doesLineStartOnInteractorCell(e,t)?"verticalLine":"transparentVerticalLine"}displayBottomLineClass(e,t){return this.doesLineCrossInteractorCell(e,t)||this.doesLineStartOnInteractorCell(e,t)&&!this.doesLineEndOnInteractorCell(e,t)?"verticalLine":"transparentVerticalLine"}doesLineCrossInteractorCell(e,t){return!!(e.startInteractorIndex!=null&&e.endInteractorIndex!=null&&(e.startInteractorIndex<t&&e.endInteractorIndex>t||e.startInteractorIndex<t&&e.endInteractorIndex===t&&this.enrichedInteractors()[t].isSubComplex&&this.enrichedInteractors()[t].expanded&&e.startSubComponentIndex!=null&&e.endSubComponentIndex!=null))}doesLineStartOnInteractorCell(e,t){return!!(e.startInteractorIndex!=null&&e.startInteractorIndex===t&&(!this.enrichedInteractors()[t].isSubComplex||e.startInteractorIncludedWhenExpanded))}doesLineEndOnInteractorCell(e,t){return e.endInteractorIndex!=null&&e.endInteractorIndex===t?!(this.enrichedInteractors()[t].isSubComplex&&this.enrichedInteractors()[t].expanded&&e.startSubComponentIndex!=null&&e.endSubComponentIndex!=null):!1}},o(j,"propDecorators",{complex:[{type:l,args:[{isSignal:!0,alias:"complex",required:!1,transform:void 0}]}],i:[{type:l,args:[{isSignal:!0,alias:"i",required:!1,transform:void 0}]}],enrichedInteractors:[{type:l,args:[{isSignal:!0,alias:"enrichedInteractors",required:!1,transform:void 0}]}]}),j);R=it([d({selector:"cp-table-main-interactor",template:he,styles:[ge]})],R);var ye=`<div [ngClass]="displayTopLineClass()"></div>
<cp-table-interactor-stoichiometry
  *ngIf="!!interactorComponent()"
  [stoichiometryText]="interactorComponent().stochiometryText"
  [stoichiometryValue]="interactorComponent().stochiometryValueFormatted"
></cp-table-interactor-stoichiometry>
<div [ngClass]="displayBottomLineClass()"></div>
`;var xe=`.verticalLine,.transparentVerticalLine{margin-left:auto;margin-right:auto;min-width:1%;max-width:1%;max-height:50%;min-height:50%;z-index:0}.verticalLine{border-right:3px solid #0e6f76}.transparentVerticalLine{border-right:0}
`;var ot=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},q,k=(q=class{constructor(){o(this,"complex",c());o(this,"i",c());o(this,"j",c());o(this,"enrichedInteractors",c());o(this,"interactorComponent",u(()=>g(this.complex().complex,this.el.identifier,this.enrichedInteractors())));o(this,"displayTopLineClass",u(()=>this.displayTopLineClassExpanded(this.complex(),this.i(),this.j())));o(this,"displayBottomLineClass",u(()=>this.displayBottomLineClassExpanded(this.complex(),this.i(),this.j())))}get interactor(){return this.enrichedInteractors()[this.i()]}get el(){return this.enrichedInteractors()[this.i()].subComponents[this.j()]}displayTopLineClassExpanded(e,t,i){return this.doesLineCrossSubcomponentCell(e,t,i)||this.doesLineEndOnSubcomponentCell(e,t,i)&&!this.doesLineStartOnSubcomponentCell(e,t,i)?"verticalLine":"transparentVerticalLine"}displayBottomLineClassExpanded(e,t,i){return this.doesLineCrossSubcomponentCell(e,t,i)||this.doesLineStartOnSubcomponentCell(e,t,i)&&!this.doesLineEndOnSubcomponentCell(e,t,i)?"verticalLine":"transparentVerticalLine"}doesLineCrossSubcomponentCell(e,t,i){return e.startInteractorIndex!=null&&e.endInteractorIndex!=null&&(e.startInteractorIndex<t&&e.endInteractorIndex>t||e.startSubComponentIndex!=null&&e.endSubComponentIndex!=null&&(e.startSubComponentIndex<i&&e.endSubComponentIndex>i||e.startInteractorIndex<t&&e.endSubComponentIndex>i||e.startSubComponentIndex<i&&e.endInteractorIndex>t))}doesLineStartOnSubcomponentCell(e,t,i){return e.startInteractorIndex!=null&&e.startInteractorIndex===t&&e.startSubComponentIndex!=null&&e.startSubComponentIndex===i?!e.complex.interactors.some(n=>this.enrichedInteractors()[t].interactor.identifier===n.identifier):!1}doesLineEndOnSubcomponentCell(e,t,i){return e.endInteractorIndex!=null&&e.endInteractorIndex===t&&e.endSubComponentIndex!=null&&e.endSubComponentIndex===i}},o(q,"propDecorators",{complex:[{type:l,args:[{isSignal:!0,alias:"complex",required:!1,transform:void 0}]}],i:[{type:l,args:[{isSignal:!0,alias:"i",required:!1,transform:void 0}]}],j:[{type:l,args:[{isSignal:!0,alias:"j",required:!1,transform:void 0}]}],enrichedInteractors:[{type:l,args:[{isSignal:!0,alias:"enrichedInteractors",required:!1,transform:void 0}]}]}),q);k=ot([d({selector:"cp-table-subcomponent-interactor",template:ye,styles:[xe]})],k);var Ie=`<div class="filters">
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
`;var Ce=`.typeOfSorting{display:none}.sortingInteractors:hover .typeOfSorting{display:flex;margin-top:-15px;flex-direction:row;position:absolute;z-index:5}.typeOfSorting .button{border-right:1px solid white;font-size:14px}.filters{display:flex;justify-content:center;grid-gap:10px;height:67px;z-index:5;text-align:center}.displaySize,.detailedDisplayOptions{display:none}label{color:var(--on-primary)}.dropdown:hover .displaySize{display:flex;list-style:none;width:300px;background-color:var(--primary);color:var(--on-primary);margin-top:-15px;flex-direction:row;position:absolute;height:40px;align-content:center;z-index:5}.dropdown:hover .displaySize li{width:200px;background-color:var(--primary);margin-left:-21px;text-align:left;padding-left:6px;z-index:5}li{text-align:center;align-items:center;font-size:14px;border-left:1px solid white;padding-top:10px;max-width:171px}.detailedDisplay:hover .detailedDisplayOptions{display:flex;list-style:none;align-content:baseline;flex-direction:column;position:absolute;z-index:5;margin-left:14px}.detailedDisplayOptions li{text-align:left;z-index:5}
`;var lt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},H,N=(H=class{constructor(){o(this,"interactorsSorting",y());o(this,"organismIconDisplay",y());o(this,"interactorTypeDisplay",y());o(this,"idDisplay",y());o(this,"typeOfDisplay")}ngOnInit(){this.updateDisplay()}interactorsSortingChanges(e){this.interactorsSorting.set(e),this.typeOfDisplay==="detailed"&&(e==="Type"?(this.interactorTypeDisplay.set(!1),this.organismIconDisplay.set(!0)):e==="Organism"&&(this.organismIconDisplay.set(!1),this.interactorTypeDisplay.set(!0)),this.updateDisplay())}toggleOrganism(){this.organismIconDisplay.update(e=>!e),this.updateDisplay()}toggleType(){this.interactorTypeDisplay.update(e=>!e),this.updateDisplay()}toggleId(){this.idDisplay.update(e=>!e),this.updateDisplay()}setDisplayType(e){e==="compact"?this.compactDisplay():e==="detailed"&&this.detailedDisplay()}compactDisplay(){this.organismIconDisplay.set(!1),this.interactorTypeDisplay.set(!1),this.idDisplay.set(!1),this.typeOfDisplay="compact"}detailedDisplay(){this.organismIconDisplay.set(!0),this.interactorTypeDisplay.set(!0),this.idDisplay.set(!0),this.typeOfDisplay="detailed"}updateDisplay(){this.organismIconDisplay()||this.interactorTypeDisplay()||this.idDisplay()?this.typeOfDisplay="detailed":this.typeOfDisplay="compact"}},o(H,"propDecorators",{interactorsSorting:[{type:l,args:[{isSignal:!0,alias:"interactorsSorting",required:!1}]},{type:m,args:["interactorsSortingChange"]}],organismIconDisplay:[{type:l,args:[{isSignal:!0,alias:"organismIconDisplay",required:!1}]},{type:m,args:["organismIconDisplayChange"]}],interactorTypeDisplay:[{type:l,args:[{isSignal:!0,alias:"interactorTypeDisplay",required:!1}]},{type:m,args:["interactorTypeDisplayChange"]}],idDisplay:[{type:l,args:[{isSignal:!0,alias:"idDisplay",required:!1}]},{type:m,args:["idDisplayChange"]}]}),H);N=lt([d({selector:"cp-complex-navigator-buttons",template:Ie,styles:[Ce]})],N);var be=`<div class="displayButton columns medium-12" [ngClass]="">
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
`;var ve=`.displayButton{text-align:center}.view-button{width:225px;margin-right:5px;background-color:#fff;color:#555;border:1px dotted var(--primary)}.view-button:hover{color:var(--primary);background-color:#eaeaea;border:transparent;border-bottom:1px dotted var(--primary)}.selected,.selected:hover{background-color:var(--primary);color:#fff}.new-tag{color:red;font-weight:700;font-size:x-small}.selected .new-tag{color:#ff0}.cnButton{outline-offset:0;outline:rgba(0,124,130,.75) solid 1px;animation:animateOutline 4s ease infinite}.cnButton.selected{animation:none}@keyframes animateOutline{0%,50%,to{outline-width:6px;outline-offset:4px;outline-color:#007c8200}10%{outline-color:#007c82bf}}
`;var dt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},I;(function(a){a.list="view_list",a.navigator="view_navigator"})(I||(I={}));var M,C=(M=class{constructor(){o(this,"displayType",y());o(this,"SearchDisplay",I)}setListView(){this.displayType.set(I.list)}setComplexNavigatorView(){this.displayType.set(I.navigator)}},o(M,"propDecorators",{displayType:[{type:l,args:[{isSignal:!0,alias:"displayType",required:!1}]},{type:m,args:["displayTypeChange"]}]}),M);C=dt([d({selector:"cp-complex-list-display-buttons",template:be,styles:[ve]})],C);var mt=function(a,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,t,i);else for(var p=a.length-1;p>=0;p--)(s=a[p])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},Se=class{};Se=mt([G({imports:[U,W,J,Q,Y],exports:[x,C],declarations:[x,b,_,w,D,O,L,R,k,N,C]})],Se);export{I as a,oe as b,v as c,Se as d};
