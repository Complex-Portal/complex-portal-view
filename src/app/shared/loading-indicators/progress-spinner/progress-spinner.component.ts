import {Component, input, OnInit} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  selector: 'cp-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  private static show: boolean;
  color: 'primary' | 'secondary' = 'primary';
  mode: 'indeterminate' | 'determinate' = 'indeterminate';
  query = input<string>();
  takesLonger: boolean;

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
    setTimeout(() => this.takesLonger = true, 5000);
  }

  get isDisplayed(): boolean {
    return ProgressSpinnerComponent.show;
  }
}
