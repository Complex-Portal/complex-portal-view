var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ComplexPaginatorComponent = (function () {
    function ComplexPaginatorComponent() {
        this.onPageChange = new EventEmitter();
    }
    ComplexPaginatorComponent.prototype.ngOnInit = function () {
        this.updatePaginatior();
    };
    ComplexPaginatorComponent.prototype.ngOnChanges = function (changes) {
        this.updatePaginatior();
    };
    ComplexPaginatorComponent.prototype.updatePaginatior = function () {
        var start;
        var end;
        this.pagination = [];
        if (this._lastPageIndex < 5) {
            start = 1;
            end = this._lastPageIndex;
        }
        else {
            if (this._currentPageIndex === 1 || this._currentPageIndex === 2) {
                start = 1;
                end = 5;
            }
            else if (this._currentPageIndex === this._lastPageIndex || this._currentPageIndex === this._lastPageIndex - 1) {
                start = this._lastPageIndex - 4;
                end = this._lastPageIndex;
            }
            else {
                start = this._currentPageIndex - 2;
                end = this._currentPageIndex + 2;
            }
        }
        while (start <= end) {
            if (start === this._currentPageIndex) {
                this._pagination.push([[this._currentPageIndex], [true]]);
            }
            else {
                this._pagination.push([[start], [false]]);
            }
            start++;
        }
    };
    ComplexPaginatorComponent.prototype.getFirstPage = function () {
        this.onPageChange.emit(1);
    };
    ComplexPaginatorComponent.prototype.getLastPage = function () {
        this.onPageChange.emit(this.lastPageIndex);
    };
    ComplexPaginatorComponent.prototype.getPage = function (pageIndex) {
        this.onPageChange.emit(pageIndex);
    };
    ComplexPaginatorComponent.prototype.getPreviousPage = function () {
        this.onPageChange.emit(this.currentPageIndex - 1);
    };
    ComplexPaginatorComponent.prototype.getNextPage = function () {
        this.onPageChange.emit(this.currentPageIndex + 1);
    };
    Object.defineProperty(ComplexPaginatorComponent.prototype, "lastPageIndex", {
        get: function () {
            return this._lastPageIndex;
        },
        set: function (value) {
            this._lastPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPaginatorComponent.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexPaginatorComponent.prototype, "pagination", {
        get: function () {
            return this._pagination;
        },
        set: function (value) {
            this._pagination = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexPaginatorComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ComplexPaginatorComponent.prototype, "onPageChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexPaginatorComponent.prototype, "lastPageIndex", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComplexPaginatorComponent.prototype, "currentPageIndex", null);
ComplexPaginatorComponent = __decorate([
    Component({
        selector: 'app-complex-paginator',
        templateUrl: './complex-paginator.component.html',
        styleUrls: ['./complex-paginator.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexPaginatorComponent);
export { ComplexPaginatorComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-paginator/complex-paginator.component.js.map