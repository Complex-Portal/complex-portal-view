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
var GoMolecularFunctionComponent = (function () {
    function GoMolecularFunctionComponent() {
        this._displayedElements = 5;
    }
    GoMolecularFunctionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GoMolecularFunctionComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoMolecularFunctionComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoMolecularFunctionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GoMolecularFunctionComponent.prototype, "crossReferences", null);
GoMolecularFunctionComponent = __decorate([
    Component({
        selector: 'app-go-molecular-function',
        templateUrl: 'go-molecular-function.component.html',
        styleUrls: ['go-molecular-function.component.css']
    }),
    __metadata("design:paramtypes", [])
], GoMolecularFunctionComponent);
export { GoMolecularFunctionComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/go-crossreferences/go-molecular-function/go-molecular-function.component.js.map