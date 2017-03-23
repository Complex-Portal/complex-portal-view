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
var GoCelluarCrossreferenceComponent = (function () {
    function GoCelluarCrossreferenceComponent() {
        this._displayedElements = 5;
    }
    GoCelluarCrossreferenceComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GoCelluarCrossreferenceComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoCelluarCrossreferenceComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoCelluarCrossreferenceComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GoCelluarCrossreferenceComponent.prototype, "crossReferences", null);
GoCelluarCrossreferenceComponent = __decorate([
    Component({
        selector: 'app-go-celluar-crossreference',
        templateUrl: './go-celluar-crossreference.component.html',
        styleUrls: ['./go-celluar-crossreference.component.css']
    }),
    __metadata("design:paramtypes", [])
], GoCelluarCrossreferenceComponent);
export { GoCelluarCrossreferenceComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-expression/go-celluar-crossreference/go-celluar-crossreference.component.js.map