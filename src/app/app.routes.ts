import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ComplexResultsComponent} from './complex/complex-results/complex-results.component';
import {DownloadComponent} from './download/download.component';
import {ComplexDetailsComponent} from './complex/complex-details/complex-details.component';
import {BasketComponent} from './basket/basket.component';
import {AboutComponent} from "./about/about.component";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'search', component: ComplexResultsComponent},
  {path: 'complex/:id', component: ComplexDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'about', component: AboutComponent}
];
