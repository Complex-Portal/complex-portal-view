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
var ComplexReferencesComponent = (function () {
    function ComplexReferencesComponent() {
    }
    ComplexReferencesComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this._crossReferences.length; i++) {
            var crossRef = this._crossReferences[i];
            var database = this._crossReferences[i].database;
            if (database === 'pubmed') {
                if (this._pubmedXRefs === undefined) {
                    this._pubmedXRefs = [];
                }
                this._pubmedXRefs.push(crossRef);
            }
        }
    };
    Object.defineProperty(ComplexReferencesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexReferencesComponent.prototype, "pubmedXRefs", {
        get: function () {
            return this._pubmedXRefs;
        },
        set: function (value) {
            this._pubmedXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexReferencesComponent.prototype, "synonyms", {
        get: function () {
            return this._synonyms;
        },
        set: function (value) {
            this._synonyms = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexReferencesComponent.prototype, "systematicName", {
        get: function () {
            return this._systematicName;
        },
        set: function (value) {
            this._systematicName = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexReferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexReferencesComponent.prototype, "crossReferences", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexReferencesComponent.prototype, "synonyms", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexReferencesComponent.prototype, "systematicName", null);
ComplexReferencesComponent = __decorate([
    Component({
        selector: 'cp-complex-references',
        templateUrl: './complex-references.component.html',
        styleUrls: ['./complex-references.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexReferencesComponent);
export { ComplexReferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-references/complex-references.component.js.map