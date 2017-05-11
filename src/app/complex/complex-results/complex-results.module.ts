import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexResultsComponent} from './complex-results.component';
import {RouterModule} from '@angular/router';
import {ComplexPaginatorComponent} from './complex-paginator/complex-paginator.component';
import {ComplexFilterComponent} from './complex-filter/complex-filter.component';
import {ComplexListComponent} from './complex-list/complex-list.component';
import {ComplexModule} from 'app/complex/complex.module';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexResultsComponent},
  ]),
    CommonModule,
    ComplexModule
  ],
  declarations: [ComplexResultsComponent,
    ComplexListComponent,
    ComplexFilterComponent,
    ComplexPaginatorComponent,
  ]
})
export class ComplexResultsModule {
}
