import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from './app.routes';
import {ComplexPortalService} from "./complex/shared/service/complex-portal.service";
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ContributorsDisplayComponent } from './home/contributors-display/contributors-display/contributors-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ContributorsDisplayComponent
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
