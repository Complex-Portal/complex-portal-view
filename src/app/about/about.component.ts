import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from "../shared/loading-indicators/progress-bar/progress-bar.component";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
