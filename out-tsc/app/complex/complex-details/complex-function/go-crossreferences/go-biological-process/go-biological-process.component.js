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
var GoBiologicalProcessComponent = (function () {
    function GoBiologicalProcessComponent() {
        this._displayedElements = 5;
    }
    GoBiologicalProcessComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GoBiologicalProcessComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoBiologicalProcessComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoBiologicalProcessComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GoBiologicalProcessComponent.prototype, "crossReferences", null);
GoBiologicalProcessComponent = __decorate([
    Component({
        selector: 'cp-go-biological-process',
        templateUrl: 'go-biological-process.component.html',
        styleUrls: ['go-biological-process.component.css']
    }),
    __metadata("design:paramtypes", [])
], GoBiologicalProcessComponent);
export { GoBiologicalProcessComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/go-crossreferences/go-biological-process/go-biological-process.component.js.map