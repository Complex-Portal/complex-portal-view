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
var twitterURL = 'platform.twitter.com/widgets.js';
var TwitterDisplayComponent = (function () {
    function TwitterDisplayComponent() {
    }
    TwitterDisplayComponent.prototype.ngOnInit = function () {
    };
    TwitterDisplayComponent.prototype.ngAfterViewInit = function () {
        /* tslint:disable */
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://' + twitterURL;
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
        /* tslint:enable */
    };
    return TwitterDisplayComponent;
}());
TwitterDisplayComponent = __decorate([
    Component({
        selector: 'cp-twitter-display',
        templateUrl: './twitter-display.component.html',
        styleUrls: ['./twitter-display.component.css']
    }),
    __metadata("design:paramtypes", [])
], TwitterDisplayComponent);
export { TwitterDisplayComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/twitter-display/twitter-display.component.js.map