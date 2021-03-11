import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation.component';
import {DocumentationRoutingModule} from './documentation-routing.module';
import {DataContentComponent} from './data-content/data-content.component';
import {QuerySyntaxComponent} from './query-syntax/query-syntax.component';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MarkdownModule.forChild(),
  ],
  declarations: [
    DocumentationComponent,
    DataContentComponent,
    QuerySyntaxComponent
  ]
})
export class DocumentationModule {
}
