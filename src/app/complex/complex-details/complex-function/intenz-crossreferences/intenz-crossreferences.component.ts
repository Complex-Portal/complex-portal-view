import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-intenz-crossreferences',
  templateUrl: './intenz-crossreferences.component.html',
  styleUrls: ['./intenz-crossreferences.component.css']
})
export class IntenzCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];

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
