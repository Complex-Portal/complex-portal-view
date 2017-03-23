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
import { ComplexSearchResult } from '../../shared/model/complex-results/complex-search.model';
var ComplexListComponent = (function () {
    function ComplexListComponent() {
    }
    ComplexListComponent.prototype.ngOnInit = function () {
    };
    return ComplexListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", ComplexSearchResult)
], ComplexListComponent.prototype, "complexSearch", void 0);
ComplexListComponent = __decorate([
    Component({
        selector: 'app-complex-list',
        templateUrl: './complex-list.component.html',
        styleUrls: ['./complex-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexListComponent);
export { ComplexListComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-list/complex-list.component.js.map