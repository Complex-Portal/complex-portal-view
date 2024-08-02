"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts"],{

/***/ 82682:
/*!*************************************************!*\
  !*** ./src/app/complex/complex-portal-utils.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interactorTypeIcon": function() { return /* binding */ interactorTypeIcon; },
/* harmony export */   "organismIcon": function() { return /* binding */ organismIcon; }
/* harmony export */ });
function interactorTypeIcon(type) {
    switch (type) {
        case 'small molecule':
            return 'icon icon-conceptual icon-chemical';
        case 'protein':
        case 'peptide':
            return 'icon icon-conceptual icon-structures-3d';
        case 'stable complex':
            return 'icon icon-conceptual icon-systems';
        case 'molecule set':
            return 'icon icon-generic icon-math';
        case 'single stranded deoxyribonucleic acid':
        case 'double stranded deoxyribonucleic acid':
        case 'small nuclear rna':
        case 'small nucleolar rna':
        case 'ribosomal rna':
        case 'messenger rna':
        case 'transfer rna':
        case 'signal recognition particle rna':
        case 'ribonucleic acid':
        case 'nucleic acid':
        case 'long non-coding ribonucleic acid':
            return 'icon icon-conceptual icon-dna';
    }
}
function organismIcon(organism) {
    const formattedName = formatOrganismName(organism);
    switch (formattedName) {
        case 'Homo sapiens':
            return 'icon icon-species icon-human';
        case 'Mus musculus':
            return 'icon icon-species icon-mouse';
        case 'Schizosaccharomyces pombe':
        case 'Saccharomyces cerevisiae':
            return 'icon icon-species icon-yeast';
        case 'Escherichia coli':
        case 'Pseudomonas aeruginosa':
            return 'icon icon-species icon-ecoli';
        case 'Rattus norvegicus':
            return 'icon icon-species icon-rat';
        case 'Caenorhabditis elegans':
            return 'icon icon-species icon-c-elegans';
        case 'Gallus gallus':
            return 'icon icon-species icon-chicken';
        case 'Drosophila melanogaster':
            return 'icon icon-species icon-fly';
        case 'Bos taurus':
            return 'icon icon-species icon-cow';
        case 'Oryctolagus cuniculus':
            return 'icon icon-species icon-rabbit';
        case 'Ovis aries':
            return 'icon icon-species icon-sheep';
        case 'Xenopus laevis':
            return 'icon icon-species icon-frog';
        case 'Canis lupus':
        case 'Canis familiaris':
            return 'icon icon-species icon-dog';
        case 'Vibrio cholerae':
            return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
        case 'Crotalus durissus':
            return 'assets/images/EMBL_Species_RattleSnake.svg';
        case 'Sus scrofa':
            return 'icon icon-species icon-pig';
        case 'Torpedo marmorata':
        case 'Tetronarce californica':
            return 'icon icon-species icon-ray';
        case 'Lymnaea stagnalis':
            return 'icon icon-species icon-snail';
        case 'Arabidopsis thaliana':
            return 'icon icon-species icon-brassica';
        case 'Danio rerio':
            return 'icon icon-species icon-zebrafish';
        case 'Severe acute':
        case 'Human SARS':
        case 'SARS-CoV-2':
        case 'Middle East':
        case 'Human betacoronavirus':
            return 'icon icon-species icon-virus';
    }
    return '';
}
function formatOrganismName(name) {
    return (name || '?')
        .split(';')[0]
        .split(' ').slice(0, 2)
        .join(' ');
}


/***/ }),

/***/ 8507:
/*!**********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexNavigatorButtonsComponent": function() { return /* binding */ ComplexNavigatorButtonsComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-buttons.component.html */ 53226);
/* harmony import */ var _complex_navigator_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-navigator-buttons.component.css */ 1604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexNavigatorButtonsComponent = class ComplexNavigatorButtonsComponent {
    constructor() {
        this.interactorsSortingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.organismIconDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.interactorTypeDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.IDDisplayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.updateDisplay();
    }
    interactorsSortingChanges(typeOfSorting) {
        this.interactorsSortingChange.emit(typeOfSorting);
        if (this.typeOfDisplay === 'detailed') {
            if (typeOfSorting === 'Type') {
                this.interactorTypeDisplay = false;
                this.organismIconDisplay = true;
            }
            else if (typeOfSorting === 'Organism') {
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
        if (type === 'compact') {
            this.compactDisplay();
        }
        else if (type === 'detailed') {
            this.detailedDisplay();
        }
    }
    compactDisplay() {
        this.organismIconDisplay = false;
        this.interactorTypeDisplay = false;
        this.IDDisplay = false;
        this.typeOfDisplay = 'compact';
        this.changesEmitter();
    }
    detailedDisplay() {
        this.organismIconDisplay = true;
        this.interactorTypeDisplay = true;
        this.IDDisplay = true;
        this.typeOfDisplay = 'detailed';
        this.changesEmitter();
    }
    updateDisplay() {
        if (this.organismIconDisplay || this.interactorTypeDisplay || this.IDDisplay) {
            this.typeOfDisplay = 'detailed';
        }
        else {
            this.typeOfDisplay = 'compact';
        }
        this.changesEmitter();
    }
    changesEmitter() {
        this.organismIconDisplayChange.emit(this.organismIconDisplay);
        this.interactorTypeDisplayChange.emit(this.interactorTypeDisplay);
        this.IDDisplayChange.emit(this.IDDisplay);
    }
};
ComplexNavigatorButtonsComponent.propDecorators = {
    interactorsSortingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    organismIconDisplayChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    interactorTypeDisplayChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    IDDisplayChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    organismIconDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorTypeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexNavigatorButtonsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator-buttons',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorButtonsComponent);



/***/ }),

/***/ 99915:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIST_VIEW": function() { return /* binding */ LIST_VIEW; },
/* harmony export */   "COMPLEX_NAVIGATOR_VIEW": function() { return /* binding */ COMPLEX_NAVIGATOR_VIEW; },
/* harmony export */   "ComplexListDisplayButtonsComponent": function() { return /* binding */ ComplexListDisplayButtonsComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_display_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list-display-buttons.component.html */ 5869);
/* harmony import */ var _complex_list_display_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-list-display-buttons.component.css */ 16794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LIST_VIEW = 'view_list';
const COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';
let ComplexListDisplayButtonsComponent = class ComplexListDisplayButtonsComponent {
    constructor() {
        this.displayTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
};
ComplexListDisplayButtonsComponent.propDecorators = {
    displayType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    displayTypeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ComplexListDisplayButtonsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-list-display-buttons',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_display_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_list_display_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexListDisplayButtonsComponent);



/***/ }),

/***/ 76549:
/*!******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexNavigatorComponent": function() { return /* binding */ ComplexNavigatorComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator.component.html */ 81779);
/* harmony import */ var _complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-navigator.component.css */ 14332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexNavigatorComponent = class ComplexNavigatorComponent {
    constructor() {
        this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.interactorsSorting = 'Occurrence';
        this.organismIconDisplay = true;
        this.interactorTypeDisplay = true;
        this.IDDisplay = true;
    }
};
ComplexNavigatorComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canAddComplexesToBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canRemoveComplexesFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onComplexRemovedFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ComplexNavigatorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorComponent);



/***/ }),

