"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"],{

/***/ 82682:
/*!*************************************************!*\
  !*** ./src/app/complex/complex-portal-utils.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interactorTypeIcon": function() { return /* binding */ interactorTypeIcon; }
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

/***/ 79373:
/*!**********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator-sorting/complex-navigator-sorting.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexNavigatorSortingComponent": function() { return /* binding */ ComplexNavigatorSortingComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_sorting_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complex-navigator-sorting.component.html */ 47724);
/* harmony import */ var _complex_navigator_sorting_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-navigator-sorting.component.css */ 84353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ComplexNavigatorSortingComponent = class ComplexNavigatorSortingComponent {
    constructor() {
        this.interactorsSortingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.setInteractorsSorting('Occurrence');
    }
    setInteractorsSorting(typeOfSorting) {
        this.interactorsSortingChange.emit(typeOfSorting);
    }
};
ComplexNavigatorSortingComponent.ctorParameters = () => [];
ComplexNavigatorSortingComponent.propDecorators = {
    interactorsSortingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ComplexNavigatorSortingComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-complex-navigator-sorting',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complex_navigator_sorting_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_navigator_sorting_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplexNavigatorSortingComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TableHeaderComponent = class TableHeaderComponent {
    ngOnInit() {
        this.classifyComplexesSize();
        this.classifyComplexesSimilarities(this.complexSearch);
        this.isInteractorSortingSet();
    }
    classifyComplexesSize() {
        const searchResult = this.complexSearch.elements;
        const complexesWithSimilarities = new Map();
        const biggestComplex = [searchResult[0], 0];
        // check which complex is the biggest
        for (const complex of searchResult) {
            let totalLength = complex.interactors.length;
            for (const complexInteractorChecked of complex.interactors) {
                if (complexInteractorChecked.interactorType === 'stable complex') {
                    const subComplex = searchResult.find(c => c.complexAC === complexInteractorChecked.identifier);
                    totalLength += subComplex.interactors.length;
                }
            }
            if (totalLength > biggestComplex[1]) {
                biggestComplex[0] = complex;
                biggestComplex[1] = totalLength;
            }
        }
        // console.log(typeof biggestComplex[0]);
        const bigComplex = biggestComplex[0]; // access to the complex
        // compare the other complexes with the biggest
        for (const comparedComplex of searchResult) {
            let similarities = 0;
            for (const biggestComplexInteractor of bigComplex.interactors) {
                for (const complexInteractor of comparedComplex.interactors) {
                    if (biggestComplexInteractor.identifier === complexInteractor.identifier) {
                        similarities++;
                    }
                }
                if (biggestComplexInteractor.interactorType === 'stable complex') {
                    const subComplex = searchResult.find(c => c.complexAC === biggestComplexInteractor.identifier);
                    if (comparedComplex.complexAC === bigComplex.complexAC) {
                        similarities += subComplex.interactors.length;
                    }
                    for (const subComponent of subComplex.interactors) {
                        for (const complexInteractor of comparedComplex.interactors) {
                            if (subComponent.identifier === complexInteractor.identifier) {
                                similarities++;
                            }
                        }
                    }
                }
            }
            complexesWithSimilarities.set(comparedComplex, similarities);
        }
        // sort complexes depending on their similarities with the biggest
        this.complexSearch.elements.sort((a, b) => complexesWithSimilarities.get(b) - complexesWithSimilarities.get(a));
    }
    calculateSimilarity(complex1, complex2) {
        let similarities = 0;
        for (const complex1Interactor of complex1.interactors) {
            for (const complex2Interactor of complex2.interactors) {
                if (complex1Interactor.identifier === complex2Interactor.identifier) {
                    similarities++;
                }
            }
            if (complex1Interactor.interactorType === 'stable complex') {
                const subComplex = this.complexSearch.elements.find(complex => complex.complexAC === complex1Interactor.identifier);
                if (complex2.complexAC === complex1.complexAC) {
                    similarities += subComplex.interactors.length;
                }
                for (const subComponent of subComplex.interactors) {
                    for (const complexInteractor of complex2.interactors) {
                        if (subComponent.identifier === complexInteractor.identifier) {
                            similarities++;
                        }
                    }
                }
            }
        }
        return similarities;
    }
    classifyComplexesSimilarities(complexSearch) {
        const classifiedList = [];
        complexSearch.elements.forEach(complex => {
            let found = false;
            classifiedList.forEach(classification => {
                classification.forEach((classifiedComplex, index) => {
                    const similarity = this.calculateSimilarity(complex, classifiedComplex);
                    if (similarity >= 1) {
                        found = true;
                        classification.splice(index + 1, 0, complex);
                    }
                });
            });
            if (!found) {
                // this list is multidimensional (1 list per complex)
                classifiedList.push([complex]);
            }
        });
        // make the array 1D
        const listOfComplex = classifiedList.reduce((acc, val) => acc.concat(val), []);
        // The list which was multidimensional before has duplicates
        const unique = [];
        listOfComplex.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        // sorting by similarities
        this.complexSearch.elements.sort((a, b) => {
            const indexA = unique.indexOf(a);
            const indexB = unique.indexOf(b);
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB; // Sort in ascending order based on the index
            }
            else if (indexA !== -1) {
                return -1; // Put element a before element b
            }
            else if (indexB !== -1) {
                return 1; // Put element b before element a
            }
            else {
                return 0; // Leave the order unchanged if both elements are not found in unique list
            }
        });
    }
    isInteractorSortingSet() {
        return this.interactorsSorting === 'Type' || this.interactorsSorting === 'Organism';
    }
};
TableHeaderComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorsTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TableHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
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
/* harmony export */   "formatStoichiometryValues": function() { return /* binding */ formatStoichiometryValues; },
/* harmony export */   "fetchValuesFromStoichiometry": function() { return /* binding */ fetchValuesFromStoichiometry; },
/* harmony export */   "findInteractorInComplex": function() { return /* binding */ findInteractorInComplex; },
/* harmony export */   "getStoichiometry": function() { return /* binding */ getStoichiometry; },
/* harmony export */   "stoichiometryOfInteractors": function() { return /* binding */ stoichiometryOfInteractors; }
/* harmony export */ });
function formatStoichiometryValues(stoichiometry) {
    if (!!stoichiometry) {
        const matchedStoichiometry = fetchValuesFromStoichiometry(stoichiometry);
        if (!!matchedStoichiometry) {
            const minValue = parseInt(matchedStoichiometry[1], 10);
            const maxValue = parseInt(matchedStoichiometry[2], 10);
            if (minValue === maxValue) {
                return minValue.toString();
            }
            else {
                return `${minValue}, ${maxValue}`;
            }
        }
    }
    return ' '; // sometimes we don't have the stoichiometry value
}
function fetchValuesFromStoichiometry(stoichiometry) {
    const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
    return stoichiometry.match(pattern);
}
function findInteractorInComplex(complex, componentId) {
    return complex.interactors.find(component => component.identifier === componentId);
}
function getStoichiometry(complex, componentId) {
    const match = this.findInteractorInComplex(complex, componentId);
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
                organismName: '',
            };
            if (isSubComplex) {
                this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
            }
            this.enrichedInteractors.push(newEnrichedInteractor);
        }
        this.interactorOrganism();
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
        const foundComplex = this.complexSearch.elements.find(complex => complex.complexAC === interactor.interactor.identifier);
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
        for (const complex of this.complexSearch.elements) {
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
    interactorOrganism() {
        for (const complex of this.complexSearch.elements) {
            const organismName = complex.organismName;
            for (const complexInteractor of complex.interactors) {
                const match = this.enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === complexInteractor.identifier);
                match.organismName = organismName;
            }
        }
    }
    classifyInteractorsByOrganism() {
        this.enrichedInteractors.sort((a, b) => b.organismName.localeCompare(a.organismName));
        // this.calculateAllStartAndEndIndexes();
        this.rangeOfInteractorOrganismV2();
    }
    classifyInteractorsByType() {
        this.enrichedInteractors.sort((a, b) => b.interactor.interactorType.localeCompare(a.interactor.interactorType));
        this.rangeOfInteractorTypeV2();
    }
    classifyInteractorsByOccurrence() {
        for (const oneInteractor of this.enrichedInteractors) {
            for (const complex of this.complexSearch.elements) {
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
                        oneEnrichedInteractor.timesAppearing = parseInt((0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_3__.formatStoichiometryValues)(oneSubInteractor.stochiometry), 10);
                    }
                }
            }
        }
        this.enrichedInteractors.sort((a, b) => b.timesAppearing - a.timesAppearing);
        this.ranges = [];
    }
    rangeOfInteractorTypeV2() {
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
    rangeOfInteractorOrganismV2() {
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
                || this.enrichedInteractors[i].organismName !== this.enrichedInteractors[i + 1].organismName) {
                if (start !== null) {
                    oneType.push(this.enrichedInteractors[i].organismName, length, start);
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
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
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
    showExternalLink() {
        return this.interactorType !== 'stable complex' && !!this.identifierLink;
    }
};
TableInteractorExternalLinkComponent.propDecorators = {
    interactorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    identifierLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
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
    }
};
TableInteractorNameComponent.propDecorators = {
    interactorName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorTypeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
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
            if (!!component.stochiometry) {
                const matchedStoichiometry = (0,_complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.fetchValuesFromStoichiometry)(component.stochiometry);
                if (!!matchedStoichiometry) {
                    if (minValue === null) {
                        minValue = 0;
                    }
                    if (maxValue === null) {
                        maxValue = 0;
                    }
                    minValue += parseInt(matchedStoichiometry[1], 10);
                    maxValue += parseInt(matchedStoichiometry[2], 10);
                }
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
        this.findInteractorInComplex = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.findInteractorInComplex;
        this.getStoichiometry = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.getStoichiometry;
        this.stoichiometryOfInteractors = _complex_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.stoichiometryOfInteractors;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TableStructureComponent = class TableStructureComponent {
    constructor(router) {
        this.router = router;
    }
};
TableStructureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TableStructureComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TableStructureComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
        this.LIST_VIEW = 'LIST_VIEW';
        this.COMPLEX_NAVIGATOR_VIEW = 'COMPLEX_NAVIGATOR_VIEW';
        this._pageSize = 15;
        this._allInteractorsInComplexSearch = [];
        this.DisplayType = this.LIST_VIEW;
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
                            this._allInteractorsInComplexSearch.push(new _shared_model_complex_results_interactor_model__WEBPACK_IMPORTED_MODULE_5__.Interactor(component.identifier, component.identifierLink, component.name, component.description, component.interactorType));
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
            queryParams
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
    set pageSize(value) {
        this._pageSize = value;
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
    set allInteractorsInComplexSearch(value) {
        this._allInteractorsInComplexSearch = value;
    }
    setListView() {
        this.DisplayType = this.LIST_VIEW;
    }
    setComplexNavigatorView() {
        this.DisplayType = this.COMPLEX_NAVIGATOR_VIEW;
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
/* harmony import */ var _complex_navigator_sorting_complex_navigator_sorting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./complex-navigator-sorting/complex-navigator-sorting.component */ 79373);
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
            _complex_navigator_sorting_complex_navigator_sorting_component__WEBPACK_IMPORTED_MODULE_14__.ComplexNavigatorSortingComponent,
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
    constructor(identifier, identifierLink, name, description, interactorType) {
        this._identifier = identifier;
        this._identifierLink = identifierLink;
        this._name = name;
        this._description = description;
        this._interactorType = interactorType;
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
}


/***/ }),

/***/ 22830:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-filter/complex-filter.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ facetTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3122:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{ complex.complexAC }} / <b>Organism:</b> ({{ complex.organismName }})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ 47724:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator-sorting/complex-navigator-sorting.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sortingInteractors\">\n  <input type=\"submit\" name=\"classificationButton\" value=\"Sort interactors\" class=\"button\">\n  <div class=\"typeOfSorting\">\n    <input type=\"submit\" name=\"appearanceClassification\" value=\"Occurrence\" class=\"button\"\n           (click)=\"setInteractorsSorting('Occurrence')\">\n    <input type=\"submit\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n           (click)=\"setInteractorsSorting('Type')\">\n    <input type=\"submit\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n           (click)=\"setInteractorsSorting('Organism')\">\n    <input type=\"submit\" name=\"geneClassification\" value=\"Orthology (Not available yet)\" class=\"button\"\n           (click)=\"setInteractorsSorting('Orthology')\">\n  </div>\n</div>\n");

