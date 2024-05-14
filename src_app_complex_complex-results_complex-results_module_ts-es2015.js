"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"],{

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
        case 'Homo sapiens; 9606':
            return 'icon icon-species icon-human';
        case 'Mus musculus':
        case 'Mus musculus; 10090':
            return 'icon icon-species icon-mouse';
        case 'Saccharomyces cerevisiae (strain ATCC 204508 / S288c)':
        case 'Schizosaccharomyces pombe (strain 972 / ATCC 24843)':
        case 'Saccharomyces cerevisiae; 559292':
            return 'icon icon-species icon-yeast';
        case 'Escherichia coli (strain K12)':
        case 'Escherichia coli':
        case 'Escherichia coli (strain K12); 83333':
        case 'Escherichia coli; 562':
        case 'Pseudomonas aeruginosa (strain ATCC 15692 / DSM 22644 / CIP 104116 ' +
            '/ JCM 14847 / LMG 12228 / 1C / PRS 101 / PAO1)':
        case 'Pseudomonas aeruginosa (strain ATCC 15692 / PAO1 / 1C / PRS 101 / LMG 12228); 208964':
            return 'icon icon-species icon-ecoli';
        case 'Rattus norvegicus':
        case 'Rattus norvegicus (Rat)':
        case 'Rattus norvegicus (Rat); 10116':
            return 'icon icon-species icon-rat';
        case 'Caenorhabditis elegans':
        case 'Caenorhabditis elegans; 6239':
            return 'icon icon-species icon-c-elegans';
        case 'Gallus gallus':
        case 'Gallus gallus (Chicken); 9031':
            return 'icon icon-species icon-chicken';
        case 'Drosophila melanogaster':
        case 'Drosophila melanogaster (Fruit fly); 7227':
            return 'icon icon-species icon-fly';
        case 'Bos taurus':
        case 'Bos taurus (Bovine); 9913':
            return 'icon icon-species icon-cow';
        case 'Oryctolagus cuniculus':
        case 'Oryctolagus cuniculus (Rabbit); 9986':
            return 'icon icon-species icon-rabbit';
        case 'Ovis aries':
        case 'Ovis aries (Sheep); 9940':
            return 'icon icon-species icon-sheep';
        case 'Xenopus laevis':
        case 'Xenopus laevis (African clawed frog); 8355':
            return 'icon icon-species icon-frog';
        case 'Canis lupus familiaris':
        case 'Canis familiaris (dog); 9615':
            return 'icon icon-species icon-dog';
        case 'Vibrio cholerae serotype O1 (strain ATCC 39315 / El Tor Inaba N16961)':
        case 'Vibrio cholerae; 243277':
            return 'assets/images/EMBL_Species_Vibrio_cholerae.svg';
        case 'Crotalus durissus terrificus':
        case 'Crotalus durissus terrificus; 8732':
            return 'assets/images/EMBL_Species_RattleSnake.svg';
        case 'Sus scrofa':
        case 'Sus scrofa (Pig); 9823':
            return 'icon icon-species icon-pig';
        case 'Torpedo marmorata':
        case 'Tetronarce californica':
        case 'Torpedo marmorata; 7788':
        case 'Torpedo californica (Pacific electric ray); 7787':
            return 'icon icon-species icon-ray';
        case 'Lymnaea stagnalis':
        case 'Lymnaea stagnalis; 6523':
            return 'icon icon-species icon-snail';
        case 'Arabidopsis thaliana':
        case 'Arabidopsis thaliana (Mouse-ear cress); 3702':
            return 'icon icon-species icon-brassica';
        case 'Danio rerio':
        case 'Danio rerio (Zebrafish); 7955':
            return 'icon icon-species icon-zebrafish';
        case 'Severe acute respiratory syndrome coronavirus':
        case 'Human SARS coronavirus; 694009':
        case 'SARS-CoV-2; 2697049':
        case 'Severe acute respiratory syndrome coronavirus 2':
        case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012)':
        case 'Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012) (Betacoronavirus England 1); 1263720':
        case 'Human betacoronavirus 2c EMC/2012':
        case 'Human betacoronavirus 2c EMC/2012; 1235996':
            return 'icon icon-species icon-virus';
    }
    return ' ';
}
function formatOrganismName(name) {
    if (name.includes(';')) {
        const end = name.indexOf(';');
        return name.substring(0, end);
    }
    return name;
}


/***/ }),

/***/ 16778:
/*!************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexFilterComponent": function() { return /* binding */ ComplexFilterComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-filter.component.html */ 22830);
/* harmony import */ var _complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-filter.component.css */ 87165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../complex-portal-utils */ 82682);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ComplexFilterComponent = class ComplexFilterComponent {
    constructor(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.onSpicesFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onBiologicalRoleFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onInteractorTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onResetAllFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeSpeciesFilter(filter, status) {
        if (status) {
            this.spicesFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onSpicesFilterChanged.emit(this.spicesFilter);
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeBiologicalRoleFilter(filter, status) {
        if (status) {
            this.bioRoleFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    }
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    changeInteractorTypeFilter(filter, status) {
        if (status) {
            this.interactorTypeFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
    }
    /**
     * Emit event to parent component to remove all filters
     */
    resetAllFilters() {
        this.onResetAllFilters.emit(true);
    }
    /**
     *
     * @returns {boolean} true is any filter array contains an filter
     */
    anyFiltersSelected() {
        return (this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
    }
    /**
     *
     * @param element filter to check if already selected
     * @param filter selected filters
     * @returns {boolean} true if filter is already in selected filters
     */
    isSelected(element, filter) {
        return filter.indexOf(element) !== -1;
    }
    get facets() {
        return this._facets;
    }
    set facets(value) {
        this._facets = value;
    }
    get spicesFilter() {
        return this._spicesFilter;
    }
    set spicesFilter(value) {
        this._spicesFilter = value;
    }
    get bioRoleFilter() {
        return this._bioRoleFilter;
    }
    set bioRoleFilter(value) {
        this._bioRoleFilter = value;
    }
    get interactorTypeFilter() {
        return this._interactorTypeFilter;
    }
    set interactorTypeFilter(value) {
        this._interactorTypeFilter = value;
    }
    facetTypeIcon(facet) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.interactorTypeIcon)(facet.name);
    }
    facetOrganismIcon(facet) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_3__.organismIcon)(facet);
    }
};
ComplexFilterComponent.ctorParameters = () => [
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService }
];
ComplexFilterComponent.propDecorators = {
    onSpicesFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onBiologicalRoleFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onInteractorTypeFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onResetAllFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    facets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    spicesFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    bioRoleFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    interactorTypeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ComplexFilterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'cp-complex-filter',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_filter_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexFilterComponent);



/***/ }),

