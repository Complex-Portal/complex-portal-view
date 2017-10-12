import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'cp-query-syntax',
  templateUrl: './query-syntax.component.html',
  styleUrls: ['./query-syntax.component.css']
})
export class QuerySyntaxComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Query Syntax');
  }
}
