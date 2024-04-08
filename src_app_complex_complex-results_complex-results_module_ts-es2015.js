"use strict";
(self["webpackChunkcomplex_portal_view"] = self["webpackChunkcomplex_portal_view"] || []).push([["src_app_complex_complex-results_complex-results_module_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/google-analytics/service/analytics.service */ 96242);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ComplexFilterComponent = class ComplexFilterComponent {
    constructor(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.onSpicesFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onBiologicalRoleFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onInteractorTypeFilterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onResetAllFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    interactorTypeIcon(facet) {
        switch (facet.name) {
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
};
ComplexFilterComponent.ctorParameters = () => [
    { type: _shared_google_analytics_service_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService }
];
ComplexFilterComponent.propDecorators = {
    onSpicesFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onBiologicalRoleFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onInteractorTypeFilterChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onResetAllFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    facets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    spicesFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    bioRoleFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorTypeFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ComplexFilterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ComplexNavigatorComponent = class ComplexNavigatorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    get interactors() {
        return this._interactors;
    }
    set interactors(value) {
        this._interactors = value;
    }
    set interactorsSorting(value) {
        this._interactorsSorting = value;
    }
    get interactorsSorting() {
        return this._interactorsSorting;
    }
};
ComplexNavigatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ComplexNavigatorComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    interactorsSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ComplexNavigatorComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
    constructor() {
    }
    ngOnInit() {
        this.classifyComplexesSize();
        this.classifyComplexesSimilarities(this.complexSearch);
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
                    // tslint:disable-next-line:no-shadowed-variable
                    const subComplex = searchResult.find(complex => complex.complexAC === complexInteractorChecked.identifier);
                    totalLength += subComplex.interactors.length;
                }
            }
            if (totalLength > biggestComplex[1]) {
                biggestComplex[0] = complex;
                biggestComplex[1] = totalLength;
            }
        }
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
                    // tslint:disable-next-line:max-line-length
                    const subComplex = searchResult.find(complex => complex.complexAC === biggestComplexInteractor.identifier);
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
                // tslint:disable-next-line:max-line-length
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
};
TableHeaderComponent.ctorParameters = () => [];
TableHeaderComponent.propDecorators = {
    complexSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    interactorsTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TableHeaderComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'cp-table-header',
        template: _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_table_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TableHeaderComponent);



/***/ }),