/***/ 57991:
/*!********************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-list/complex-list.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexListComponent": function() { return /* binding */ ComplexListComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-list.component.html */ 3122);
/* harmony import */ var _complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-list.component.css */ 17554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexListComponent = class ComplexListComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ComplexListComponent.ctorParameters = () => [];
ComplexListComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-list',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexListComponent);



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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-buttons.component.html */ 53226);
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
    InteractorsSorting(typeOfSorting) {
        this.interactorsSortingChange.emit(typeOfSorting);
        switch (this.typeOfDisplay) {
            case 'compact':
                this.compactDisplay();
                break;
            default:
                this.detailedDisplay();
                if (typeOfSorting === 'Type') {
                    this.interactorTypeDisplay = false;
                }
                else if (typeOfSorting === 'Organism') {
                    this.organismIconDisplay = false;
                }
        }
        this.changesEmitter();
    }
    DisplayingOrganism() {
        this.organismIconDisplay = !this.organismIconDisplay;
        this.changesEmitter();
    }
    DisplayingType() {
        this.interactorTypeDisplay = !this.interactorTypeDisplay;
        this.changesEmitter();
    }
    DisplayingID() {
        this.IDDisplay = !this.IDDisplay;
        this.changesEmitter();
    }
    compactDisplay() {
        this.organismIconDisplay = false;
        this.interactorTypeDisplay = false;
        this.IDDisplay = false;
        this.changesEmitter();
        this.typeOfDisplay = 'compact';
    }
    detailedDisplay() {
        this.organismIconDisplay = true;
        this.interactorTypeDisplay = true;
        this.IDDisplay = true;
        this.changesEmitter();
        this.typeOfDisplay = 'detailed';
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorButtonsComponent);



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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator.component.html */ 81779);
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
        this.interactorsSorting = 'Occurrence';
        this.organismIconDisplay = true;
        this.interactorTypeDisplay = true;
        this.IDDisplay = true;
    }
};
ComplexNavigatorComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexNavigatorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorComponent);



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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-header.component.html */ 92341);
/* harmony import */ var _table_header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-header.component.css */ 32149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../complex-portal-utils */ 82682);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TableHeaderComponent = class TableHeaderComponent {
    isInteractorSortingSet() {
        return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
    }
    iconOrganism(organismName) {
        return (0,_complex_portal_utils__WEBPACK_IMPORTED_MODULE_2__.organismIcon)(organismName);
    }
};
TableHeaderComponent.propDecorators = {
    complexes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TableHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'cp-table-header',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony export */   "fetchValuesFromStoichiometry": function() { return /* binding */ fetchValuesFromStoichiometry; },
/* harmony export */   "findInteractorInComplex": function() { return /* binding */ findInteractorInComplex; },
/* harmony export */   "getStoichiometry": function() { return /* binding */ getStoichiometry; },
/* harmony export */   "stoichiometryOfInteractors": function() { return /* binding */ stoichiometryOfInteractors; },
/* harmony export */   "parseStoichiometryValues": function() { return /* binding */ parseStoichiometryValues; },
/* harmony export */   "formatStoichiometryValues": function() { return /* binding */ formatStoichiometryValues; }
/* harmony export */ });
function fetchValuesFromStoichiometry(stoichiometry) {
    const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
    return stoichiometry.match(pattern);
}
function findInteractorInComplex(complex, componentId) {
    return complex.interactors.find(component => component.identifier === componentId);
}
function getStoichiometry(complex, componentId) {
    const match = findInteractorInComplex(complex, componentId);
    if (!!match) {
        if (!!match.stochiometry) {
            return 'Stoichiometry values: ' + (match.stochiometry);
        }
        else {
            return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
        }
    }
    return null;
}
function stoichiometryOfInteractors(complex, interactorId) {
    const match = findInteractorInComplex(complex, interactorId);
    if (!!match) {
        return formatStoichiometryValues(match.stochiometry);
    }
    return null;
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
    const parsedStoichiometry = parseStoichiometryValues(stoichiometry);
    if (!!parsedStoichiometry) {
        const minValue = parsedStoichiometry[0];
        const maxValue = parsedStoichiometry[1];
        if (minValue === maxValue) {
            return minValue.toString();
        }
        else {
            return `${minValue}, ${maxValue}`;
        }
    }
    return ' '; // sometimes we don't have the stoichiometry value
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-column.component.html */ 77194);
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
        const subComponentsToCheck = [];
        const enrichedComplex = {
            complex,
            startInteractorIndex: null,
            endInteractorIndex: null,
            startSubComponentIndex: null,
            endSubComponentIndex: null
        };
        // We iterate through the interactors to find the first and last one part of the complex
        // We do this to be able to draw a line connecting all interactors in the complex
        for (let i = 0; i < this.enrichedInteractors.length; i++) {
            if (!this.enrichedInteractors[i].hidden) {
                for (let j = 0; j < complex.interactors.length; j++) {
                    if (complex.interactors[j].identifier === this.enrichedInteractors[i].interactor.identifier) {
                        // The interactor is part of the complex, we update the start and end indices for the interactors
                        // line as it may start in this interactor
                        enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                        enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                        // The interactor is a subcomplex
                        if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
                            // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
                            // In that case, the line could start or end there, so we need to also check the position of those
                            // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
                            this.enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
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
                            if (complex.interactors[j].identifier === this.enrichedInteractors[i].subComponents[k].identifier) {
                                // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                                // line as it may start in this interactor
                                enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
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
        }
        // We finally check the position of the subcomponents of subcomplexes part of the complex on the main table.
        // If any is before or after where the lines start and end, then we need to update the start and end indexes,
        // as the line must start or end there
        for (let i = 0; i < this.enrichedInteractors.length; i++) {
            if (!this.enrichedInteractors[i].hidden) {
                if (subComponentsToCheck.includes(this.enrichedInteractors[i].interactor.identifier)) {
                    // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
                    // line as it may start in this interactor
                    enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                    enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                }
            }
        }
        return enrichedComplex;
    }
    classifyInteractorsByOrganism() {
        this.enrichedInteractors.sort((a, b) => b.interactor.organismName.localeCompare(a.interactor.organismName));
        // this.calculateAllStartAndEndIndexes();
        this.rangeOfInteractorOrganism();
    }
    classifyInteractorsByType() {
        this.enrichedInteractors.sort((a, b) => b.interactor.interactorType.localeCompare(a.interactor.interactorType));
        this.rangeOfInteractorType();
    }
    classifyInteractorsByOccurrence() {
        for (const oneInteractor of this.enrichedInteractors) {
            for (const complex of this.complexes) {
                for (const complexesInteractors of complex.interactors) {
                    if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
                        const stoichiometryValue = parseInt((0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.stoichiometryOfInteractors)(complex, oneInteractor.interactor.identifier), 10);
                        if (!isNaN(stoichiometryValue)) {
                            oneInteractor.timesAppearing += stoichiometryValue;
                        }
                    }
                }
                if (oneInteractor.isSubComplex && !!oneInteractor.subComponents) {
                    for (const oneSubInteractor of oneInteractor.subComponents) {
                        const oneEnrichedInteractor = this.enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === oneSubInteractor.identifier);
                        if (!!oneEnrichedInteractor) {
                            const stoichiometryValue = parseInt((0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.formatStoichiometryValues)(oneSubInteractor.stochiometry), 10);
                            if (!isNaN(stoichiometryValue)) {
                                oneEnrichedInteractor.timesAppearing += stoichiometryValue;
                            }
                        }
                    }
                }
            }
        }
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-external-link.component.html */ 60908);
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_external_link_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-name.component.html */ 41087);
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_name_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-stoichiometry.component.html */ 32716);
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_stoichiometry_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-main-interactor.component.html */ 16865);
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
    constructor() {
        this.findInteractorInComplex = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex;
        this.getStoichiometry = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.getStoichiometry;
        this.stoichiometryOfInteractors = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.stoichiometryOfInteractors;
    }
    get interactor() {
        return this.enrichedInteractors[this.i];
    }
    findInteractorsInSubComplex(complex, interactorId) {
        return this.enrichedInteractors
            // filter subcomplexes
            .filter(interactor => interactor.isSubComplex)
            // filter subcomplexes included in complex
            .filter(interactor => complex.interactors.some(component => component.identifier === interactor.interactor.identifier))
            // filter subcomplexes that match the componentId
            .filter(interactor => !!interactor.subComponents)
            .map(interactor => interactor.subComponents.find(subComponent => subComponent.identifier === interactorId))
            .filter(component => !!component);
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
    getStoichiometrySubComplex(complex, interactorId) {
        const matches = this.findInteractorsInSubComplex(complex, interactorId);
        if (matches.length > 0) {
            const stoichiometryValues = this.addedStoichiometryValues(matches);
            if (!!stoichiometryValues) {
                return `Stoichiometry values: minValue: ${stoichiometryValues[0]}, maxValue: ${stoichiometryValues[1]}`;
            }
            else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
            }
        }
        return null;
    }
    stoichiometryOfInteractorsMainTable(complex, interactorId) {
        const matches = this.findInteractorsInSubComplex(complex, interactorId);
        if (matches.length > 0) {
            const stoichiometryValues = this.addedStoichiometryValues(matches);
            if (!!stoichiometryValues) {
                if (stoichiometryValues[0] === stoichiometryValues[1]) {
                    return stoichiometryValues[0].toString();
                }
                else {
                    return `${stoichiometryValues[0]}, ${stoichiometryValues[1]}`;
                }
            }
            else {
                return ' ';
            }
        }
        return null;
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
            if (complex.complex.interactors.some(component => this.enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
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
    addedStoichiometryValues(components) {
        let minValue = null;
        let maxValue = null;
        for (const component of components) {
            const parsedStoichiometry = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.parseStoichiometryValues)(component.stochiometry);
            if (!!parsedStoichiometry) {
                if (minValue === null) {
                    minValue = 0;
                }
                if (maxValue === null) {
                    maxValue = 0;
                }
                minValue += parsedStoichiometry[0];
                maxValue += parsedStoichiometry[1];
            }
        }
        if (minValue !== null && maxValue !== null) {
            return [minValue, maxValue];
        }
        return null;
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_main_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-subcomponent-interactor.component.html */ 59270);
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
    constructor() {
        this.interactorInComplex = false;
        this.interactorInSubComplex = false;
    }
    ngOnChanges() {
        this.displayTopLineClass = this.displayTopLineClassExpanded(this.complex, this.i, this.j);
        this.interactorInComplex = !!(0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex)(this.complex.complex, this.el.identifier);
        this.interactorStoichiometryText = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.getStoichiometry)(this.complex.complex, this.el.identifier);
        this.interactorStoichiometryValue = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.stoichiometryOfInteractors)(this.complex.complex, this.el.identifier);
        this.interactorInSubComplex = !!this.findInteractorInExpandedSubComplex(this.interactor, this.complex.complex, this.el.identifier);
        this.subComplexInteractorStoichiometryText = this.getStoichiometryInExpandedSubComplex(this.interactor, this.el.identifier);
        this.subComplexInteractorStoichiometryValue = this.stoichiometryOfInteractorsExpandable(this.interactor, this.el.identifier);
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
    findInteractorInExpandedSubComplex(interactor, complex, interactorId) {
        if (complex.interactors.some(component => component.identifier === interactor.interactor.identifier)) {
            return interactor.subComponents.find(component => component.identifier === interactorId);
        }
        return null;
    }
    getStoichiometryInExpandedSubComplex(interactor, interactorId) {
        const match = this.findInteractorInSubcomplex(interactor, interactorId);
        if (!!match) {
            if (!!match.stochiometry) {
                return 'Stoichiometry values: ' + (match.stochiometry);
            }
            else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
            }
        }
        return null;
    }
    stoichiometryOfInteractorsExpandable(interactor, interactorId) {
        const match = this.findInteractorInSubcomplex(interactor, interactorId);
        if (!!match) {
            return (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.formatStoichiometryValues)(match.stochiometry);
        }
        return null;
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
    findInteractorInSubcomplex(interactor, interactorId) {
        return interactor.subComponents.find(component => component.identifier === interactorId);
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
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_subcomponent_interactor_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-structure.component.html */ 75118);
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
        this.sortedComplexes = [];
    }
    ngOnChanges() {
        this.classifyComplexesSize(); // ensure to always have the same base of comparison
        this.sortedComplexes = this.classifyComplexesSimilarities(this.complexSearch.elements);
    }
    classifyComplexesSize() {
        const searchResult = [...this.complexSearch.elements];
        const complexesAndSizes = [];
        for (const complex of searchResult) {
            let totalLength = complex.interactors.length;
            for (const complexInteractorChecked of complex.interactors) {
                if (complexInteractorChecked.interactorType === 'stable complex') {
                    const subComplex = searchResult.find(c => c.complexAC === complexInteractorChecked.identifier);
                    if (!!subComplex) {
                        totalLength += subComplex.interactors.length;
                    }
                }
            }
            complexesAndSizes.push([complex, totalLength]);
        }
        complexesAndSizes.sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < searchResult.length; i++) {
            this.complexSearch.elements[i] = complexesAndSizes[i][0];
        }
    }
    calculateSimilarity(complex1, complex2) {
        let similarities = 0;
        for (const complex1Interactor of complex1.interactors) {
            // The interactor of complex 1 is a subcomplex
            if (complex1Interactor.interactorType === 'stable complex') {
                // The subcomplex is exactly complex 2, so we add the number of interactors of complex 2 to the similarities
                if (complex2.complexAC === complex1Interactor.identifier) {
                    similarities += complex2.interactors.length;
                }
                else {
                    const subComplex = this.complexSearch.elements.find(complex => complex.complexAC === complex1Interactor.identifier);
                    if (!!subComplex) {
                        const complex2MatchingInteractor = complex2.interactors.find(interactor => interactor.identifier === complex1Interactor.identifier);
                        if (!!complex2MatchingInteractor) {
                            // Complex 2 also has the same subcomplex as an interactor, so we add all the interactors in the subcomplex
                            // to the similarities, as the two complexes have all those interactors in common
                            similarities += subComplex.interactors.length;
                        }
                        else {
                            // Complex 2 does not have the same subcomplex as interactor, so we need to compare interactors
                            // of the subcomplex and complex 2 to find any matches
                            for (const subComplexInteractor of subComplex.interactors) {
                                for (const complex2Interactor of complex2.interactors) {
                                    if (subComplexInteractor.identifier === complex2Interactor.identifier) {
                                        similarities++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                // The interactor of complex 1 is not a subcomplex
                for (const complex2Interactor of complex2.interactors) {
                    // The interactor of complex 2 is a subcomplex
                    if (complex2Interactor.interactorType === 'stable complex') {
                        const subComplex = this.complexSearch.elements.find(complex => complex.complexAC === complex2Interactor.identifier);
                        if (!!subComplex) {
                            // Complex 2 interactor is a subcomplex, so we need to compare the complex 1 interactor with interactors of this
                            // subcomplex to find any matches
                            for (const subComplexInteractor of subComplex.interactors) {
                                if (subComplexInteractor.identifier === complex1Interactor.identifier) {
                                    similarities++;
                                }
                            }
                        }
                    }
                    else if (complex1Interactor.identifier === complex2Interactor.identifier) {
                        // The interactors of complex 1 and complex 2 are not subcomplexes, and they have the same id, so we add to the similarities
                        similarities++;
                    }
                }
            }
        }
        return similarities;
    }
    classifyComplexesSimilarities(bigComplexes) {
        const classifiedList = [];
        // multidimensional array containing groups of complexes having similar interactors
        for (const complex of bigComplexes) {
            let similarInteractorFound = false;
            for (const classification of classifiedList) {
                const comparedComplex = classification[0];
                const similarity = this.calculateSimilarity(complex, comparedComplex);
                if (similarity >= 1) {
                    classification.push(complex);
                    similarInteractorFound = true; // goes to the next complex
                }
            }
            if (!similarInteractorFound) {
                classifiedList.push([complex]); // fill classifiedList with arrays of all the complexes in the list
            }
        }
        const unique = [];
        for (const classification of classifiedList) {
            for (const complex of classification) {
                if (!unique.includes(complex)) {
                    unique.push(complex);
                }
            }
        }
        return unique;
    }
};
TableStructureComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    organismIconDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorTypeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    IDDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TableStructureComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-structure',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_structure_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_structure_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableStructureComponent);



/***/ }),

/***/ 80556:
/*!******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPaginatorComponent": function() { return /* binding */ ComplexPaginatorComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-paginator.component.html */ 65123);
/* harmony import */ var _complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator.component.css */ 71945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexPaginatorComponent = class ComplexPaginatorComponent {
    constructor() {
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.updatePaginatior();
    }
    ngOnChanges(changes) {
        this.updatePaginatior();
    }
    updatePaginatior() {
        let start;
        let end;
        this.pagination = [];
        if (this._lastPageIndex < 5) {
            start = 1;
            end = this._lastPageIndex;
        }
        else {
            if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
                start = 1;
                end = 5;
            }
            else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
                start = this._lastPageIndex - 4;
                end = this._lastPageIndex;
            }
            else {
                start = this._currentPageIndex - 2;
                end = this._currentPageIndex + 2;
            }
        }
        while (start <= end) {
            if (start === this._currentPageIndex) {
                this._pagination.push([[this._currentPageIndex], [true]]);
            }
            else {
                this._pagination.push([[start], [false]]);
            }
            start++;
        }
    }
    getFirstPage() {
        this.onPageChange.emit(1);
    }
    getLastPage() {
        this.onPageChange.emit(this.lastPageIndex);
    }
    getPage(pageIndex) {
        this.onPageChange.emit(pageIndex);
    }
    getPreviousPage() {
        this.onPageChange.emit(this.currentPageIndex - 1);
    }
    getNextPage() {
        this.onPageChange.emit(this.currentPageIndex + 1);
    }
    get lastPageIndex() {
        return this._lastPageIndex;
    }
    set lastPageIndex(value) {
        this._lastPageIndex = value;
    }
    get currentPageIndex() {
        return this._currentPageIndex;
    }
    set currentPageIndex(value) {
        this._currentPageIndex = value;
    }
    get pagination() {
        return this._pagination;
    }
    set pagination(value) {
        this._pagination = value;
    }
};
ComplexPaginatorComponent.ctorParameters = () => [];
ComplexPaginatorComponent.propDecorators = {
    onPageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    lastPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    currentPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexPaginatorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-paginator',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_paginator_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexPaginatorComponent);



/***/ }),

