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
var GoCrossreferencesComponent = (function () {
    function GoCrossreferencesComponent() {
    }
    GoCrossreferencesComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.crossReferences.length; i++) {
            var crossRef = this.crossReferences[i];
            var qualifier = this.crossReferences[i].qualifier;
            if (qualifier === 'biological process') {
                if (this._biologicalProcess === undefined) {
                    this._biologicalProcess = [];
                }
                this._biologicalProcess.push(crossRef);
            }
            if (qualifier === 'molecular function') {
                if (this._molecularFunctions === undefined) {
                    this._molecularFunctions = [];
                }
                this._molecularFunctions.push(crossRef);
            }
        }
    };
    Object.defineProperty(GoCrossreferencesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoCrossreferencesComponent.prototype, "molecularFunctions", {
        get: function () {
            return this._molecularFunctions;
        },
        set: function (value) {
            this._molecularFunctions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoCrossreferencesComponent.prototype, "biologicalProcess", {
        get: function () {
            return this._biologicalProcess;
        },
        set: function (value) {
            this._biologicalProcess = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoCrossreferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GoCrossreferencesComponent.prototype, "crossReferences", null);
GoCrossreferencesComponent = __decorate([
    Component({
        selector: 'app-go-crossreferences',
        templateUrl: './go-crossreferences.component.html',
        styleUrls: ['./go-crossreferences.component.css']
    }),
    __metadata("design:paramtypes", [])
], GoCrossreferencesComponent);
export { GoCrossreferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/go-crossreferences/go-crossreferences.component.js.map