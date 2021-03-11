import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentationComponent} from './documentation.component';
import {DataContentComponent} from './data-content/data-content.component';
import {QuerySyntaxComponent} from './query-syntax/query-syntax.component';

const documentationRoutes: Routes = [
  {
    path: 'documentation',
    component: DocumentationComponent,
  },
  {
    path: 'documentation/data_content',
    component: DataContentComponent,
  },
  {
    path: 'documentation/query_syntax',
    component: QuerySyntaxComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(documentationRoutes)],
})

export class DocumentationRoutingModule {
}
