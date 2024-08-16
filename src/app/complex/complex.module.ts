import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule, PlatformLocation} from '@angular/common';
import {RouterModule} from '@angular/router';
import { SpeciesPipe } from './shared/pipe/species.pipe';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'organisms',
      loadChildren: () => import('./complex-organisms/complex-organisms.module').then(m => m.ComplexOrganismsModule)
    },
    {
      path: 'search',
      loadChildren: () => import('./complex-results/complex-results.module').then(m => m.ComplexResultsModule)
    },
    {
      path: ':id',
      loadChildren: () => import('./complex-details/complex-details.module').then(m => m.ComplexDetailsModule)
    },
  ]),
    CommonModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  exports: [
    SpeciesPipe
  ],
  declarations: [
    SpeciesPipe
  ]
})
export class ComplexModule {
}