/***/ 60090:
/*!***************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexNavigatorModule": function() { return /* binding */ ComplexNavigatorModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-markdown */ 36731);
/* harmony import */ var _complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-navigator.component */ 76549);
/* harmony import */ var _table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-structure/table-structure.component */ 14915);
/* harmony import */ var _table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-structure/table-header/table-header.component */ 40969);
/* harmony import */ var _table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-interactor-column.component */ 48774);
/* harmony import */ var _table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component */ 84768);
/* harmony import */ var _table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component */ 42423);
/* harmony import */ var _table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component */ 50048);
/* harmony import */ var _table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component */ 37161);
/* harmony import */ var _table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component */ 68677);
/* harmony import */ var _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../complex-navigator-buttons/complex-navigator-buttons.component */ 8507);
/* harmony import */ var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loading-indicators/progress-spinner/progress-spinner.module */ 45103);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./complex-list-display-buttons/complex-list-display-buttons.component */ 99915);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let ComplexNavigatorModule = class ComplexNavigatorModule {
};
ComplexNavigatorModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinnerModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_15__.MarkdownModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule
        ],
        exports: [
            _complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__.ComplexNavigatorComponent,
            _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__.ComplexListDisplayButtonsComponent
        ],
        declarations: [
            _complex_navigator_component__WEBPACK_IMPORTED_MODULE_0__.ComplexNavigatorComponent,
            _table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_1__.TableStructureComponent,
            _table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__.TableHeaderComponent,
            _table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_3__.TableInteractorColumnComponent,
            _table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_4__.TableInteractorNameComponent,
            _table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_5__.TableInteractorExternalLinkComponent,
            _table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_6__.TableInteractorStoichiometryComponent,
            _table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_7__.TableMainInteractorComponent,
            _table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_8__.TableSubcomponentInteractorComponent,
            _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_9__.ComplexNavigatorButtonsComponent,
            _complex_list_display_buttons_complex_list_display_buttons_component__WEBPACK_IMPORTED_MODULE_11__.ComplexListDisplayButtonsComponent
        ]
    })
], ComplexNavigatorModule);



/***/ }),

/***/ 40969:
/*!******************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableHeaderComponent": function() { return /* binding */ TableHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-header.component.html */ 92341);
/* harmony import */ var _table_header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-header.component.css */ 32149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../complex-portal-utils */ 82682);
/* harmony import */ var _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/basket/service/basket.service */ 69510);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TableHeaderComponent = class TableHeaderComponent {
    constructor(basketService) {
        this.basketService = basketService;
        this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    isInteractorSortingSet() {
        return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
    }
    iconOrganism(organismName) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.organismIcon)(organismName);
    }
    toggleBasket(complexName, complexAC, complexOrganism) {
        if (this.isInBasket(complexAC)) {
            this.removeComplex(complexAC);
        }
        else {
            this.saveComplex(complexName, complexAC, complexOrganism);
        }
    }
    saveComplex(complexName, complexAC, complexOrganism) {
        this.basketService.saveInBasket(complexName, complexAC, complexOrganism);
    }
    removeComplex(complexAC) {
        const key = this.basketService.getKey(complexAC);
        this.basketService.deleteFromBasket(key);
        this.onComplexRemovedFromBasket.emit(complexAC);
    }
    isInBasket(complexAC) {
        return this.basketService.isInBasket(complexAC);
    }
};
TableHeaderComponent.ctorParameters = () => [
    { type: _shared_basket_service_basket_service__WEBPACK_IMPORTED_MODULE_3__.BasketService }
];
TableHeaderComponent.propDecorators = {
    complexes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    canAddComplexesToBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    canRemoveComplexesFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onComplexRemovedFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
TableHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-table-header',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableHeaderComponent);



/***/ }),

/***/ 65766:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/complex-navigator-utils.ts ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentWithStoichiometry": function() { return /* binding */ ComponentWithStoichiometry; },
/* harmony export */   "findInteractorInComplex": function() { return /* binding */ findInteractorInComplex; }
/* harmony export */ });
class ComponentWithStoichiometry {
}
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
// Private functions
function findInteractorInComplexComponents(complexComponents, interactorId, enrichedInteractors) {
    // We look for the interactor in the complex, as one of the components, or as part of any subcomplex of the complex, recursively.
    // Even if we find a match for the interactor as one of the complex components, we keep looking at other components, as the interactor
    // could also be part of a subcomplex, so the stoichiometry would need to be added for all matches.
    let interactorFound = false;
    let stoichiometry = null;
    // We iterate through all the components of the complex to find matches
    for (const complexComponent of complexComponents) {
        const interactorMatch = findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors);
        if (!!interactorMatch) {
            // We found a match for the interactor, on this component, or on a subcomponent of it in the case of a subcomplex
            interactorFound = true;
            // If we have any stoichiometry for the component, we add it to the total stoichiometry
            if (!!interactorMatch.stochiometryValue) {
                if (!!stoichiometry) {
                    stoichiometry = [
                        stoichiometry[0] + interactorMatch.stochiometryValue[0],
                        stoichiometry[1] + interactorMatch.stochiometryValue[1]
                    ];
                }
                else {
                    stoichiometry = [
                        interactorMatch.stochiometryValue[0],
                        interactorMatch.stochiometryValue[1]
                    ];
                }
            }
        }
    }
    // If we have found the interactor as part of one of the complex components, or part of a subcomplex, we return it
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
        // The interactor is the complex component we are currently checking
        return {
            identifier: interactorId,
            stochiometryValue: componentStoichiometry
        };
    }
    if (complexComponent.interactorType === 'stable complex') {
        // If the id does not match, and the component is a subcomplex, then we can look for the interactor in the subcomplex components
        const complexComponentInteractor = enrichedInteractors.find(interactor => interactor.interactor.identifier === complexComponent.identifier);
        if (!!complexComponentInteractor && !!complexComponentInteractor.subComponents) {
            const subComponentsMatch = findInteractorInComplexComponents(complexComponentInteractor.subComponents, interactorId, enrichedInteractors);
            if (!!subComponentsMatch) {
                // We have found the interactor in the subcomplex
                if (!!subComponentsMatch.stochiometryValue) {
                    if (!!componentStoichiometry) {
                        // If we have stoichiometry for both the component and the subcomponent, we add both
                        return {
                            identifier: interactorId,
                            stochiometryValue: [
                                componentStoichiometry[0] * subComponentsMatch.stochiometryValue[0],
                                componentStoichiometry[1] * subComponentsMatch.stochiometryValue[1]
                            ]
                        };
                    }
                    else {
                        // If we only have stoichiometry for the subcomponent, we use that stoichiometry
                        return {
                            identifier: interactorId,
                            stochiometryValue: subComponentsMatch.stochiometryValue
                        };
                    }
                }
                else {
                    // If we only have stoichiometry for the component, we use that stoichiometry
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
    const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
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
        }
        else {
            return `${minValue}-${maxValue}`;
        }
    }
    return ' '; // sometimes we don't have the stoichiometry value
}
function getStoichiometryText(stoichiometry) {
    if (!!stoichiometry) {
        return 'Stoichiometry values: minValue: ' + stoichiometry[0] + ', maxValue: ' + stoichiometry[1];
    }
    else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
    }
}


/***/ }),

