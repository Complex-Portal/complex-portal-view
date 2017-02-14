import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-properties-description',
  templateUrl: './properties-description.component.html',
  styleUrls: ['./properties-description.component.css']
})
export class PropertiesDescriptionComponent implements OnInit {

  private _propertiesDescription: string;

  constructor() {
  }

  ngOnInit() {
  }

  get propertiesDescription(): string {
    return this._propertiesDescription;
  }

  @Input()
  set propertiesDescription(value: string) {
    this._propertiesDescription = value;
  }
}
