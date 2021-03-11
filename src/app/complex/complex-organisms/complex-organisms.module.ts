import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexOrganismComponent} from './complex-organism/complex-organism.component';
import {ComplexOrganismsComponent} from './complex-organisms.component';
import {RouterModule} from '@angular/router';
import {ProgressSpinnerModule} from '../../shared/loading-indicators/progress-spinner/progress-spinner.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexOrganismsComponent}
  ]),
    CommonModule,
    ProgressSpinnerModule,
    MatButtonModule
  ],
  declarations: [ComplexOrganismsComponent,
    ComplexOrganismComponent]
})
export class ComplexOrganismsModule {
}
