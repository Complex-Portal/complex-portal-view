import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-antagonists',
  templateUrl: './antagonists.component.html',
  styleUrls: ['./antagonists.component.css']
})
export class AntagonistsComponent implements OnInit {
  private _antagonists: string[];

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
}