/***/ }),

/***/ 81779:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ComplexNavigator\">\n  <cp-complex-navigator-sorting\n    [(interactorsSorting)]=\"interactorsSorting\">\n  </cp-complex-navigator-sorting>\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\">\n  </cp-table-structure>\n</div>\n");

/***/ }),

/***/ 92341:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexSearch.elements.length<=6\">\n    <tr>\n      <!--      <td class=\"filler\" *ngIf=\"!isInteractorSortingSet()\"></td>-->\n      <th class=\"interactorsHeader horizontal\">Interactors\n      </th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexSearch.elements\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"line\"></div>\n                <div class=\"horizontal-label\">\n                  <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                  {{ complex.complexName }}\n                </div>\n            </span>\n          </div>\n        </a>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexSearch.elements.length>6\">\n    <tr [style.--cols]=\"complexSearch.elements.length\">\n      <th class=\"interactorsHeader\">Interactors</th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexSearch.elements\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"tilted-label\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <div class=\"spaceHolder\"></div>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n\n");

/***/ }),

/***/ 77194:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\">\n    <!-- Interactors' column -->\n    <ng-container *ngFor=\" let interactor of enrichedInteractors; let i=index\">\n      <tr *ngIf=\"!interactor.hidden\">\n        <ng-container *ngFor=\"let oneType of ranges\" class=\"interactorsOrdering\">\n          <td *ngIf=\"oneType[2]===i\" [attr.rowspan]=\"oneType[1]\" class=\"interactorSeparation\"\n              title=\"{{oneType[0]}}\">\n            <div class=\"interactorNameContainer\" [style.--rowspanSize]=\"oneType[1]\">\n              {{ oneType[0] }}\n            </div>\n          </td>\n        </ng-container>\n        <td class=\"interactorsColumn\">\n          <cp-table-interactor-name\n            [interactorName]=\"interactor.interactor.name\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [interactorId]=\"interactor.interactor.identifier\"\n          ></cp-table-interactor-name>\n          <!-- Icon for the expandable -->\n          <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n            <a title=\"{{ interactor.interactor.name }} interactors\" (click)=\"toggleSubcomplexExpandable(i)\">\n              {{ interactor.interactor.identifier }}\n              <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                 style=\"font-size:small; margin-top: 2px\"></i>\n            </a>\n          </div>\n          <cp-table-interactor-external-link\n            [interactorId]=\"interactor.interactor.identifier\"\n            [interactorType]=\"interactor.interactor.interactorType\"\n            [identifierLink]=\"interactor.interactor.identifierLink\"\n          ></cp-table-interactor-external-link>\n        </td>\n        <!-- Interactors' stoichiometry -->\n        <ng-container *ngFor=\"let complex of enrichedComplexes\">\n          <td class=\"intStoich\">\n            <cp-table-main-interactor\n              [complex]=\"complex\"\n              [i]=\"i\"\n              [enrichedInteractors]=\"enrichedInteractors\"\n            ></cp-table-main-interactor>\n          </td>\n        </ng-container>\n        <div class=\"spaceHolder\" *ngIf=\"complexSearch.elements.length>6\"></div>\n      </tr>\n      <!-- Expandable menu for subcomplexes -->\n      <ng-container *ngIf=\"interactor.expanded\">\n        <ng-container *ngIf=\"!!interactor.subComponents\">\n          <tr *ngFor=\"let el of interactor.subComponents; let j=index\"\n              class=\"expandedRows\"\n              [ngClass]=\"{'firstExpandedRow': j === 0, 'lastExpandedRow': j === interactor.subComponents.length - 1}\">\n            <td [attr.rowspan]=\"interactor.subComponents.length\" class=\"interactorSeparation\"\n                title=\"{{interactor.interactor.name}}'s interactors\"\n                *ngIf=\"j === 0 && (interactorsSorting === 'Type' || interactorsSorting === 'Organism')\">\n              <div class=\"interactorSeparationName\"> {{ interactor.interactor.name }} interactors</div>\n            </td>\n            <td class=\"subComponentColumn\">\n              <div>\n                <cp-table-interactor-name\n                  [interactorName]=\"el.name\"\n                  [interactorType]=\"el.interactorType\"\n                  [interactorId]=\"el.identifier\"\n                ></cp-table-interactor-name>\n              </div>\n              <cp-table-interactor-external-link\n                [interactorId]=\"el.identifier\"\n                [interactorType]=\"el.interactorType\"\n                [identifierLink]=\"el.identifierLink\"\n              ></cp-table-interactor-external-link>\n            </td>\n            <ng-container *ngFor=\"let complex of enrichedComplexes\">\n              <td class=\"intStoich\">\n                <cp-table-subcomponent-interactor\n                  [complex]=\"complex\"\n                  [i]=\"i\"\n                  [j]=\"j\"\n                  [enrichedInteractors]=\"enrichedInteractors\"\n                ></cp-table-subcomponent-interactor>\n              </td>\n            </ng-container>\n            <div class=\"spaceHolder\" *ngIf=\"complexSearch.elements.length>6\"></div>\n          </tr>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n");

