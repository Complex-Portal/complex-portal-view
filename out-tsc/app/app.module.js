var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:max-line-length */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ComplexPortalService } from './complex/shared/service/complex-portal.service';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NewsletterSubscriptionComponent } from './home/newsletter-subscription/newsletter-subscription.component';
import { TwitterDisplayComponent } from './home/twitter-display/twitter-display.component';
import { TileMenuComponent } from './home/tile-menu/tile-menu.component';
import { ComplexResultsComponent } from './complex/complex-results/complex-results.component';
import { ComplexListComponent } from './complex/complex-results/complex-list/complex-list.component';
import { ComplexFilterComponent } from './complex/complex-results/complex-filter/complex-filter.component';
import { ComplexPaginatorComponent } from './complex/complex-results/complex-paginator/complex-paginator.component';
import { NotificationService } from './shared/notification/service/notification.service';
import { DownloadComponent } from './download/download.component';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ComplexDetailsComponent } from './complex/complex-details/complex-details.component';
import { ComplexHeaderComponent } from './complex/complex-details/complex-header/complex-header.component';
import { ComplexFunctionComponent } from './complex/complex-details/complex-function/complex-function.component';
import { ComplexPropertiesComponent } from './complex/complex-details/complex-properties/complex-properties.component';
import { ComplexExpressionComponent } from './complex/complex-details/complex-expression/complex-expression.component';
import { ComplexDiseaseComponent } from './complex/complex-details/complex-disease/complex-disease.component';
import { ComplexViewerComponent } from './complex/complex-details/shared/visualisation/complex-viewer/complex-viewer.component';
import { ComplexParticipantsComponent } from './complex/complex-details/complex-participants/complex-participants.component';
import { ReactomeDiagramComponent } from './complex/complex-details/shared/visualisation/reactome-diagram/reactome-diagram.component';
import { ReactomeCrossreferencesComponent } from './complex/complex-details/complex-function/reactome-crossreferences/reactome-crossreferences.component';
import { ReactomeService } from './complex/complex-details/complex-function/reactome-crossreferences/shared/service/reactome.service';
import { GoCrossreferencesComponent } from './complex/complex-details/complex-function/go-crossreferences/go-crossreferences.component';
import { IntenzCrossreferencesComponent } from './complex/complex-details/complex-function/intenz-crossreferences/intenz-crossreferences.component';
import { EuroPmcCrossreferencesComponent } from './complex/complex-details/complex-function/euro-pmc-crossreferences/euro-pmc-crossreferences.component';
import { EuroPmcService } from './complex/complex-details/complex-function/euro-pmc-crossreferences/service/euro-pmc.service';
import { PdbCrossreferencesComponent } from './complex/complex-details/complex-properties/pdb-crossreferences/pdb-crossreferences.component';
import { LitmolViewerComponent } from './complex/complex-details/shared/visualisation/litmol-viewer/litmol-viewer.component';
import { ExamplesLargeComponent } from './search/examples/examples-large/examples-large.component';
import { GxaHeatmapComponent } from './complex/complex-details/shared/visualisation/gxa-heatmap/gxa-heatmap.component';
import { GoCelluarCrossreferenceComponent } from './complex/complex-details/complex-expression/go-celluar-crossreference/go-celluar-crossreference.component';
import { ChemblCrossreferenceComponent } from './complex/complex-details/complex-disease/chembl-crossreference/chembl-crossreference.component';
import { EfoCrossreferencesComponent } from './complex/complex-details/complex-disease/efo-crossreferences/efo-crossreferences.component';
import { SynonymsComponent } from './complex/complex-details/complex-function/synonyms/synonyms.component';
import { SystematicNameComponent } from './complex/complex-details/complex-function/systematic-name/systematic-name.component';
import { OlsService } from './shared/ols/service/ols.service';
import { LigandsComponent } from './complex/complex-details/complex-function/ligands/ligands.component';
import { GoMolecularFunctionComponent } from './complex/complex-details/complex-function/go-crossreferences/go-molecular-function/go-molecular-function.component';
import { GoBiologicalProcessComponent } from './complex/complex-details/complex-function/go-crossreferences/go-biological-process/go-biological-process.component';
import { ComplexFooterComponent } from './complex/complex-details/complex-footer/complex-footer.component';
import { AgonistsComponent } from './complex/complex-details/complex-function/agonists/agonists.component';
import { AntagonistsComponent } from './complex/complex-details/complex-function/antagonists/antagonists.component';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './shared/basket/service/basket.service';
import { Md5 } from 'ts-md5/dist/md5';
import { MaterialModule } from '@angular/material';
import { ProgressBarComponent } from './shared/loading-indicators/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './shared/loading-indicators/progress-spinner/progress-spinner.component';
import { ToastrModule } from "ngx-toastr";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            SearchComponent,
            HomeComponent,
            NewsletterSubscriptionComponent,
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
            ReactomeDiagramComponent,
            ReactomeCrossreferencesComponent,
            GoCrossreferencesComponent,
            IntenzCrossreferencesComponent,
            EuroPmcCrossreferencesComponent,
            PdbCrossreferencesComponent,
            LitmolViewerComponent,
            ExamplesLargeComponent,
            GxaHeatmapComponent,
            GoCelluarCrossreferenceComponent,
            ChemblCrossreferenceComponent,
            EfoCrossreferencesComponent,
            SystematicNameComponent,
            SynonymsComponent,
            LigandsComponent,
            GoMolecularFunctionComponent,
            GoBiologicalProcessComponent,
            ComplexFooterComponent,
            AgonistsComponent,
            AntagonistsComponent,
            BasketComponent,
            ProgressBarComponent,
            ProgressSpinnerComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(rootRouterConfig, { useHash: false }),
            ToastrModule.forRoot(),
            Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
            MaterialModule,
        ],
        providers: [ComplexPortalService, NotificationService, ReactomeService, EuroPmcService, OlsService, BasketService, Md5],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/app.module.js.map