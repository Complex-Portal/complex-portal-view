import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProgressBarComponent} from '../../../shared/loading-indicators/progress-bar/progress-bar.component';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'cp-data-content',
  templateUrl: './data-content.component.html',
  styleUrls: ['./data-content.component.css']
})
export class DataContentComponent implements OnInit {

  source = environment.complex_portal_documentation_url + 'cp_content.md';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Complex Portal - Data Content');
    ProgressBarComponent.hide();
  }
}
