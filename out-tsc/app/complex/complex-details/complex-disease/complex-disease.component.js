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
var ComplexDiseaseComponent = (function () {
    function ComplexDiseaseComponent() {
    }
    ComplexDiseaseComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this._crossReferences.length; i++) {
            var crossRef = this._crossReferences[i];
            var database = this._crossReferences[i].database;
            if (database === 'efo') {
                if (this._efoXRefs === undefined) {
                    this._efoXRefs = [];
                }
                this._efoXRefs.push(crossRef);
            }
            if (database === 'ChEMBL target') {
                if (this._chemblXRefs === undefined) {
                    this._chemblXRefs = [];
                }
                this._chemblXRefs.push(crossRef);
            }
        }
    };
    Object.defineProperty(ComplexDiseaseComponent.prototype, "diseaseDescriptions", {
        get: function () {
            return this._diseaseDescriptions;
        },
        set: function (value) {
            this._diseaseDescriptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDiseaseComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDiseaseComponent.prototype, "efoXRefs", {
        get: function () {
            return this._efoXRefs;
        },
        set: function (value) {
            this._efoXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexDiseaseComponent.prototype, "chemblXRefs", {
        get: function () {
            return this._chemblXRefs;
        },
        set: function (value) {
            this._chemblXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexDiseaseComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexDiseaseComponent.prototype, "diseaseDescriptions", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexDiseaseComponent.prototype, "crossReferences", null);
ComplexDiseaseComponent = __decorate([
    Component({
        selector: 'app-complex-disease',
        templateUrl: './complex-disease.component.html',
        styleUrls: ['./complex-disease.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexDiseaseComponent);
export { ComplexDiseaseComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-disease/complex-disease.component.js.map