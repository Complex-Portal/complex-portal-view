import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-agonists',
  templateUrl: './agonists.component.html',
  styleUrls: ['./agonists.component.css']
})
export class AgonistsComponent implements OnInit {
  private _agonists: string[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get agonists(): string[] {
    return this._agonists;
  }

  @Input()
  set agonists(value: string[]) {
    this._agonists = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