/***/ 48774:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.ts ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrichedInteractor": function() { return /* binding */ EnrichedInteractor; },
/* harmony export */   "EnrichedComplex": function() { return /* binding */ EnrichedComplex; },
/* harmony export */   "TableInteractorColumnComponent": function() { return /* binding */ TableInteractorColumnComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-column.component.html */ 77194);
/* harmony import */ var _table_interactor_column_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-interactor-column.component.css */ 88066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/complex-portal.service */ 20658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-navigator-utils */ 65766);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class EnrichedInteractor {
}
class EnrichedComplex {
}
let TableInteractorColumnComponent = class TableInteractorColumnComponent {
    constructor(complexPortalService) {
        this.complexPortalService = complexPortalService;
    }
    ngOnChanges(changes) {
        if (!!changes['interactors']) {
            this.enrichInteractors();
            this.calculateTimesAppearing();
        }
        this.classifyInteractors();
        this.calculateAllStartAndEndIndexes();
    }
    classifyInteractors() {
        if (!!this.interactorsSorting && !!this.enrichedInteractors && this.enrichedInteractors.length > 0) {
            if (this.interactorsSorting === 'Type') {
                this.classifyInteractorsByType();
            }
            else if (this.interactorsSorting === 'Organism') {
                this.classifyInteractorsByOrganism();
            }
            else {
                this.classifyInteractorsByOccurrence();
            }
        }
    }
    enrichInteractors() {
        this.enrichedInteractors = [];
        for (const interactor of this.interactors) {
            const isSubComplex = interactor.interactorType === 'stable complex';
            const newEnrichedInteractor = {
                interactor,
                hidden: false,
                isSubComplex,
                expanded: false,
                subComponents: null,
                partOfComplex: [],
                timesAppearing: 0,
            };
            if (isSubComplex) {
                this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
            }
            this.enrichedInteractors.push(newEnrichedInteractor);
        }
    }
    toggleSubcomplexExpandable(i) {
        this.enrichedInteractors[i].expanded = !this.enrichedInteractors[i].expanded;
        if (this.enrichedInteractors[i].expanded) {
            // EnrichedInteractor has been expanded, we need to:
            // 1. Collapse the other ones, in case there is any other expanded
            for (let j = 0; j < this.enrichedInteractors.length; j++) {
                if (i !== j) {
                    this.enrichedInteractors[j].expanded = false;
                }
            }
            // 2. Hide any interactor now displayed in the expanded section
            if (!!this.enrichedInteractors[i].subComponents) {
                const subInteractorIds = this.enrichedInteractors[i].subComponents.map(component => component.identifier);
                for (let j = 0; j < this.enrichedInteractors.length; j++) {
                    if (i !== j) {
                        this.enrichedInteractors[j].hidden = !!subInteractorIds.includes(this.enrichedInteractors[j].interactor.identifier);
                    }
                }
            }
        }
        else {
            // EnrichedInteractor has been collapsed, we need to:
            // 1. Display any interactor previously hidden
            for (let j = 0; j < this.enrichedInteractors.length; j++) {
                this.enrichedInteractors[j].hidden = false;
            }
        }
        // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
        this.classifyInteractors();
        this.calculateAllStartAndEndIndexes();
    }
    loadSubInteractors(interactor) {
        // this function returns the list of subcomponents of an interactor of type stable complex
        const foundComplex = this.complexes.find(complex => complex.complexAC === interactor.interactor.identifier);
        if (!!foundComplex) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(foundComplex.interactors);
        }
        else {
            // Actually call the back-end to fetch these
            return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(complex => complex === null || complex === void 0 ? void 0 : complex.interactors));
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
            startInteractorIncludedWhenExpanded: true,
        };
        // We iterate through the interactors to find the first and last one part of the complex
        // We do this to be able to draw a line connecting all interactors in the complex
        for (let i = 0; i < this.enrichedInteractors.length; i++) {
            if (!this.enrichedInteractors[i].hidden) {
                if (!!(0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, this.enrichedInteractors[i].interactor.identifier, this.enrichedInteractors)) {
                    // The interactor is part of the complex, we update the start and end indices for the interactors
                    // line as it may start in this interactor
                    enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                    if (enrichedComplex.startInteractorIndex === i) {
                        // The line starts in this interactor, so the line always starts in this interactor, even when expanded
                        enrichedComplex.startInteractorIncludedWhenExpanded = true;
                    }
                    enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                    // The interactor is a subcomplex
                    if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
                        if (this.enrichedInteractors[i].expanded) {
                            // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                            // of it. That means we need a line connecting all the subcomponents.
                            // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                            // and not at the first subcomponent
                            enrichedComplex.startSubComponentIndex = -1;
                            enrichedComplex.endSubComponentIndex = this.enrichedInteractors[i].subComponents.length - 1;
                        }
                    }
                }
                else if (this.enrichedInteractors[i].isSubComplex &&
                    !!this.enrichedInteractors[i].subComponents &&
                    this.enrichedInteractors[i].expanded) {
                    // The interactor is not part of the complex, but it is a subcomplex, and it is expanded.
                    // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
                    // In that case, the line could start or end on any of those subcomponents
                    for (let k = 0; k < this.enrichedInteractors[i].subComponents.length; k++) {
                        if (!!(0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, this.enrichedInteractors[i].subComponents[k].identifier, this.enrichedInteractors)) {
                            // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                            // line as it may start in this interactor
                            enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                            if (enrichedComplex.startInteractorIndex === i) {
                                // The line starts in a subcomponent of the interactor, but not on the interactor itself,
                                // so the line does not start in the interactor when expanded
                                enrichedComplex.startInteractorIncludedWhenExpanded = false;
                            }
                            enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                            // The subcomponent of this interactor is part of the complex, we update the start and end indices for the subcomponents
                            // line as it may start in this subcomponent
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
            }
            else {
                const organismBTimesAppearing = this._timesAppearingByOrganism.get(b.interactor.organismName);
                const organismATimesAppearing = this._timesAppearingByOrganism.get(a.interactor.organismName);
                if (organismBTimesAppearing === organismATimesAppearing) {
                    return b.interactor.organismName.localeCompare(a.interactor.organismName);
                }
                else {
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
            }
            else {
                const typeBTimesAppearing = this._timesAppearingByType.get(b.interactor.interactorType);
                const typeATimesAppearing = this._timesAppearingByType.get(a.interactor.interactorType);
                if (typeBTimesAppearing === typeATimesAppearing) {
                    return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
                }
                else {
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
        const ranges = []; // [type of interactor, first occurrence, last occurrence, length of the occurrence]
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
            if (!this.enrichedInteractors[i + 1]
                || (this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded)
                || this.enrichedInteractors[i].interactor.interactorType !== this.enrichedInteractors[i + 1].interactor.interactorType) {
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
        const ranges = []; // [type of interactor, first occurrence, last occurrence, length of the occurrence]
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
            if (!this.enrichedInteractors[i + 1]
                || (this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded)
                || this.enrichedInteractors[i].interactor.organismName !== this.enrichedInteractors[i + 1].interactor.organismName) {
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
        return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
    }
    getExpandedRowClass(i, length) {
        if (i === 0) {
            if (length === 1) {
                return 'singleExpandedRow';
            }
            else {
                return 'firstExpandedRow';
            }
        }
        else if (i === length - 1) {
            return 'lastExpandedRow';
        }
        return null;
    }
    calculateTimesAppearing() {
        // Initialise times appearing by type or organism
        this._timesAppearingByType = new Map();
        this._timesAppearingByOrganism = new Map();
        for (const oneInteractor of this.enrichedInteractors) {
            // Initialise times appearing for each interactor
            oneInteractor.timesAppearing = 0;
            for (const complex of this.complexes) {
                const match = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.findInteractorInComplex)(complex, oneInteractor.interactor.identifier, this.enrichedInteractors);
                if (!!match) {
                    // Update times appearing for the interactor
                    oneInteractor.timesAppearing += 1;
                    // Update times appearing for the interactor type
                    this._timesAppearingByType.set(oneInteractor.interactor.interactorType, (this._timesAppearingByType.get(oneInteractor.interactor.interactorType) || 0) + 1);
                    // Update times appearing for the interactor organism
                    this._timesAppearingByOrganism.set(oneInteractor.interactor.organismName, (this._timesAppearingByOrganism.get(oneInteractor.interactor.organismName) || 0) + 1);
                }
            }
        }
    }
};
TableInteractorColumnComponent.ctorParameters = () => [
    { type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService }
];
TableInteractorColumnComponent.propDecorators = {
    complexes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    organismIconDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    interactorTypeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
TableInteractorColumnComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'cp-table-interactor-column',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_interactor_column_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableInteractorColumnComponent);



/***/ }),

/***/ 42423:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInteractorExternalLinkComponent": function() { return /* binding */ TableInteractorExternalLinkComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-external-link.component.html */ 60908);
/* harmony import */ var _table_interactor_external_link_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-interactor-external-link.component.css */ 52504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TableInteractorExternalLinkComponent = class TableInteractorExternalLinkComponent {
    constructor() {
        this.externalLinkVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.showExternalLink();
    }
    showExternalLink() {
        if (this.isMainInteractor && this.interactorType === 'stable complex') {
            this.externalLinkVisible.emit(false);
            return false;
        }
        this.externalLinkVisible.emit(!!this.identifierLink);
        return !!this.identifierLink;
    }
};
TableInteractorExternalLinkComponent.propDecorators = {
    interactorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    identifierLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isMainInteractor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    externalLinkVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TableInteractorExternalLinkComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-interactor-external-link',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_interactor_external_link_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableInteractorExternalLinkComponent);



/***/ }),

/***/ 84768:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInteractorNameComponent": function() { return /* binding */ TableInteractorNameComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-name.component.html */ 41087);
/* harmony import */ var _table_interactor_name_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-interactor-name.component.css */ 57324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../complex-portal-utils */ 82682);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TableInteractorNameComponent = class TableInteractorNameComponent {
    ngOnInit() {
        this.interactorTypeIcon = (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.interactorTypeIcon)(this.interactorType);
        this.interactorOrganismIcon = (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.organismIcon)(this.interactorOrganism);
    }
    externalLinkVisibleHandler(isVisible) {
        this.externalLinkVisible = isVisible;
    }
};
TableInteractorNameComponent.propDecorators = {
    interactorName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorOrganism: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    identifierLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    organismIconDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorTypeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isMainInteractor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TableInteractorNameComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-interactor-name',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_interactor_name_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableInteractorNameComponent);



/***/ }),

