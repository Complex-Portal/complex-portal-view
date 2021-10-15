import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'organisms',
      loadChildren: () => import('app/complex/complex-organisms/complex-organisms.module').then(m => m.ComplexOrganismsModule)
    },
    {
      path: 'search',
      loadChildren: () => import('app/complex/complex-results/complex-results.module').then(m => m.ComplexResultsModule)
    },
    {
      path: ':id',
      loadChildren: () => import('app/complex/complex-details/complex-details.module').then(m => m.ComplexDetailsModule)
    },
  ]),
    CommonModule,
  ]
})
export class ComplexModule {
}
