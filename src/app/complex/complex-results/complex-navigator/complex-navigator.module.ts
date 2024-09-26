import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';
import {ComplexNavigatorComponent} from './complex-navigator.component';
import {TableStructureComponent} from './table-structure/table-structure.component';
import {TableHeaderComponent} from './table-structure/table-header/table-header.component';
import {TableInteractorColumnComponent} from './table-structure/table-interactor-column/table-interactor-column.component';
import {
  TableInteractorNameComponent
} from './table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component';
import {
  TableInteractorExternalLinkComponent
} from './table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component';
import {
  TableInteractorStoichiometryComponent
} from './table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component';
import {
  TableMainInteractorComponent
} from './table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component';
import {
  TableSubcomponentInteractorComponent
} from './table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component';
import {ComplexNavigatorButtonsComponent} from './complex-navigator-buttons/complex-navigator-buttons.component';
import {RouterModule} from '@angular/router';
import {ComplexListDisplayButtonsComponent} from './complex-list-display-buttons/complex-list-display-buttons.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProgressSpinnerComponent} from '../../../shared/loading-indicators/progress-spinner/progress-spinner.component';
import {ComplexModule} from '../../complex.module';
import {SpeciesPipe} from '../../shared/pipe/species.pipe';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ProgressSpinnerComponent,
    MarkdownModule,
    MatTooltipModule,
    ComplexModule,
    SpeciesPipe
  ],
  exports: [
    ComplexNavigatorComponent,
    ComplexListDisplayButtonsComponent
  ],
  declarations: [
    ComplexNavigatorComponent,
    TableStructureComponent,
    TableHeaderComponent,
    TableInteractorColumnComponent,
    TableInteractorNameComponent,
    TableInteractorExternalLinkComponent,
    TableInteractorStoichiometryComponent,
    TableMainInteractorComponent,
    TableSubcomponentInteractorComponent,
    ComplexNavigatorButtonsComponent,
    ComplexListDisplayButtonsComponent
  ]
})
export class ComplexNavigatorModule {
}
