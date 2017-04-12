import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'organisms', loadChildren: 'app/complex/complex-organisms/complex-organisms.module#ComplexOrganismsModule'},
    {path: 'search', loadChildren: 'app/complex/complex-results/complex-results.module#ComplexResultsModule'},
    {path: ':id', loadChildren: 'app/complex/complex-details/complex-details.module#ComplexDetailsModule'},
  ]),
    CommonModule
  ],
  declarations: []
})
export class ComplexModule {
}
