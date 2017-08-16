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
var AssembliesComponent = (function () {
    function AssembliesComponent() {
    }
    AssembliesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AssembliesComponent.prototype, "assemblies", {
        get: function () {
            return this._assemblies;
        },
        set: function (value) {
            this._assemblies = value;
        },
        enumerable: true,
        configurable: true
    });
    return AssembliesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AssembliesComponent.prototype, "assemblies", null);
AssembliesComponent = __decorate([
    Component({
        selector: 'cp-assemblies',
        templateUrl: './assemblies.component.html',
        styleUrls: ['./assemblies.component.css']
    }),
    __metadata("design:paramtypes", [])
], AssembliesComponent);
export { AssembliesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-properties/assemblies/assemblies.component.js.map