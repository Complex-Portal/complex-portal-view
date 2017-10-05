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
var ComplexPropertiesComponent = (function () {
    function ComplexPropertiesComponent() {
    }
    ComplexPropertiesComponent.prototype.ngOnInit = function () {
        this.checkFreeTextContent();
        this.findXRefs();
    };
    ComplexPropertiesComponent.prototype.findXRefs = function () {
        for (var i = 0; i < this.crossReferences.length; i++) {
            var crossRef = this.crossReferences[i];
            var database = this.crossReferences[i].database;
            if (database === 'wwpdb') {
                if (this._pdbXRefs === undefined) {
                    this._pdbXRefs = [];
                }
                this._pdbXRefs.push(crossRef);
            }
            if (database === 'emdb') {
                if (this._emdbXRefs === undefined) {
                    this._emdbXRefs = [];
                }
                this._emdbXRefs.push(crossRef);
            }
        }
    };
    ComplexPropertiesComponent.prototype.checkFreeTextContent = function () {
        if (this._propertiesDescription.length === 0) {
            this._propertiesDescription = null;
        }
        if (this._comments.length === 0) {
            this._comments = null;
        }
    };
    Object.defineProperty(ComplexPropertiesComponent.prototype, "propertiesDescription", {
        get: function () {
            return this._propertiesDescription;
        },
        set: function (value) {
            this._propertiesDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertiesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertiesComponent.prototype, "pdbXRefs", {
        get: function () {
            return this._pdbXRefs;
        },
        set: function (value) {
            this._pdbXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertiesComponent.prototype, "emdbXRefs", {
        get: function () {
            return this._emdbXRefs;
        },
        set: function (value) {
            this._emdbXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertiesComponent.prototype, "comments", {
        get: function () {
            return this._comments;
        },
        set: function (value) {
            this._comments = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPropertiesComponent.prototype, "assemblies", {
        get: function () {
            return this._assemblies;
        },
        set: function (value) {
            this._assemblies = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexPropertiesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexPropertiesComponent.prototype, "propertiesDescription", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexPropertiesComponent.prototype, "crossReferences", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexPropertiesComponent.prototype, "emdbXRefs", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexPropertiesComponent.prototype, "comments", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexPropertiesComponent.prototype, "assemblies", null);
ComplexPropertiesComponent = __decorate([
    Component({
        selector: 'cp-complex-properties',
        templateUrl: './complex-properties.component.html',
        styleUrls: ['./complex-properties.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexPropertiesComponent);
export { ComplexPropertiesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-properties/complex-properties.component.js.map