import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-agonists',
  templateUrl: './agonists.component.html',
  styleUrls: ['./agonists.component.css']
})
export class AgonistsComponent implements OnInit {
  private _agonists: string[];

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
}
