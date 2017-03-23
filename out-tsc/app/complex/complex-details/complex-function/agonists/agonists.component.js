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
var AgonistsComponent = (function () {
    function AgonistsComponent() {
        this._displayedElements = 5;
    }
    AgonistsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AgonistsComponent.prototype, "agonists", {
        get: function () {
            return this._agonists;
        },
        set: function (value) {
            this._agonists = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgonistsComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return AgonistsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AgonistsComponent.prototype, "agonists", null);
AgonistsComponent = __decorate([
    Component({
        selector: 'app-agonists',
        templateUrl: './agonists.component.html',
        styleUrls: ['./agonists.component.css']
    }),
    __metadata("design:paramtypes", [])
], AgonistsComponent);
export { AgonistsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/agonists/agonists.component.js.map