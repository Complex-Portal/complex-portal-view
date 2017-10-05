var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplexPortalService } from '../shared/service/complex-portal.service';
import { ProgressBarComponent } from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import { Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from '../../shared/google-analytics/service/google-analytics.service';
var ComplexResultsComponent = (function () {
    function ComplexResultsComponent(route, router, complexPortalService, titleService, googleAnalyticsService) {
        this.route = route;
        this.router = router;
        this.complexPortalService = complexPortalService;
        this.titleService = titleService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._pageSize = 10;
    }
    ComplexResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Complex Portal - Results');
        this.route
            .queryParams
            .subscribe(function (queryParams) {
            _this._query = queryParams['query'];
            _this._spicesFilter = queryParams['species'] ? queryParams['species'].split('+') : [];
            _this._bioRoleFilter = queryParams['bioRole'] ? queryParams['bioRole'].split('+') : [];
            _this._interactorTypeFilter = queryParams['interactorType'] ? queryParams['interactorType'].split('+') : [];
            _this._currentPageIndex = queryParams['page'] ? Number(queryParams['page']) : 1;
            // TODO This is out for now, but CP-84 (JIRA )should fix that!!
            // this.pageSize = queryParams['size'] ? Number(queryParams['size']) : 10;
            _this.requestComplexResults();
            document.body.scrollTop = 0;
        });
    };
    ComplexResultsComponent.prototype.ngAfterViewInit = function () {
    };
    ComplexResultsComponent.prototype.requestComplexResults = function () {
        var _this = this;
        this.complexPortalService.findComplex(this.query, this.spicesFilter, this.bioRoleFilter, this.interactorTypeFilter, this.currentPageIndex, this.pageSize).subscribe(function (complexSearch) {
            _this.complexSearch = complexSearch;
            if (_this.complexSearch.totalNumberOfResults !== 0) {
                _this.lastPageIndex = Math.ceil(complexSearch.totalNumberOfResults / _this.pageSize);
            }
            ProgressBarComponent.hide();
        });
    };
    /**
     * Prepare query params to build new URL after filter or pagination has changed
     */
    ComplexResultsComponent.prototype.reloadPage = function () {
        var queryParams = {};
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
            queryParams: queryParams
        });
        ProgressBarComponent.hide();
        // This is a test case event for GA, to monitor if users ever use more then one filter.
        var filterCount = this.getFilterCount();
        if (1 < filterCount) {
            this.googleAnalyticsService.fireMultiFilterEvent(filterCount.toString());
        }
    };
    ComplexResultsComponent.prototype.prepareFiltersForParams = function (filter) {
        return filter.toString().replace(/,/g, '+');
    };
    ComplexResultsComponent.prototype.getFilterCount = function () {
        return this._spicesFilter.length + this._interactorTypeFilter.length + this._bioRoleFilter.length;
    };
    /**
     *
     * @param pageIndex new page index after hitting the paginator to update the URL and reload content
     */
    ComplexResultsComponent.prototype.onPageChange = function (pageIndex) {
        this.currentPageIndex = pageIndex;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onResetAllFilters = function () {
        this.spicesFilter = [];
        this.bioRoleFilter = [];
        this.interactorTypeFilter = [];
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onSpicesFilterChanged = function (filter) {
        this.spicesFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onBiologicalRoleFilterChanged = function (filter) {
        this.bioRoleFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    ComplexResultsComponent.prototype.onInteractorTyoeFilterChanged = function (filter) {
        this.interactorTypeFilter = filter;
        this.currentPageIndex = 1;
        this.reloadPage();
    };
    Object.defineProperty(ComplexResultsComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "complexSearch", {
        get: function () {
            return this._complexSearch;
        },
        set: function (value) {
            this._complexSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "lastPageIndex", {
        get: function () {
            return this._lastPageIndex;
        },
        set: function (value) {
            this._lastPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "spicesFilter", {
        get: function () {
            return this._spicesFilter;
        },
        set: function (value) {
            this._spicesFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "bioRoleFilter", {
        get: function () {
            return this._bioRoleFilter;
        },
        set: function (value) {
            this._bioRoleFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexResultsComponent.prototype, "interactorTypeFilter", {
        get: function () {
            return this._interactorTypeFilter;
        },
        set: function (value) {
            this._interactorTypeFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexResultsComponent;
}());
ComplexResultsComponent = __decorate([
    Component({
        selector: 'cp-complex-results',
        templateUrl: './complex-results.component.html',
        styleUrls: ['./complex-results.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router,
        ComplexPortalService, Title,
        GoogleAnalyticsService])
], ComplexResultsComponent);
export { ComplexResultsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-results.component.js.map