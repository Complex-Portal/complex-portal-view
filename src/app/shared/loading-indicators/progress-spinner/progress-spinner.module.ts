import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ProgressSpinnerComponent} from './progress-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ProgressSpinnerComponent
  ],
  exports: [
    ProgressSpinnerComponent
  ]
})
export class ProgressSpinnerModule {
}
