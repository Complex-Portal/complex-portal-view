var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from '../../shared/google-analytics/service/google-analytics.service';
import { Router } from '@angular/router';
var SearchService = (function () {
    function SearchService(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    SearchService.prototype.search = function (query, category, typeOfButton) {
        this._query = query;
        this.googleAnalyticsService.fireSearchInvokerEvent(category, typeOfButton);
        this.googleAnalyticsService.fireSearchTermEvent(category, query);
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    };
    Object.defineProperty(SearchService.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: true,
        configurable: true
    });
    return SearchService;
}());
SearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, GoogleAnalyticsService])
], SearchService);
export { SearchService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/search/service/search.service.js.map