/***/ 48774:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.ts ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableInteractorColumnComponent": function() { return /* binding */ TableInteractorColumnComponent; }
/* harmony export */ });
/* harmony import */ var _Users_susiehuget_Documents_GitHub_complex_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_table_interactor_column_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./table-interactor-column.component.html */ 77194);
/* harmony import */ var _table_interactor_column_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-interactor-column.component.css */ 88066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_model_complex_results_complex_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/model/complex-results/complex-component.model */ 76572);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/service/complex-portal.service */ 20658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);
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
const BinaryComponentList = [];
let TableInteractorColumnComponent = class TableInteractorColumnComponent {
    constructor(complexPortalService) {
        this.complexPortalService = complexPortalService;
    }
    ngOnInit() {
    }
    get enrichedInteractors() {
        return this._enrichedInteractors;
    }
    get enrichedComplexes() {
        return this._enrichedComplexes;
    }
    set interactorsSorting(value) {
        this._interactorsSorting = value;
    }
    get interactorsSorting() {
        return this._interactorsSorting;
    }
    set interactors(value) {
        this._enrichedInteractors = [];
        for (const interactor of value) {
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
            this._enrichedInteractors.push(newEnrichedInteractor);
        }
        //////////// CLASSIFICATION BEFORE CALCULATIONS
        this.interactorOrganism();
        this.classifyIntercatorsByAppearance();
        this.calculateAllStartAndEndIndexes();
        console.log(this._interactorsSorting);
    }
    findInteractorInComplex(complex, componentId) {
        return complex.interactors.find(component => component.identifier === componentId);
    }
    findInteractorsInSubComplex(complex, interactorId) {
        return this._enrichedInteractors
            // filter subcomplexes
            .filter(interactor => interactor.isSubComplex)
            // filter subcomplexes included in complex
            .filter(interactor => complex.interactors.some(component => component.identifier === interactor.interactor.identifier))
            // filter subcomplexes that match the componentId
            .filter(interactor => !!interactor.subComponents)
            .map(interactor => interactor.subComponents.find(subComponent => subComponent.identifier === interactorId))
            .filter(component => !!component);
    }
    findInteractorInExpandedSubComplex(interactor, complex, interactorId) {
        if (complex.interactors.some(component => component.identifier === interactor.interactor.identifier)) {
            return interactor.subComponents.find(component => component.identifier === interactorId);
        }
        return null;
    }
    stochiometryOfInteractors(complex, interactorId) {
        const match = this.findInteractorInComplex(complex, interactorId);
        if (!!match) {
            return this.formatStochiometryValues(match.stochiometry);
        }
        return null;
    }
    stoichiometryOfInteractorsExpandable(interactor, interactorId) {
        const match = this.findInteractorInSubcomplex(interactor, interactorId);
        if (!!match) {
            return this.formatStochiometryValues(match.stochiometry);
        }
        return null;
    }
    stoichiometryOfInteractorsMainTable(complex, interactorId) {
        const matches = this.findInteractorsInSubComplex(complex, interactorId);
        if (matches.length > 0) {
            const stochiometryValues = this.addedStoichiometryValues(matches);
            if (!!stochiometryValues) {
                if (stochiometryValues[0] === stochiometryValues[1]) {
                    return stochiometryValues[0].toString();
                }
                else {
                    return `${stochiometryValues[0]}, ${stochiometryValues[1]}`;
                }
            }
            else {
                return ' ';
            }
        }
        return null;
    }
    getStochiometry(complex, componentId) {
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
    getStoichiometrySubComplex(complex, interactorId) {
        const matches = this.findInteractorsInSubComplex(complex, interactorId);
        if (matches.length > 0) {
            const stochiometryValues = this.addedStoichiometryValues(matches);
            if (!!stochiometryValues) {
                return `Stoichiometry values: minValue: ${stochiometryValues[0]}, maxValue: ${stochiometryValues[1]}`;
            }
            else {
                return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
            }
        }
        return null;
    }
    getStochiometryInExpandedSubComplex(interactor, interactorId) {
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
    showExternalLink(component) {
        return component.interactorType !== 'stable complex' && !!component.identifierLink;
    }
    toggleSubcomplexExpandable(i) {
        this._enrichedInteractors[i].expanded = !this._enrichedInteractors[i].expanded;
        if (this._enrichedInteractors[i].expanded) {
            // EnrichedInteractor has been expanded, we need to:
            // 1. Collapse the other ones, in case there is any other expanded
            for (let j = 0; j < this._enrichedInteractors.length; j++) {
                if (i !== j) {
                    this._enrichedInteractors[j].expanded = false;
                }
            }
            // 2. Hide any interactor now displayed in the expanded section
            if (!!this._enrichedInteractors[i].subComponents) {
                const subInteractorIds = this._enrichedInteractors[i].subComponents.map(component => component.identifier);
                for (let j = 0; j < this._enrichedInteractors.length; j++) {
                    if (i !== j) {
                        this._enrichedInteractors[j].hidden = !!subInteractorIds.includes(this._enrichedInteractors[j].interactor.identifier);
                    }
                }
            }
        }
        else {
            // EnrichedInteractor has been collapsed, we need to:
            // 1. Display any interactor previously hidden
            for (let j = 0; j < this._enrichedInteractors.length; j++) {
                this._enrichedInteractors[j].hidden = false;
            }
        }
        // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
        this.calculateAllStartAndEndIndexes();
    }
    interactorTypeIcon(interactor) {
        switch (interactor.interactorType) {
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
    loadSubInteractors(interactor) {
        // this function returns the list of subcomponents of an interactor of type stable complex
        const foundComplex = this.complexSearch.elements.find(complex => complex.complexAC === interactor.interactor.identifier);
        if (!!foundComplex) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(foundComplex.interactors);
        }
        else {
            // Actually call the back-end to fetch these
            return this.complexPortalService.getComplexAc(interactor.interactor.identifier)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(complex => complex.participants.map(participant => new _shared_model_complex_results_complex_component_model__WEBPACK_IMPORTED_MODULE_2__.ComplexComponent(participant.identifier, participant.identifierLink, participant.name, participant.description, participant.stochiometry, participant.interactorType))));
        }
    }
    findInteractorInSubcomplex(interactor, interactorId) {
        return interactor.subComponents.find(component => component.identifier === interactorId);
    }
    fetchValuesFromStochiometry(stochiometry) {
        const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
        return stochiometry.match(pattern);
    }
    formatStochiometryValues(stochiometry) {
        if (!!stochiometry) {
            const matchedStochometry = this.fetchValuesFromStochiometry(stochiometry);
            if (!!matchedStochometry) {
                // tslint:disable-next-line:radix
                const minValue = parseInt(matchedStochometry[1]);
                // tslint:disable-next-line:radix
                const maxValue = parseInt(matchedStochometry[2]);
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
    addedStoichiometryValues(components) {
        let minValue = null;
        let maxValue = null;
        for (const component of components) {
            if (!!component.stochiometry) {
                const matchedStochometry = this.fetchValuesFromStochiometry(component.stochiometry);
                if (!!matchedStochometry) {
                    if (minValue === null) {
                        minValue = 0;
                    }
                    if (maxValue === null) {
                        maxValue = 0;
                    }
                    // tslint:disable-next-line:radix
                    minValue += parseInt(matchedStochometry[1]);
                    // tslint:disable-next-line:radix
                    maxValue += parseInt(matchedStochometry[2]);
                }
            }
        }
        if (minValue !== null && maxValue !== null) {
            return [minValue, maxValue];
        }
        return null;
    }
    calculateAllStartAndEndIndexes() {
        this._enrichedComplexes = [];
        for (const complex of this.complexSearch.elements) {
            this._enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
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
        for (let i = 0; i < this._enrichedInteractors.length; i++) {
            if (!this._enrichedInteractors[i].hidden) {
                for (let j = 0; j < complex.interactors.length; j++) {
                    if (complex.interactors[j].identifier === this._enrichedInteractors[i].interactor.identifier) {
                        // The interactor is part of the complex, we update the start and end indices for the interactors
                        // line as it may start in this interactor
                        enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                        enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                        // The interactor is a subcomplex
                        if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents) {
                            // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
                            // In that case, the line could start or end there, so we need to also check the position of those
                            // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
                            this._enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
                            if (this._enrichedInteractors[i].expanded) {
                                // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                                // of it. That means we need a line connecting all the subcomponents.
                                // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                                // and not at the first subcomponent
                                enrichedComplex.startSubComponentIndex = -1;
                                enrichedComplex.endSubComponentIndex = this._enrichedInteractors[i].subComponents.length - 1;
                            }
                        }
                    }
                    else if (this._enrichedInteractors[i].isSubComplex &&
                        !!this._enrichedInteractors[i].subComponents &&
                        this._enrichedInteractors[i].expanded) {
                        // The interactor is not part of the complex but it is a subcomplex and it is expanded.
                        // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
                        // In that case, the line could start or end on any of those subcomponents
                        for (let k = 0; k < this._enrichedInteractors[i].subComponents.length; k++) {
                            if (complex.interactors[j].identifier === this._enrichedInteractors[i].subComponents[k].identifier) {
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
        for (let i = 0; i < this._enrichedInteractors.length; i++) {
            if (!this._enrichedInteractors[i].hidden) {
                if (subComponentsToCheck.includes(this._enrichedInteractors[i].interactor.identifier)) {
                    // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
                    // line as it may start in this interactor
                    enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                    enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                }
            }
        }
        return enrichedComplex;
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
                // the line does not end in this interactor and it musy cross through the interactor cell to the subcomponents
                if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
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
            if (!this._enrichedInteractors[interactorIndex].isSubComplex) {
                // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
                return true;
            }
            // If the interactor is a subcomplex.
            // If the interactor is actually part of the complex, the line starts in this interactor
            // Otherwise, the line actually starts on one of the subcomponets of the complex, but not on the interactor itself, as it is
            // not part of the complex.
            if (complex.complex.interactors.some(component => this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
                return true;
            }
        }
        return false;
    }
    doesLineEndOnInteractorCell(complex, interactorIndex) {
        // The line ends at this interactor or on any of its subcomponents
        if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
            // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
            // the line does not end in this interactor and it must cross through to the subcomponents
            if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
                if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
                    return false;
                }
            }
            return true;
        }
        return false;
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
                // The line started before this interactor and it ends on a later subcomponent, so it crosses through this subcomponent
                if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
                    return true;
                }
                // The line started before this subcomponent and it ends on a later interactor, so it crosses through this subcomponent
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
                return !complex.complex.interactors.some(component => this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);
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
    interactorOrganism() {
        for (const complex of this.complexSearch.elements) {
            const organismName = complex.organismName;
            for (const complexInteractor of complex.interactors) {
                // tslint:disable-next-line:max-line-length
                const match = this._enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === complexInteractor.identifier);
                match.organismName = organismName;
            }
        }
    }
    classifyInteractorsByOrganism() {
        this._enrichedInteractors.sort((a, b) => b.organismName.localeCompare(a.organismName));
    }
    classifyInteractorsByType() {
        this._enrichedInteractors.sort((a, b) => b.interactor.interactorType.localeCompare(a.interactor.interactorType));
    }
    classifyIntercatorsByAppearance() {
        for (const oneInteractor of this._enrichedInteractors) {
            for (const complex of this.complexSearch.elements) {
                for (const complexesInteractors of complex.interactors) {
                    if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
                        // tslint:disable-next-line:radix
                        if (isNaN(parseInt(this.stochiometryOfInteractors(complex, oneInteractor.interactor.identifier)))) {
                            oneInteractor.timesAppearing = oneInteractor.timesAppearing;
                        }
                        else {
                            // tslint:disable-next-line:radix
                            oneInteractor.timesAppearing += parseInt(this.stochiometryOfInteractors(complex, oneInteractor.interactor.identifier));
                        }
                    }
                }
                if (oneInteractor.isSubComplex) {
                    // tslint:disable-next-line:no-shadowed-variable
                    for (const subInteractor of oneInteractor.subComponents) {
                        // tslint:disable-next-line:max-line-length no-shadowed-variable
                        const enrichedInteractor = this._enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === subInteractor.identifier);
                        // tslint:disable-next-line:radix
                        enrichedInteractor.timesAppearing = parseInt(this.formatStochiometryValues(subInteractor.stochiometry));
                    }
                }
            }
        }
        // tslint:disable-next-line:max-line-length
        this._enrichedInteractors.sort((a, b) => b.timesAppearing - a.timesAppearing /* || a.interactor.name.localeCompare(b.interactor.name) */);
    }
    classificationChosen() {
        switch (this._interactorsSorting) {
            case 'Type':
                this.classifyInteractorsByType();
                break;
            case 'Organism':
                this.classifyInteractorsByOrganism();
                break;
            default:
                this.classifyIntercatorsByAppearance();
        }
    }
};
TableInteractorColumnComponent.ctorParameters = () => [
    { type: _shared_service_complex_portal_service__WEBPACK_IMPORTED_MODULE_3__.ComplexPortalService }
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
    // _overFlowing: boolean;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    get interactors() {
        return this._interactors;
    }
    set interactors(value) {
        this._interactors = value;
    }
    set interactorsSorting(value) {
        this._interactorsSorting = value;
    }
    get interactorsSorting() {
        return this._interactorsSorting;
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
        this._pageSize = 15;
        this._allInteractorsInComplexSearch = [];
        this.DisplayType = true;
        this._interactorsSorting = 'Appearance';
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
    toggleDisplayType() {
        this.DisplayType = !this.DisplayType;
    }
    // set interactorsSortingBy(typeOfSorting: string) {
    //   this.interactorsSortingBy = typeOfSorting;
    // }
    get interactorsSorting() {
        return this._interactorsSorting;
    }
    setInteractorsSorting(typeOfSorting) {
        //console.log(typeOfSorting);
        this._interactorsSorting = typeOfSorting;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _complex_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-results.component */ 50967);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _complex_paginator_complex_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-paginator/complex-paginator.component */ 80556);
/* harmony import */ var _complex_filter_complex_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complex-filter/complex-filter.component */ 16778);
/* harmony import */ var _complex_list_complex_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex-list/complex-list.component */ 57991);
/* harmony import */ var _shared_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-indicators/progress-spinner/progress-spinner.module */ 45103);
/* harmony import */ var _complex_navigator_complex_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex-navigator/complex-navigator.component */ 76549);
/* harmony import */ var _complex_navigator_table_structure_table_structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-structure.component */ 14915);
/* harmony import */ var _complex_navigator_table_structure_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-header/table-header.component */ 40969);
/* harmony import */ var _complex_navigator_table_structure_table_interactor_column_table_interactor_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complex-navigator/table-structure/table-interactor-column/table-interactor-column.component */ 48774);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let ComplexResultsModule = class ComplexResultsModule {
};
ComplexResultsModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: '', component: _complex_results_component__WEBPACK_IMPORTED_MODULE_0__.ComplexResultsComponent },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
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
        ]
    })
], ComplexResultsModule);



