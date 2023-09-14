import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {RheaCrossReference} from '../../../shared/model/complex-details/rhea-cross-reference.model';

import '../../../../../../node_modules/@swissprot/rhea-reaction-visualizer';

@Component({
  selector: 'cp-catalytic-activity',
  templateUrl: './catalytic-activity.component.html',
  styleUrls: ['./catalytic-activity.component.css']
})
export class CatalyticActivityComponent implements OnInit {
  private _intenzCrossReferences: CrossReference[];
  private _rheaCrossReferences: RheaCrossReference[];
  private _displayedIntenzElements = 5;
  private _displayedRheaElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  get intenzCrossReferences(): CrossReference[] {
    return this._intenzCrossReferences;
  }

  @Input()
  set intenzCrossReferences(value: CrossReference[]) {
    this._intenzCrossReferences = value;
  }

  get rheaCrossReferences(): RheaCrossReference[] {
    return this._rheaCrossReferences;
  }

  @Input()
  set rheaCrossReferences(value: RheaCrossReference[]) {
    this._rheaCrossReferences = value;
    if (this._rheaCrossReferences.length > 0) {
      this._rheaCrossReferences[0].displayed = true;
    }
  }

  get displayedIntenzElements(): number {
    return this._displayedIntenzElements;
  }

  set displayedIntenzElements(value: number) {
    this._displayedIntenzElements = value;
  }

  get displayedRheaElements(): number {
    return this._displayedRheaElements;
  }

  set displayedRheaElements(value: number) {
    this._displayedRheaElements = value;
  }

  toggleRheaDisplayedProperty(index: number): void {
    this._rheaCrossReferences[index].displayed = !this._rheaCrossReferences[index].displayed;
  }
}
