import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal');
    ProgressBarComponent.display();
    document.body.scrollTop = 0;
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }
}
