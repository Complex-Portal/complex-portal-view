import {Component, OnInit, Input} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-complex-header',
  templateUrl: './complex-header.component.html',
  styleUrls: ['./complex-header.component.css']
})
export class ComplexHeaderComponent implements OnInit {

  private _complexAC: string;
  private _complexName: string;
  private _complexSpecies: string;
  private _jsonURL: string;

  constructor() {
  }

  ngOnInit() {
    this._jsonURL = environment.complex_ws_base_url + '/details/' + this._complexAC;
  }

  get complexAC(): string {
    return this._complexAC;
  }

  @Input()
  set complexAC(value: string) {
    this._complexAC = value;
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

  get jsonURL(): string {
    return this._jsonURL;
  }

  set jsonURL(value: string) {
    this._jsonURL = value;
  }
}
