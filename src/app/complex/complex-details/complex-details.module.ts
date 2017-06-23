import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LitmolViewerComponent} from './shared/visualisation/litmol-viewer/litmol-viewer.component';
import {PdbCrossreferencesComponent} from './complex-properties/pdb-crossreferences/pdb-crossreferences.component';
import {EuroPmcCrossreferencesComponent} from './complex-references/euro-pmc-crossreferences/euro-pmc-crossreferences.component';
import {IntenzCrossreferencesComponent} from './complex-function/intenz-crossreferences/intenz-crossreferences.component';
import {GoCrossreferencesComponent} from './complex-function/go-crossreferences/go-crossreferences.component';
import {ComplexPropertiesComponent} from './complex-properties/complex-properties.component';
import {ComplexFunctionComponent} from './complex-function/complex-function.component';
import {ComplexHeaderComponent} from './complex-header/complex-header.component';
import {ComplexDetailsComponent} from './complex-details.component';
import {ComplexExpressionComponent} from './complex-expression/complex-expression.component';
import {ComplexDiseaseComponent} from './complex-disease/complex-disease.component';
import {ComplexViewerComponent} from './shared/visualisation/complex-viewer/complex-viewer.component';
import {ComplexParticipantsComponent} from './complex-participants/complex-participants.component';
import {ReactomeDiagramComponent} from './shared/visualisation/reactome-diagram/reactome-diagram.component';
import {ReactomeCrossreferencesComponent} from './complex-function/reactome-crossreferences/reactome-crossreferences.component';
import {AntagonistsComponent} from './complex-function/antagonists/antagonists.component';
import {AgonistsComponent} from './complex-function/agonists/agonists.component';
import {ComplexFooterComponent} from './complex-footer/complex-footer.component';
import {GoMolecularFunctionComponent} from './complex-function/go-crossreferences/go-molecular-function/go-molecular-function.component';
import {LigandsComponent} from './complex-function/ligands/ligands.component';
import {SynonymsComponent} from './complex-references/synonyms/synonyms.component';
import {SystematicNameComponent} from './complex-references/systematic-name/systematic-name.component';
import {EfoCrossreferencesComponent} from './complex-disease/efo-crossreferences/efo-crossreferences.component';
import {ChemblCrossreferenceComponent} from './complex-disease/chembl-crossreference/chembl-crossreference.component';
import {GoCelluarCrossreferenceComponent} from './complex-expression/go-celluar-crossreference/go-celluar-crossreference.component';
import {GxaHeatmapComponent} from './shared/visualisation/gxa-heatmap/gxa-heatmap.component';
import {GoBiologicalProcessComponent} from './complex-function/go-crossreferences/go-biological-process/go-biological-process.component';
import {EmdbCrossreferencesComponent} from './complex-properties/emdb-crossreferences/emdb-crossreferences.component';
import {ComplexEvidenceComponent} from './complex-evidence/complex-evidence.component';
import {ComplexReferencesComponent} from './complex-references/complex-references.component';
import {AssembliesComponent} from './complex-function/assemblies/assemblies.component';
import {GoToComponent} from './shared/go-to/go-to.component';
import {RouterModule} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {OlsService} from '../../shared/ols/service/ols.service';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {ReactomeService} from './complex-function/reactome-crossreferences/shared/service/reactome.service';
import {EuroPmcService} from './complex-references/euro-pmc-crossreferences/service/euro-pmc.service';
import {ProgressSpinnerModule} from '../../shared/loading-indicators/progress-spinner/progress-spinner.module';
import {SectionService} from './shared/service/section/section.service';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ExternalResourcesComponent } from './complex-references/external-resources/external-resources.component';
import { ChordDiagramComponent } from './shared/visualisation/chord-diagram/chord-diagram.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ComplexDetailsComponent},
    ]),
    CommonModule,
    ProgressSpinnerModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
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
    ComplexReferencesComponent,
    ComplexEvidenceComponent,
    EmdbCrossreferencesComponent,
    AssembliesComponent,
    GoToComponent,
    ExternalResourcesComponent,
    ChordDiagramComponent,
  ],
  providers: [ComplexPortalService, NotificationService, ReactomeService, EuroPmcService, OlsService, Md5, SectionService],

})
export class ComplexDetailsModule {
}
