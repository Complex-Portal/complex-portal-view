import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexResultsComponent} from "./complex-results.component";
import {RouterModule} from "@angular/router";
import {ComplexPaginatorComponent} from "./complex-paginator/complex-paginator.component";
import {ComplexFilterComponent} from "./complex-filter/complex-filter.component";
import {ComplexListComponent} from "./complex-list/complex-list.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexResultsComponent}
  ]),
    CommonModule
  ],
  declarations: [ComplexResultsComponent,
    ComplexListComponent,
    ComplexFilterComponent,
    ComplexPaginatorComponent]
})
export class ComplexResultsModule {
}