/***/ 50967:
/*!**********************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexResultsComponent": function() { return /* binding */ ComplexResultsComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-results.component.html */ 13182);
/* harmony import */ var _complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-results.component.css */ 23654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/complex-portal.service */ 20658);
/* harmony import */ var _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-bar/progress-bar.component */ 57040);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/google-analytics/service/analytics.service */ 96242);
/* harmony import */ var _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/complex-results/interactor.model */ 45178);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let ComplexResultsComponent = class ComplexResultsComponent {
    constructor(route, router, complexPortalService, titleService, googleAnalyticsService) {
        this.route = route;
        this.router = router;
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.LIST_VIEW = 'view_list';
        this.COMPLEX_NAVIGATOR_VIEW = 'view_complex_navigator';
        this._pageSize = 15;
        this._allInteractorsInComplexSearch = [];
    }
    ngOnInit() {
        this.titleService.setTitle('Complex Portal - Results');
        this._allInteractorsInComplexSearch = [];
        this.route
            .queryParams
            .subscribe(queryParams => {
            this._query = queryParams['query'];
            this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
            this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
            this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
            this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
            // TODO This is out for now, but CP-84 (JIRA )should fix that!!
            // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
            this.requestComplexResults();
            document.body.scrollTop = 0;
        });
        this.route.fragment.subscribe(fragment => {
            if (fragment === this.COMPLEX_NAVIGATOR_VIEW) {
                this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
            }
            else if (fragment === this.LIST_VIEW) {
                this.DisplayType = this.LIST_VIEW;
            }
        });
    }
    ngAfterViewInit() {
    }
    requestComplexResults() {
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(complexSearch => {
            this.complexSearch = complexSearch;
            this._allInteractorsInComplexSearch = [];
            if (this.complexSearch.totalNumberOfResults !== 0) {
                this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / this.pageSize);
                for (let i = 0; i < complexSearch.elements.length; i++) {
                    for (const component of complexSearch.elements[i].interactors) {
                        if (!this._allInteractorsInComplexSearch.some(interactor => interactor.identifier === component.identifier)) {
                            this._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType, component.organismName));
                        }
                    }
                }
            }
            _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
        });
    }
    /**
     * Prepare query params to build new URL after filter or pagination has changed
     */
    reloadPage() {
        const queryParams = {};
        queryParams['query'] = this._query;
        queryParams['page'] = this._currentPageIndex;
        if (this._spicesFilter !== undefined && this._spicesFilter.length !== 0) {
            queryParams['species'] = this.prepareFiltersForParams(this.spicesFilter);
        }
        if (this._bioRoleFilter !== undefined && this._bioRoleFilter.length !== 0) {
            queryParams['bioRole'] = this.prepareFiltersForParams(this._bioRoleFilter);
        }
        if (this._interactorTypeFilter !== undefined && this._interactorTypeFilter.length !== 0) {
            queryParams['interactorType'] = this.prepareFiltersForParams(this._interactorTypeFilter);
        }
        this.router.navigate([], {
            queryParams,
            fragment: this.DisplayType
        });
        _shared_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
        // This is a test case event for GA, to monitor if users ever use more then one filter.
        const filterCount = this.getFilterCount();
        if (1 < filterCount) {
            this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
        }
    }
    prepareFiltersForParams(filter) {
        return filter.toString().replace(/,/g, '+');
    }
    getFilterCount() {
        return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
    }
    /**
     *
     * @param pageIndex new page index after hitting the paginator to update the URL and reload content
     */
    onPageChange(pageIndex) {
        this.currentPageIndex = pageIndex;
        this.reloadPage();
    }
    onResetAllFilters() {
        this.spicesFilter = [];
        this.bioRoleFilter = [];
        this.interactorTypeFilter = [];
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onSpicesFilterChanged(filter) {
        this.spicesFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onBiologicalRoleFilterChanged(filter) {
        this.bioRoleFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    onInteractorTypeFilterChanged(filter) {
        this.interactorTypeFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
    }
    get currentPageIndex() {
        return this._currentPageIndex;
    }
    set currentPageIndex(value) {
        this._currentPageIndex = value;
    }
    get complexSearch() {
        return this._complexSearch;
    }
    set complexSearch(value) {
        this._complexSearch = value;
        this.setFirstDisplayType(); // if only one complex is in the search result, the display is list
    }
    get lastPageIndex() {
        return this._lastPageIndex;
    }
    set lastPageIndex(value) {
        this._lastPageIndex = value;
    }
    get pageSize() {
        return this._pageSize;
    }
    get spicesFilter() {
        return this._spicesFilter;
    }
    set spicesFilter(value) {
        this._spicesFilter = value;
    }
    get bioRoleFilter() {
        return this._bioRoleFilter;
    }
    set bioRoleFilter(value) {
        this._bioRoleFilter = value;
    }
    get interactorTypeFilter() {
        return this._interactorTypeFilter;
    }
    set interactorTypeFilter(value) {
        this._interactorTypeFilter = value;
    }
    get allInteractorsInComplexSearch() {
        return this._allInteractorsInComplexSearch;
    }
    setListView() {
        this.DisplayType = this.LIST_VIEW;
        this.reloadPage();
    }
    setComplexNavigatorView() {
        this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
        this.reloadPage();
    }
    setFirstDisplayType() {
        if (this._complexSearch.elements.length === 1) {
            const complexId = this._complexSearch.elements[0].complexAC;
            if (!!complexId) {
                // For some reason this is needed so the navigate call works
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                    return false;
                };
                this.router.navigate(['/complex', complexId]);
            }
        }
        if (!this.DisplayType) {
            // Currently the list view is the default, as we are just launching the navigator view
            // Later on we can change the default view to be the list or navigator view based on number of results
            this.setListView();
        }
    }
};
ComplexResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_2__.ComplexPortalService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title },
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService }
];
ComplexResultsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'cp-complex-results',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_results_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexResultsComponent);