/***/ }),

/***/ 76572:
/*!*********************************************************************************!*\
  !*** ./src/app/complex/shared/model/complex-results/complex-component.model.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexComponent": function() { return /* binding */ ComplexComponent; }
/* harmony export */ });
class ComplexComponent {
    constructor(identifier, identifierLink, name, description, stochiometry, interactorType) {
        this._identifier = identifier;
        this._identifierLink = identifierLink;
        this._name = name;
        this._description = description;
        this._stochiometry = stochiometry;
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
    get stochiometry() {
        return this._stochiometry;
    }
    get interactorType() {
        return this._interactorType;
    }
}


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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filters row\">\n  <div class=\"columns medium-6\"><h3>Filters</h3></div>\n  <div class=\"columns medium-6\">\n    <div *ngIf=\"anyFiltersSelected()\">\n      <a class=\"button\" (click)=\"resetAllFilters()\"><i class=\"icon icon-functional\" data-icon=\"d\"></i> Reset filters</a>\n    </div>\n  </div>\n  <div class=\"columns medium-12\">\n    <div *ngIf=\"facets.species_f\">\n      <b>Species</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.species_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, spicesFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeSpeciesFilter(filter.value, filter.checked)\"> {{ facet.name }} ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"facets.pbiorole_f\">\n      <b>Biological Role</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.pbiorole_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, bioRoleFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeBiologicalRoleFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n\n    <div *ngIf=\"facets.ptype_f\">\n      <b>Interactor Type</b>\n      <ul class=\"no-bullet\">\n        <li *ngFor=\"let facet of facets.ptype_f\">\n          <div [ngSwitch]=\"isSelected(facet.name, interactorTypeFilter)\">\n            <div *ngSwitchCase=\"true\">\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\" checked> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ interactorTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n            <div *ngSwitchDefault>\n              <input type=\"checkbox\" #filter value=\"{{facet.name}}\"\n                     (change)=\"changeInteractorTypeFilter(filter.value, filter.checked)\"> {{ facet.name }}\n              ({{ facet.count }})\n              <i class=\"{{ interactorTypeIcon(facet) }}\"\n                 style=\"font-size: large;\"></i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div *ngIf=\"!facets.species_f && !facets.pbiorole_f && !facets.ptype_f\">\n      <h6>No filters available</h6>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3122:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-list/complex-list.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"no-bullet\">\n  <li *ngFor=\"let complex of complexSearch.elements\">\n    <h3><a [routerLink]=\"['/complex', complex.complexAC]\">{{ complex.complexName }}</a></h3>\n    <div class=\"description\" style=\"background-color: white\">\n      <b>Complex AC:</b> {{ complex.complexAC }} / <b>Organism:</b> ({{ complex.organismName }})<br>\n      <b>Description:</b>\n      <div *ngIf=\"complex.description.length <= 250\">\n        {{ complex.description }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n      <div *ngIf=\"complex.description.length > 250\">\n        {{ complex.description.substr(0, 250) }}<a [routerLink]=\"['/complex', complex.complexAC]\">...</a>\n      </div>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ 81779:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/complex-navigator.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ComplexNavigator\">\n  <cp-table-structure [complexSearch]=\"complexSearch\"\n                      [interactors]=\"interactors\"\n                      [interactorsSorting]=\"interactorsSorting\">\n  </cp-table-structure>\n</div>\n");

