import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-antagonists',
  templateUrl: './antagonists.component.html',
  styleUrls: ['./antagonists.component.scss']
})
export class AntagonistsComponent implements OnInit {
  private _antagonists: string[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get antagonists(): string[] {
    return this._antagonists;
  }

  @Input()
  set antagonists(value: string[]) {
    this._antagonists = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
