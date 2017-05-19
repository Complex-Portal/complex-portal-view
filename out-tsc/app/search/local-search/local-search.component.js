var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
var LocalSearchComponent = (function () {
    function LocalSearchComponent(location, router, route) {
        this.location = location;
        this.router = router;
        this.route = route;
    }
    LocalSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            if (_this.location.path().startsWith('/home')) {
                _this._display = false;
            }
            else {
                _this._display = true;
                if (_this.location.path().startsWith('/complex/search')) {
                    _this.route
                        .queryParams
                        .subscribe(function (queryParams) {
                        _this._query = queryParams['query'] ? queryParams['query'] : console.log('Error');
                    });
                }
                else if (_this.location.path().startsWith('/complex')) {
                    _this._query = _this.location.path().split('/')[2];
                }
                else {
                    _this._query = '';
                }
            }
        });
    };
    LocalSearchComponent.prototype.search = function (query) {
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    };
    Object.defineProperty(LocalSearchComponent.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalSearchComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    return LocalSearchComponent;
}());
LocalSearchComponent = __decorate([
    Component({
        selector: 'cp-local-search',
        templateUrl: './local-search.component.html',
        styleUrls: ['./local-search.component.css']
    }),
    __metadata("design:paramtypes", [Location, Router, ActivatedRoute])
], LocalSearchComponent);
export { LocalSearchComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/search/local-search/local-search.component.js.map