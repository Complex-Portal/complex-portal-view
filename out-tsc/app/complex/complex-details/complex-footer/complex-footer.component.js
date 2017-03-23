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
var ComplexFooterComponent = (function () {
    function ComplexFooterComponent() {
    }
    ComplexFooterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ComplexFooterComponent.prototype, "institute", {
        get: function () {
            return this._institute;
        },
        set: function (value) {
            this._institute = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFooterComponent.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexFooterComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexFooterComponent.prototype, "institute", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexFooterComponent.prototype, "comment", null);
ComplexFooterComponent = __decorate([
    Component({
        selector: 'app-complex-footer',
        templateUrl: './complex-footer.component.html',
        styleUrls: ['./complex-footer.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexFooterComponent);
export { ComplexFooterComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-footer/complex-footer.component.js.map