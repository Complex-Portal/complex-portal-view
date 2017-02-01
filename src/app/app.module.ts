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
import {DownloadComponent} from './download/download.component';
import {Angulartics2Module, Angulartics2GoogleAnalytics} from 'angulartics2';
import {ToastrModule} from 'toastr-ng2';
import {ComplexDetailsComponent} from './complex/complex-details/complex-details.component';
import {ComplexHeaderComponent} from './complex/complex-details/complex-header/complex-header.component';
import {ComplexFunctionComponent} from './complex/complex-details/complex-function/complex-function.component';
import {ComplexPropertiesComponent} from './complex/complex-details/complex-properties/complex-properties.component';
import {ComplexExpressionComponent} from './complex/complex-details/complex-expression/complex-expression.component';
import {ComplexDiseaseComponent} from './complex/complex-details/complex-disease/complex-disease.component';
import {ComplexViewerComponent} from './complex/complex-details/shared/complex-viewer/complex-viewer.component';
import { ComplexParticipantsComponent } from './complex/complex-details/complex-participants/complex-participants.component';
import { ParticipantDescriptionComponent } from './complex/complex-details/complex-participants/participant-description/participant-description.component';
import { ParticipantLegendComponent } from './complex/complex-details/complex-participants/participant-legend/participant-legend.component';
import { ParticipantStochiometryComponent } from './complex/complex-details/complex-participants/participant-stochiometry/participant-stochiometry.component';
import { ReactomeDiagramComponent } from './complex/complex-details/complex-function/reactome-crossreferences/reactome-diagram/reactome-diagram.component';
import { ReactomeCrossreferencesComponent } from './complex/complex-details/complex-function/reactome-crossreferences/reactome-crossreferences.component';
import {ReactomeService} from "./complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service";

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
    DownloadComponent,
    ComplexDetailsComponent,
    ComplexHeaderComponent,
    ComplexFunctionComponent,
    ComplexPropertiesComponent,
    ComplexExpressionComponent,
    ComplexDiseaseComponent,
    ComplexViewerComponent,
    ComplexParticipantsComponent,
    ParticipantDescriptionComponent,
    ParticipantLegendComponent,
    ParticipantStochiometryComponent,
    ReactomeDiagramComponent,
    ReactomeCrossreferencesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    ToastrModule.forRoot(),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [ComplexPortalService, NotificationService, ReactomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