/***/ }),

/***/ 79555:
/*!*******************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexResultsModule": function() { return /* binding */ ComplexResultsModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-results.component */ 50967);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator/complex-paginator.component */ 80556);
/* harmony import */ var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex-filter/complex-filter.component */ 16778);
/* harmony import */ var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-list/complex-list.component */ 57991);
/* harmony import */ var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */ 45103);
/* harmony import */ var _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex-navigator/complex-navigator.component */ 76549);
/* harmony import */ var _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-structure.component */ 14915);
/* harmony import */ var _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-header/table-header.component */ 40969);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-column.component */ 48774);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component */ 84768);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component */ 42423);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component */ 50048);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component */ 37161);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component */ 68677);
/* harmony import */ var _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./complex-navigator-buttons/complex-navigator-buttons.component */ 8507);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let ComplexResultsModule = class ComplexResultsModule {
};
ComplexResultsModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([
                { path: '', component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinnerModule
        ],
        exports: [
            _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent
        ],
        declarations: [_complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent,
            _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__.ComplexListComponent,
            _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__.ComplexFilterComponent,
            _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__.ComplexPaginatorComponent,
            _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__.ComplexNavigatorComponent,
            _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__.TableStructureComponent,
            _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__.TableHeaderComponent,
            _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__.TableInteractorColumnComponent,
            _complex_navigator_table_structure_table_interactor_column_table_interactor_name_table_interactor_name_component__WEBPACK_IMPORTED_MODULE_9__.TableInteractorNameComponent,
            _complex_navigator_table_structure_table_interactor_column_table_interactor_external_link_table_interactor_external_link_component__WEBPACK_IMPORTED_MODULE_10__.TableInteractorExternalLinkComponent,
            _complex_navigator_table_structure_table_interactor_column_table_interactor_stoichiometry_table_interactor_stoichiometry_component__WEBPACK_IMPORTED_MODULE_11__.TableInteractorStoichiometryComponent,
            _complex_navigator_table_structure_table_interactor_column_table_main_interactor_table_main_interactor_component__WEBPACK_IMPORTED_MODULE_12__.TableMainInteractorComponent,
            _complex_navigator_table_structure_table_interactor_column_table_subcomponent_interactor_table_subcomponent_interactor_component__WEBPACK_IMPORTED_MODULE_13__.TableSubcomponentInteractorComponent,
            _complex_navigator_buttons_complex_navigator_buttons_component__WEBPACK_IMPORTED_MODULE_14__.ComplexNavigatorButtonsComponent,
        ]
    })
], ComplexResultsModule);



