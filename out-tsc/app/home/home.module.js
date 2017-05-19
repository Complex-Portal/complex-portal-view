var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TileMenuComponent } from './tile-menu/tile-menu.component';
import { TwitterDisplayComponent } from './twitter-display/twitter-display.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { SearchComponent } from '../search/search.component';
import { ExamplesLargeComponent } from '../search/examples/examples-large/examples-large.component';
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: '', component: HomeComponent }
            ]),
            CommonModule
        ],
        declarations: [HomeComponent, SearchComponent,
            NewsletterSubscriptionComponent,
            TwitterDisplayComponent,
            TileMenuComponent,
            ExamplesLargeComponent,
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/home.module.js.map