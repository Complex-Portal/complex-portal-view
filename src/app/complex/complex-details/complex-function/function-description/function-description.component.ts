import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-function-description',
  templateUrl: './function-description.component.html',
  styleUrls: ['./function-description.component.css']
})
export class FunctionDescriptionComponent implements OnInit {
  private _functionDescription: string;

  constructor() { }

  ngOnInit() {
  }

  get functionDescription(): string {
    return this._functionDescription;
  }

  @Input()
  set functionDescription(value: string) {
    this._functionDescription = value;
  }
}
