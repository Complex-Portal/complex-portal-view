import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasketComponent} from './basket.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: BasketComponent}
  ]),
    CommonModule
  ],
  declarations: [BasketComponent]
})
export class BasketModule {
}
