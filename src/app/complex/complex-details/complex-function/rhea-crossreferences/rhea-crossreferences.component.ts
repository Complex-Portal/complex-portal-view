import {Component, Input, OnInit} from '@angular/core';
import {RheaCrossReference} from '../../../shared/model/complex-details/rhea-cross-reference.model';

import '../../../../../../node_modules/@swissprot/rhea-reaction-visualizer';

@Component({
  selector: 'cp-rhea-crossreferences',
  templateUrl: './rhea-crossreferences.component.html',
  styleUrls: ['./rhea-crossreferences.component.css']
})
export class RheaCrossreferencesComponent implements OnInit {

  private rheaIdRegularExp = /rhea:/gi;

  private _crossReferences: RheaCrossReference[];
  private _displayedElements = 3;

  constructor() {
  }

  ngOnInit() {
  }

  get crossReferences(): RheaCrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: RheaCrossReference[]) {
    this._crossReferences = value;
    if (this._crossReferences.length > 0) {
      this._crossReferences[0].displayed = true;
    }
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }

  toggleDisplayedProperty(index: number): void {
    this._crossReferences[index].displayed = !this._crossReferences[index].displayed;
  }
}