/***/ 50048:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInteractorStoichiometryComponent": function() { return /* binding */ TableInteractorStoichiometryComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-stoichiometry.component.html */ 32716);
/* harmony import */ var _table_interactor_stoichiometry_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-interactor-stoichiometry.component.css */ 90745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TableInteractorStoichiometryComponent = class TableInteractorStoichiometryComponent {
};
TableInteractorStoichiometryComponent.propDecorators = {
    stoichiometryText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    stoichiometryValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TableInteractorStoichiometryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-interactor-stoichiometry',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_interactor_stoichiometry_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableInteractorStoichiometryComponent);



/***/ }),

/***/ 37161:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableMainInteractorComponent": function() { return /* binding */ TableMainInteractorComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-main-interactor.component.html */ 16865);
/* harmony import */ var _table_main_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-main-interactor.component.css */ 96532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complex-navigator-utils */ 65766);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TableMainInteractorComponent = class TableMainInteractorComponent {
    ngOnChanges() {
        this.interactorComponent = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex)(this.complex.complex, this.interactor.interactor.identifier, this.enrichedInteractors);
        this.topLineClass = this.displayTopLineClass(this.complex, this.i);
        this.bottomLineClass = this.displayBottomLineClass(this.complex, this.i);
    }
    get interactor() {
        return this.enrichedInteractors[this.i];
    }
    displayTopLineClass(complex, interactorIndex) {
        if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
            return 'verticalLine';
        }
        if (this.doesLineEndOnInteractorCell(complex, interactorIndex) && !this.doesLineStartOnInteractorCell(complex, interactorIndex)) {
            return 'verticalLine';
        }
        return 'transparentVerticalLine';
    }
    displayBottomLineClass(complex, interactorIndex) {
        if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
            return 'verticalLine';
        }
        if (this.doesLineStartOnInteractorCell(complex, interactorIndex) && !this.doesLineEndOnInteractorCell(complex, interactorIndex)) {
            return 'verticalLine';
        }
        return 'transparentVerticalLine';
    }
    doesLineCrossInteractorCell(complex, interactorIndex) {
        if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
            // The line starts before this interactor and ends after, so it crosses through the interactor
            if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
                return true;
            }
            // The line starts before this interactor and end at this interactor or on any of its subcomponents
            if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
                // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
                // the line does not end in this interactor, and it must cross through the interactor cell to the subcomponents
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
        // The line starts at this interactor or on any of its subcomponents
        if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
            if (!this.enrichedInteractors[interactorIndex].isSubComplex) {
                // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
                return true;
            }
            // If the interactor is a subcomplex.
            // If the interactor is actually part of the complex, the line starts in this interactor
            // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the interactor itself, as it is
            // not part of the complex.
            if (complex.startInteractorIncludedWhenExpanded) {
                return true;
            }
        }
        return false;
    }
    doesLineEndOnInteractorCell(complex, interactorIndex) {
        // The line ends at this interactor or on any of its subcomponents
        if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
            // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
            // the line does not end in this interactor, and it must cross through to the subcomponents
            if (this.enrichedInteractors[interactorIndex].isSubComplex && this.enrichedInteractors[interactorIndex].expanded) {
                if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
};
TableMainInteractorComponent.propDecorators = {
    complex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    i: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    enrichedInteractors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TableMainInteractorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-main-interactor',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_main_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableMainInteractorComponent);



/***/ }),

/***/ 68677:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.ts ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableSubcomponentInteractorComponent": function() { return /* binding */ TableSubcomponentInteractorComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-subcomponent-interactor.component.html */ 59270);
/* harmony import */ var _table_subcomponent_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-subcomponent-interactor.component.css */ 85339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complex-navigator-utils */ 65766);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TableSubcomponentInteractorComponent = class TableSubcomponentInteractorComponent {
    ngOnChanges() {
        this.interactorComponent = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex)(this.complex.complex, this.el.identifier, this.enrichedInteractors);
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
            return 'verticalLine';
        }
        if (this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
            !this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
            return 'verticalLine';
        }
        return 'transparentVerticalLine';
    }
    displayBottomLineClassExpanded(complex, interactorIndex, subComponentIndex) {
        if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
            return 'verticalLine';
        }
        if (this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
            !this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
            return 'verticalLine';
        }
        return 'transparentVerticalLine';
    }
    doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex) {
        if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
            // The line starts before this interactor and ends after, so it crosses through all the subcomponents of the interactor
            if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
                return true;
            }
            if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
                if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
                    return true;
                }
                // The line started before this interactor, and it ends on a later subcomponent, so it crosses through this subcomponent
                if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
                    return true;
                }
                // The line started before this subcomponent, and it ends on a later interactor, so it crosses through this subcomponent
                if (complex.startSubComponentIndex < subComponentIndex && complex.endInteractorIndex > interactorIndex) {
                    return true;
                }
            }
        }
        return false;
    }
    doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
        // The line starts at this interactor or on any of its subcomponents
        if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
            if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
                // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
                // start on any subcomponent.
                // Otherwise, it starts on the subcomponent with the index subComponentIndex
                return !complex.complex.interactors.some(component => this.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);
            }
        }
        return false;
    }
    doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) {
        if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
            // The line ends at this interactor and this subcomponent
            if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
                return true;
            }
        }
        return false;
    }
};
TableSubcomponentInteractorComponent.propDecorators = {
    complex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    i: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    j: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    enrichedInteractors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TableSubcomponentInteractorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-subcomponent-interactor',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_subcomponent_interactor_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableSubcomponentInteractorComponent);



/***/ }),

/***/ 14915:
/*!********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableStructureComponent": function() { return /* binding */ TableStructureComponent; }
/* harmony export */ });
/* harmony import */ var _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-structure.component.html */ 75118);
/* harmony import */ var _table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-structure.component.css */ 71108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TableStructureComponent = class TableStructureComponent {
    constructor() {
        this.onComplexRemovedFromBasket = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.sortedComplexes = [];
    }
    ngOnChanges() {
        this.sortedComplexes = this.classifyComplexesSimilaritiesV2(this.complexSearch.elements);
    }
    getComponentAsComplex(component) {
        return this.complexSearch.elements.find(interactor => interactor.complexAC === component.identifier);
    }
    getAllComponents(complex, components = []) {
        for (const component of complex.interactors) {
            if (component.interactorType === 'stable complex') {
                const subComplex = this.getComponentAsComplex(component);
                if (subComplex) {
                    components.push(...this.getAllComponents(subComplex));
                }
                else {
                    components.push(component);
                }
            }
            else {
                components.push(component);
            }
        }
        return components;
    }
    calculateSimilarity(complex1, complex2) {
        if (complex1 === complex2) {
            return new Set(this.getAllComponents(complex1)).size;
        }
        const [components1, components2] = [complex1, complex2]
            .map(complex => new Set(this.getAllComponents(complex).map(c => c.identifier)));
        return [...components1.values()].reduce((s, c1) => components2.has(c1) ? s + 1 : s, 0);
    }
    classifyComplexesSimilaritiesV2(complexesList) {
        const comparedComplexes = [];
        for (const complex of complexesList) {
            for (const comparedComplex of complexesList) {
                // for unique comparison
                if (complex.complexAC >= comparedComplex.complexAC) {
                    comparedComplexes.push([complex, comparedComplex, this.calculateSimilarity(complex, comparedComplex)]);
                }
            }
        }
        comparedComplexes.sort((a, b) => b[2] - a[2]); // sorting by similarityScore
        const complexesOrderedSet = this.uniqueComplexesListOrderedBySimilarity(comparedComplexes);
        // to be used in the table as a 1D array
        return Array.from(complexesOrderedSet);
    }
    uniqueComplexesListOrderedBySimilarity(complexesListSimilarities) {
        const complexesOrderedSet = new Set();
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
                    // All complexes have been added, we can return and stop the loops
                    return complexesOrderedSet;
                }
            }
            if (complexesOrderedSet.size === this.complexSearch.elements.length) {
                // All complexes have been added, we can return and stop the loops
                return complexesOrderedSet;
            }
        }
        return complexesOrderedSet;
    }
};
TableStructureComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    organismIconDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorTypeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canAddComplexesToBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canRemoveComplexesFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onComplexRemovedFromBasket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TableStructureComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-structure',
        template: _Users_eragueneau_WebstormProjects_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableStructureComponent);



