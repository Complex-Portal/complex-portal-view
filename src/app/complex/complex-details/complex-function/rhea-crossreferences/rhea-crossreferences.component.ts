import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-rhea-crossreferences',
  templateUrl: './rhea-crossreferences.component.html',
  styleUrls: ['./rhea-crossreferences.component.css']
})
export class RheaCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
