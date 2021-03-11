/* tslint:disable:max-line-length */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComplexPortalService} from './complex/shared/service/complex-portal.service';
import {NotificationService} from './shared/notification/service/notification.service';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';
import {ReactomeService} from './complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service';
import {EuroPmcService} from './complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service';
import {OlsService} from './shared/ols/service/ols.service';
import {BasketService} from './shared/basket/service/basket.service';
import {Md5} from 'ts-md5/dist/md5';
import {ProgressBarComponent} from './shared/loading-indicators/progress-bar/progress-bar.component';
import {ToastrModule} from 'ngx-toastr';
import {LocalSearchComponent} from './search/local-search/local-search.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material';
import {DocumentationModule} from './navigation/documentation/documentation.module';
import {OntologiesComponent} from './ontologies/ontologies.component';
import {GoogleAnalyticsService} from './shared/google-analytics/service/google-analytics.service';
import {LocalStorageService} from './shared/local-storage/service/local-storage.service';
import {SearchService} from './search/service/search.service';
import {MarkdownModule} from 'ngx-markdown';
import {HomeModule} from './home/home.module';
import {Router, RouterModule} from '@angular/router';
import {AboutComponent} from './navigation/about/about.component';
import {DownloadComponent} from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    LocalSearchComponent,
    OntologiesComponent,
    AboutComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    MatProgressBarModule,
    MarkdownModule.forRoot(),
    HomeModule,
    DocumentationModule,
    AppRoutingModule,
  ],
  providers: [
    ComplexPortalService,
    NotificationService,
    ReactomeService,
    EuroPmcService,
    OlsService,
    BasketService,
    LocalStorageService,
    Md5,
    GoogleAnalyticsService,
    SearchService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  // To debug routing problems uncomment following code
  // constructor(private readonly router: Router) {
  //   router.events
  //     .subscribe(console.log)
  // }
}