/***/ }),

/***/ 45178:
/*!**************************************************************************!*\
  !*** ./src/app/complex/shared/model/complex-results/interactor.model.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interactor": function() { return /* binding */ Interactor; }
/* harmony export */ });
class Interactor {
    constructor(identifier, identifierLink, name, description, interactorType, organismName) {
        this._identifier = identifier;
        this._identifierLink = identifierLink;
        this._name = name;
        this._description = description;
        this._interactorType = interactorType;
        this._organismName = organismName;
    }
    get identifier() {
        return this._identifier;
    }
    get identifierLink() {
        return this._identifierLink;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get interactorType() {
        return this._interactorType;
    }
    get organismName() {
        return this._organismName;
    }
}


/***/ }),

/***/ 22830:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-filter/complex-filter.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked>\n              {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n\n              <i class=\"{{ facetOrganismIcon(facet.name) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3122:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{ complex.complexAC }} / <b>Organism:</b> ({{ complex.organismName }})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ 53226:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters\">\n\n  <div class=\"sortingInteractors\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Sort interactors\" class=\"button\">\n    <div class=\"typeOfSorting\">\n      <input type=\"submit\" name=\"occurrenceClassification\" value=\"Occurrence\" class=\"button\"\n             (click)=\"InteractorsSorting('Occurrence')\">\n      <input type=\"submit\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n             (click)=\"InteractorsSorting('Type')\">\n      <input type=\"submit\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n             (click)=\"InteractorsSorting('Organism')\">\n      <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"\n             (click)=\"InteractorsSorting('Orthology')\">\n    </div>\n  </div>\n\n  <div class=\"dropdown\">\n    <input type=\"submit\" name=\"classificationButton\" value=\"Display Options\" class=\"button\">\n    <ul class=\"displaySize\">\n      <li>\n        <input type=\"radio\" name=\"organism\" value=\"Detailed view\" class=\"checkbox compact\" (click)=\"compactDisplay()\">\n        Compact display\n      </li>\n      <li class=\"detailedDisplay\">\n        <input type=\"radio\" name=\"organism\" value=\"Detailed view\" class=\"checkbox detailed\" (click)=\"detailedDisplay()\"\n               checked>\n        Detailed display\n        <ul class=\"detailedDisplayOptions\">\n          <li>\n            <input type=\"checkbox\" name=\"organism\" value=\"organism\" class=\"checkbox\" [checked]=\"organismIconDisplay\"\n                   (change)=\"DisplayingOrganism()\">\n            Organism\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"type\" value=\"type\" class=\"checkbox\" [checked]=\"interactorTypeDisplay\"\n                   (change)=\"DisplayingType()\">\n            Type\n          </li>\n          <li>\n            <input type=\"checkbox\" name=\"type\" value=\"type\" class=\"checkbox\" [checked]=\"IDDisplay\"\n                   (change)=\"DisplayingID()\">\n            Interactor ID\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n</div>\n");

/***/ }),

/***/ 81779:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ComplexNavigator\">\n  <div class=\"Buttons\">\n    <cp-complex-navigator-buttons\n      [(interactorsSorting)]=\"interactorsSorting\"\n      [(organismIconDisplay)]=\"organismIconDisplay\"\n      [(interactorTypeDisplay)]=\"interactorTypeDisplay\"\n      [(IDDisplay)]=\"IDDisplay\">\n    </cp-complex-navigator-buttons>\n  </div>\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\"\n                      [organismIconDisplay]=\"organismIconDisplay\"\n                      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                      [IDDisplay]=\"IDDisplay\">\n  </cp-table-structure>\n</div>\n");

/***/ }),

/***/ 92341:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexes.length<=8\">\n    <tr>\n      <th class=\"interactorsHeader horizontal\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 135px; max-width: 135px;   border-bottom: 3px solid #007c82;':''\">\n        Interactors\n      </th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexes\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"line\"></div>\n                <div class=\"horizontal-label\">\n                  <i class=\"{{iconOrganism(complex.organismName)}}\"></i>\n                  <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                  {{ complex.complexName }}\n                </div>\n            </span>\n          </div>\n        </a>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexes.length>8\">\n    <tr [style.--cols]=\"complexes.length\"\n        [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\">\n      <th class=\"interactorsHeader\"\n          [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n      </th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexes\"\n          title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span>\n              <div class=\"tilted-label\" title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"\n                   title=\"{{ complex.complexName }} - {{ complex.complexAC}}\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <div class=\"spaceHolder\"></div>\n    </tr>\n    <tr [style.--cols]=\"complexes.length\" [style.--intHeader]=\"isInteractorSortingSet() ? '156px':''\">\n      <th class=\"spaceHolderHeader\" [style]=\"isInteractorSortingSet() ? 'min-width: 156px; max-width: 156px;':''\">\n        Interactors\n      </th>\n      <ng-container *ngFor=\" let complex of complexes;\">\n        <th class=\"iconOrganism\"><i class=\"{{iconOrganism(complex.organismName)}}\" title=\"{{complex.organismName}}\"></i>\n        </th>\n      </ng-container>\n      <div class=\"spaceHolder\"></div>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n\n");