/***/ }),

/***/ 92341:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-header/table-header.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"table CN-table\">\n    <!-- When table is not overflowing -->\n    <thead class=\"tableHead\" *ngIf=\"complexSearch.elements.length<=6\">\n    <tr>\n      <th class=\"interactorsHeader horizontal\">Interactors</th>\n      <th class=\"horizontal\" *ngFor=\"let complex of complexSearch.elements\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n              <div class=\"line\"></div>\n                <div class=\"horizontal-label\">\n                  <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                  {{ complex.complexName }}\n                </div>\n            </span>\n          </div>\n        </a>\n      </th>\n    </tr>\n    </thead>\n    <!-- When table is overflowing -->\n    <thead class=\"tableHeadOverflow\" *ngIf=\"complexSearch.elements.length>6\">\n    <tr>\n      <th class=\"interactorsHeader\">Interactors</th>\n      <th class=\"rotate\" *ngFor=\"let complex of complexSearch.elements\">\n        <a [routerLink]=\"['/complex', complex.complexAC]\"\n           title=\"{{complex.complexAC}}\"\n           target=\"_blank\">\n          <div>\n            <span title=\"{{ complex.complexName }} - {{ complex.complexAC}}\">\n            <div class=\"line\"></div>\n              <div class=\"tilted-label\">\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n                {{ complex.complexName }}\n              </div>\n            </span>\n          </div>\n        </a>\n      </th>\n      <th class=\"placeholder\"></th>\n    </tr>\n    </thead>\n  </table>\n</div>\n\n");

