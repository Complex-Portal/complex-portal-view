import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from "../shared/loading-indicators/progress-bar/progress-bar.component";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'cp-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.titleService.setTitle('Complex Portal - Documentation');
    ProgressBarComponent.hide();
  }
}
