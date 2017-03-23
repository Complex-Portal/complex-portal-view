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
var LigandsComponent = (function () {
    function LigandsComponent() {
        this._displayedElements = 5;
    }
    LigandsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LigandsComponent.prototype, "ligands", {
        get: function () {
            return this._ligands;
        },
        set: function (value) {
            this._ligands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LigandsComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return LigandsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], LigandsComponent.prototype, "ligands", null);
LigandsComponent = __decorate([
    Component({
        selector: 'app-ligands',
        templateUrl: './ligands.component.html',
        styleUrls: ['./ligands.component.css']
    }),
    __metadata("design:paramtypes", [])
], LigandsComponent);
export { LigandsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/ligands/ligands.component.js.map