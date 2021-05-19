import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OntologiesComponent} from './ontologies/ontologies.component';
import {AboutComponent} from './navigation/about/about.component';
import {DownloadComponent} from './download/download.component';
import {DocumentationComponent} from './navigation/documentation/documentation.component';

const routes: Routes = [
  {
    path: 'complex',
    loadChildren: 'app/complex/complex.module#ComplexModule'
  },
  {
    path: 'basket',
    loadChildren: 'app/basket/basket.module#BasketModule'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'ontologies',
    component: OntologiesComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: false})],
})
export class AppRoutingModule {}