/***/ }),

/***/ 53226:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters\">\n  <div class=\"sortingInteractors\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Sort components\" class=\"button\">\n    <div class=\"typeOfSorting\">\n      <input type=\"button\" name=\"occurrenceClassification\" value=\"Occurrence\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Occurrence')\">\n      <input type=\"button\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Type')\">\n      <input type=\"button\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n             (click)=\"interactorsSortingChanges('Organism')\">\n      <!--      <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"-->\n      <!--             (click)=\"InteractorsSortingChanges('Orthology')\">-->\n    </div>\n  </div>\n\n  <div class=\"dropdown\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Display Options\" class=\"button\">\n    <ul class=\"displaySize\">\n      <li>\n        <label>\n          <input type=\"radio\" name=\"displayType\" value=\"Compact\" class=\"checkbox compact\"\n                 (click)=\"setDisplayType('compact')\" [checked]=\"typeOfDisplay === 'compact'\">\n          Compact display\n        </label>\n      </li>\n      <li class=\"detailedDisplay\">\n        <label>\n          <input type=\"radio\" name=\"displayType\" value=\"Detailed\" class=\"checkbox detailed\"\n                 (click)=\"setDisplayType('detailed')\" [checked]=\"typeOfDisplay === 'detailed'\">\n          Detailed display\n        </label>\n        <ul class=\"detailedDisplayOptions\">\n          <li>\n            <input type=\"checkbox\" name=\"organism\" value=\"organism\" class=\"checkbox\" [checked]=\"organismIconDisplay\"\n                   (change)=\"DisplayingOrganism()\">\n            Organism\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"type\" value=\"type\" class=\"checkbox\" [checked]=\"interactorTypeDisplay\"\n                   (change)=\"DisplayingType()\">\n            Type\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"id\" value=\"id\" class=\"checkbox\" [checked]=\"IDDisplay\"\n                   (change)=\"DisplayingID()\">\n            Interactor ID\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ 5869:
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"displayButton columns medium-12\" [ngClass]=\"\">\n  <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n          (click)=\"setListView()\" [ngClass]=\"{'selected': !isDisplayComplexNavigatorView()}\">\n    View list\n  </button>\n  <button type=\"submit\" name=\"submit\" class=\"button view-button cnButton\"\n          (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': isDisplayComplexNavigatorView()}\">\n    View Complex Navigator\n    <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': displayType === isDisplayComplexNavigatorView()}\">NEW!</span>\n  </button>\n</div>\n");

/***/ }),

/***/ 81779:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ComplexNavigator\">\n  <div class=\"Buttons\" [ngClass]=\"complexSearch.totalNumberOfResults <=6 ? 'smallCNButtons' : ''\">\n    <cp-complex-navigator-buttons\n      [(interactorsSorting)]=\"interactorsSorting\"\n      [(organismIconDisplay)]=\"organismIconDisplay\"\n      [(interactorTypeDisplay)]=\"interactorTypeDisplay\"\n      [(IDDisplay)]=\"IDDisplay\">\n    </cp-complex-navigator-buttons>\n  </div>\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\"\n                      [organismIconDisplay]=\"organismIconDisplay\"\n                      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                      [IDDisplay]=\"IDDisplay\"\n                      [canAddComplexesToBasket]=\"canAddComplexesToBasket\"\n                      [canRemoveComplexesFromBasket]=\"canRemoveComplexesFromBasket\"\n                      (onComplexRemovedFromBasket)=\"onComplexRemovedFromBasket.emit($event)\">\n  </cp-table-structure>\n</div>\n\n");

/***/ }),

/***/ 92341:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexes.length<=6\">\n    <tr>\n      <th *ngIf=\"isInteractorSortingSet()\" class=\"spaceHolderSorting\"></th>\n      <th class=\"interactorsHeader horizontal\">\n        Components\n      </th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexes\" [class.predicted]=\"complex.predicted\">\n        <div class=\"horizontal-label\">\n          <a [routerLink]=\"['/complex', complex.complexAC]\"\n             target=\"_blank\">\n            <div>\n              <span [matTooltip]=\"complex.complexName+ ' - '+ complex.complexAC + ' - ' + complex.organismName\">\n                <div class=\"line\"></div>\n                <i class=\"{{iconOrganism(complex.organismName)}}\"></i>\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </span>\n            </div>\n          </a>\n        </div>\n        <div class=\"basketButton\">\n          <a class=\"button\" (click)=\"toggleBasket(complex.complexName,complex.complexAC,complex.organismName)\">\n            <i class=\"icon icon-common\" [attr.data-icon]=\"isInBasket(complex.complexAC) ? '':''\"></i>\n          </a>\n        </div>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexes.length>6\"\n           [ngClass]=\"isInteractorSortingSet() ? 'tableHeadOverflowWithSorting' : 'tableHeadOverflow'\">\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"'185px'\">\n      <th class=\"spaceHolderHeaderOverflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n      </th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexes\"\n          [class.predicted]=\"complex.predicted\"\n          [style.--cols]=\"complexes.length\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           [matTooltip]=\"complex.complexName+ ' - '+ complex.complexAC\"\n           target=\"_blank\">\n          <div>\n            <span>\n              <div class=\"tilted-label\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <div class=\"spaceHolder\"></div>\n    </tr>\n    <!-- icons row -->\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\"\n        [style.--sizeSpaceHolder]=\"'185px'\">\n      <th class=\"interactorsHeader overflow\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n        Components\n      </th>\n      <ng-container *ngFor=\" let complex of complexes;\">\n        <th class=\"iconOrganism\" [class.predicted]=\"complex.predicted\">\n          <div>\n            <a class=\"button\" (click)=\"toggleBasket(complex.complexName,complex.complexAC,complex.organismName)\">\n              <i class=\"icon icon-common\" [attr.data-icon]=\"isInBasket(complex.complexAC) ? '':''\"></i>\n            </a>\n          </div>\n          <div>\n            <i class=\"{{iconOrganism(complex.organismName)}}\" [matTooltip]=\"complex.organismName\"></i>\n          </div>\n        </th>\n      </ng-container>\n      <div class=\"spaceHolder\"></div>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n\n");

/***/ }),