/***/ }),

/***/ 77194:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Complex-navigator\">\n  <table class=\"interactors-table\">\n    <!-- Interactors' column -->\n    <ng-container *ngFor=\"let interactor of enrichedInteractors; let i=index\">\n      <!-- <ng-container [ngClass]=\"rangeOfInteractorType(interactor.interactor)\"></ng-container> -->\n      <ng-container>\n        <tr *ngIf=\"!interactor.hidden\">\n          <td>\n            <div style=\"font-weight: bold\">\n              {{ interactor.interactor.name }}\n              <!--{{ interactor.organismName }}-->\n              <i class=\"{{interactorTypeIcon(interactor.interactor)}}\"\n                 title=\"{{interactor.interactor.interactorType}}\"></i>\n              <!-- Adding of the icons to access details of the interactorr -->\n              <a [routerLink]=\"['/complex/search']\"\n                 [queryParams]=\"{query: interactor.interactor.identifier, page: 1}\"\n                 target=\"_blank\">\n                <i class=\"icon icon-functional small\" data-icon=\"1\"\n                   title=\"Complexes containing this interactor\"></i>\n              </a>\n            </div>\n            <!-- Icon for the expandable -->\n            <div class=\"container\" *ngIf=\"interactor.isSubComplex\">\n              {{ interactor.interactor.identifier }}\n              <a title=\"{{ interactor.interactor.name }}'s interactors\" (click)=\"toggleSubcomplexExpandable(i)\">\n                <i class=\"icon icon-common\" data-icon=\"&#xf078;\"\n                   style=\"font-size:small; margin-top: 2px\"></i>\n              </a>\n            </div>\n            <div *ngIf=\"showExternalLink(interactor.interactor)\" class=\"interactorType\">\n              <a href=\"{{interactor.interactor.identifierLink}}\" target=\"_blank\">{{ interactor.interactor.identifier }}\n                <i class=\"icon icon-generic small\" data-icon=\"x\"></i>\n              </a>\n            </div>\n          </td>\n          <!-- Interactors' stoichiometry -->\n          <ng-container *ngFor=\"let complex of enrichedComplexes\">\n            <td class=\"intStoich\">\n              <div [ngClass]=\"displayTopLineClass(complex, i)\"></div>\n              <ng-container *ngIf=\"!!findInteractorInComplex(complex.complex, interactor.interactor.identifier)\">\n                <div class=\"stoichNum\" title=\"{{ getStochiometry(complex.complex, interactor.interactor.identifier) }}\">\n                  {{ stochiometryOfInteractors(complex.complex, interactor.interactor.identifier) }}\n                </div>\n              </ng-container>\n              <ng-container class=\"stoichComponent\"\n                            *ngIf=\"findInteractorsInSubComplex(complex.complex, interactor.interactor.identifier).length > 0\">\n                <!-- subcomplexes' interactors' stoichiometry -->\n                <div class=\"stoichNum\"\n                     title=\"{{ getStoichiometrySubComplex(complex.complex, interactor.interactor.identifier) }}\">\n                  {{ stoichiometryOfInteractorsMainTable(complex.complex, interactor.interactor.identifier) }}\n                </div>\n              </ng-container>\n              <div [ngClass]=\"displayBottomLineClass(complex, i)\"></div>\n            </td>\n          </ng-container>\n        </tr>\n        <!-- Expandable menu for subcomplexes -->\n        <ng-container *ngIf=\"interactor.expanded\">\n          <ng-container *ngIf=\"!!interactor.subComponents\">\n            <tr class=\"expandedRows\" *ngFor=\"let el of interactor.subComponents; let j=index\">\n              <td class=\"intStoich\">\n                <div style=\"font-weight: bold\">\n                  <a [routerLink]=\"['/complex/search']\"\n                     [queryParams]=\"{query: el.identifier, page: 1}\"\n                     target=\"_blank\">\n                    {{ el.name }}\n                    <i class=\"{{interactorTypeIcon(el)}}\"\n                       title=\"{{interactor.interactor.interactorType}}\"></i>\n                    <i class=\"icon icon-functional small\" data-icon=\"1\"\n                       title=\"More complexes containing this interactor\"></i>\n                  </a>\n                </div>\n                <div *ngIf=\"showExternalLink(el)\" class=\"interactorType\">\n                  <a href=\"{{el.identifierLink}}\" target=\"_blank\">{{ el.identifier }}\n                    <i class=\"icon icon-generic small\" data-icon=\"x\" title=\"More information\"\n                    ></i>\n                  </a>\n                </div>\n              </td>\n              <ng-container *ngFor=\"let complex of enrichedComplexes\">\n                <td class=\"intStoich\">\n                  <div [ngClass]=\"displayTopLineClassExpanded(complex, i, j)\"></div>\n                  <ng-container *ngIf=\"!!findInteractorInComplex(complex.complex, el.identifier)\">\n                    <div class=\"stoichNum\"\n                         title=\"{{ getStochiometry(complex.complex, el.identifier) }}\">\n                      {{ stochiometryOfInteractors(complex.complex, el.identifier) }}\n                    </div>\n                  </ng-container>\n                  <ng-container\n                    *ngIf=\"!!findInteractorInExpandedSubComplex(interactor, complex.complex, el.identifier)\">\n                    <!-- subcomplexes' interactors' stoichiometry -->\n                    <div class=\"stoichNum\"\n                         title=\"{{ getStochiometryInExpandedSubComplex(interactor, el.identifier) }}\">\n                      {{ stoichiometryOfInteractorsExpandable(interactor, el.identifier) }}\n                    </div>\n                  </ng-container>\n                  <div [ngClass]=\"displayBottomLineClassExpanded(complex, i, j)\"></div>\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </table>\n</div>\n");

