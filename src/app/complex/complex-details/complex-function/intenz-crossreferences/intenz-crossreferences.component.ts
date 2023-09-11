import {Component, Input, OnInit} from '@angular/core';
import {IntenzCrossReference} from '../../../shared/model/complex-details/intenz-cross-reference.model';

@Component({
  selector: 'cp-intenz-crossreferences',
  templateUrl: './intenz-crossreferences.component.html',
  styleUrls: ['./intenz-crossreferences.component.css']
})
export class IntenzCrossreferencesComponent implements OnInit {
  private _crossReferences: IntenzCrossReference[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get crossReferences(): IntenzCrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: IntenzCrossReference[]) {
    this._crossReferences = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