/***/ 77194:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\"\n         [ngClass]=\"{'inheritedWidth': complexes.length > 6}\"\n         [style.--cols]=\"complexes.length\">\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngFor=\"let oneType of ranges\" class=\"interactorsOrdering\">\n          <td *ngIf=\"oneType[2]===i\" [attr.rowspan]=\"oneType[1]\" class=\"interactorSeparation\"\n              [matTooltip]=\"oneType[0]\">\n            <div class=\"interactorNameContainer\" [style.--rowspanSize]=\"oneType[1]\">\n              {{ oneType[0] }}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"interactorsColumn\"\n            [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\"\n            [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n          <cp-table-interactor-name\n            [interactorName]=\"interactor.interactor.name\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [interactorId]=\"interactor.interactor.identifier\"\n            [interactorOrganism]=\"interactor.interactor.organismName\"\n            [identifierLink]=\"interactor.interactor.identifierLink\"\n            [organismIconDisplay]=\"organismIconDisplay\"\n            [interactorTypeDisplay]=\"interactorTypeDisplay\"\n            [IDDisplay]=\"IDDisplay\"\n          ></cp-table-interactor-name>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a (click)=\"toggleSubcomplexExpandable(i)\"\n               [matTooltip]=\"interactor.interactor.name + ' components'\">\n              Components\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small;\n                \"></i>\n            </a>\n          </div>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\" [class.predicted]=\"complex.complex.predicted\">\n            <cp-table-main-interactor\n              [complex]=\"complex\"\n              [i]=\"i\"\n              [enrichedInteractors]=\"enrichedInteractors\"\n            ></cp-table-main-interactor>\n          </td>\n        </ng-container>\n        <div *ngIf=\"complexes.length>6\"\n             [ngClass]=\"isInteractorSortingSet() ? 'spaceHolderWithSorting' : 'spaceHolder'\"></div>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tr *ngFor=\"let el of interactor.subComponents; let j=index\"\n              class=\"expandedRows\"\n              [ngClass]=\"getExpandedRowClass(j, interactor.subComponents.length)\">\n            <td [attr.rowspan]=\"interactor.subComponents.length\" class=\"interactorSeparation\"\n                [matTooltip]=\"interactor.interactor.name + ' components'\"\n                *ngIf=\"j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')\">\n              <div class=\"interactorSeparationName\"\n                   [style.--rowspanSize]=\"interactor.subComponents.length\"> {{ interactor.interactor.name }} components\n              </div>\n            </td>\n            <td class=\"subComponentColumn\"\n                [ngClass]=\"complexes.length<=6 ? 'horizontalHeader' : 'interactorsColumnFixedWidth'\"\n                [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n              <div>\n                <cp-table-interactor-name\n                  [interactorName]=\"el.name\"\n                  [interactorType]=\"el.interactorType\"\n                  [interactorId]=\"el.identifier\"\n                  [interactorOrganism]=\"interactor.interactor.organismName\"\n                  [identifierLink]=\"el.identifierLink\"\n                  [organismIconDisplay]=\"organismIconDisplay\"\n                  [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                  [IDDisplay]=\"IDDisplay\"\n                ></cp-table-interactor-name>\n              </div>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\" [ngClass]=\"{'intStoichFixedWidth': complexes.length > 6}\">\n                <cp-table-subcomponent-interactor\n                  [complex]=\"complex\"\n                  [i]=\"i\"\n                  [j]=\"j\"\n                  [enrichedInteractors]=\"enrichedInteractors\"\n                ></cp-table-subcomponent-interactor>\n              </td>\n            </ng-container>\n            <div class=\"spaceHolder\" *ngIf=\"enrichedComplexes.length > 6\"></div>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n");

/***/ }),

/***/ 60908:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"externalLinkContainer\" [matTooltip]=\"'More information about ' + interactorId\">\n  <a *ngIf=\"externalLinkVisible\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n    {{ interactorId }}\n    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information about {{ interactorId }}\"></i>\n  </a>\n</div>\n");

/***/ }),

/***/ 41087:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"nameAndIcons\" [ngClass]=\"{inlineDisplay: interactorType==='stable complex'}\">\n    <i *ngIf=\"organismIconDisplay\"\n       class=\"{{interactorOrganismIcon}}\"\n       [matTooltip]=\"interactorOrganism\"></i>\n\n    <i *ngIf=\"interactorTypeDisplay\"\n       class=\"{{interactorTypeIcon}}\"\n       [matTooltip]=\"interactorType\"></i>\n\n    <div class=\"name\" *ngIf=\"IDDisplay\" [matTooltip]=\"interactorId\"> {{ interactorName }}\n    </div>\n    <a *ngIf=\"IDDisplay\"\n       [routerLink]=\"['/complex/search']\"\n       [queryParams]=\"{query: interactorId, page: 1}\"\n       target=\"_blank\">\n      <i class=\"icon icon-functional small\" data-icon=\"1\"\n         [matTooltip]=\"'More complexes containing ' + interactorName \"></i>\n    </a>\n\n    <div class=\"nameCompact\" *ngIf=\"!IDDisplay\">\n      <div class=\"name\" *ngIf=\"!IDDisplay\" [matTooltip]=\"'More information about ' + interactorName\">\n        <a *ngIf=\"!!identifierLink\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n          {{ interactorName }}\n        </a>\n      </div>\n      <a [routerLink]=\"['/complex/search']\"\n         [queryParams]=\"{query: interactorId, page: 1}\"\n         target=\"_blank\">\n        <i class=\"icon icon-functional small\" data-icon=\"1\"\n           [matTooltip]=\"'More complexes containing ' + interactorName \"></i>\n      </a>\n    </div>\n  </div>\n  <cp-table-interactor-external-link\n    *ngIf=\"IDDisplay\"\n    [interactorId]=\"interactorId\"\n    [identifierLink]=\"identifierLink\"\n    [interactorType]=\"interactorType\"\n    [isMainInteractor]=\"isMainInteractor\"\n    [IDDisplay]=\"IDDisplay\"\n    (externalLinkVisible)=\"externalLinkVisibleHandler($event)\">\n  </cp-table-interactor-external-link>\n</div>\n");

/***/ }),

/***/ 32716:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n  <div class=\"stoichNum\" [matTooltip]=\"stoichiometryText\">\n    {{ stoichiometryValue }}\n  </div>\n</ng-container>\n");

/***/ }),

/***/ 16865:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"topLineClass\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!interactorComponent\"\n  [stoichiometryText]=\"interactorComponent.stochiometryText\"\n  [stoichiometryValue]=\"interactorComponent.stochiometryValueFormatted\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"bottomLineClass\"></div>\n");

/***/ }),

/***/ 59270:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"displayTopLineClass\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!interactorComponent\"\n  [stoichiometryText]=\"interactorComponent.stochiometryText\"\n  [stoichiometryValue]=\"interactorComponent.stochiometryValueFormatted\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClass\"></div>\n");

/***/ }),

/***/ 75118:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"complexNavigatorTable\">\n  <div class=\"header\"\n       (scroll)=\"body.scrollLeft = header.scrollLeft\" #header>\n\n    <cp-table-header [complexes]=\"sortedComplexes\"\n                     [interactorsSorting]=\"interactorsSorting\"\n                     [canAddComplexesToBasket]=\"canAddComplexesToBasket\"\n                     [canRemoveComplexesFromBasket]=\"canRemoveComplexesFromBasket\"\n                     (onComplexRemovedFromBasket)=\"onComplexRemovedFromBasket.emit($event)\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\"\n       (scroll)=\"header.scrollLeft = body.scrollLeft\" #body>\n    <cp-table-interactor-column\n      [complexes]=\"sortedComplexes\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\"\n      [organismIconDisplay]=\"organismIconDisplay\"\n      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n      [IDDisplay]=\"IDDisplay\">\n    </cp-table-interactor-column>\n  </div>\n  <div class=\"spaceHolder\"></div>\n</div>\n\n");

/***/ }),

/***/ 1604:
/*!***********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  z-index: 5;\n}\n\n.typeOfSorting .button {\n  border-right: 1px solid white;\n  font-size: 14px;\n}\n\n.filters {\n  /*width: 120.5%;*/\n\n  display: flex;\n  justify-content: center;\n  grid-gap: 10px;\n  height: 67px;\n  z-index: 5;\n  text-align: center;\n}\n\n.displaySize {\n  display: none;\n}\n\n.detailedDisplayOptions {\n  display: none;\n}\n\nlabel {\n  color: white;\n}\n\n.dropdown:hover .displaySize {\n  display: flex;\n  list-style: none;\n  width: 300px;\n  background-color: var(--primary);\n  color: white;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  height: 40px;\n  align-content: center;\n  z-index: 5;\n}\n\n.dropdown:hover .displaySize li {\n  width: 200px;\n  background-color: var(--primary);\n  margin-left: -21px;\n  text-align: left;\n  padding-left: 6px;\n  z-index: 5;\n}\n\nli {\n  text-align: center;\n  align-items: center;\n  font-size: 14px;\n  border-left: 1px solid white;\n  padding-top: 10px;\n  max-width: 171px;\n}\n\n.detailedDisplay:hover .detailedDisplayOptions {\n  display: flex;\n  list-style: none;\n  align-content: baseline;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  margin-left: 14px;\n}\n\n.detailedDisplayOptions li {\n  text-align: left;\n  z-index: 5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoiY29tcGxleC1uYXZpZ2F0b3ItYnV0dG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGVPZlNvcnRpbmcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc29ydGluZ0ludGVyYWN0b3JzOmhvdmVyIC50eXBlT2ZTb3J0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbn1cblxuLnR5cGVPZlNvcnRpbmcgLmJ1dHRvbiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWx0ZXJzIHtcbiAgLyp3aWR0aDogMTIwLjUlOyovXG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDY3cHg7XG4gIHotaW5kZXg6IDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXlTaXplIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRldGFpbGVkRGlzcGxheU9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kaXNwbGF5U2l6ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZGlzcGxheVNpemUgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICB6LWluZGV4OiA1O1xufVxuXG5saSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWF4LXdpZHRoOiAxNzFweDtcbn1cblxuLmRldGFpbGVkRGlzcGxheTpob3ZlciAuZGV0YWlsZWREaXNwbGF5T3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4uZGV0YWlsZWREaXNwbGF5T3B0aW9ucyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHotaW5kZXg6IDU7XG59XG4iXX0= */";

/***/ }),