/***/ }),

/***/ 77194:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\">\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngFor=\"let oneType of ranges\" class=\"interactorsOrdering\">\n          <td *ngIf=\"oneType[2]===i\" [attr.rowspan]=\"oneType[1]\" class=\"interactorSeparation\"\n              title=\"{{oneType[0]}}\">\n            <div class=\"interactorNameContainer\" [style.--rowspanSize]=\"oneType[1]\">\n              {{ oneType[0] }}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"interactorsColumn\" [ngClass]=\"{horizontalHeader : complexes.length<=8}\"\n            [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n          <cp-table-interactor-name\n            [interactorName]=\"interactor.interactor.name\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [interactorId]=\"interactor.interactor.identifier\"\n            [interactorOrganism]=\"interactor.interactor.organismName\"\n            [identifierLink]=\"interactor.interactor.identifierLink\"\n            [organismIconDisplay]=\"organismIconDisplay\"\n            [interactorTypeDisplay]=\"interactorTypeDisplay\"\n            [IDDisplay]=\"IDDisplay\"\n          ></cp-table-interactor-name>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a title=\"{{ interactor.interactor.name }} interactors\" (click)=\"toggleSubcomplexExpandable(i)\">\n              Interactors\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small;\n                \"></i>\n            </a>\n          </div>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\">\n            <cp-table-main-interactor\n              [complex]=\"complex\"\n              [i]=\"i\"\n              [enrichedInteractors]=\"enrichedInteractors\"\n            ></cp-table-main-interactor>\n          </td>\n        </ng-container>\n        <div class=\"spaceHolder\" *ngIf=\"complexes.length>8\"></div>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tr *ngFor=\"let el of interactor.subComponents; let j=index\"\n              class=\"expandedRows\"\n              [ngClass]=\"{'firstExpandedRow': j === 0, 'lastExpandedRow': j === interactor.subComponents.length - 1}\">\n            <td [attr.rowspan]=\"interactor.subComponents.length\" class=\"interactorSeparation\"\n                title=\"{{interactor.interactor.name}} interactors\"\n                *ngIf=\"j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')\">\n              <div class=\"interactorSeparationName\"\n                   [style.--rowspanSize]=\"interactor.subComponents.length\"> {{ interactor.interactor.name }} interactors\n              </div>\n            </td>\n            <td class=\"subComponentColumn\" [style]=\"ranges.length!=0 ? 'left:3ch':''\">\n              <div>\n                <cp-table-interactor-name\n                  [interactorName]=\"el.name\"\n                  [interactorType]=\"el.interactorType\"\n                  [interactorId]=\"el.identifier\"\n                  [interactorOrganism]=\"interactor.interactor.organismName\"\n                  [identifierLink]=\"el.identifierLink\"\n                  [organismIconDisplay]=\"organismIconDisplay\"\n                  [interactorTypeDisplay]=\"interactorTypeDisplay\"\n                  [IDDisplay]=\"IDDisplay\"\n                ></cp-table-interactor-name>\n              </div>\n              <cp-table-interactor-external-link\n                [interactorId]=\"el.identifier\"\n                [interactorType]=\"el.interactorType\"\n                [identifierLink]=\"el.identifierLink\"\n              ></cp-table-interactor-external-link>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\">\n                <cp-table-subcomponent-interactor\n                  [complex]=\"complex\"\n                  [i]=\"i\"\n                  [j]=\"j\"\n                  [enrichedInteractors]=\"enrichedInteractors\"\n                ></cp-table-subcomponent-interactor>\n              </td>\n            </ng-container>\n            <div class=\"spaceHolder\" *ngIf=\"complexes.length>6\"></div>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n");

/***/ }),

/***/ 60908:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"externalLinkContainer\">\n  <a *ngIf=\"externalLinkVisible && IDDisplay\" href=\"{{identifierLink}}\" target=\"_blank\" class=\"externalLinkContainer\">\n    {{ interactorId }}\n    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information about {{interactorId}}\"></i>\n  </a>\n</div>\n");

/***/ }),

/***/ 41087:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"nameAndIcons\" [ngClass]=\"{inlineDisplay: interactorType==='stable complex'}\">\n    <i *ngIf=\"organismIconDisplay\"\n       class=\"{{interactorOrganismIcon}}\"\n       title=\"{{interactorOrganism}}\"></i>\n\n    <i *ngIf=\"interactorTypeDisplay\"\n       class=\"{{interactorTypeIcon}}\"\n       title=\"{{interactorType}}\"></i>\n\n    <div class=\"name\" title=\"{{interactorName}}\" *ngIf=\"IDDisplay\"> {{ interactorName }}\n    </div>\n    <div class=\"name\" title=\"More information about {{interactorId}}\" *ngIf=\"!IDDisplay\">\n      <a *ngIf=\"!IDDisplay\" href=\"{{identifierLink}}\" target=\"_blank\"\n         class=\"externalLinkContainer\">\n        {{ interactorName }}\n      </a>\n    </div>\n\n    <a [routerLink]=\"['/complex/search']\"\n       [queryParams]=\"{query: interactorId, page: 1}\"\n       [preserveFragment]=\"true\"\n       target=\"_blank\">\n      <i class=\"icon icon-functional small\" data-icon=\"1\"\n         title=\"Complexes containing this interactor\"></i>\n    </a>\n  </div>\n  <cp-table-interactor-external-link\n    [interactorId]=\"interactorId\"\n    [identifierLink]=\"identifierLink\"\n    [interactorType]=\"interactorType\"\n    [isMainInteractor]=\"isMainInteractor\"\n    [IDDisplay]=\"IDDisplay\"\n    (externalLinkVisible)=\"externalLinkVisibleHandler($event)\">\n  </cp-table-interactor-external-link>\n</div>\n");

/***/ }),

/***/ 32716:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n  <div class=\"stoichNum\" title=\"{{ stoichiometryText }}\">\n    {{ stoichiometryValue }}\n  </div>\n</ng-container>\n");

/***/ }),

/***/ 16865:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"displayTopLineClass(complex, i)\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!findInteractorInComplex(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryText]=\"getStoichiometry(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractors(complex.complex, interactor.interactor.identifier)\"\n></cp-table-interactor-stoichiometry>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!findInteractorInComplex(complex.complex, interactor.interactor.identifier) && findInteractorsInSubComplex(complex.complex, interactor.interactor.identifier).length > 0\"\n  [stoichiometryText]=\"getStoichiometrySubComplex(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractorsMainTable(complex.complex, interactor.interactor.identifier)\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClass(complex, i)\"></div>\n");

/***/ }),

/***/ 59270:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"displayTopLineClass\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"interactorInComplex\"\n  [stoichiometryText]=\"interactorStoichiometryText\"\n  [stoichiometryValue]=\"interactorStoichiometryValue\"\n></cp-table-interactor-stoichiometry>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"interactorInSubComplex\"\n  [stoichiometryText]=\"subComplexInteractorStoichiometryText\"\n  [stoichiometryValue]=\"subComplexInteractorStoichiometryValue\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClass\"></div>\n");

/***/ }),

/***/ 75118:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"complexNavigatorTable\">\n  <div class=\"header\"\n       (scroll)=\"body.scrollLeft = header.scrollLeft\" #header>\n\n    <cp-table-header [complexes]=\"sortedComplexes\"\n                     [interactorsSorting]=\"interactorsSorting\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\"\n       (scroll)=\"header.scrollLeft = body.scrollLeft\" #body>\n    <cp-table-interactor-column\n      [complexes]=\"sortedComplexes\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\"\n      [organismIconDisplay]=\"organismIconDisplay\"\n      [interactorTypeDisplay]=\"interactorTypeDisplay\"\n      [IDDisplay]=\"IDDisplay\">\n    </cp-table-interactor-column>\n  </div>\n  <div class=\"spaceHolder\"></div>\n</div>\n\n");

