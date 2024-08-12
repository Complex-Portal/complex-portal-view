import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
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
