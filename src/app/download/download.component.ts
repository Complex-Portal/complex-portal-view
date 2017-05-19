import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {environment} from "../../environments/environment";

@Component({
  selector: 'cp-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit, AfterViewInit {
  private _COMPLEX_PSI25 = environment.complex_psi25;
  private _COMPLEX_PSI30 = environment.complex_psi30;
  private _COMPLEX_TAB = environment.complex_tab;
  private _COMPLEX_WS = environment.complex_ws_base_url;
  private _COMPLEX_TAB_README = environment.complex_tab_readme;
  private _COMPLEX_CURRENT = environment.complex_current;

  constructor() { }

  ngOnInit() {
    ProgressBarComponent.display();
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  get COMPLEX_PSI25(): string {
    return this._COMPLEX_PSI25;
  }

  get COMPLEX_PSI30(): string {
    return this._COMPLEX_PSI30;
  }

  get COMPLEX_TAB(): string {
    return this._COMPLEX_TAB;
  }

  get COMPLEX_WS(): string {
    return this._COMPLEX_WS;
  }

  get COMPLEX_TAB_README(): any {
    return this._COMPLEX_TAB_README;
  }

  get COMPLEX_CURRENT(): any {
    return this._COMPLEX_CURRENT;
  }
}