/***/ }),

/***/ 65123:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h5 class=\"text-center\">{{ currentPageIndex }} of {{ lastPageIndex }}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getFirstPage()\">&Lang; First</a></li>\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&lang; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{ index[0] }}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{ index[0] }}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &rang;</a></li>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getLastPage()\">Last &Rang;</a></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ 13182:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-results.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large numberResults\">Total number of\n        results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row\">\n        <div class=\"displayButton columns medium-8\" style=\"text-align: center; padding-left: 10px\">\n          <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n                  (click)=\"setListView()\" [ngClass]=\"{'selected': DisplayType === LIST_VIEW}\">\n            View list\n          </button>\n          <button type=\"submit\" name=\"submit\" class=\"button view-button\"\n                  (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">\n            View Complex Navigator\n            <span class=\"new-tag\" [ngClass]=\"{'new-tag-selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">NEW!</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"columns medium-4 filterColumn\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        <cp-complex-list class=\"listOfResults\" *ngIf=\"DisplayType===LIST_VIEW\"\n                         [complexSearch]=\"complexSearch\">\n        </cp-complex-list>\n        <cp-complex-navigator class=\"Complex-navigator\" *ngIf=\"DisplayType===COMPLEX_NAVIGATOR_VIEW\"\n                              [complexSearch]=\"complexSearch\"\n                              [interactors]=\"allInteractorsInComplexSearch\">\n        </cp-complex-navigator>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 87165:
/*!*************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-filter/complex-filter.component.css ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 17554:
/*!*********************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-list/complex-list.component.css ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = ".description {\n  width: 100%;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */";

/***/ }),

/***/ 1604:
/*!***********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator-buttons/complex-navigator-buttons.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  z-index: 5;\n}\n\n.typeOfSorting .button {\n  border-right: 1px solid white;\n  font-size: 14px;\n}\n\n.filters {\n  width: 120.5%;\n  display: flex;\n  justify-content: center;\n  grid-gap: 10px;\n  height: 67px;\n  z-index: 5;\n  text-align: center;\n}\n\n.displaySize {\n  display: none;\n}\n\n.detailedDisplayOptions {\n  display: none;\n}\n\n.dropdown:hover .displaySize {\n  display: flex;\n  list-style: none;\n  width: 300px;\n  background-color: #007c82;\n  color: white;\n  margin-top: -15px;\n  flex-direction: row;\n  position: absolute;\n  height: 40px;\n  align-content: center;\n  z-index: 5;\n}\n\n.dropdown:hover .displaySize li {\n  width: 200px;\n  background-color: #007c82;\n  margin-left: -21px;\n  text-align: left;\n  padding-left: 6px;\n  z-index: 5;\n}\n\nli {\n  text-align: center;\n  align-items: center;\n  font-size: 14px;\n  border-left: 1px solid white;\n  padding-top: 10px;\n  max-width: 171px;\n}\n\n.detailedDisplay:hover .detailedDisplayOptions {\n  display: flex;\n  list-style: none;\n  align-content: baseline;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  margin-left: 14px;\n}\n\n.detailedDisplayOptions li {\n  text-align: left;\n  z-index: 5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLWJ1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci1idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZU9mU29ydGluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zb3J0aW5nSW50ZXJhY3RvcnM6aG92ZXIgLnR5cGVPZlNvcnRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xufVxuXG4udHlwZU9mU29ydGluZyAuYnV0dG9uIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbHRlcnMge1xuICB3aWR0aDogMTIwLjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGhlaWdodDogNjdweDtcbiAgei1pbmRleDogNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheVNpemUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGV0YWlsZWREaXNwbGF5T3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZGlzcGxheVNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZGlzcGxheVNpemUgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbmxpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXgtd2lkdGg6IDE3MXB4O1xufVxuXG4uZGV0YWlsZWREaXNwbGF5OmhvdmVyIC5kZXRhaWxlZERpc3BsYXlPcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi5kZXRhaWxlZERpc3BsYXlPcHRpb25zIGxpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgei1pbmRleDogNTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 14332:
/*!*******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = ".ComplexNavigator {\n  width: calc(100rem * 0.71); /* the px value coresponds to the width of the facets column + the margin */\n  margin-left: calc(-100rem * 0.17)\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEIsRUFBRSwyRUFBMkU7RUFDdkc7QUFDRiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbXBsZXhOYXZpZ2F0b3Ige1xuICB3aWR0aDogY2FsYygxMDByZW0gKiAwLjcxKTsgLyogdGhlIHB4IHZhbHVlIGNvcmVzcG9uZHMgdG8gdGhlIHdpZHRoIG9mIHRoZSBmYWNldHMgY29sdW1uICsgdGhlIG1hcmdpbiAqL1xuICBtYXJnaW4tbGVmdDogY2FsYygtMTAwcmVtICogMC4xNylcbn1cbiJdfQ== */";

/***/ }),

/***/ 32149:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

