var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Facets } from '../../shared/model/complex-results/facets.model';
import { GoogleAnalyticsService } from '../../../shared/google-analytics/service/google-analytics.service';
var ComplexFilterComponent = (function () {
    function ComplexFilterComponent(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.onSpicesFilterChanged = new EventEmitter();
        this.onBiologicalRoleFilterChanged = new EventEmitter();
        this.onInteractorTyoeFilterChanged = new EventEmitter();
        this.onResetAllFilters = new EventEmitter();
    }
    ComplexFilterComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeSpeciesFilter = function (filter, status) {
        if (status) {
            this.spicesFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onSpicesFilterChanged.emit(this.spicesFilter);
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeBiologicalRoleFilter = function (filter, status) {
        if (status) {
            this.bioRoleFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    };
    /**
     *
     * @param filter selected filter
     * @param status status if selected filter has been added or removed
     */
    ComplexFilterComponent.prototype.changeInteractorTypeFilter = function (filter, status) {
        if (status) {
            this.interactorTypeFilter.push(filter);
            this.googleAnalyticsService.fireAddedFilterEvent(filter);
        }
        else {
            this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
            this.googleAnalyticsService.fireRemovedFilterEvent(filter);
        }
        this.onInteractorTyoeFilterChanged.emit(this.interactorTypeFilter);
    };
    /**
     * Emit event to parent component to remove all filters
     */
    ComplexFilterComponent.prototype.resetAllFilters = function () {
        this.onResetAllFilters.emit(true);
    };
    /**
     *
     * @returns {boolean} true is any filter array contains an filter
     */
    ComplexFilterComponent.prototype.anyFiltersSelected = function () {
        return (this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
    };
    /**
     *
     * @param element filter to check if already selected
     * @param filter selected filters
     * @returns {boolean} true if filter is already in selected filters
     */
    ComplexFilterComponent.prototype.isSelected = function (element, filter) {
        return filter.indexOf(element) !== -1;
    };
    Object.defineProperty(ComplexFilterComponent.prototype, "facets", {
        get: function () {
            return this._facets;
        },
        set: function (value) {
            this._facets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "spicesFilter", {
        get: function () {
            return this._spicesFilter;
        },
        set: function (value) {
            this._spicesFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "bioRoleFilter", {
        get: function () {
            return this._bioRoleFilter;
        },
        set: function (value) {
            this._bioRoleFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFilterComponent.prototype, "interactorTypeFilter", {
        get: function () {
            return this._interactorTypeFilter;
        },
        set: function (value) {
            this._interactorTypeFilter = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexFilterComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ComplexFilterComponent.prototype, "onSpicesFilterChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ComplexFilterComponent.prototype, "onBiologicalRoleFilterChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ComplexFilterComponent.prototype, "onInteractorTyoeFilterChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ComplexFilterComponent.prototype, "onResetAllFilters", void 0);
__decorate([
    Input(),
    __metadata("design:type", Facets),
    __metadata("design:paramtypes", [Facets])
], ComplexFilterComponent.prototype, "facets", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "spicesFilter", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "bioRoleFilter", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFilterComponent.prototype, "interactorTypeFilter", null);
ComplexFilterComponent = __decorate([
    Component({
        selector: 'cp-complex-filter',
        templateUrl: './complex-filter.component.html',
        styleUrls: ['./complex-filter.component.css']
    }),
    __metadata("design:paramtypes", [GoogleAnalyticsService])
], ComplexFilterComponent);
export { ComplexFilterComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-filter/complex-filter.component.js.map