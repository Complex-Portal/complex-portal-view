import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasketComponent} from './basket.component';
import {ComplexNavigatorModule} from '../complex/complex-results/complex-navigator/complex-navigator.module';
import {ProgressSpinnerModule} from '../shared/loading-indicators/progress-spinner/progress-spinner.module';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: BasketComponent}
  ]),
    CommonModule,
    ComplexNavigatorModule,
    ProgressSpinnerModule
  ],
  declarations: [BasketComponent]
})
export class BasketModule {
}
