import {Routes} from '@angular/router';
import {DocumentationComponent} from './documentation/documentation.component';
import {QuerySyntaxComponent} from './documentation/query-syntax/query-syntax.component';
import {DataContentComponent} from './documentation/data-content/data-content.component';
import {OntologiesComponent} from './ontologies/ontologies.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'complex', loadChildren: 'app/complex/complex.module#ComplexModule'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'download', loadChildren: 'app/download/download.module#DownloadModule'},
  {path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule'},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'documentation/query_syntax', component: QuerySyntaxComponent},
  {path: 'documentation/data_content', component: DataContentComponent},
  {path: 'ontologies', component: OntologiesComponent},
];
