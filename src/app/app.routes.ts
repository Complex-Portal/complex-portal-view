import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ComplexResultsComponent} from "./complex/complex-results/complex-results.component";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: ComplexResultsComponent},
];
