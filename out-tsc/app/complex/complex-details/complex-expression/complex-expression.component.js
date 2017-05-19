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
var ComplexExpressionComponent = (function () {
    function ComplexExpressionComponent() {
    }
    ComplexExpressionComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this._participants.length; i++) {
            if (this._participants[i].interactorType === 'protein') {
                if (this._gxaParamsQueries === undefined) {
                    this.gxaParamsQueries = this._participants[i].identifier;
                }
                else {
                    this.gxaParamsQueries += ' ' + this._participants[i].identifier;
                }
            }
        }
        for (var i = 0; i < this._crossReferences.length; i++) {
            var crossRef = this._crossReferences[i];
            var database = this._crossReferences[i].database;
            var qualifier = this._crossReferences[i].qualifier;
            if (database === 'gene ontology' && qualifier === 'cellular component') {
                if (this.goCellularXRefs === undefined) {
                    this.goCellularXRefs = [];
                }
                this.goCellularXRefs.push(crossRef);
            }
        }
    };
    Object.defineProperty(ComplexExpressionComponent.prototype, "gxa", {
        get: function () {
            return this._gxa;
        },
        set: function (value) {
            this._gxa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexExpressionComponent.prototype, "participants", {
        get: function () {
            return this._participants;
        },
        set: function (value) {
            this._participants = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexExpressionComponent.prototype, "complexSpecies", {
        get: function () {
            return this._complexSpecies;
        },
        set: function (value) {
            this._complexSpecies = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexExpressionComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexExpressionComponent.prototype, "gxaParamsQueries", {
        get: function () {
            return this._gxaParamsQueries;
        },
        set: function (value) {
            this._gxaParamsQueries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexExpressionComponent.prototype, "goCellularXRefs", {
        get: function () {
            return this._goCellularXRefs;
        },
        set: function (value) {
            this._goCellularXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexExpressionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexExpressionComponent.prototype, "gxa", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexExpressionComponent.prototype, "participants", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexExpressionComponent.prototype, "complexSpecies", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexExpressionComponent.prototype, "crossReferences", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexExpressionComponent.prototype, "gxaParamsQueries", null);
ComplexExpressionComponent = __decorate([
    Component({
        selector: 'cp-complex-expression',
        templateUrl: './complex-expression.component.html',
        styleUrls: ['./complex-expression.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexExpressionComponent);
export { ComplexExpressionComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-expression/complex-expression.component.js.map