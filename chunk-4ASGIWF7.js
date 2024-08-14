import {
  MarkdownModule
} from "./chunk-EU7EGZ5R.js";
import {
  MatTooltipModule
} from "./chunk-XIBCTU4T.js";
import {
  BasketService
} from "./chunk-2VCLLS4E.js";
import {
  ComplexPortalService,
  ProgressSpinnerComponent
} from "./chunk-VAAOO3WK.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  RouterModule,
  __publicField,
  map,
  of,
  output
} from "./chunk-I4WWFSLP.js";

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/complex-navigator.component.html
var complex_navigator_component_default = `<div class="ComplexNavigator">
  <div class="Buttons" [ngClass]="complexSearch.totalNumberOfResults <=6 ? 'smallCNButtons' : ''">
    <cp-complex-navigator-buttons
      [(interactorsSorting)]="interactorsSorting"
      [(organismIconDisplay)]="organismIconDisplay"
      [(interactorTypeDisplay)]="interactorTypeDisplay"
      [(IDDisplay)]="IDDisplay">
    </cp-complex-navigator-buttons>
  </div>
  <cp-table-structure [complexSearch]="complexSearch"
                      [interactors]="interactors"
                      [interactorsSorting]="interactorsSorting"
                      [organismIconDisplay]="organismIconDisplay"
                      [interactorTypeDisplay]="interactorTypeDisplay"
                      [IDDisplay]="IDDisplay"
                      [canAddComplexesToBasket]="canAddComplexesToBasket"
                      [canRemoveComplexesFromBasket]="canRemoveComplexesFromBasket"
                      (onComplexRemovedFromBasket)="onComplexRemovedFromBasket.emit($event)">
  </cp-table-structure>
</div>

`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/complex-navigator.component.css
var complex_navigator_component_default2 = "/* src/app/complex/complex-results/complex-navigator/complex-navigator.component.css */\n/*# sourceMappingURL=complex-navigator.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/complex-navigator.component.ts
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
var ComplexNavigatorComponent = (_a = class {
  constructor() {
    __publicField(this, "complexSearch");
    __publicField(this, "interactors");
    __publicField(this, "canAddComplexesToBasket");
    __publicField(this, "canRemoveComplexesFromBasket");
    __publicField(this, "onComplexRemovedFromBasket", output());
    __publicField(this, "interactorsSorting", "Occurrence");
    __publicField(this, "organismIconDisplay", true);
    __publicField(this, "interactorTypeDisplay", true);
    __publicField(this, "IDDisplay", true);
  }
}, __publicField(_a, "propDecorators", {
  complexSearch: [{ type: Input }],
  interactors: [{ type: Input }],
  canAddComplexesToBasket: [{ type: Input }],
  canRemoveComplexesFromBasket: [{ type: Input }],
  onComplexRemovedFromBasket: [{ type: Output }]
}), _a);
ComplexNavigatorComponent = __decorate([
  Component({
    selector: "cp-complex-navigator",
    template: complex_navigator_component_default,
    styles: [complex_navigator_component_default2]
  })
], ComplexNavigatorComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html
var table_structure_component_default = '<div class="complexNavigatorTable">\n  <div class="header"\n       (scroll)="body.scrollLeft = header.scrollLeft" #header>\n\n    <cp-table-header [complexes]="sortedComplexes"\n                     [interactorsSorting]="interactorsSorting"\n                     [canAddComplexesToBasket]="canAddComplexesToBasket"\n                     [canRemoveComplexesFromBasket]="canRemoveComplexesFromBasket"\n                     (onComplexRemovedFromBasket)="onComplexRemovedFromBasket.emit($event)">\n    </cp-table-header>\n  </div>\n  <div class="interactors"\n       (scroll)="header.scrollLeft = body.scrollLeft" #body>\n    <cp-table-interactor-column\n      [complexes]="sortedComplexes"\n      [interactors]="interactors"\n      [interactorsSorting]="interactorsSorting"\n      [organismIconDisplay]="organismIconDisplay"\n      [interactorTypeDisplay]="interactorTypeDisplay"\n      [IDDisplay]="IDDisplay">\n    </cp-table-interactor-column>\n  </div>\n  <div class="spaceHolder"></div>\n</div>\n\n';

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css
var table_structure_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css */\n.complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n}\n.header {\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n}\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=table-structure.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.ts
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a2;
var TableStructureComponent = (_a2 = class {
  constructor() {
    __publicField(this, "complexSearch");
    __publicField(this, "interactors");
    __publicField(this, "interactorsSorting");
    __publicField(this, "organismIconDisplay");
    __publicField(this, "interactorTypeDisplay");
    __publicField(this, "IDDisplay");
    __publicField(this, "canAddComplexesToBasket");
    __publicField(this, "canRemoveComplexesFromBasket");
    __publicField(this, "onComplexRemovedFromBasket", new EventEmitter());
    __publicField(this, "sortedComplexes", []);
  }
  ngOnChanges() {
    this.sortedComplexes = this.classifyComplexesSimilaritiesV2(this.complexSearch.elements);
  }
  getComponentAsComplex(component) {
    return this.complexSearch.elements.find((interactor) => interactor.complexAC === component.identifier);
  }
  getAllComponents(complex, components = []) {
    for (const component of complex.interactors) {
      if (component.interactorType === "stable complex") {
        const subComplex = this.getComponentAsComplex(component);
        if (subComplex) {
          components.push(...this.getAllComponents(subComplex));
        } else {
          components.push(component);
        }
      } else {
        components.push(component);
      }
    }
    return components;
  }
  calculateSimilarity(complex1, complex2) {
    if (complex1 === complex2) {
      return new Set(this.getAllComponents(complex1)).size;
    }
    const [components1, components2] = [complex1, complex2].map((complex) => new Set(this.getAllComponents(complex).map((c) => c.identifier)));
    return [...components1.values()].reduce((s, c1) => components2.has(c1) ? s + 1 : s, 0);
  }
  classifyComplexesSimilaritiesV2(complexesList) {
    const comparedComplexes = [];
    for (const complex of complexesList) {
      for (const comparedComplex of complexesList) {
        if (complex.complexAC >= comparedComplex.complexAC) {
          comparedComplexes.push([complex, comparedComplex, this.calculateSimilarity(complex, comparedComplex)]);
        }
      }
    }
    comparedComplexes.sort((a, b) => b[2] - a[2]);
    const complexesOrderedSet = this.uniqueComplexesListOrderedBySimilarity(comparedComplexes);
    return Array.from(complexesOrderedSet);
  }
  uniqueComplexesListOrderedBySimilarity(complexesListSimilarities) {
    const complexesOrderedSet = /* @__PURE__ */ new Set();
    for (let i = 0; i < complexesListSimilarities.length; i++) {
      const [complex1, complex2, similarityScore] = complexesListSimilarities[i];
      if (similarityScore !== 0) {
        complexesOrderedSet.add(complex1);
        complexesOrderedSet.add(complex2);
        for (let j = i + 1; j < complexesListSimilarities.length; j++) {
          const [complex3, complex4, similarityScore2nd] = complexesListSimilarities[j];
          if (complex1 === complex3 && similarityScore2nd !== 0) {
            complexesOrderedSet.add(complex4);
          }
        }
        if (complexesOrderedSet.size === this.complexSearch.elements.length) {
          return complexesOrderedSet;
        }
      }
      if (complexesOrderedSet.size === this.complexSearch.elements.length) {
        return complexesOrderedSet;
      }
    }
    return complexesOrderedSet;
  }
}, __publicField(_a2, "propDecorators", {
  complexSearch: [{ type: Input }],
  interactors: [{ type: Input }],
  interactorsSorting: [{ type: Input }],
  organismIconDisplay: [{ type: Input }],
  interactorTypeDisplay: [{ type: Input }],
  IDDisplay: [{ type: Input }],
  canAddComplexesToBasket: [{ type: Input }],
  canRemoveComplexesFromBasket: [{ type: Input }],
  onComplexRemovedFromBasket: [{ type: Output }]
}), _a2);
TableStructureComponent = __decorate2([
  Component({
    selector: "cp-table-structure",
    template: table_structure_component_default,
    styles: [table_structure_component_default2]
  })
], TableStructureComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html
var table_header_component_default = `<div class="Complex-navigator">
  <table class="table CN-table">
    <!-- When table is not overflowing -->
    <thead class="tableHead" *ngIf="complexes.length<=6">
    <tr>
      <th *ngIf="isInteractorSortingSet()" class="spaceHolderSorting"></th>
      <th class="interactorsHeader horizontal">
        Components
      </th>
      <th class="horizontal" *ngFor="let complex of complexes" [class.predicted]="complex.predictedComplex">
        <div class="horizontal-label">
          <a [routerLink]="['/complex', complex.complexAC]"
             target="_blank">
            <div>
              <span [matTooltip]="complex.complexName+ ' - '+ complex.complexAC + ' - ' + complex.organismName">
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
    <thead class="tableHeadOverflow" *ngIf="complexes.length > 6"
           [ngClass]="isInteractorSortingSet() ? 'tableHeadOverflowWithSorting' : 'tableHeadOverflow'">
    <tr [style.--cols]="complexes.length"
        [style.--intHeader]="isInteractorSortingSet() ? '156px':''"
        [style.--sizeSpaceHolder]="'185px'">
      <th class="spaceHolderHeaderOverflow"
          [style]="isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''">
      </th>
      <th class="rotate" *ngFor="let complex of complexes"
          [class.predicted]="complex.predictedComplex"
          [style.--cols]="complexes.length">
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
    <tr [style.--cols]="complexes.length"
        [style.--intHeader]="isInteractorSortingSet() ? '156px':''"
        [style.--sizeSpaceHolder]="'185px'">
      <th class="interactorsHeader overflow"
          [style]="isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''">
        Components
      </th>
      <ng-container *ngFor=" let complex of complexes;">
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


`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css
var table_header_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css */\n.CN-table {\n  transform: rotateX(180deg);\n}\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n  overflow: scroll;\n}\n.CN-table {\n  clip-path: fill-box;\n  overflow: scroll;\n}\n.spaceHolderSorting {\n  width: 3ch;\n  border-bottom: 3px solid var(--primary);\n}\n.spaceHolderHeaderOverflow {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: var(--primary);\n  background-color: var(--on-primary);\n  padding-top: 173px;\n  text-align: right;\n}\n.iconOrganism {\n  position: sticky;\n  text-align: center;\n  background-color: var(--primary);\n  color: var(--on-primary);\n  border-left: 1px solid white;\n  font-size: medium;\n  height: 60px;\n}\n.tilted-label {\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));\n  overflow: hidden;\n}\n.CN-table .tableHeadOverflowWithSorting tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder) - 3ch);\n  overflow: hidden;\n}\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 350px;\n  height: 51px !important;\n  color: var(--on-primary);\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid white;\n  top: 70px;\n  left: -52px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  border-collapse: collapse;\n}\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: var(--primary);\n  padding: 0 0 0 70px;\n  border: none;\n}\n.spaceHolder {\n  width: 183px;\n  background-color: var(--primary);\n  border-left: 1px solid white;\n}\n.interactorsHeader.overflow {\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  background-color: var(--on-primary);\n  border-bottom: 3px solid var(--primary);\n  height: 60px;\n  line-height: 70px;\n  text-align: right;\n  color: var(--primary);\n}\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-left: none;\n  text-align: right;\n  color: var(--primary);\n  background-color: var(--on-primary);\n  border-bottom: 3px solid var(--primary);\n}\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n.CN-table th.horizontal {\n  color: white;\n  background-color: var(--primary);\n  border-left: 1px solid white;\n  min-width: 80px;\n  max-width: 80px;\n  height: 35px;\n  font-size: 15px;\n}\na:visited {\n  color: var(--on-primary);\n}\na {\n  color: var(--on-primary);\n}\n.basket-icons {\n  margin-left: 5px;\n}\n.button {\n  padding: 0;\n  margin: 0;\n}\n.basketButton {\n  text-align: center;\n}\n/*# sourceMappingURL=table-header.component.css.map */\n";

