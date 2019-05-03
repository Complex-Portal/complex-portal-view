import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProgressBarComponent} from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'cp-query-syntax',
  templateUrl: './query-syntax.component.html',
  styleUrls: ['./query-syntax.component.css']
})
export class QuerySyntaxComponent implements OnInit {

  source = environment.complex_portal_documentation_url + 'cql.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Query Syntax');
    ProgressBarComponent.hide();
  }
}