module.exports = ".CN-table {\n  transform: rotateX(180deg); /* rotate the header's content to make it it the right sense (when removes, it is upside down) */\n}\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n}\n\n/* Rotated complexes names */\n\n.interactorsHeader {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #007c82;\n  background-color: white;\n  padding-top: 173px;\n  text-align: right;\n}\n\n.iconOrganism {\n  position: sticky;\n  text-align: center;\n  background-color: #007c82;\n  color: white;\n  border-left: 1px solid white;\n  font-size: medium;\n  height: 35px;\n}\n\n.tilted-label {\n  padding-left: 5px;\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  --intHeader: 130px;\n  display: grid;\n  grid-template-columns: var(--intHeader) repeat(auto-fit, 70px);\n  width: calc(var(--intHeader) + 70px * var(--cols) + 185px);\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 340px;\n  height: 52px !important;\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  top: 69px;\n  left: -45px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  border-top: 1px solid white;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: #007c82;\n  padding: 0 0 0 70px;\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-left: none;\n  text-align: right;\n  color: #007c82;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #007c82;\n  border-left: 1px solid white;\n  min-width: 80px;\n  max-width: 80px;\n  height: 35px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n.spaceHolder {\n  width: inherit;\n  background-color: #007c82;\n  border-left: 1px solid white;\n}\n\n.spaceHolderHeader {\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  background-color: white;\n  border-bottom: 3px solid #007c82;\n  height: 35px;\n  text-align: right;\n  color: #007c82;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUUsZ0dBQWdHO0FBQzlIOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBLDRCQUE0Qjs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNOLXRhYmxlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IC8qIHJvdGF0ZSB0aGUgaGVhZGVyJ3MgY29udGVudCB0byBtYWtlIGl0IGl0IHRoZSByaWdodCBzZW5zZSAod2hlbiByZW1vdmVzLCBpdCBpcyB1cHNpZGUgZG93bikgKi9cbn1cblxudGhlYWQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgd2hpdGU7XG59XG5cbi5DTi10YWJsZSB7XG4gIGNsaXAtcGF0aDogZmlsbC1ib3g7XG59XG5cbi8qIFJvdGF0ZWQgY29tcGxleGVzIG5hbWVzICovXG5cbi5pbnRlcmFjdG9yc0hlYWRlciB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGNvbG9yOiAjMDA3YzgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDE3M3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmljb25PcmdhbmlzbSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4udGlsdGVkLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMjhjaDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRyIHtcbiAgLS1jb2xzOiAxO1xuICAtLWludEhlYWRlcjogMTMwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0taW50SGVhZGVyKSByZXBlYXQoYXV0by1maXQsIDcwcHgpO1xuICB3aWR0aDogY2FsYyh2YXIoLS1pbnRIZWFkZXIpICsgNzBweCAqIHZhcigtLWNvbHMpICsgMTg1cHgpO1xufVxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRoLnJvdGF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB0b3A6IDY5cHg7XG4gIGxlZnQ6IC00NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLkNOLXRhYmxlIC50YWJsZUhlYWRPdmVyZmxvdyB0aC5yb3RhdGUgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M4MjtcbiAgcGFkZGluZzogMCAwIDAgNzBweDtcbn1cblxuLyogSG9yaXpvbnRhbCBjb21wbGV4ZXMgbmFtZSAqL1xuXG4uQ04tdGFibGUgdGguaG9yaXpvbnRhbC5pbnRlcmFjdG9yc0hlYWRlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwN2M4Mjtcbn1cblxuLmhvcml6b250YWwtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5DTi10YWJsZSB0aC5ob3Jpem9udGFsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwYWNlSG9sZGVyIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zcGFjZUhvbGRlckhlYWRlciB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA3YzgyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwN2M4Mjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 88066:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "table {\n  height: 1px;\n}\n\n/* interactors column */\n\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  max-height: 45px;\n  min-height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n\n.interactorsColumn a {\n  font-weight: normal;\n}\n\n.intStoich {\n  height: 45px;\n  max-width: 70px;\n  min-width: 70px;\n  width: 70px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n.spaceHolder {\n  width: 185px;\n}\n\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  max-height: 45px;\n  min-height: 45px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: sticky\n}\n\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n\n.firstExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n}\n\n.lastExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n/* Interactors sorting label*/\n\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 3ch;\n  text-align: -webkit-center;\n  position: sticky;\n  z-index: 4;\n  left: 0;\n}\n\n.interactorNameContainer,\n.interactorSeparationName {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  /*font-weight: lighter;*/\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n\n\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n\n}\n\n.container {\n  font-size: 14px;\n}\n\n.horizontalHeader {\n  min-width: 114px;\n  max-width: 114px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGtFQUFrRTtBQUNwRTs7QUFFQSw2QkFBNkI7O0FBRTdCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7OztFQUdsQix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi8qIGludGVyYWN0b3JzIGNvbHVtbiAqL1xuLmludGVyYWN0b3JzQ29sdW1uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICMwZTZmNzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4uaW50ZXJhY3RvcnNDb2x1bW4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbnRTdG9pY2gge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1heC13aWR0aDogNzBweDtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgei1pbmRleDogMTtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVjZWQ7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG5cbi5zcGFjZUhvbGRlciB7XG4gIHdpZHRoOiAxODVweDtcbn1cblxuLnN1YkNvbXBvbmVudENvbHVtbiB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDMwO1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6ICMwZTZmNzY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBwb3NpdGlvbjogc3RpY2t5XG59XG5cbi5leHBhbmRlZFJvd3Mge1xuICBjb2xvcjogIzBlNmY3NjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlyc3RFeHBhbmRlZFJvdzphZnRlciB7XG4gIHotaW5kZXg6IDQwO1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTJweCAtMXB4IC0ycHggLTFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwZTZmNzY5NiAwcHgsIHRyYW5zcGFyZW50IDEwcHgpO1xufVxuXG4ubGFzdEV4cGFuZGVkUm93OmFmdGVyIHtcbiAgei1pbmRleDogNDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtMnB4IC0xcHggLTJweCAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwZTZmNzY5NiAwcHgsIHRyYW5zcGFyZW50IDEwcHgpO1xufVxuXG4vKiBJbnRlcmFjdG9ycyBzb3J0aW5nIGxhYmVsKi9cblxuLmludGVyYWN0b3JTZXBhcmF0aW9uIHtcbiAgbWF4LXdpZHRoOiAzY2g7XG4gIG1pbi13aWR0aDogM2NoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Zjc2O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDNjaDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDQ7XG4gIGxlZnQ6IDA7XG59XG5cbi5pbnRlcmFjdG9yTmFtZUNvbnRhaW5lcixcbi5pbnRlcmFjdG9yU2VwYXJhdGlvbk5hbWUge1xuICAtLXJvd3NwYW5TaXplOiAxO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLypmb250LXdlaWdodDogbGlnaHRlcjsqL1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcm93c3BhblNpemUpICogNDhweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvcml6b250YWxIZWFkZXIge1xuICBtaW4td2lkdGg6IDExNHB4O1xuICBtYXgtd2lkdGg6IDExNHB4O1xufVxuIl19 */";

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

module.exports = "a {\n  font-weight: bold;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: medium;\n}\n\n.nameAndIcons {\n  font-size: 14px;\n  display: flex;\n  width: inherit;\n  justify-content: end;\n}\n\n.inlineDisplay {\n  display: flex;\n  justify-content: end;\n}\n\n.name {\n  width: inherit;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-align: end;\n  padding-right: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ0YWJsZS1pbnRlcmFjdG9yLW5hbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG5cbmk6bm90KC5zbWFsbCkge1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLm5hbWVBbmRJY29ucyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4uaW5saW5lRGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubmFtZSB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4iXX0= */";

/***/ }),

/***/ 90745:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: #0e6f76;\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3Itc3RvaWNoaW9tZXRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ0YWJsZS1pbnRlcmFjdG9yLXN0b2ljaGlvbWV0cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0b2ljaE51bSB7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBib3JkZXItcmFkaXVzOiA0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNWNoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";

/***/ }),

/***/ 96532:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component.css ***!
  \*************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 80%;\n  min-height: 80%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YWJsZS1tYWluLWludGVyYWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbExpbmUsIC50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMSU7XG4gIG1heC13aWR0aDogMSU7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgbWluLWhlaWdodDogODAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzBlNmY3Njtcbn1cblxuLnRyYW5zcGFyZW50VmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuIl19 */";

/***/ }),

/***/ 85339:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICMwZTZmNzY7XG59XG5cbi50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 71108:
/*!*********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n  width: 120%;\n}\n\n.header {\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n  width: 100%;\n}\n\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXhOYXZpZ2F0b3JUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW50ZXJhY3RvcnMge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 71945:
/*!*******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-paginator/complex-paginator.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LXBhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 23654:
/*!***********************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-results.component.css ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = ".displayButton {\n  float: right;\n}\n\n.view-button {\n  float: unset;\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n  opacity: 100%;\n}\n\n.new-tag {\n  color: red;\n  font-weight: bold;\n  font-size: x-small;\n}\n\n.new-tag-selected {\n  color: yellow;\n}\n\n.filterColumn {\n  width: calc(100rem * 0.22);\n  margin-left: calc(-100rem * 0.17) /* make the blank space the same as the right side */\n}\n\n.numberResults {\n  margin-left: calc(-100rem * 0.17)\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQ0FBZ0MsRUFBRSxvREFBb0Q7QUFDeEY7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi52aWV3LWJ1dHRvbiB7XG4gIGZsb2F0OiB1bnNldDtcbiAgd2lkdGg6IDIyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzAwN2M4Mjtcbn1cblxuLnZpZXctYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDIzNCwgMjM0KTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDA3YzgyO1xufVxuXG4uc2VsZWN0ZWQsXG4uc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5uZXctdGFnIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLm5ldy10YWctc2VsZWN0ZWQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uZmlsdGVyQ29sdW1uIHtcbiAgd2lkdGg6IGNhbGMoMTAwcmVtICogMC4yMik7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xMDByZW0gKiAwLjE3KSAvKiBtYWtlIHRoZSBibGFuayBzcGFjZSB0aGUgc2FtZSBhcyB0aGUgcmlnaHQgc2lkZSAqL1xufVxuXG4ubnVtYmVyUmVzdWx0cyB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xMDByZW0gKiAwLjE3KVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es2015.js.map