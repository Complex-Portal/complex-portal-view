import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cp-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  private static show: boolean;
  private _color = 'primary';
  private _mode = 'indeterminate';

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
}
