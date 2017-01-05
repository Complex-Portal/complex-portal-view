import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from './app.routes';
import {ComplexPortalService} from "./complex/shared/service/complex-portal.service";
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {NewsletterSubscriptionComponent} from './home/newsletter-subscription/newsletter-subscription/newsletter-subscription.component';
import {ContributorsDisplayComponent} from './home/contributors-display/contributors-display/contributors-display.component';
import {TwitterDisplayComponent} from './home/twitter-display/twitter-display/twitter-display.component';
import {TileMenuComponent} from './home/tile-menu/tile-menu/tile-menu.component';
import { ComplexResultsComponent } from './complex/complex-results/complex-results/complex-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NewsletterSubscriptionComponent,
    ContributorsDisplayComponent,
    TwitterDisplayComponent,
    TileMenuComponent,
    ComplexResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),

  ],
  providers: [ComplexPortalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
