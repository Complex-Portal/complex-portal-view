var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var GxaHeatmapComponent = (function () {
    function GxaHeatmapComponent() {
        this._isLoaded = true;
    }
    GxaHeatmapComponent.prototype.ngOnInit = function () {
        var context = this;
        var query = JSON.stringify(this._gxaParamsQueries) + '&species=' + this._complexSpecies.split(';')[0].toLowerCase();
        this.gxa.render({
            params: 'geneQuery=' + query,
            isMultiExperiment: false,
            target: 'heatmapContainer',
            fail: function () {
                context._isLoaded = false;
            }
        });
    };
    Object.defineProperty(GxaHeatmapComponent.prototype, "gxa", {
        get: function () {
            return this._gxa;
        },
        set: function (value) {
            this._gxa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GxaHeatmapComponent.prototype, "participants", {
        get: function () {
            return this._participants;
        },
        set: function (value) {
            this._participants = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GxaHeatmapComponent.prototype, "complexSpecies", {
        get: function () {
            return this._complexSpecies;
        },
        set: function (value) {
            this._complexSpecies = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GxaHeatmapComponent.prototype, "gxaParamsQueries", {
        get: function () {
            return this._gxaParamsQueries;
        },
        set: function (value) {
            this._gxaParamsQueries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GxaHeatmapComponent.prototype, "isLoaded", {
        get: function () {
            return this._isLoaded;
        },
        set: function (value) {
            this._isLoaded = value;
        },
        enumerable: true,
        configurable: true
    });
    return GxaHeatmapComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GxaHeatmapComponent.prototype, "gxa", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GxaHeatmapComponent.prototype, "participants", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GxaHeatmapComponent.prototype, "complexSpecies", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GxaHeatmapComponent.prototype, "gxaParamsQueries", null);
GxaHeatmapComponent = __decorate([
    Component({
        selector: 'app-gxa-heatmap',
        templateUrl: 'gxa-heatmap.component.html',
        styleUrls: ['gxa-heatmap.component.css']
    }),
    __metadata("design:paramtypes", [])
], GxaHeatmapComponent);
export { GxaHeatmapComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/gxa-heatmap/gxa-heatmap.component.js.map