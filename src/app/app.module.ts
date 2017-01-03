import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from './app.routes';
import {ComplexPortalService} from "./complex/shared/service/complex-portal.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),

  ],
  providers: [ComplexPortalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
