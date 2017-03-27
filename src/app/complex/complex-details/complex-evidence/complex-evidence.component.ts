import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-complex-evidence',
  templateUrl: './complex-evidence.component.html',
  styleUrls: ['./complex-evidence.component.css']
})
export class ComplexEvidenceComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _ecoXRefs: CrossReference[];
  private _intactXRefs: CrossReference[];


  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      const crossRef = this._crossReferences[i];
      const database = this._crossReferences[i].database;

      if (database === 'evidence ontology') {
        if (this._ecoXRefs === undefined) {
          this._ecoXRefs = [];
        }
        this._ecoXRefs.push(crossRef);
      }
      if (database === 'intact') {
        if (this._intactXRefs === undefined) {
          this._intactXRefs = [];
        }
        this._intactXRefs.push(crossRef);
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

  get ecoXRefs(): CrossReference[] {
    return this._ecoXRefs;
  }

  set ecoXRefs(value: CrossReference[]) {
    this._ecoXRefs = value;
  }

  get intactXRefs(): CrossReference[] {
    return this._intactXRefs;
  }

  set intactXRefs(value: CrossReference[]) {
    this._intactXRefs = value;
  }
}