/***/ 16794:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-list-display-buttons/complex-list-display-buttons.component.css ***!
  \***********************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".displayButton {\n  text-align: center;\n}\n\n.view-button {\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted var(--primary);\n}\n\n.view-button:hover {\n  color: var(--primary);\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted var(--primary);\n}\n\n.selected,\n.selected:hover {\n  background-color: var(--primary);\n  color: white;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.cnButton {\n  outline-offset: 0;\n  outline: rgba(0, 124, 130, 0.75) solid 1px;\n  -webkit-animation: animateOutline 4s ease infinite;\n          animation: animateOutline 4s ease infinite;\n}\n\n.cnButton.selected {\n  -webkit-animation: none;\n          animation: none;\n}\n\n@-webkit-keyframes animateOutline {\n  0%,\n  50%,\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n}\n\n@keyframes animateOutline {\n  0%,\n  50%,\n  100% {\n    outline-width: 6px;\n    outline-offset: 4px;\n    outline-color: rgba(0, 124, 130, 0);\n  }\n  10% {\n    outline-color: rgba(0, 124, 130, 0.75);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC1kaXNwbGF5LWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQyxrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsdUJBQWU7VUFBZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7OztJQUdFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7QUFDRjs7QUFYQTtFQUNFOzs7SUFHRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0FBQ0YiLCJmaWxlIjoiY29tcGxleC1saXN0LWRpc3BsYXktYnV0dG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52aWV3LWJ1dHRvbiB7XG4gIHdpZHRoOiAyMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyOiAxcHggZG90dGVkIHZhcigtLXByaW1hcnkpO1xufVxuXG4udmlldy1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlbGVjdGVkLFxuLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy10YWcge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4ubmV3LXRhZy1zZWxlY3RlZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5jbkJ1dHRvbiB7XG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xuICBvdXRsaW5lOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KSBzb2xpZCAxcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZU91dGxpbmUgNHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmNuQnV0dG9uLnNlbGVjdGVkIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVPdXRsaW5lIHtcbiAgMCUsXG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgb3V0bGluZS13aWR0aDogNnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAxMjQsIDEzMCwgMCk7XG4gIH1cbiAgMTAlIHtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTMwLCAwLjc1KTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 14332:
