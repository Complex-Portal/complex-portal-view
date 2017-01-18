import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {ComplexPortalService} from './complex/shared/service/complex-portal.service';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {NewsletterSubscriptionComponent} from './home/newsletter-subscription/newsletter-subscription.component';
import {ContributorsDisplayComponent} from './home/contributors-display/contributors-display.component';
import {TwitterDisplayComponent} from './home/twitter-display/twitter-display.component';
import {TileMenuComponent} from './home/tile-menu/tile-menu.component';
import {ComplexResultsComponent} from './complex/complex-results/complex-results.component';
import {ComplexListComponent} from './complex/complex-results/complex-list/complex-list.component';
import {ComplexFilterComponent} from './complex/complex-results/complex-filter/complex-filter.component';
import {ComplexPaginatorComponent} from './complex/complex-results/complex-paginator/complex-paginator.component';
import {NotificationService} from './shared/notification/service/notification.service';
import { NotificationComponent } from './shared/notification/notification.component';
import { DownloadComponent } from './download/download.component';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ComplexDetailsComponent } from './complex/complex-details/complex-details.component';
import { ComplexHeaderComponent } from './complex/complex-details/complex-header/complex-header.component';
import { ComplexFunctionComponent } from './complex/complex-details/complex-function/complex-function.component';
import { ComplexPropertiesComponent } from './complex/complex-details/complex-properties/complex-properties.component';
import { ComplexExpressionComponent } from './complex/complex-details/complex-expression/complex-expression.component';
import { ComplexDiseaseComponent } from './complex/complex-details/complex-disease/complex-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NewsletterSubscriptionComponent,
    ContributorsDisplayComponent,
    TwitterDisplayComponent,
    TileMenuComponent,
    ComplexResultsComponent,
    ComplexListComponent,
    ComplexFilterComponent,
    ComplexPaginatorComponent,
    NotificationComponent,
    DownloadComponent,
    ComplexDetailsComponent,
    ComplexHeaderComponent,
    ComplexFunctionComponent,
    ComplexPropertiesComponent,
    ComplexExpressionComponent,
    ComplexDiseaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
  ],
  providers: [ComplexPortalService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
