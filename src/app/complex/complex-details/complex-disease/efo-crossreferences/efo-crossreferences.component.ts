import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-efo-crossreferences',
  templateUrl: './efo-crossreferences.component.html',
  styleUrls: ['./efo-crossreferences.component.css']
})
export class EfoCrossreferencesComponent implements OnInit {
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
