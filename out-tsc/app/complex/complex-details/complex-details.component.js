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
import { ActivatedRoute } from '@angular/router';
import { ComplexPortalService } from '../shared/service/complex-portal.service';
import { ProgressBarComponent } from "../../shared/loading-indicators/progress-bar/progress-bar.component";
var ComplexDetailsComponent = (function () {
    function ComplexDetailsComponent(route, complexPortalService) {
        this.route = route;
        this.complexPortalService = complexPortalService;
        if (typeof expressionAtlasHeatmapHighcharts !== 'undefined') {
            this._gxa = expressionAtlasHeatmapHighcharts;
        }
        else {
            this._gxa = null;
        }
    }
    ComplexDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this._query = params['id'];
            _this.complexPortalService.getComplex(_this._query).subscribe(function (complexDetails) { return _this.complexDetails = complexDetails; });
            _this.complexPortalService.getComplexMIJSON(_this._query).subscribe(function (complexMIJSON) { return _this.complexMIJSON = complexMIJSON; });
            document.body.scrollTop = 0;
        });
    };
    ComplexDetailsComponent.prototype.ngAfterViewInit = function () {
        ProgressBarComponent.hide();
    };
    Object.defineProperty(ComplexDetailsComponent.prototype, "complexDetails", {
        get: function () {
            return this._complexDetails;
        },
        set: function (value) {
            this._complexDetails = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "complexMIJSON", {
        get: function () {
            return this._complexMIJSON;
        },
        set: function (value) {
            this._complexMIJSON = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDetailsComponent.prototype, "gxa", {
        get: function () {
            return this._gxa;
        },
        set: function (value) {
            this._gxa = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexDetailsComponent;
}());
ComplexDetailsComponent = __decorate([
    Component({
        selector: 'app-complex-details',
        templateUrl: './complex-details.component.html',
        styleUrls: ['./complex-details.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ComplexPortalService])
], ComplexDetailsComponent);
export { ComplexDetailsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-details.component.js.map