/***/ }),

/***/ 60908:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"externalLinkContainer\" *ngIf=\"showExternalLink()\">\n  <a href=\"{{identifierLink}}\"\n     target=\"_blank\">{{ interactorId }}\n    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information\"></i>\n  </a>\n</div>\n");

/***/ }),

/***/ 41087:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  {{ interactorName }}\n  <i class=\"{{interactorTypeIcon}}\"\n     title=\"{{interactorType}}\"></i>\n  <!-- Adding of the icons to access details of the interactor -->\n  <a [routerLink]=\"['/complex/search']\"\n     [queryParams]=\"{query: interactorId, page: 1}\"\n     target=\"_blank\">\n    <i class=\"icon icon-functional small\" data-icon=\"1\"\n       title=\"Complexes containing this interactor\"></i>\n  </a>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"displayTopLineClass(complex, i)\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!findInteractorInComplex(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryText]=\"getStoichiometry(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractors(complex.complex, interactor.interactor.identifier)\"\n></cp-table-interactor-stoichiometry>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"findInteractorsInSubComplex(complex.complex, interactor.interactor.identifier).length > 0\"\n  [stoichiometryText]=\"getStoichiometrySubComplex(complex.complex, interactor.interactor.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractorsMainTable(complex.complex, interactor.interactor.identifier)\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClass(complex, i)\"></div>\n");

