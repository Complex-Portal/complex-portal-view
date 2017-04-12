import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'complex', loadChildren: 'app/complex/complex.module#ComplexModule'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'download', loadChildren: 'app/download/download.module#DownloadModule'},
  {path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule'},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
];
