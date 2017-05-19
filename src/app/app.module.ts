/* tslint:disable:max-line-length */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {ComplexPortalService} from './complex/shared/service/complex-portal.service';
import {NotificationService} from './shared/notification/service/notification.service';
import {Angulartics2Module, Angulartics2GoogleAnalytics} from 'angulartics2';
import {ReactomeService} from './complex/complex-details/complex-function/reactome-crossreferences/shared/service/reactome.service';
import {EuroPmcService} from './complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service';
import {OlsService} from './shared/ols/service/ols.service';
import {BasketService} from './shared/basket/service/basket.service';
import {Md5} from 'ts-md5/dist/md5';
import {ProgressBarComponent} from './shared/loading-indicators/progress-bar/progress-bar.component';
import {ToastrModule} from 'ngx-toastr';
import {LocalSearchComponent} from './search/local-search/local-search.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdProgressBarModule} from '@angular/material';
import { DocumentationComponent } from './documentation/documentation.component';
import { QuerySyntaxComponent } from './documentation/query-syntax/query-syntax.component';
import { DataContentComponent } from './documentation/data-content/data-content.component';
import { OntologiesComponent } from './ontologies/ontologies.component';
import {GoogleAnalyticsService} from "./shared/google-analytics/google-analytics.service";

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    LocalSearchComponent,
    DocumentationComponent,
    QuerySyntaxComponent,
    DataContentComponent,
    OntologiesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    ToastrModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    MdProgressBarModule,
    NoopAnimationsModule,
  ],
  providers: [ComplexPortalService, NotificationService, ReactomeService, EuroPmcService, OlsService, BasketService, Md5, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
