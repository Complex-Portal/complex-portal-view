import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-synonyms',
  templateUrl: 'synonyms.component.html',
  styleUrls: ['synonyms.component.css']
})
export class SynonymsComponent implements OnInit {
  private _synonyms: string[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get synonyms(): string[] {
    return this._synonyms;
  }

  @Input()
  set synonyms(value: string[]) {
    this._synonyms = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