/***/ }),

/***/ 59270:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"displayTopLineClassExpanded(complex, i, j)\"></div>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!findInteractorInComplex(complex.complex, el.identifier)\"\n  [stoichiometryText]=\"getStoichiometry(complex.complex, el.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractors(complex.complex, el.identifier)\"\n></cp-table-interactor-stoichiometry>\n<cp-table-interactor-stoichiometry\n  *ngIf=\"!!findInteractorInExpandedSubComplex(interactor, complex.complex, el.identifier)\"\n  [stoichiometryText]=\"getStoichiometryInExpandedSubComplex(interactor, el.identifier)\"\n  [stoichiometryValue]=\"stoichiometryOfInteractorsExpandable(interactor, el.identifier)\"\n></cp-table-interactor-stoichiometry>\n<div [ngClass]=\"displayBottomLineClassExpanded(complex, i, j)\"></div>\n");

/***/ }),

/***/ 75118:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"complexNavigatorTable\">\n  <div class=\"header\"\n       (scroll)=\"body.scrollLeft = header.scrollLeft\" #header>\n\n    <cp-table-header [complexSearch]=\"complexSearch\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\"\n       (scroll)=\"header.scrollLeft = body.scrollLeft\" #body>\n    <cp-table-interactor-column\n      [complexSearch]=\"complexSearch\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\">\n    </cp-table-interactor-column>\n  </div>\n  <div class=\"spaceHolder\"></div>\n</div>\n\n");