// src/app/complex/complex-portal-utils.ts
function interactorTypeIcon(type) {
  switch (type) {
    case "small molecule":
      return "icon icon-conceptual icon-chemical";
    case "protein":
    case "peptide":
      return "icon icon-conceptual icon-structures-3d";
    case "stable complex":
      return "icon icon-conceptual icon-systems";
    case "molecule set":
      return "icon icon-generic icon-math";
    case "single stranded deoxyribonucleic acid":
    case "double stranded deoxyribonucleic acid":
    case "small nuclear rna":
    case "small nucleolar rna":
    case "ribosomal rna":
    case "messenger rna":
    case "transfer rna":
    case "signal recognition particle rna":
    case "ribonucleic acid":
    case "nucleic acid":
    case "long non-coding ribonucleic acid":
      return "icon icon-conceptual icon-dna";
  }
}
function organismIcon(organism) {
  const formattedName = formatOrganismName(organism);
  switch (formattedName) {
    case "Homo sapiens":
      return "icon icon-species icon-human";
    case "Mus musculus":
      return "icon icon-species icon-mouse";
    case "Schizosaccharomyces pombe":
    case "Saccharomyces cerevisiae":
      return "icon icon-species icon-yeast";
    case "Escherichia coli":
    case "Pseudomonas aeruginosa":
    case "Klebsiella pneumoniae":
    case "Chlamydomonas reinhardtii":
      return "icon icon-species icon-ecoli";
    case "Rattus norvegicus":
      return "icon icon-species icon-rat";
    case "Caenorhabditis elegans":
      return "icon icon-species icon-c-elegans";
    case "Gallus gallus":
      return "icon icon-species icon-chicken";
    case "Drosophila melanogaster":
      return "icon icon-species icon-fly";
    case "Bos taurus":
      return "icon icon-species icon-cow";
    case "Oryctolagus cuniculus":
      return "icon icon-species icon-rabbit";
    case "Ovis aries":
      return "icon icon-species icon-sheep";
    case "Xenopus laevis":
      return "icon icon-species icon-frog";
    case "Canis lupus":
    case "Canis familiaris":
      return "icon icon-species icon-dog";
    case "Vibrio cholerae":
      return "assets/images/EMBL_Species_Vibrio_cholerae.svg";
    case "Crotalus durissus":
      return "assets/images/EMBL_Species_RattleSnake.svg";
    case "Sus scrofa":
      return "icon icon-species icon-pig";
    case "Torpedo marmorata":
    case "Tetronarce californica":
      return "icon icon-species icon-ray";
    case "Lymnaea stagnalis":
      return "icon icon-species icon-snail";
    case "Arabidopsis thaliana":
      return "icon icon-species icon-brassica";
    case "Danio rerio":
      return "icon icon-species icon-zebrafish";
    case "Severe acute":
    case "Human SARS":
    case "SARS-CoV-2":
    case "Middle East":
    case "Human betacoronavirus":
      return "icon icon-species icon-virus";
  }
  return "";
}
function formatOrganismName(name) {
  return (name || "?").split(";")[0].split(" ").slice(0, 2).join(" ");
}

