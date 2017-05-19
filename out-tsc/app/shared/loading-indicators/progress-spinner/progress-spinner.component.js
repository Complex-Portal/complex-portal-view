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
var ProgressSpinnerComponent = ProgressSpinnerComponent_1 = (function () {
    function ProgressSpinnerComponent() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressSpinnerComponent_1.show = false;
    }
    ProgressSpinnerComponent.display = function () {
        ProgressSpinnerComponent_1.show = true;
    };
    ProgressSpinnerComponent.hide = function () {
        setTimeout(function () {
            ProgressSpinnerComponent_1.show = false;
        }, 1000);
    };
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        var context = this;
        setTimeout(function () {
            context._takesLonger = true;
        }, 5000);
    };
    Object.defineProperty(ProgressSpinnerComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressSpinnerComponent_1.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "takesLonger", {
        get: function () {
            return this._takesLonger;
        },
        enumerable: true,
        configurable: true
    });
    return ProgressSpinnerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProgressSpinnerComponent.prototype, "query", null);
ProgressSpinnerComponent = ProgressSpinnerComponent_1 = __decorate([
    Component({
        selector: 'cp-progress-spinner',
        templateUrl: './progress-spinner.component.html',
        styleUrls: ['./progress-spinner.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProgressSpinnerComponent);
export { ProgressSpinnerComponent };
var ProgressSpinnerComponent_1;
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/loading-indicators/progress-spinner/progress-spinner.component.js.map