/***/ }),

/***/ 65123:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-paginator/complex-paginator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h5 class=\"text-center\">{{currentPageIndex}} of {{lastPageIndex}}</h5>\n  <ul class=\"pagination text-center\" role=\"navigation\" aria-label=\"Pagination\">\n    <li class=\"arrow unavailable\" *ngIf=\"currentPageIndex != 1\" aria-disabled=\"true\"><a\n      (click)=\"getPreviousPage()\">&laquo; Previous</a></li>\n    <ng-container *ngFor=\"let index of pagination\">\n      <li *ngIf=\"index[1] == 'true'\" class=\"current\"><span class=\"show-for-sr\">You're on page</span>{{index[0]}}</li>\n      <li *ngIf=\"index[1] == 'false'\"><a (click)=\"getPage(index[0])\">{{index[0]}}</a></li>\n    </ng-container>\n    <li class=\"arrow\" *ngIf=\"currentPageIndex != lastPageIndex\"><a (click)=\"getNextPage()\">Next &raquo;</a></li>\n  </ul>\n</div>\n");

/***/ }),

/***/ 13182:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-results.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large\">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"row\">\n        <div class=\"displayButton columns medium-8\" style=\"text-align: center\">\n          <input type=\"submit\" name=\"submit\" value=\"View list\" class=\"button view-button\"\n                 (click)=\"setListView()\" [ngClass]=\"{'selected': DisplayType === LIST_VIEW}\">\n          <input type=\"submit\" name=\"submit\" value=\"View Complex Navigator\" class=\"button view-button\"\n                 (click)=\"setComplexNavigatorView()\" [ngClass]=\"{'selected': DisplayType === COMPLEX_NAVIGATOR_VIEW}\">\n        </div>\n      </div>\n      <div class=\"columns medium-4\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        <cp-complex-list class=\"listOfResults\" *ngIf=\"DisplayType===LIST_VIEW\"\n                         [complexSearch]=\"complexSearch\">\n        </cp-complex-list>\n        <cp-complex-navigator class=\"Complex-navigator\" *ngIf=\"DisplayType===COMPLEX_NAVIGATOR_VIEW\"\n                              [complexSearch]=\"complexSearch\"\n                              [interactors]=\"allInteractorsInComplexSearch\">\n        </cp-complex-navigator>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n");

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 84353:
/*!***********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator-sorting/complex-navigator-sorting.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  margin-top: -16px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtbmF2aWdhdG9yLXNvcnRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6ImNvbXBsZXgtbmF2aWdhdG9yLXNvcnRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlT2ZTb3J0aW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNvcnRpbmdJbnRlcmFjdG9yczpob3ZlciAudHlwZU9mU29ydGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuXG59XG4iXX0= */";

