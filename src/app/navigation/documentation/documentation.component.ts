import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';

declare const $: any;

@Component({
  selector: 'cp-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Documentation');
    $('cp-documentation').foundation();
    ProgressBarComponent.hide();
  }

}
