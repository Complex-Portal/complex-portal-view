import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {environment} from "../../environments/environment";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'cp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  private _INTACT_BASE_URL = environment.intact_base_url;
  private _INTACT_SUPPORT_URL = environment.intact_support_url;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - About');
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  get INTACT_BASE_URL(): any {
    return this._INTACT_BASE_URL;
  }

  get INTACT_SUPPORT_URL(): any {
    return this._INTACT_SUPPORT_URL;
  }
}
