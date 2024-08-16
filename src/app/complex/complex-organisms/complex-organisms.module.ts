import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexOrganismComponent} from './complex-organism/complex-organism.component';
import {ComplexOrganismsComponent} from './complex-organisms.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ProgressSpinnerComponent} from '../../shared/loading-indicators/progress-spinner/progress-spinner.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ComplexOrganismsComponent}
  ]),
    CommonModule,
    ProgressSpinnerComponent,
    MatButtonModule
  ],
  declarations: [ComplexOrganismsComponent,
    ComplexOrganismComponent]
})
export class ComplexOrganismsModule {
}
