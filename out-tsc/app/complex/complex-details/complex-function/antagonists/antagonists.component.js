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
var AntagonistsComponent = (function () {
    function AntagonistsComponent() {
        this._displayedElements = 5;
    }
    AntagonistsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AntagonistsComponent.prototype, "antagonists", {
        get: function () {
            return this._antagonists;
        },
        set: function (value) {
            this._antagonists = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AntagonistsComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return AntagonistsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AntagonistsComponent.prototype, "antagonists", null);
AntagonistsComponent = __decorate([
    Component({
        selector: 'app-antagonists',
        templateUrl: './antagonists.component.html',
        styleUrls: ['./antagonists.component.css']
    }),
    __metadata("design:paramtypes", [])
], AntagonistsComponent);
export { AntagonistsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/antagonists/antagonists.component.js.map