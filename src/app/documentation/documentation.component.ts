import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from "../shared/loading-indicators/progress-bar/progress-bar.component";

@Component({
  selector: 'cp-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
