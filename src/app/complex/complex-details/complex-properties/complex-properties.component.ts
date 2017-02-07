import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-complex-properties',
  templateUrl: './complex-properties.component.html',
  styleUrls: ['./complex-properties.component.css']
})
export class ComplexPropertiesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _pdbXRefs: CrossReference[];

  constructor() {
  }

  ngOnInit() {
    for (let pos in this.crossReferences) {
      let crossRef = this.crossReferences[pos];
      let database = this.crossReferences[pos].database;

      if (database === 'wwpdb') {
        if (this._pdbXRefs === undefined) {
          this._pdbXRefs = [];
        }
        this._pdbXRefs.push(crossRef);
      }
    }
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get pdbXRefs(): CrossReference[] {
    return this._pdbXRefs;
  }

  set pdbXRefs(value: CrossReference[]) {
    this._pdbXRefs = value;
  }
}