/***/ }),

/***/ 75118:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"complexNavigatorTable\">\n  <div class=\"header\">\n    <cp-table-header [complexSearch]=\"complexSearch\">\n    </cp-table-header>\n  </div>\n  <div class=\"interactors\">\n    <cp-table-interactor-column\n      [complexSearch]=\"complexSearch\"\n      [interactors]=\"interactors\"\n      [interactorsSorting]=\"interactorsSorting\">\n    </cp-table-interactor-column>\n  </div>\n</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <ng-container *ngIf=\"complexSearch;else loadingSpinner\">\n    <div class=\"columns medium-12\" *ngIf=\"complexSearch.totalNumberOfResults !== 0\">\n      <h2 class=\"padding-left-large\">Total number of results: {{ complexSearch.totalNumberOfResults }} </h2>\n      <div class=\"columns medium-4\">\n        <cp-complex-filter *ngIf=\"spicesFilter && bioRoleFilter && interactorTypeFilter\"\n                           [spicesFilter]=\"spicesFilter\"\n                           [bioRoleFilter]=\"bioRoleFilter\"\n                           [interactorTypeFilter]=\"interactorTypeFilter\" [facets]=\"complexSearch.facets\"\n                           (onResetAllFilters)=\"onResetAllFilters()\"\n                           (onSpicesFilterChanged)=\"onSpicesFilterChanged($event)\"\n                           (onBiologicalRoleFilterChanged)=\"onBiologicalRoleFilterChanged($event)\"\n                           (onInteractorTypeFilterChanged)=\"onInteractorTypeFilterChanged($event)\">\n        </cp-complex-filter>\n      </div>\n      <div class=\"columns medium-8\">\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n        <div class=\"listOfResults\" *ngIf=\"DisplayType==false\">\n          <div class=\"displayButton\" style=\"text-align: center\">\n            <input type=\"submit\" name=\"submit\" value=\"Complex navigator\" class=\"button\"\n                   (click)=\"toggleDisplayType()\">\n          </div>\n          <cp-complex-list [complexSearch]=\"complexSearch\">\n          </cp-complex-list>\n        </div>\n        <div class=\"Complex-navigator\" *ngIf=\"DisplayType\">\n          <div class=\"displayButton\" style=\"text-align: center\">\n            <input type=\"submit\" name=\"submit\" value=\"View list\" class=\"button\"\n                   (click)=\"toggleDisplayType()\">\n          </div>\n          <div class=\"sortingInteractors\">\n            <input type=\"submit\" name=\"classificationButton\" value=\"Interactors sorting\" class=\"button\">\n            <div class=\"typeOfSorting\">\n              <input type=\"submit\" name=\"appearanceClassification\" value=\"Appearance\" class=\"button\"\n                     (click)=\"setInteractorsSorting('Appearance')\">\n              <input type=\"submit\" name=\"typeClassification\" value=\"Type\" class=\"button\"\n                     (click)=\"setInteractorsSorting('Type')\">\n              <input type=\"submit\" name=\"organismClassification\" value=\"Organism\" class=\"button\"\n                     (click)=\"setInteractorsSorting('Organism')\">\n              <input type=\"submit\" name=\"geneClassification\" value=\"Orthology\" class=\"button\"\n                     (click)=\"setInteractorsSorting('Orthology')\">\n            </div>\n          </div>\n          <div class=\"Matrix\">\n            <cp-complex-navigator [complexSearch]=\"complexSearch\"\n                                  [interactors]=\"allInteractorsInComplexSearch\"\n                                  [interactorsSorting]=\"interactorsSorting\">\n            </cp-complex-navigator>\n          </div>\n        </div>\n        <cp-complex-paginator [currentPageIndex]=\"currentPageIndex\"\n                              [lastPageIndex]=\"lastPageIndex\"\n                              (onPageChange)=\"onPageChange($event)\"></cp-complex-paginator>\n      </div>\n    </div>\n\n    <div class=\"columns medium-12 callout alert\" *ngIf=\"complexSearch.totalNumberOfResults === 0\">\n      <h2>No Complex Portal results found</h2>\n      <h3>We're sorry but we couldn't find anything that matched your search for: <b>{{ query }}</b></h3>\n      <h4>Please consider refining your terms:</h4>\n      <ul>\n        <li>Make sure all words are spelled correctly</li>\n        <li>Try different keywords</li>\n        <li>Be more precise: use gene or protein IDs, e.g. Ndc80 or Q04571</li>\n        <li>Remove quotes around phrases to search for each word individually. bike shed will often show more results\n          than\n          \"bike shed\"\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-template #loadingSpinner>\n    <cp-progress-spinner [query]=\"query\"></cp-progress-spinner>\n  </ng-template>\n</div>\n");

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

