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
import { TableHeaderComponent } from './complex-navigator/table-structure/table-header/table-header.component';
import { TableInteractorColumnComponent } from './complex-navigator/table-structure/table-interactor-column/table-interactor-column.component';


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
  ]
})
export class ComplexResultsModule {
}
