import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  private static show: boolean;
  private _color = 'primary';
  private _mode = 'indeterminate';
  private _query: string;
  private _takesLonger: boolean;

  public static display(): void {
    ProgressSpinnerComponent.show = true;
  }

  public static hide(): void {
    setTimeout(function () {
      ProgressSpinnerComponent.show = false;
    }, 1000);
  }

  constructor() {
    ProgressSpinnerComponent.show = false;
  }

  ngOnInit() {
    let context = this;
    setTimeout(function () {
      context._takesLonger = true;
    }, 5000);
  }

  get isDisplayed(): boolean {
    return ProgressSpinnerComponent.show;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get mode(): string {
    return this._mode;
  }

  set mode(value: string) {
    this._mode = value;
  }


  get query(): string {
    return this._query;
  }

  @Input()
  set query(value: string) {
    this._query = value;
  }

  get takesLonger(): boolean {
    return this._takesLonger;
  }
}
