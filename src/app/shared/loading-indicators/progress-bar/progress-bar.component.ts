import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  private static show: boolean;
  private _color: string = 'primary';
  private _mode: string = 'indeterminate';

  constructor() {
    ProgressBarComponent.show = false;
  }

  ngOnInit() {
  }

  public static display(): void {
    ProgressBarComponent.show = true;
  }

  public static hide(): void {
    setTimeout(function () {
      ProgressBarComponent.show = false;
    }, 1000);
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