/***/ }),

/***/ 14332:
/*!*******************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/complex-navigator.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV4LW5hdmlnYXRvci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 32149:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.css ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

module.exports = ".CN-table {\n  transform: rotateX(180deg); /* rotate the header's content to make it it the right sense (when removes, it is upside down) */\n}\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n}\n\n/* Rotated complexes names */\n\n.interactorsHeader {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #007c82;\n  background-color: white;\n  padding-top: 150px;\n  text-align: right;\n  border-bottom: 3px solid #007c82;\n}\n\n.tilted-label {\n  padding-left: 5px;\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table .tableHeadOverflow tr {\n  --cols: 1;\n  display: grid;\n  grid-template-columns: 130px repeat(auto-fit, 100px);\n  width: calc(130px + 100px * var(--cols) + 185px);\n}\n\n.CN-table .tableHeadOverflow th.rotate {\n  position: relative;\n  width: 340px;\n  height: 72px !important;\n  color: white;\n  font-size: 14px;\n  text-align: left;\n  border-top: 1px solid white;\n  top: 55px;\n  left: -27px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  transform: rotate(-45deg);\n  /* line */\n  border-top: 1px solid white;\n}\n\n.CN-table .tableHeadOverflow th.rotate a {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  background-color: #007c82;\n  padding: 0 0 0 70px;\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-bottom: 3px solid #007c82;\n  border-left: none;\n  text-align: right;\n  color: #007c82;\n  background-color: white;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #007c82;\n  border: 1px solid white;\n  min-width: 100px;\n  max-width: 100px;\n  height: 50px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n.spaceHolder {\n  width: 180px;\n  background-color: white;\n}\n\n/*.interactorsHeader horizontal .bigInteractorHeader {*/\n\n/*  min-width: calc(var(--interactorsHeaderWidth) + 3ch);*/\n\n/*  max-width: calc(var(--interactorsHeaderWidth) + 3ch);*/\n\n/*  background-color: #6dab49;*/\n\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUUsZ0dBQWdHO0FBQzlIOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBLDRCQUE0Qjs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixvREFBb0Q7RUFDcEQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBLHVEQUF1RDs7QUFDdkQsMERBQTBEOztBQUMxRCwwREFBMEQ7O0FBQzFELCtCQUErQjs7QUFDL0IsSUFBSSIsImZpbGUiOiJ0YWJsZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5DTi10YWJsZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyAvKiByb3RhdGUgdGhlIGhlYWRlcidzIGNvbnRlbnQgdG8gbWFrZSBpdCBpdCB0aGUgcmlnaHQgc2Vuc2UgKHdoZW4gcmVtb3ZlcywgaXQgaXMgdXBzaWRlIGRvd24pICovXG59XG5cbnRoZWFkIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHdoaXRlO1xufVxuXG4uQ04tdGFibGUge1xuICBjbGlwLXBhdGg6IGZpbGwtYm94O1xufVxuXG4vKiBSb3RhdGVkIGNvbXBsZXhlcyBuYW1lcyAqL1xuXG4uaW50ZXJhY3RvcnNIZWFkZXIge1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA0O1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA3YzgyO1xufVxuXG4udGlsdGVkLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMjhjaDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRyIHtcbiAgLS1jb2xzOiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xuICB3aWR0aDogY2FsYygxMzBweCArIDEwMHB4ICogdmFyKC0tY29scykgKyAxODVweCk7XG59XG5cbi5DTi10YWJsZSAudGFibGVIZWFkT3ZlcmZsb3cgdGgucm90YXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogNzJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IC0yN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC8qIGxpbmUgKi9cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uQ04tdGFibGUgLnRhYmxlSGVhZE92ZXJmbG93IHRoLnJvdGF0ZSBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzgyO1xuICBwYWRkaW5nOiAwIDAgMCA3MHB4O1xufVxuXG4vKiBIb3Jpem9udGFsIGNvbXBsZXhlcyBuYW1lICovXG5cbi5DTi10YWJsZSB0aC5ob3Jpem9udGFsLmludGVyYWN0b3JzSGVhZGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDdjODI7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMwMDdjODI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaG9yaXpvbnRhbC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA5MCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLkNOLXRhYmxlIHRoLmhvcml6b250YWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuYTp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BhY2VIb2xkZXIge1xuICB3aWR0aDogMTgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKi5pbnRlcmFjdG9yc0hlYWRlciBob3Jpem9udGFsIC5iaWdJbnRlcmFjdG9ySGVhZGVyIHsqL1xuLyogIG1pbi13aWR0aDogY2FsYyh2YXIoLS1pbnRlcmFjdG9yc0hlYWRlcldpZHRoKSArIDNjaCk7Ki9cbi8qICBtYXgtd2lkdGg6IGNhbGModmFyKC0taW50ZXJhY3RvcnNIZWFkZXJXaWR0aCkgKyAzY2gpOyovXG4vKiAgYmFja2dyb3VuZC1jb2xvcjogIzZkYWI0OTsqL1xuLyp9Ki9cbiJdfQ== */";

/***/ }),

