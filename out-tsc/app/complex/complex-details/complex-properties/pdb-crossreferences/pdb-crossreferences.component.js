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
var PdbCrossreferencesComponent = (function () {
    function PdbCrossreferencesComponent() {
        this._isDataLoaded = false;
        this._displayedElements = 5;
    }
    PdbCrossreferencesComponent.prototype.ngOnInit = function () {
        this.selectFirstXref();
    };
    PdbCrossreferencesComponent.prototype.selectFirstXref = function () {
        if (this._crossReferences[0].identifier) {
            this._selectedXRef = this._crossReferences[0].identifier;
            this._isDataLoaded = true;
        }
    };
    Object.defineProperty(PdbCrossreferencesComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    PdbCrossreferencesComponent.prototype.selectXRef = function (id) {
        this._selectedXRef = id;
    };
    Object.defineProperty(PdbCrossreferencesComponent.prototype, "selectedXRef", {
        get: function () {
            return this._selectedXRef;
        },
        set: function (value) {
            this._selectedXRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdbCrossreferencesComponent.prototype, "isDataLoaded", {
        get: function () {
            return this._isDataLoaded;
        },
        set: function (value) {
            this._isDataLoaded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PdbCrossreferencesComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return PdbCrossreferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], PdbCrossreferencesComponent.prototype, "crossReferences", null);
PdbCrossreferencesComponent = __decorate([
    Component({
        selector: 'cp-pdb-crossreferences',
        templateUrl: './pdb-crossreferences.component.html',
        styleUrls: ['./pdb-crossreferences.component.css']
    }),
    __metadata("design:paramtypes", [])
], PdbCrossreferencesComponent);
export { PdbCrossreferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-properties/pdb-crossreferences/pdb-crossreferences.component.js.map