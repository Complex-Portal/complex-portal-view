import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-ligands',
  templateUrl: './ligands.component.html',
  styleUrls: ['./ligands.component.css']
})
export class LigandsComponent implements OnInit {
  private _ligands: string[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get ligands(): string[] {
    return this._ligands;
  }

  @Input()
  set ligands(value: string[]) {
    this._ligands = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
