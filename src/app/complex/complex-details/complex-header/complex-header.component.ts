import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-complex-header',
  templateUrl: './complex-header.component.html',
  styleUrls: ['./complex-header.component.css']
})
export class ComplexHeaderComponent implements OnInit {

  private _complexName : string;
  private _complexSpecies : string;

  constructor() { }

  ngOnInit() {
  }

  get complexName(): string {
    return this._complexName;
  }

  @Input()
  set complexName(value: string) {
    this._complexName = value;
  }

  get complexSpecies(): string {
    return this._complexSpecies;
  }

  @Input()
  set complexSpecies(value: string) {
    this._complexSpecies = value;
  }
}