module.exports = "/* Header */\n\nthead {\n  border: 0;\n  background-color: white;\n  border-right: 0 solid white;\n}\n\n.CN-table {\n  -webkit-clip-path: fill-box;\n          clip-path: fill-box;\n}\n\n/* Rotated complexes names */\n\n.interactorsHeader {\n  min-width: 130px;\n  max-width: 130px;\n  position: sticky;\n  left: 0;\n  z-index: 4;\n  color: #0e6f76;\n  background-color: white;\n  padding-top: 150px;\n  text-align: right;\n  border-bottom: 3px solid #0d6c72;\n}\n\n.tilted-label {\n  padding-left: 5px;\n  text-overflow: ellipsis;\n  width: 28ch;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CN-table th.rotate {\n  min-width: 100px;\n  max-width: 100px;\n  position: relative;\n  border-bottom: 3px solid white;\n  white-space: nowrap; /* all text in one line */\n  border-bottom: 1px solid black;\n}\n\n.CN-table th.rotate span {\n  transform: rotate(-45deg);\n  position: absolute;\n  width: 340px;\n\n  color: white;\n  background-color: #0e6f76;\n  font-size: 14px;\n\n  /* vertical alignement of the text */\n  align-content: center;\n  text-align: left;\n  padding-left: 70px;\n\n  /* line */\n  border-top: 1px solid white;\n  top: 55px; /* vertical alignement of the line */\n  bottom: 58px; /* vertical alignement of the line */\n  left: -27px; /* horizontal alignement of the line */\n}\n\n.line {\n  position: absolute;\n  top: auto;\n  bottom: auto;\n  background: #0e6f76;\n  margin-top: 7px;\n  left: 0;\n  width: 66px;\n  height: 5px;\n  border-radius: 4px;\n}\n\n.placeholder {\n  min-width: 190px;\n  background-color: white;\n  border-right: 0 solid white;\n}\n\n/* Horizontal complexes name */\n\n.CN-table th.horizontal.interactorsHeader {\n  padding: 5px;\n  min-width: 130px;\n  max-width: 130px;\n  font-size: medium;\n  border-bottom: 3px solid #0d6c72;\n  border-left: none;\n  text-align: right;\n  color: #0e6f76;\n  background-color: white;\n}\n\n.horizontal-label {\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 90%;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: auto;\n}\n\n.CN-table th.horizontal {\n  color: white;\n  background-color: #0e6f76;\n  border: 1px solid white;\n  min-width: 100px;\n  max-width: 100px;\n  height: 50px;\n  font-size: 15px;\n}\n\na:visited {\n  color: white;\n}\n\na {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBRVg7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUUseUJBQXlCO0VBQzlDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTs7RUFFWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7O0VBRWYsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFNBQVMsRUFBRSxvQ0FBb0M7RUFDL0MsWUFBWSxFQUFFLG9DQUFvQztFQUNsRCxXQUFXLEVBQUUsc0NBQXNDO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgKi9cblxudGhlYWQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgd2hpdGU7XG59XG5cbi5DTi10YWJsZSB7XG4gIGNsaXAtcGF0aDogZmlsbC1ib3g7XG59XG5cbi8qIFJvdGF0ZWQgY29tcGxleGVzIG5hbWVzICovXG5cbi5pbnRlcmFjdG9yc0hlYWRlciB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwZDZjNzI7XG59XG5cbi50aWx0ZWQtbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAyOGNoO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uQ04tdGFibGUgdGgucm90YXRlIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIGFsbCB0ZXh0IGluIG9uZSBsaW5lICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLkNOLXRhYmxlIHRoLnJvdGF0ZSBzcGFuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzQwcHg7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Zjc2O1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgLyogdmVydGljYWwgYWxpZ25lbWVudCBvZiB0aGUgdGV4dCAqL1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcblxuICAvKiBsaW5lICovXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgdG9wOiA1NXB4OyAvKiB2ZXJ0aWNhbCBhbGlnbmVtZW50IG9mIHRoZSBsaW5lICovXG4gIGJvdHRvbTogNThweDsgLyogdmVydGljYWwgYWxpZ25lbWVudCBvZiB0aGUgbGluZSAqL1xuICBsZWZ0OiAtMjdweDsgLyogaG9yaXpvbnRhbCBhbGlnbmVtZW50IG9mIHRoZSBsaW5lICovXG59XG5cbi5saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZDogIzBlNmY3NjtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCB3aGl0ZTtcbn1cblxuLyogSG9yaXpvbnRhbCBjb21wbGV4ZXMgbmFtZSAqL1xuXG4uQ04tdGFibGUgdGguaG9yaXpvbnRhbC5pbnRlcmFjdG9yc0hlYWRlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMGQ2YzcyO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMGU2Zjc2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvcml6b250YWwtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5DTi10YWJsZSB0aC5ob3Jpem9udGFsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2Zjc2O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 88066:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-interactor-column/table-interactor-column.component.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "td:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 30;\n  max-height: 50px;\n  min-height: 50px;\n  min-width: 130px;\n  max-width: 130px;\n  padding: 5px;\n  text-align: end;\n  color: #0e6f76;\n}\n\n.intStoich {\n  height: 50px;\n  max-width: 100px;\n  min-width: 100px;\n  font-size: medium;\n}\n\n.stoichNum {\n  width: 4ch;\n  height: 4ch;\n  border-radius: 4ch;\n  background-color: #0e6f76;\n  text-align: center;\n  padding-top: 0.5ch;\n  color: white;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.verticalLine, .transparentVerticalLine {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 1%;\n  max-width: 1%;\n  max-height: 50%;\n  min-height: 50%;\n}\n\n.verticalLine {\n  border-right: 5px solid #0e6f76;\n}\n\n.transparentVerticalLine {\n  border-right: 0;\n}\n\ni:not(.small) {\n  font-size: large;\n}\n\ntr:nth-child(even) {\n  background-color: #dfeced;\n}\n\ntr:nth-child(odd) {\n  background-color: #f7f9fa;\n}\n\n.expandedRows {\n  border-right: 4px solid #0e6f76;\n  border-left: 4px solid #0e6f76;\n  color: #0e6f76;\n}\n\na, a:visited {\n  color: #0e6f76;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludGVyYWN0b3ItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoidGFibGUtaW50ZXJhY3Rvci1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMzA7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuLmludFN0b2ljaCB7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cblxuLnN0b2ljaE51bSB7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBib3JkZXItcmFkaXVzOiA0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNWNoO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbExpbmUsIC50cmFuc3BhcmVudFZlcnRpY2FsTGluZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMSU7XG4gIG1heC13aWR0aDogMSU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWluLWhlaWdodDogNTAlO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzBlNmY3Njtcbn1cblxuLnRyYW5zcGFyZW50VmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG5pOm5vdCguc21hbGwpIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWNlZDtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZhO1xufVxuXG4uZXhwYW5kZWRSb3dzIHtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzBlNmY3NjtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMGU2Zjc2O1xuICBjb2xvcjogIzBlNmY3Njtcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICMwZTZmNzY7XG59XG4iXX0= */";

