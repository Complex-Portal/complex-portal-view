import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexResultsComponent} from './complex-results.component';
import {RouterModule} from '@angular/router';
import {ComplexPaginatorComponent} from './complex-paginator/complex-paginator.component';
import {ComplexFilterComponent} from './complex-filter/complex-filter.component';
import {ComplexListComponent} from './complex-list/complex-list.component';
import {ProgressSpinnerModule} from '../../shared/loading-indicators/progress-spinner/progress-spinner.module';
import {ComplexNavigatorComponent} from './complex-navigator/complex-navigator.component';
import {TableStructureComponent} from './complex-navigator/table-structure/table-structure.component';
import {TableHeaderComponent} from './complex-navigator/table-structure/table-header/table-header.component';
import {
  TableInteractorColumnComponent
} from './complex-navigator/table-structure/table-interactor-column/table-interactor-column.component';
import {
  TableInteractorNameComponent
} from './complex-navigator/table-structure/table-interactor-column/table-interactor-name/table-interactor-name.component';
import {
  TableInteractorExternalLinkComponent
} from './complex-navigator/table-structure/table-interactor-column/table-interactor-external-link/table-interactor-external-link.component';
import {
  TableInteractorStoichiometryComponent
} from './complex-navigator/table-structure/table-interactor-column/table-interactor-stoichiometry/table-interactor-stoichiometry.component';
import {
  TableMainInteractorComponent
} from './complex-navigator/table-structure/table-interactor-column/table-main-interactor/table-main-interactor.component';
import {
  TableSubcomponentInteractorComponent
} from './complex-navigator/table-structure/table-interactor-column/table-subcomponent-interactor/table-subcomponent-interactor.component';
import {ComplexNavigatorButtonsComponent} from './complex-navigator-buttons/complex-navigator-buttons.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexResultsComponent},
  ]),
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    TableStructureComponent
  ],
  declarations: [ComplexResultsComponent,
    ComplexListComponent,
    ComplexFilterComponent,
    ComplexPaginatorComponent,
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
  ]
})
export class ComplexResultsModule {
}
