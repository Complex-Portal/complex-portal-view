import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasketComponent} from './basket.component';
import {ComplexNavigatorModule} from '../complex/complex-results/complex-navigator/complex-navigator.module';
import {ProgressSpinnerComponent} from '../shared/loading-indicators/progress-spinner/progress-spinner.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: BasketComponent}
  ]),
    CommonModule,
    ComplexNavigatorModule,
    ProgressSpinnerComponent, MatTabGroup, MatTab
  ],
  declarations: [BasketComponent]
})
export class BasketModule {
}
