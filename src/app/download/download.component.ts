import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';

@Component({
  selector: 'cp-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    ProgressBarComponent.display();
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
