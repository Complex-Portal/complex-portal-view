import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DownloadComponent} from './download.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DownloadComponent}
  ]),
    CommonModule
  ],
  declarations: [DownloadComponent]
})
export class DownloadModule { }
