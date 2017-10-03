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
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../shared/google-analytics/service/google-analytics.service';
import { Category } from '../shared/google-analytics/category.enum';
var SearchComponent = (function () {
    function SearchComponent(router, googleAnalyticsService) {
        this.router = router;
        this.googleAnalyticsService = googleAnalyticsService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (query, typeOfButton) {
        if (typeOfButton === 'enter') {
            this.googleAnalyticsService.fireSearchInvokerEvent(Category.home, typeOfButton);
        }
        else {
            this.googleAnalyticsService.fireSearchInvokerEvent(Category.home, typeOfButton);
        }
        this.googleAnalyticsService.fireSearchTermEvent(Category.home, query);
        this.router.navigate(['complex/search'], { queryParams: { query: query, page: 1 } });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Component({
        selector: 'cp-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    }),
    __metadata("design:paramtypes", [Router, GoogleAnalyticsService])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/search/search.component.js.map