// src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.ts
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a3;
var TableHeaderComponent = (_a3 = class {
  constructor(basketService) {
    __publicField(this, "basketService");
    __publicField(this, "complexes");
    __publicField(this, "interactorsSorting");
    __publicField(this, "canAddComplexesToBasket");
    __publicField(this, "canRemoveComplexesFromBasket");
    __publicField(this, "onComplexRemovedFromBasket", new EventEmitter());
    this.basketService = basketService;
  }
  isInteractorSortingSet() {
    return this.interactorsSorting === "Type" || this.interactorsSorting === "Organism";
  }
  iconOrganism(organismName) {
    return organismIcon(organismName);
  }
  toggleBasket(complex) {
    if (this.isInBasket(complex.complexAC)) {
      this.removeComplex(complex.complexAC);
    } else {
      this.saveComplex(complex);
    }
  }
  saveComplex(complex) {
    this.basketService.saveInBasket(complex);
  }
  removeComplex(complexAC) {
    this.basketService.deleteFromBasket(complexAC);
    this.onComplexRemovedFromBasket.emit(complexAC);
  }
  isInBasket(complexAC) {
    return this.basketService.isInBasket(complexAC);
  }
}, __publicField(_a3, "ctorParameters", () => [
  { type: BasketService }
]), __publicField(_a3, "propDecorators", {
  complexes: [{ type: Input }],
  interactorsSorting: [{ type: Input }],
  canAddComplexesToBasket: [{ type: Input }],
  canRemoveComplexesFromBasket: [{ type: Input }],
  onComplexRemovedFromBasket: [{ type: Output }]
}), _a3);
TableHeaderComponent = __decorate3([
  Component({
    selector: "cp-table-header",
    template: table_header_component_default,
    styles: [table_header_component_default2]
  })
], TableHeaderComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html
var table_interactor_column_component_default = `<div class="Complex-navigator">
  <table class="interactors-table"
         [ngClass]="{'inheritedWidth': complexes.length > 6}"
         [style.--cols]="complexes.length">
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
            [ngClass]="complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'"
            [style]="ranges.length!=0 ? 'left:3ch':''">
          <cp-table-interactor-name
            [interactorName]="interactor.interactor.name"
            [interactorType]="interactor.interactor.interactorType"
            [interactorId]="interactor.interactor.identifier"
            [interactorOrganism]="interactor.interactor.organismName"
            [identifierLink]="interactor.interactor.identifierLink"
            [organismIconDisplay]="organismIconDisplay"
            [interactorTypeDisplay]="interactorTypeDisplay"
            [IDDisplay]="IDDisplay"
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
          <td class="intStoich" [ngClass]="{'intStoichFixedWidth': complexes.length > 6}" [class.predicted]="complex.complex.predictedComplex">
            <cp-table-main-interactor
              [complex]="complex"
              [i]="i"
              [enrichedInteractors]="enrichedInteractors"
            ></cp-table-main-interactor>
          </td>
        </ng-container>
        <div *ngIf="complexes.length>6"
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
                *ngIf="j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')">
              <div class="interactorSeparationName"
                   [style.--rowspanSize]="interactor.subComponents.length"> {{ interactor.interactor.name }} components
              </div>
            </td>
            <td class="subComponentColumn"
                [ngClass]="complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'"
                [style]="ranges.length!=0 ? 'left:3ch':''">
              <div>
                <cp-table-interactor-name
                  [interactorName]="el.name"
                  [interactorType]="el.interactorType"
                  [interactorId]="el.identifier"
                  [interactorOrganism]="interactor.interactor.organismName"
                  [identifierLink]="el.identifierLink"
                  [organismIconDisplay]="organismIconDisplay"
                  [interactorTypeDisplay]="interactorTypeDisplay"
                  [IDDisplay]="IDDisplay"
                ></cp-table-interactor-name>
              </div>
            </td>
            <ng-container *ngFor="let complex of enrichedComplexes">
              <td class="intStoich" [ngClass]="{'intStoichFixedWidth': complexes.length > 6}">
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
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css
var table_interactor_column_component_default2 = '/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css */\ntable {\n  --cols: 1;\n  height: 1px;\n  overflow: scroll;\n}\n.inheritedWidth {\n  width: calc(130px + var(--cols) * 70px + 183px);\n}\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n.interactorsColumnFixedWidth {\n  width: 130px;\n}\n.interactorsColumn a {\n  font-weight: normal;\n}\n.intStoich {\n  height: 100%;\n  max-width: 70px;\n  min-width: 70px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n.intStoichFixedWidth {\n  width: 70px;\n}\ni:not(.small) {\n  font-size: large;\n}\ntr:nth-child(even) {\n  background-color: #f7f7f7;\n}\ntr:nth-child(odd) {\n  background-color: #fff;\n}\na,\na:visited {\n  color: #0e6f76;\n}\n.spaceHolder {\n  width: 183px;\n}\n.spaceHolderWithSorting {\n  width: calc(183px - 3ch);\n}\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: sticky;\n}\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n.firstExpandedRow:after {\n  z-index: 40;\n  content: "";\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      #0e6f7696 0px,\n      transparent 10px);\n}\n.lastExpandedRow:after {\n  z-index: 40;\n  content: "";\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      0deg,\n      #0e6f7696 0px,\n      transparent 10px);\n}\n.singleExpandedRow:after {\n  z-index: 40;\n  content: "";\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      #0e6f7696 0px,\n      transparent 10px),\n    linear-gradient(\n      0deg,\n      #0e6f7696 0px,\n      transparent 10px);\n}\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 1%;\n  text-align: -webkit-center;\n  position: sticky;\n  z-index: 31;\n  left: 0;\n}\n.interactorNameContainer,\n.interactorSeparationName {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n}\n.container {\n  font-size: 14px;\n}\n.horizontalHeader {\n  min-width: 114px;\n  max-width: 114px;\n}\n@supports (-webkit-hyphens:none) {\n  .interactorsColumn {\n    height: 45px !important;\n  }\n  .intStoich {\n    height: 45px;\n    overflow-y: visible;\n  }\n}\n/*# sourceMappingURL=table-interactor-column.component.css.map */\n';

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/complex-navigator-utils.ts
function findInteractorInComplex(complex, interactorId, enrichedInteractors) {
  const interactor = findInteractorInComplexComponents(complex.interactors, interactorId, enrichedInteractors);
  if (!!interactor) {
    return {
      identifier: interactor.identifier,
      stochiometryValue: interactor.stochiometryValue,
      stochiometryText: getStoichiometryText(interactor.stochiometryValue),
      stochiometryValueFormatted: formatStoichiometryValues(interactor.stochiometryValue)
    };
  }
  return null;
}
function findInteractorInComplexComponents(complexComponents, interactorId, enrichedInteractors) {
  let interactorFound = false;
  let stoichiometry = null;
  for (const complexComponent of complexComponents) {
    const interactorMatch = findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors);
    if (!!interactorMatch) {
      interactorFound = true;
      if (!!interactorMatch.stochiometryValue) {
        if (!!stoichiometry) {
          stoichiometry = [
            stoichiometry[0] + interactorMatch.stochiometryValue[0],
            stoichiometry[1] + interactorMatch.stochiometryValue[1]
          ];
        } else {
          stoichiometry = [
            interactorMatch.stochiometryValue[0],
            interactorMatch.stochiometryValue[1]
          ];
        }
      }
    }
  }
  if (interactorFound) {
    return {
      identifier: interactorId,
      stochiometryValue: stoichiometry
    };
  }
  return null;
}
function findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors) {
  const componentStoichiometry = parseStoichiometryValues(complexComponent.stochiometry);
  if (complexComponent.identifier === interactorId) {
    return {
      identifier: interactorId,
      stochiometryValue: componentStoichiometry
    };
  }
  if (complexComponent.interactorType === "stable complex") {
    const complexComponentInteractor = enrichedInteractors.find((interactor) => interactor.interactor.identifier === complexComponent.identifier);
    if (!!complexComponentInteractor && !!complexComponentInteractor.subComponents) {
      const subComponentsMatch = findInteractorInComplexComponents(complexComponentInteractor.subComponents, interactorId, enrichedInteractors);
      if (!!subComponentsMatch) {
        if (!!subComponentsMatch.stochiometryValue) {
          if (!!componentStoichiometry) {
            return {
              identifier: interactorId,
              stochiometryValue: [
                componentStoichiometry[0] * subComponentsMatch.stochiometryValue[0],
                componentStoichiometry[1] * subComponentsMatch.stochiometryValue[1]
              ]
            };
          } else {
            return {
              identifier: interactorId,
              stochiometryValue: subComponentsMatch.stochiometryValue
            };
          }
        } else {
          return {
            identifier: interactorId,
            stochiometryValue: componentStoichiometry
          };
        }
      }
    }
  }
  return null;
}
function fetchValuesFromStoichiometry(stoichiometry) {
  const pattern = "minValue: ([0-9+]), maxValue: ([0-9+])";
  return stoichiometry.match(pattern);
}
function parseStoichiometryValues(stoichiometry) {
  if (!!stoichiometry) {
    const matchedStoichiometry = fetchValuesFromStoichiometry(stoichiometry);
    if (!!matchedStoichiometry) {
      const minValue = parseInt(matchedStoichiometry[1], 10);
      const maxValue = parseInt(matchedStoichiometry[2], 10);
      if (!isNaN(minValue) && !isNaN(maxValue)) {
        return [minValue, maxValue];
      }
    }
  }
  return null;
}
function formatStoichiometryValues(stoichiometry) {
  if (!!stoichiometry) {
    const minValue = stoichiometry[0];
    const maxValue = stoichiometry[1];
    if (minValue === maxValue) {
      return minValue.toString();
    } else {
      return `${minValue}-${maxValue}`;
    }
  }
  return " ";
}
function getStoichiometryText(stoichiometry) {
  if (!!stoichiometry) {
    return "Stoichiometry values: minValue: " + stoichiometry[0] + ", maxValue: " + stoichiometry[1];
  } else {
    return "No stoichiometry data available";
  }
}

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.ts
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a4;
var TableInteractorColumnComponent = (_a4 = class {
  constructor(complexPortalService) {
    __publicField(this, "complexPortalService");
    __publicField(this, "complexes");
    __publicField(this, "interactorsSorting");
    __publicField(this, "interactors");
    __publicField(this, "organismIconDisplay");
    __publicField(this, "interactorTypeDisplay");
    __publicField(this, "IDDisplay");
    __publicField(this, "enrichedInteractors");
    __publicField(this, "enrichedComplexes");
    __publicField(this, "ranges");
    __publicField(this, "_timesAppearingByType");
    __publicField(this, "_timesAppearingByOrganism");
    this.complexPortalService = complexPortalService;
  }
  ngOnChanges(changes) {
    if (!!changes["interactors"]) {
      this.enrichInteractors();
      this.calculateTimesAppearing();
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }
  classifyInteractors() {
    if (!!this.interactorsSorting && !!this.enrichedInteractors && this.enrichedInteractors.length > 0) {
      if (this.interactorsSorting === "Type") {
        this.classifyInteractorsByType();
      } else if (this.interactorsSorting === "Organism") {
        this.classifyInteractorsByOrganism();
      } else {
        this.classifyInteractorsByOccurrence();
      }
    }
  }
  enrichInteractors() {
    this.enrichedInteractors = [];
    for (const interactor of this.interactors) {
      const isSubComplex = interactor.interactorType === "stable complex";
      const newEnrichedInteractor = {
        interactor,
        hidden: false,
        isSubComplex,
        expanded: false,
        subComponents: null,
        partOfComplex: [],
        timesAppearing: 0
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe((subComponents) => newEnrichedInteractor.subComponents = subComponents);
      }
      this.enrichedInteractors.push(newEnrichedInteractor);
    }
  }
  toggleSubcomplexExpandable(i) {
    this.enrichedInteractors[i].expanded = !this.enrichedInteractors[i].expanded;
    if (this.enrichedInteractors[i].expanded) {
      for (let j = 0; j < this.enrichedInteractors.length; j++) {
        if (i !== j) {
          this.enrichedInteractors[j].expanded = false;
        }
      }
      if (!!this.enrichedInteractors[i].subComponents) {
        const subInteractorIds = this.enrichedInteractors[i].subComponents.map((component) => component.identifier);
        for (let j = 0; j < this.enrichedInteractors.length; j++) {
          if (i !== j) {
            this.enrichedInteractors[j].hidden = !!subInteractorIds.includes(this.enrichedInteractors[j].interactor.identifier);
          }
        }
      }
    } else {
      for (let j = 0; j < this.enrichedInteractors.length; j++) {
        this.enrichedInteractors[j].hidden = false;
      }
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }
  loadSubInteractors(interactor) {
    const foundComplex = this.complexes.find((complex) => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier).pipe(map((complex) => complex?.interactors));
    }
  }
  calculateAllStartAndEndIndexes() {
    this.enrichedComplexes = [];
    for (const complex of this.complexes) {
      this.enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
    }
  }
  getMinValue(valueA, valueB) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.min(valueA, valueB);
  }
  getMaxValue(valueA, valueB) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.max(valueA, valueB);
  }
  calculateStartAndEndIndexes(complex) {
    const enrichedComplex = {
      complex,
      startInteractorIndex: null,
      endInteractorIndex: null,
      startSubComponentIndex: null,
      endSubComponentIndex: null,
      startInteractorIncludedWhenExpanded: true
    };
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      if (!this.enrichedInteractors[i].hidden) {
        if (!!findInteractorInComplex(complex, this.enrichedInteractors[i].interactor.identifier, this.enrichedInteractors)) {
          enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
          if (enrichedComplex.startInteractorIndex === i) {
            enrichedComplex.startInteractorIncludedWhenExpanded = true;
          }
          enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
          if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
            if (this.enrichedInteractors[i].expanded) {
              enrichedComplex.startSubComponentIndex = -1;
              enrichedComplex.endSubComponentIndex = this.enrichedInteractors[i].subComponents.length - 1;
            }
          }
        } else if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents && this.enrichedInteractors[i].expanded) {
          for (let k = 0; k < this.enrichedInteractors[i].subComponents.length; k++) {
            if (!!findInteractorInComplex(complex, this.enrichedInteractors[i].subComponents[k].identifier, this.enrichedInteractors)) {
              enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
              if (enrichedComplex.startInteractorIndex === i) {
                enrichedComplex.startInteractorIncludedWhenExpanded = false;
              }
              enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
              enrichedComplex.startSubComponentIndex = this.getMinValue(enrichedComplex.startSubComponentIndex, k);
              enrichedComplex.endSubComponentIndex = this.getMaxValue(enrichedComplex.endSubComponentIndex, k);
            }
          }
        }
      }
    }
    return enrichedComplex;
  }
  classifyInteractorsByOrganism() {
    this.enrichedInteractors.sort((a, b) => {
      if (b.interactor.organismName === a.interactor.organismName) {
        return b.timesAppearing - a.timesAppearing;
      } else {
        const organismBTimesAppearing = this._timesAppearingByOrganism.get(b.interactor.organismName);
        const organismATimesAppearing = this._timesAppearingByOrganism.get(a.interactor.organismName);
        if (organismBTimesAppearing === organismATimesAppearing) {
          return b.interactor.organismName.localeCompare(a.interactor.organismName);
        } else {
          return organismBTimesAppearing - organismATimesAppearing;
        }
      }
    });
    this.rangeOfInteractorOrganism();
  }
  classifyInteractorsByType() {
    this.enrichedInteractors.sort((a, b) => {
      if (b.interactor.interactorType === a.interactor.interactorType) {
        return b.timesAppearing - a.timesAppearing;
      } else {
        const typeBTimesAppearing = this._timesAppearingByType.get(b.interactor.interactorType);
        const typeATimesAppearing = this._timesAppearingByType.get(a.interactor.interactorType);
        if (typeBTimesAppearing === typeATimesAppearing) {
          return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
        } else {
          return typeBTimesAppearing - typeATimesAppearing;
        }
      }
    });
    this.rangeOfInteractorType();
  }
  classifyInteractorsByOccurrence() {
    this.enrichedInteractors.sort((a, b) => b.timesAppearing - a.timesAppearing);
    this.ranges = [];
  }
  rangeOfInteractorType() {
    const ranges = [];
    let length = 0;
    let start = null;
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      const oneType = [];
      if (!this.enrichedInteractors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this.enrichedInteractors[i + 1] || this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded || this.enrichedInteractors[i].interactor.interactorType !== this.enrichedInteractors[i + 1].interactor.interactorType) {
        if (start !== null) {
          oneType.push(this.enrichedInteractors[i].interactor.interactorType, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }
  rangeOfInteractorOrganism() {
    const ranges = [];
    let length = 0;
    let start = null;
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      const oneType = [];
      if (!this.enrichedInteractors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this.enrichedInteractors[i + 1] || this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded || this.enrichedInteractors[i].interactor.organismName !== this.enrichedInteractors[i + 1].interactor.organismName) {
        if (start !== null) {
          oneType.push(this.enrichedInteractors[i].interactor.organismName, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }
  isInteractorSortingSet() {
    return this.interactorsSorting === "Type" || this.interactorsSorting === "Organism";
  }
  getExpandedRowClass(i, length) {
    if (i === 0) {
      if (length === 1) {
        return "singleExpandedRow";
      } else {
        return "firstExpandedRow";
      }
    } else if (i === length - 1) {
      return "lastExpandedRow";
    }
    return null;
  }
  calculateTimesAppearing() {
    this._timesAppearingByType = /* @__PURE__ */ new Map();
    this._timesAppearingByOrganism = /* @__PURE__ */ new Map();
    for (const oneInteractor of this.enrichedInteractors) {
      oneInteractor.timesAppearing = 0;
      for (const complex of this.complexes) {
        const match = findInteractorInComplex(complex, oneInteractor.interactor.identifier, this.enrichedInteractors);
        if (!!match) {
          oneInteractor.timesAppearing += 1;
          this._timesAppearingByType.set(oneInteractor.interactor.interactorType, (this._timesAppearingByType.get(oneInteractor.interactor.interactorType) || 0) + 1);
          this._timesAppearingByOrganism.set(oneInteractor.interactor.organismName, (this._timesAppearingByOrganism.get(oneInteractor.interactor.organismName) || 0) + 1);
        }
      }
    }
  }
}, __publicField(_a4, "ctorParameters", () => [
  { type: ComplexPortalService }
]), __publicField(_a4, "propDecorators", {
  complexes: [{ type: Input }],
  interactorsSorting: [{ type: Input }],
  interactors: [{ type: Input }],
  organismIconDisplay: [{ type: Input }],
  interactorTypeDisplay: [{ type: Input }],
  IDDisplay: [{ type: Input }]
}), _a4);
TableInteractorColumnComponent = __decorate4([
  Component({
    selector: "cp-table-interactor-column",
    template: table_interactor_column_component_default,
    styles: [table_interactor_column_component_default2]
  })
], TableInteractorColumnComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.html
var table_interactor_name_component_default = `<div class="container">
  <div class="nameAndIcons" [ngClass]="{inlineDisplay: interactorType==='stable complex'}">
    <i *ngIf="organismIconDisplay"
       class="{{interactorOrganismIcon}}"
       [matTooltip]="interactorOrganism"></i>

    <i *ngIf="interactorTypeDisplay"
       class="{{interactorTypeIcon}}"
       [matTooltip]="interactorType"></i>

    <div class="name" *ngIf="IDDisplay" [matTooltip]="interactorId"> {{ interactorName }}
    </div>
    <a *ngIf="IDDisplay"
       [routerLink]="['/complex/search']"
       [queryParams]="{query: interactorId, page: 1}"
       target="_blank">
      <i class="icon icon-functional small" data-icon="1"
         [matTooltip]="'More complexes containing ' + interactorName "></i>
    </a>

    <div class="nameCompact" *ngIf="!IDDisplay">
      <div class="name" *ngIf="!IDDisplay" [matTooltip]="'More information about ' + interactorName">
        <a *ngIf="!!identifierLink" href="{{identifierLink}}" target="_blank" class="externalLinkContainer">
          {{ interactorName }}
        </a>
      </div>
      <a [routerLink]="['/complex/search']"
         [queryParams]="{query: interactorId, page: 1}"
         target="_blank">
        <i class="icon icon-functional small" data-icon="1"
           [matTooltip]="'More complexes containing ' + interactorName "></i>
      </a>
    </div>
  </div>
  <cp-table-interactor-external-link
    *ngIf="IDDisplay"
    [interactorId]="interactorId"
    [identifierLink]="identifierLink"
    [interactorType]="interactorType"
    [isMainInteractor]="isMainInteractor"
    [IDDisplay]="IDDisplay"
    (externalLinkVisible)="externalLinkVisibleHandler($event)">
  </cp-table-interactor-external-link>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.css
var table_interactor_name_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.css */\na {\n  font-weight: bold;\n}\na,\na:visited {\n  color: #0e6f76;\n}\ni:not(.small) {\n  font-size: medium;\n}\n.nameAndIcons {\n  font-size: 14px;\n  display: flex;\n  width: inherit;\n  justify-content: flex-end;\n}\n.inlineDisplay {\n  display: flex;\n  justify-content: flex-end;\n}\n.name {\n  width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-align: end;\n  padding-right: 5px;\n}\n.nameCompact {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n/*# sourceMappingURL=table-interactor-name.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.ts
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a5;
var TableInteractorNameComponent = (_a5 = class {
  constructor() {
    __publicField(this, "interactorName");
    __publicField(this, "interactorType");
    __publicField(this, "interactorId");
    __publicField(this, "interactorOrganism");
    __publicField(this, "identifierLink");
    __publicField(this, "organismIconDisplay");
    __publicField(this, "interactorTypeDisplay");
    __publicField(this, "IDDisplay");
    __publicField(this, "isMainInteractor");
    __publicField(this, "interactorTypeIcon");
    __publicField(this, "interactorOrganismIcon");
    __publicField(this, "externalLinkVisible");
  }
  ngOnInit() {
    this.interactorTypeIcon = interactorTypeIcon(this.interactorType);
    this.interactorOrganismIcon = organismIcon(this.interactorOrganism);
  }
  externalLinkVisibleHandler(isVisible) {
    this.externalLinkVisible = isVisible;
  }
}, __publicField(_a5, "propDecorators", {
  interactorName: [{ type: Input }],
  interactorType: [{ type: Input }],
  interactorId: [{ type: Input }],
  interactorOrganism: [{ type: Input }],
  identifierLink: [{ type: Input }],
  organismIconDisplay: [{ type: Input }],
  interactorTypeDisplay: [{ type: Input }],
  IDDisplay: [{ type: Input }],
  isMainInteractor: [{ type: Input }]
}), _a5);
TableInteractorNameComponent = __decorate5([
  Component({
    selector: "cp-table-interactor-name",
    template: table_interactor_name_component_default,
    styles: [table_interactor_name_component_default2]
  })
], TableInteractorNameComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.html
var table_interactor_external_link_component_default = `<div class="externalLinkContainer" [matTooltip]="'More information about ' + interactorId">
  <a *ngIf="externalLinkVisible" href="{{identifierLink}}" target="_blank" class="externalLinkContainer">
    {{ interactorId }}
    <i class="icon icon-generic small" data-icon="x" title="More information about {{ interactorId }}"></i>
  </a>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.css
var table_interactor_external_link_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.css */\na {\n  font-weight: normal;\n}\na,\na:visited {\n  color: #0e6f76;\n}\ni:not(.small) {\n  font-size: large;\n}\n.externalLinkContainer {\n  justify-content: end;\n  grid-gap: 5px;\n  font-size: 14px;\n  line-break: anywhere;\n  word-break: break-word;\n}\n/*# sourceMappingURL=table-interactor-external-link.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.ts
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a6;
var TableInteractorExternalLinkComponent = (_a6 = class {
  constructor() {
    __publicField(this, "interactorId");
    __publicField(this, "identifierLink");
    __publicField(this, "interactorType");
    __publicField(this, "isMainInteractor");
    __publicField(this, "IDDisplay");
    __publicField(this, "externalLinkVisible", new EventEmitter());
  }
  ngOnInit() {
    this.showExternalLink();
  }
  showExternalLink() {
    if (this.isMainInteractor && this.interactorType === "stable complex") {
      this.externalLinkVisible.emit(false);
      return false;
    }
    this.externalLinkVisible.emit(!!this.identifierLink);
    return !!this.identifierLink;
  }
}, __publicField(_a6, "propDecorators", {
  interactorId: [{ type: Input }],
  identifierLink: [{ type: Input }],
  interactorType: [{ type: Input }],
  isMainInteractor: [{ type: Input }],
  IDDisplay: [{ type: Input }],
  externalLinkVisible: [{ type: Output }]
}), _a6);
TableInteractorExternalLinkComponent = __decorate6([
  Component({
    selector: "cp-table-interactor-external-link",
    template: table_interactor_external_link_component_default,
    styles: [table_interactor_external_link_component_default2]
  })
], TableInteractorExternalLinkComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.html
var table_interactor_stoichiometry_component_default = '<ng-container>\n  <div class="stoichNum" [matTooltip]="stoichiometryText">\n    {{ stoichiometryValue }}\n  </div>\n</ng-container>\n';

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css
var table_interactor_stoichiometry_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css */\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: var(--primary);\n  text-align: center;\n  padding-top: 0.5ch;\n  color: var(--on-primary);\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=table-interactor-stoichiometry.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.ts
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a7;
var TableInteractorStoichiometryComponent = (_a7 = class {
  constructor() {
    __publicField(this, "stoichiometryText");
    __publicField(this, "stoichiometryValue");
  }
}, __publicField(_a7, "propDecorators", {
  stoichiometryText: [{ type: Input }],
  stoichiometryValue: [{ type: Input }]
}), _a7);
TableInteractorStoichiometryComponent = __decorate7([
  Component({
    selector: "cp-table-interactor-stoichiometry",
    template: table_interactor_stoichiometry_component_default,
    styles: [table_interactor_stoichiometry_component_default2]
  })
], TableInteractorStoichiometryComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.html
var table_main_interactor_component_default = '<div [ngClass]="topLineClass"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf="!!interactorComponent"\n  [stoichiometryText]="interactorComponent.stochiometryText"\n  [stoichiometryValue]="interactorComponent.stochiometryValueFormatted"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]="bottomLineClass"></div>\n';

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css
var table_main_interactor_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-wrap: nowrap;\n}\n:host * {\n  flex: 1;\n}\n.verticalLine,\n.transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  min-height: 50%;\n  z-index: 0;\n  position: relative;\n  height: 50%;\n}\n.verticalLine {\n  border-right: 3px solid var(--primary);\n}\n.transparentVerticalLine {\n  border-right: 0;\n}\n/*# sourceMappingURL=table-main-interactor.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.ts
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a8;
var TableMainInteractorComponent = (_a8 = class {
  constructor() {
    __publicField(this, "complex");
    __publicField(this, "i");
    __publicField(this, "enrichedInteractors");
    __publicField(this, "interactorComponent");
    __publicField(this, "topLineClass");
    __publicField(this, "bottomLineClass");
  }
  ngOnChanges() {
    this.interactorComponent = findInteractorInComplex(this.complex.complex, this.interactor.interactor.identifier, this.enrichedInteractors);
    this.topLineClass = this.displayTopLineClass(this.complex, this.i);
    this.bottomLineClass = this.displayBottomLineClass(this.complex, this.i);
  }
  get interactor() {
    return this.enrichedInteractors[this.i];
  }
  displayTopLineClass(complex, interactorIndex) {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return "verticalLine";
    }
    if (this.doesLineEndOnInteractorCell(complex, interactorIndex) && !this.doesLineStartOnInteractorCell(complex, interactorIndex)) {
      return "verticalLine";
    }
    return "transparentVerticalLine";
  }
  displayBottomLineClass(complex, interactorIndex) {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return "verticalLine";
    }
    if (this.doesLineStartOnInteractorCell(complex, interactorIndex) && !this.doesLineEndOnInteractorCell(complex, interactorIndex)) {
      return "verticalLine";
    }
    return "transparentVerticalLine";
  }
  doesLineCrossInteractorCell(complex, interactorIndex) {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
        if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
          if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
            return true;
          }
        }
      }
    }
    return false;
  }
  doesLineStartOnInteractorCell(complex, interactorIndex) {
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
      if (!this.enrichedInteractors[interactorIndex].isSubComplex) {
        return true;
      }
      if (complex.startInteractorIncludedWhenExpanded) {
        return true;
      }
    }
    return false;
  }
  doesLineEndOnInteractorCell(complex, interactorIndex) {
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
      if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
        if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}, __publicField(_a8, "propDecorators", {
  complex: [{ type: Input }],
  i: [{ type: Input }],
  enrichedInteractors: [{ type: Input }]
}), _a8);
TableMainInteractorComponent = __decorate8([
  Component({
    selector: "cp-table-main-interactor",
    template: table_main_interactor_component_default,
    styles: [table_main_interactor_component_default2]
  })
], TableMainInteractorComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.html
var table_subcomponent_interactor_component_default = '<div [ngClass]="displayTopLineClass"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf="!!interactorComponent"\n  [stoichiometryText]="interactorComponent.stochiometryText"\n  [stoichiometryValue]="interactorComponent.stochiometryValueFormatted"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]="displayBottomLineClass"></div>\n';

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css
var table_subcomponent_interactor_component_default2 = "/* src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css */\n.verticalLine,\n.transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n.verticalLine {\n  border-right: 3px solid #0e6f76;\n}\n.transparentVerticalLine {\n  border-right: 0;\n}\n/*# sourceMappingURL=table-subcomponent-interactor.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.ts
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a9;
var TableSubcomponentInteractorComponent = (_a9 = class {
  constructor() {
    __publicField(this, "complex");
    __publicField(this, "i");
    __publicField(this, "j");
    __publicField(this, "enrichedInteractors");
    __publicField(this, "interactorComponent");
    __publicField(this, "displayTopLineClass");
    __publicField(this, "displayBottomLineClass");
  }
  ngOnChanges() {
    this.interactorComponent = findInteractorInComplex(this.complex.complex, this.el.identifier, this.enrichedInteractors);
    this.displayTopLineClass = this.displayTopLineClassExpanded(this.complex, this.i, this.j);
    this.displayBottomLineClass = this.displayBottomLineClassExpanded(this.complex, this.i, this.j);
  }
  get interactor() {
    return this.enrichedInteractors[this.i];
  }
  get el() {
    return this.enrichedInteractors[this.i].subComponents[this.j];
  }
  displayTopLineClassExpanded(complex, interactorIndex, subComponentIndex) {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return "verticalLine";
    }
    if (this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) && !this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return "verticalLine";
    }
    return "transparentVerticalLine";
  }
  displayBottomLineClassExpanded(complex, interactorIndex, subComponentIndex) {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return "verticalLine";
    }
    if (this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) && !this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return "verticalLine";
    }
    return "transparentVerticalLine";
  }
  doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex) {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }
      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }
        if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }
        if (complex.startSubComponentIndex < subComponentIndex && complex.endInteractorIndex > interactorIndex) {
          return true;
        }
      }
    }
    return false;
  }
  doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
      if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
        return !complex.complex.interactors.some((component) => this.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);
      }
    }
    return false;
  }
  doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
      if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
        return true;
      }
    }
    return false;
  }
}, __publicField(_a9, "propDecorators", {
  complex: [{ type: Input }],
  i: [{ type: Input }],
  j: [{ type: Input }],
  enrichedInteractors: [{ type: Input }]
}), _a9);
TableSubcomponentInteractorComponent = __decorate9([
  Component({
    selector: "cp-table-subcomponent-interactor",
    template: table_subcomponent_interactor_component_default,
    styles: [table_subcomponent_interactor_component_default2]
  })
], TableSubcomponentInteractorComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.html
var complex_navigator_buttons_component_default = `<div class="filters">
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
            <input type="checkbox" name="organism" value="organism" class="checkbox" [checked]="organismIconDisplay"
                   (change)="DisplayingOrganism()">
            Organism
          </li>
          <li>
            <input type="checkbox" name="type" value="type" class="checkbox" [checked]="interactorTypeDisplay"
                   (change)="DisplayingType()">
            Type
          </li>
          <li>
            <input type="checkbox" name="id" value="id" class="checkbox" [checked]="IDDisplay"
                   (change)="DisplayingID()">
            Interactor ID
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css
var complex_navigator_buttons_component_default2 = "/* src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css */\n.typeOfSorting {\n  display: none;\n}\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  z-index: 5;\n}\n.typeOfSorting .button {\n  border-right: 1px solid white;\n  font-size: 14px;\n}\n.filters {\n  display: flex;\n  justify-content: center;\n  grid-gap: 10px;\n  height: 67px;\n  z-index: 5;\n  text-align: center;\n}\n.displaySize {\n  display: none;\n}\n.detailedDisplayOptions {\n  display: none;\n}\nlabel {\n  color: var(--on-primary);\n}\n.dropdown:hover .displaySize {\n  display: flex;\n  list-style: none;\n  width: 300px;\n  background-color: var(--primary);\n  color: var(--on-primary);\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  height: 40px;\n  align-content: center;\n  z-index: 5;\n}\n.dropdown:hover .displaySize li {\n  width: 200px;\n  background-color: var(--primary);\n  margin-left: -21px;\n  text-align: left;\n  padding-left: 6px;\n  z-index: 5;\n}\nli {\n  text-align: center;\n  align-items: center;\n  font-size: 14px;\n  border-left: 1px solid white;\n  padding-top: 10px;\n  max-width: 171px;\n}\n.detailedDisplay:hover .detailedDisplayOptions {\n  display: flex;\n  list-style: none;\n  align-content: baseline;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  margin-left: 14px;\n}\n.detailedDisplayOptions li {\n  text-align: left;\n  z-index: 5;\n}\n/*# sourceMappingURL=complex-navigator-buttons.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.ts
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a10;
var ComplexNavigatorButtonsComponent = (_a10 = class {
  constructor() {
    __publicField(this, "interactorsSortingChange", new EventEmitter());
    __publicField(this, "organismIconDisplayChange", new EventEmitter());
    __publicField(this, "interactorTypeDisplayChange", new EventEmitter());
    __publicField(this, "IDDisplayChange", new EventEmitter());
    __publicField(this, "interactorsSorting");
    __publicField(this, "organismIconDisplay");
    __publicField(this, "interactorTypeDisplay");
    __publicField(this, "IDDisplay");
    __publicField(this, "typeOfDisplay");
  }
  ngOnInit() {
    this.updateDisplay();
  }
  interactorsSortingChanges(typeOfSorting) {
    this.interactorsSortingChange.emit(typeOfSorting);
    if (this.typeOfDisplay === "detailed") {
      if (typeOfSorting === "Type") {
        this.interactorTypeDisplay = false;
        this.organismIconDisplay = true;
      } else if (typeOfSorting === "Organism") {
        this.organismIconDisplay = false;
        this.interactorTypeDisplay = true;
      }
      this.updateDisplay();
    }
  }
  DisplayingOrganism() {
    this.organismIconDisplay = !this.organismIconDisplay;
    this.updateDisplay();
  }
  DisplayingType() {
    this.interactorTypeDisplay = !this.interactorTypeDisplay;
    this.updateDisplay();
  }
  DisplayingID() {
    this.IDDisplay = !this.IDDisplay;
    this.updateDisplay();
  }
  setDisplayType(type) {
    if (type === "compact") {
      this.compactDisplay();
    } else if (type === "detailed") {
      this.detailedDisplay();
    }
  }
  compactDisplay() {
    this.organismIconDisplay = false;
    this.interactorTypeDisplay = false;
    this.IDDisplay = false;
    this.typeOfDisplay = "compact";
    this.changesEmitter();
  }
  detailedDisplay() {
    this.organismIconDisplay = true;
    this.interactorTypeDisplay = true;
    this.IDDisplay = true;
    this.typeOfDisplay = "detailed";
    this.changesEmitter();
  }
  updateDisplay() {
    if (this.organismIconDisplay || this.interactorTypeDisplay || this.IDDisplay) {
      this.typeOfDisplay = "detailed";
    } else {
      this.typeOfDisplay = "compact";
    }
    this.changesEmitter();
  }
  changesEmitter() {
    this.organismIconDisplayChange.emit(this.organismIconDisplay);
    this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
    this.IDDisplayChange.emit(this.IDDisplay);
  }
}, __publicField(_a10, "propDecorators", {
  interactorsSortingChange: [{ type: Output }],
  organismIconDisplayChange: [{ type: Output }],
  interactorTypeDisplayChange: [{ type: Output }],
  IDDisplayChange: [{ type: Output }],
  interactorsSorting: [{ type: Input }],
  organismIconDisplay: [{ type: Input }],
  interactorTypeDisplay: [{ type: Input }],
  IDDisplay: [{ type: Input }]
}), _a10);
ComplexNavigatorButtonsComponent = __decorate10([
  Component({
    selector: "cp-complex-navigator-buttons",
    template: complex_navigator_buttons_component_default,
    styles: [complex_navigator_buttons_component_default2]
  })
], ComplexNavigatorButtonsComponent);

// angular:jit:template:file:src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.html
var complex_list_display_buttons_component_default = `<div class="displayButton columns medium-12" [ngClass]="">
  <button type="submit" name="submit" class="button view-button"
          (click)="setListView()" [ngClass]="{'selected': !isDisplayComplexNavigatorView()}">
    View list
  </button>
  <button type="submit" name="submit" class="button view-button cnButton"
          (click)="setComplexNavigatorView()" [ngClass]="{'selected': isDisplayComplexNavigatorView()}">
    View Complex Navigator
    <span class="new-tag" [ngClass]="{'new-tag-selected': displayType === isDisplayComplexNavigatorView()}">NEW!</span>
  </button>
</div>
`;

// angular:jit:style:file:src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.css
var complex_list_display_buttons_component_default2 = "/* src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.css */\n.displayButton {\n  text-align: center;\n}\n.view-button {\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted var(--primary);\n}\n.view-button:hover {\n  color: var(--primary);\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted var(--primary);\n}\n.selected,\n.selected:hover {\n  background-color: var(--primary);\n  color: white;\n}\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n.new-tag-selected {\n  color: yellow;\n}\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  animation: animateOutline 4s ease infinite;\n}\n.cnButton.selected {\n  animation: none;\n}\n@keyframes animateOutline {\n  0%, 50%, 100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n}\n/*# sourceMappingURL=complex-list-display-buttons.component.css.map */\n";

// src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.ts
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LIST_VIEW = "view_list";
var COMPLEX_NAVIGATOR_VIEW = "view_complex_navigator";
var _a11;
var ComplexListDisplayButtonsComponent = (_a11 = class {
  constructor() {
    __publicField(this, "displayType");
    __publicField(this, "displayTypeChange", new EventEmitter());
  }
  setListView() {
    this.displayType = LIST_VIEW;
    this.displayTypeChange.emit(this.displayType);
  }
  setComplexNavigatorView() {
    this.displayType = COMPLEX_NAVIGATOR_VIEW;
    this.displayTypeChange.emit(this.displayType);
  }
  isDisplayComplexNavigatorView() {
    return this.displayType === COMPLEX_NAVIGATOR_VIEW;
  }
}, __publicField(_a11, "propDecorators", {
  displayType: [{ type: Input }],
  displayTypeChange: [{ type: Output }]
}), _a11);
ComplexListDisplayButtonsComponent = __decorate11([
  Component({
    selector: "cp-complex-list-display-buttons",
    template: complex_list_display_buttons_component_default,
    styles: [complex_list_display_buttons_component_default2]
  })
], ComplexListDisplayButtonsComponent);

// src/app/complex/complex-results/complex-navigator/complex-navigator.module.ts
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComplexNavigatorModule = class ComplexNavigatorModule2 {
};
ComplexNavigatorModule = __decorate12([
  NgModule({
    imports: [
      RouterModule,
      CommonModule,
      ProgressSpinnerComponent,
      MarkdownModule,
      MatTooltipModule
    ],
    exports: [
      ComplexNavigatorComponent,
      ComplexListDisplayButtonsComponent
    ],
    declarations: [
      ComplexNavigatorComponent,
      TableStructureComponent,
      TableHeaderComponent,
      TableInteractorColumnComponent,
      TableInteractorNameComponent,
      TableInteractorExternalLinkComponent,
      TableInteractorStoichiometryComponent,
      TableMainInteractorComponent,
      TableSubcomponentInteractorComponent,
      ComplexNavigatorButtonsComponent,
      ComplexListDisplayButtonsComponent
    ]
  })
], ComplexNavigatorModule);

export {
  LIST_VIEW,
  COMPLEX_NAVIGATOR_VIEW,
  interactorTypeIcon,
  organismIcon,
  ComplexNavigatorModule
};
//# sourceMappingURL=chunk-4ASGIWF7.js.map