/*!*******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 32149:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

module.exports = ".CN-table {\n  transform: rotateX(180deg); /* rotate the header's content to make it it the right sense (when removes, it is upside down) */\n}\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n  overflow: scroll;\n\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n  overflow: scroll;\n}\n\n.spaceHolderSorting {\n  width: 3ch;\n  border-bottom: 3px solid var(--primary);\n}\n\n/* Rotated complexes names */\n\n.spaceHolderHeaderOverflow {\n  min-width: 130px;\n  max-width: 130px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: var(--primary);\n  background-color: white;\n  padding-top: 173px;\n  text-align: right;\n}\n\n.iconOrganism {\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: center;\n  background-color: var(--primary);\n  color: white;\n  border-left: 1px solid white;\n  font-size: medium;\n  height: 60px;\n}\n\n.tilted-label {\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder));\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflowWithSorting tr {\n  --cols: 1;\n  --intHeader: 130px;\n  --parentWidth: 100%;\n  --sizeSpaceHolder: calc(var(--parentWidth) - 70px * var(--cols) - var(--intHeader));\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + var(--sizeSpaceHolder) - 3ch);\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 350px;\n  height: 51px !important;\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  border: 1px solid white;\n  top: 70px;\n  left: -52px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  border-collapse: collapse;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: var(--primary);\n  padding: 0 0 0 70px;\n  border: none;\n}\n\n.spaceHolder {\n  width: 183px;\n  background-color: var(--primary);\n  border-left: 1px solid white;\n}\n\n.interactorsHeader.overflow {\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  background-color: white;\n  border-bottom: 3px solid var(--primary);\n  height: 60px;\n  line-height: 70px;\n  text-align: right;\n  color: var(--primary);\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-left: none;\n  text-align: right;\n  color: var(--primary);\n  background-color: white;\n  border-bottom: 3px solid var(--primary);\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: var(--primary);\n  border-left: 1px solid white;\n  min-width: 80px;\n  max-width: 80px;\n  height: 35px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n.basket-icons {\n  margin-left: 5px;\n}\n\n.button {\n  padding: 0;\n  margin: 0;\n}\n\n.basketButton {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUUsZ0dBQWdHO0FBQzlIOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVDQUF1QztBQUN6Qzs7QUFFQSw0QkFBNEI7O0FBRTVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1GQUFtRjtFQUNuRixhQUFhO0VBQ2IsOERBQThEO0VBQzlELDJFQUEyRTtFQUMzRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtRkFBbUY7RUFDbkYsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCxpRkFBaUY7RUFDakYsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ04tdGFibGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogcm90YXRlIHRoZSBoZWFkZXIncyBjb250ZW50IHRvIG1ha2UgaXQgaXQgdGhlIHJpZ2h0IHNlbnNlICh3aGVuIHJlbW92ZXMsIGl0IGlzIHVwc2lkZSBkb3duKSAqL1xufVxuXG50aGVhZCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCB3aGl0ZTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxufVxuXG4uQ04tdGFibGUge1xuICBjbGlwLXBhdGg6IGZpbGwtYm94O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc3BhY2VIb2xkZXJTb3J0aW5nIHtcbiAgd2lkdGg6IDNjaDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuXG4vKiBSb3RhdGVkIGNvbXBsZXhlcyBuYW1lcyAqL1xuXG4uc3BhY2VIb2xkZXJIZWFkZXJPdmVyZmxvdyB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNzNweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pY29uT3JnYW5pc20ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi50aWx0ZWQtbGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDI4Y2g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdHIge1xuICAtLWNvbHM6IDE7XG4gIC0taW50SGVhZGVyOiAxMzBweDtcbiAgLS1wYXJlbnRXaWR0aDogMTAwJTtcbiAgLS1zaXplU3BhY2VIb2xkZXI6IGNhbGModmFyKC0tcGFyZW50V2lkdGgpIC0gNzBweCAqIHZhcigtLWNvbHMpIC0gdmFyKC0taW50SGVhZGVyKSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0taW50SGVhZGVyKSByZXBlYXQoYXV0by1maXQsIDcwcHgpO1xuICB3aWR0aDogY2FsYyh2YXIoLS1pbnRIZWFkZXIpICsgNzBweCAqIHZhcigtLWNvbHMpICsgdmFyKC0tc2l6ZVNwYWNlSG9sZGVyKSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3dXaXRoU29ydGluZyB0ciB7XG4gIC0tY29sczogMTtcbiAgLS1pbnRIZWFkZXI6IDEzMHB4O1xuICAtLXBhcmVudFdpZHRoOiAxMDAlO1xuICAtLXNpemVTcGFjZUhvbGRlcjogY2FsYyh2YXIoLS1wYXJlbnRXaWR0aCkgLSA3MHB4ICogdmFyKC0tY29scykgLSB2YXIoLS1pbnRIZWFkZXIpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1pbnRIZWFkZXIpIHJlcGVhdChhdXRvLWZpdCwgNzBweCk7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWludEhlYWRlcikgKyA3MHB4ICogdmFyKC0tY29scykgKyB2YXIoLS1zaXplU3BhY2VIb2xkZXIpIC0gM2NoKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkNOLXRhYmxlIC50YWJsZUhlYWRPdmVyZmxvdyB0aC5yb3RhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA1MXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdG9wOiA3MHB4O1xuICBsZWZ0OiAtNTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRoLnJvdGF0ZSBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogMCAwIDAgNzBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3BhY2VIb2xkZXIge1xuICB3aWR0aDogMTgzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaW50ZXJhY3RvcnNIZWFkZXIub3ZlcmZsb3cge1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEhvcml6b250YWwgY29tcGxleGVzIG5hbWUgKi9cblxuLkNOLXRhYmxlIHRoLmhvcml6b250YWwuaW50ZXJhY3RvcnNIZWFkZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmhvcml6b250YWwtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5DTi10YWJsZSB0aC5ob3Jpem9udGFsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmJhc2tldC1pY29ucyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5iYXNrZXRCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 88066:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "table {\n  --cols: 1;\n  height: 1px;\n  overflow: scroll;\n}\n\n.inheritedWidth {\n  /*width: inherit;*/\n  width: calc(130px + var(--cols) * 70px + 183px);\n}\n\n/* interactors column */\n\n.interactorsColumn {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 5;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n\n.interactorsColumnFixedWidth {\n  width: 130px;\n}\n\n.interactorsColumn a {\n  font-weight: normal;\n}\n\n.intStoich {\n  height: 100%;\n  max-width: 70px;\n  min-width: 70px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n\n.intStoichFixedWidth {\n  width: 70px;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n.spaceHolder {\n  width: 183px;\n}\n\n.spaceHolderWithSorting {\n  width: calc(183px - 3ch);\n}\n\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: -webkit-sticky;\n  position: sticky\n}\n\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n\n.firstExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n}\n\n.lastExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n.singleExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px), linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n/* Interactors sorting label*/\n\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 1%;\n  text-align: -webkit-center;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 31;\n  left: 0;\n}\n\n.interactorNameContainer,\n.interactorSeparationName {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n\n}\n\n.container {\n  font-size: 14px;\n}\n\n.horizontalHeader {\n  min-width: 114px;\n  max-width: 114px;\n}\n\n/*/* NEEDED FOR SAFARI BROWSER*/\n\n@supports (-webkit-hyphens:none) {\n  .interactorsColumn {\n    height: 45px !important;\n  }\n\n  .intStoich {\n    height: 45px;\n    overflow-y: visible;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdCQUFlO0VBQWY7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQiw0SEFBNEg7QUFDOUg7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIC0tY29sczogMTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5pbmhlcml0ZWRXaWR0aCB7XG4gIC8qd2lkdGg6IGluaGVyaXQ7Ki9cbiAgd2lkdGg6IGNhbGMoMTMwcHggKyB2YXIoLS1jb2xzKSAqIDcwcHggKyAxODNweCk7XG59XG5cbi8qIGludGVyYWN0b3JzIGNvbHVtbiAqL1xuLmludGVyYWN0b3JzQ29sdW1uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICMwZTZmNzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW5GaXhlZFdpZHRoIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbnRTdG9pY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW50U3RvaWNoRml4ZWRXaWR0aCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWNlZDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZhO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuLnNwYWNlSG9sZGVyIHtcbiAgd2lkdGg6IDE4M3B4O1xufVxuXG4uc3BhY2VIb2xkZXJXaXRoU29ydGluZyB7XG4gIHdpZHRoOiBjYWxjKDE4M3B4IC0gM2NoKTtcbn1cblxuLnN1YkNvbXBvbmVudENvbHVtbiB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDMwO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzBlNmY3NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBzdGlja3lcbn1cblxuLmV4cGFuZGVkUm93cyB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maXJzdEV4cGFuZGVkUm93OmFmdGVyIHtcbiAgei1pbmRleDogNDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtMnB4IC0xcHggLTJweCAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5sYXN0RXhwYW5kZWRSb3c6YWZ0ZXIge1xuICB6LWluZGV4OiA0MDtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IC0ycHggLTFweCAtMnB4IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5zaW5nbGVFeHBhbmRlZFJvdzphZnRlciB7XG4gIHotaW5kZXg6IDQwO1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTJweCAtMXB4IC0ycHggLTFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwZTZmNzY5NiAwcHgsIHRyYW5zcGFyZW50IDEwcHgpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi8qIEludGVyYWN0b3JzIHNvcnRpbmcgbGFiZWwqL1xuXG4uaW50ZXJhY3RvclNlcGFyYXRpb24ge1xuICBtYXgtd2lkdGg6IDNjaDtcbiAgbWluLXdpZHRoOiAzY2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMSU7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAzMTtcbiAgbGVmdDogMDtcbn1cblxuLmludGVyYWN0b3JOYW1lQ29udGFpbmVyLFxuLmludGVyYWN0b3JTZXBhcmF0aW9uTmFtZSB7XG4gIC0tcm93c3BhblNpemU6IDE7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXJvd3NwYW5TaXplKSAqIDQ4cHgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ob3Jpem9udGFsSGVhZGVyIHtcbiAgbWluLXdpZHRoOiAxMTRweDtcbiAgbWF4LXdpZHRoOiAxMTRweDtcbn1cblxuLyovKiBORUVERUQgRk9SIFNBRkFSSSBCUk9XU0VSKi9cbkBzdXBwb3J0cyAoLXdlYmtpdC1oeXBoZW5zOm5vbmUpIHtcbiAgLmludGVyYWN0b3JzQ29sdW1uIHtcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnRTdG9pY2gge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 52504:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "a {\n  font-weight: normal;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\n.externalLinkContainer {\n  justify-content: end;\n  grid-gap: 5px;\n  font-size: 14px;\n  line-break: anywhere;\n  word-break: break-word;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItZXh0ZXJuYWwtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1leHRlcm5hbC1saW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG5cbmk6bm90KC5zbWFsbCkge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uZXh0ZXJuYWxMaW5rQ29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1icmVhazogYW55d2hlcmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4iXX0= */";

/***/ }),

/***/ 57324:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.css ***!
  \*************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "a {\n  font-weight: bold;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: medium;\n}\n\n.nameAndIcons {\n  font-size: 14px;\n  display: flex;\n  width: inherit;\n  justify-content: end;\n}\n\n.inlineDisplay {\n  display: flex;\n  justify-content: end;\n}\n\n.name {\n  width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-align: end;\n  padding-right: 5px;\n}\n\n.nameCompact {\n  display: inline-flex;\n  width: -webkit-fill-available;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1uYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5uYW1lQW5kSWNvbnMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmlubGluZURpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLm5hbWUge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtd3JhcDogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm5hbWVDb21wYWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuIl19 */";

/***/ }),

/***/ 90745:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: var(--primary);\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3RvaWNoTnVtIHtcbiAgd2lkdGg6IDRjaDtcbiAgaGVpZ2h0OiA0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNWNoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 96532:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css ***!
  \*************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-wrap: nowrap;\n\n  * {\n    flex: 1\n  }\n}\n\n.verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  min-height: 50%;\n  z-index: 0;\n  position: relative;\n  height: 50%;\n}\n\n.verticalLine {\n  border-right: 3px solid var(--primary);\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQjtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICoge1xuICAgIGZsZXg6IDFcbiAgfVxufVxuXG4udmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi52ZXJ0aWNhbExpbmUge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnRyYW5zcGFyZW50VmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuIl19 */";

/***/ }),

/***/ 85339:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 3px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwZTZmNzY7XG59XG5cbi50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 71108:
/*!*********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n}\n\n.header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n}\n\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-y: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXhOYXZpZ2F0b3JUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjBweDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cblxuLmludGVyYWN0b3JzIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_complex_complex-results_complex-navigator_complex-navigator_module_ts-es2015.js.map