/***/ 88066:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "table {\n  height: 1px;\n}\n\n/* interactors column */\n\n.interactorsColumn {\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  max-height: 60px;\n  min-height: 60px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n}\n\n.interactorsColumn a {\n  font-weight: normal;\n}\n\n.intStoich {\n  height: 50px;\n  max-width: 100px;\n  min-width: 100px;\n  font-size: medium;\n  text-align: end;\n  z-index: 1;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n.spaceHolder {\n  width: 180px;\n}\n\n.subComponentColumn {\n  left: 0;\n  z-index: 30;\n  max-height: 50px;\n  min-height: 50px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n  font-weight: bold;\n  background: inherit;\n  position: sticky\n}\n\n.expandedRows {\n  color: #0e6f76;\n  position: relative;\n}\n\n.firstExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #0e6f7696 0px, transparent 10px);\n}\n\n.lastExpandedRow:after {\n  z-index: 40;\n  content: '';\n  position: absolute;\n  inset: -2px -1px -2px -1px;\n  pointer-events: none;\n  background: linear-gradient(0deg, #0e6f7696 0px, transparent 10px);\n}\n\n/* Interactors sorting label*/\n\n.interactorSeparation {\n  max-width: 3ch;\n  min-width: 3ch;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  overflow: hidden;\n  width: 3ch;\n  text-align: -webkit-center;\n}\n\n.interactorNameContainer {\n  --rowspanSize: 1;\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  /*font-weight: lighter;*/\n  font-size: small;\n  color: white;\n  line-height: 0.8;\n  text-align: center;\n\n\n  text-overflow: ellipsis;\n  height: calc(var(--rowspanSize) * 48px);\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixrRUFBa0U7QUFDcEU7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7OztFQUdsQix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi8qIGludGVyYWN0b3JzIGNvbHVtbiAqL1xuLmludGVyYWN0b3JzQ29sdW1uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgbWF4LWhlaWdodDogNjBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLmludGVyYWN0b3JzQ29sdW1uIGEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaW50U3RvaWNoIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB6LWluZGV4OiAxO1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWNlZDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZhO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuLnNwYWNlSG9sZGVyIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4uc3ViQ29tcG9uZW50Q29sdW1uIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMzA7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzBlNmY3NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBzdGlja3lcbn1cblxuLmV4cGFuZGVkUm93cyB7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maXJzdEV4cGFuZGVkUm93OmFmdGVyIHtcbiAgei1pbmRleDogNDA7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtMnB4IC0xcHggLTJweCAtMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi5sYXN0RXhwYW5kZWRSb3c6YWZ0ZXIge1xuICB6LWluZGV4OiA0MDtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IC0ycHggLTFweCAtMnB4IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBlNmY3Njk2IDBweCwgdHJhbnNwYXJlbnQgMTBweCk7XG59XG5cbi8qIEludGVyYWN0b3JzIHNvcnRpbmcgbGFiZWwqL1xuXG4uaW50ZXJhY3RvclNlcGFyYXRpb24ge1xuICBtYXgtd2lkdGg6IDNjaDtcbiAgbWluLXdpZHRoOiAzY2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogM2NoO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmludGVyYWN0b3JOYW1lQ29udGFpbmVyIHtcbiAgLS1yb3dzcGFuU2l6ZTogMTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC8qZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7Ki9cbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMC44O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXJvd3NwYW5TaXplKSAqIDQ4cHgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 52504:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "a {\n  font-weight: normal;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\n.externalLinkContainer {\n  word-wrap: break-word;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItZXh0ZXJuYWwtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0YWJsZS1pbnRlcmFjdG9yLWV4dGVybmFsLWxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5leHRlcm5hbExpbmtDb250YWluZXIge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4iXX0= */";

/***/ }),