/***/ }),

/***/ 71108:
/*!*********************************************************************************************************!*\
  !*** ./src/app/complex/complex-results/complex-navigator/table-structure/table-structure.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = ".complexNavigatorTable {\n  border-collapse: separate;\n  /* overflow-x: scroll;  remove to make the header sticky */\n\n  height: 100%;\n}\n\n.header {\n  position: sticky;\n  top: 28px;\n  z-index: 2;\n\n}\n\n.interactors {\n  top: -21px;\n  z-index: 1;\n  position: relative;\n  border-top: 1px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBEQUEwRDs7RUFFMUQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVOztBQUVaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InRhYmxlLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXhOYXZpZ2F0b3JUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIC8qIG92ZXJmbG93LXg6IHNjcm9sbDsgIHJlbW92ZSB0byBtYWtlIHRoZSBoZWFkZXIgc3RpY2t5ICovXG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyOHB4O1xuICB6LWluZGV4OiAyO1xuXG59XG5cbi5pbnRlcmFjdG9ycyB7XG4gIHRvcDogLTIxcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */";

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

module.exports = ".typeOfSorting {\n  display: none;\n}\n\n.sortingInteractors {\n  max-width: 100px;\n  min-width: 100px;\n}\n\n.sortingInteractors:hover .typeOfSorting {\n  display: flex;\n  flex-direction: column;\n  max-width: 100px;\n  min-width: 100px;\n}\n\n.typeOfSorting {\n  background-color: #389198;\n}\n\n.typeOfSorting .button {\n  background-color: #389198;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJjb21wbGV4LXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlT2ZTb3J0aW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNvcnRpbmdJbnRlcmFjdG9ycyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5zb3J0aW5nSW50ZXJhY3RvcnM6aG92ZXIgLnR5cGVPZlNvcnRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4udHlwZU9mU29ydGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODkxOTg7XG59XG5cbi50eXBlT2ZTb3J0aW5nIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg5MTk4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex-results_complex-results_module_ts-es2015.js.map