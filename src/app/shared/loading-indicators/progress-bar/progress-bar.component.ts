import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  private static show: boolean;
  private _color = 'primary';
  private _mode = 'indeterminate';

  public static display(): void {
    ProgressBarComponent.show = true;
  }

  public static hide(): void {
    setTimeout(function () {
      ProgressBarComponent.show = false;
    }, 1000);
  }

  constructor() {
    ProgressBarComponent.show = false;
  }

  ngOnInit() {
  }

  get isDisplayed(): boolean {
    return ProgressBarComponent.show;
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