/***/ 57324:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component.css ***!
  \*************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "a {\n  font-weight: normal;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJ0YWJsZS1pbnRlcmFjdG9yLW5hbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuaTpub3QoLnNtYWxsKSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4iXX0= */";

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

module.exports = ".verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW1haW4taW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YWJsZS1tYWluLWludGVyYWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbExpbmUsIC50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMSU7XG4gIG1heC13aWR0aDogMSU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWluLWhlaWdodDogNTAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzBlNmY3Njtcbn1cblxuLnRyYW5zcGFyZW50VmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuIl19 */";

/***/ }),

/***/ 85339:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component.css ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n.verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n  z-index: 0;\n}\n\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN1YmNvbXBvbmVudC1pbnRlcmFjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0YWJsZS1zdWJjb21wb25lbnQtaW50ZXJhY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmVydGljYWxMaW5lLCAudHJhbnNwYXJlbnRWZXJ0aWNhbExpbmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDElO1xuICBtYXgtd2lkdGg6IDElO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICMwZTZmNzY7XG59XG5cbi50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 71108:
/*!*********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  height: 100%;\n  width: 120%;\n}\n\n.header {\n  position: sticky;\n  top: 20px;\n  z-index: 2;\n  overflow-x: auto;\n  overflow-y: hidden;\n  transform: rotateX(180deg);\n}\n\n.interactors {\n  z-index: 1;\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ0YWJsZS1zdHJ1Y3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wbGV4TmF2aWdhdG9yVGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMjAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyMHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuXG4uaW50ZXJhY3RvcnMge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbiJdfQ== */";

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

module.exports = ".displayButton {\n  float: right;\n}\n\n.view-button {\n  float: unset;\n  width: 225px;\n  margin-right: 5px;\n  background-color: white;\n  color: #555;\n  border: 1px dotted #007c82;\n}\n\n.view-button:hover {\n  color: #007c82;\n  background-color: rgb(234, 234, 234);\n  border: transparent;\n  border-bottom: 1px dotted #007c82;\n}\n\n.selected,\n.selected:hover {\n  background-color: #007c82;\n  color: white;\n  opacity: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoiY29tcGxleC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnZpZXctYnV0dG9uIHtcbiAgZmxvYXQ6IHVuc2V0O1xuICB3aWR0aDogMjI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjMDA3YzgyO1xufVxuXG4udmlldy1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwN2M4MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM0LCAyMzQpO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDdjODI7XG59XG5cbi5zZWxlY3RlZCxcbi5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjODI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es2015.js.map