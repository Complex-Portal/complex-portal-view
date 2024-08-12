/* tslint:disable:max-line-length */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComplexPortalService} from './complex/shared/service/complex-portal.service';
import {NotificationService} from './shared/notification/service/notification.service';
import {ReactomeService} from './complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service';
import {EuroPmcService} from './complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service';
import {OlsService} from './shared/ols/service/ols.service';
import {BasketService} from './shared/basket/service/basket.service';
import {ProgressBarComponent} from './shared/loading-indicators/progress-bar/progress-bar.component';
import {ToastrModule} from 'ngx-toastr';
import {LocalSearchComponent} from './search/local-search/local-search.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {OntologiesComponent} from './ontologies/ontologies.component';
import {AnalyticsService} from './shared/google-analytics/service/analytics.service';
import {LocalStorageService} from './shared/local-storage/service/local-storage.service';
import {SearchService} from './search/service/search.service';
import {MarkdownModule} from 'ngx-markdown';
import {HomeModule} from './home/home.module';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './navigation/about/about.component';
import {DownloadComponent} from './download/download.component';
import {DocumentationComponent} from './navigation/documentation/documentation.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import {FooterComponent} from './footer/footer.component';
import {SpeciesPipe} from './complex/shared/pipe/species.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    LocalSearchComponent,
    OntologiesComponent,
    AboutComponent,
    DownloadComponent,
    DocumentationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {}),
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    NgxPageScrollCoreModule.forRoot({scrollOffset: 50}),
    MatProgressBarModule,
    MarkdownModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot(environment.analytics_id),
    NgxGoogleAnalyticsRouterModule,
    HomeModule,
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
    SpeciesPipe,
    AnalyticsService,
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
