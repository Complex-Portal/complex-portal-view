import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-assemblies',
  templateUrl: './assemblies.component.html',
  styleUrls: ['./assemblies.component.css']
})
export class AssembliesComponent implements OnInit {
  private _assemblies : string[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get assemblies(): string[] {
    return this._assemblies;
  }

  @Input()
  set assemblies(value: string[]) {
    this._assemblies = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
