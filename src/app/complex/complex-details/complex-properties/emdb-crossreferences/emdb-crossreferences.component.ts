import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-emdb-crossreferences',
  templateUrl: './emdb-crossreferences.component.html',
  styleUrls: ['./emdb-crossreferences.component.css']
})
export class EmdbCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  displayedElements = 5;

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
}
