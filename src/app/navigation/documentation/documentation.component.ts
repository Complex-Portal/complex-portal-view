import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'cp-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  data_content = environment.complex_portal_documentation_url + 'documentation/cp_content.md';
  file_formats = environment.complex_portal_documentation_url + 'documentation/file_formats.md';
  query_syntax = environment.complex_portal_documentation_url + 'documentation/cql.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Documentation');
    $('cp-documentation').foundation();
    ProgressBarComponent.hide();
  }
}
