import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';


@Component({
  selector: 'app-complex-disease',
  templateUrl: './complex-disease.component.html',
  styleUrls: ['./complex-disease.component.css']
})

export class ComplexDiseaseComponent implements OnInit {
  private _diseaseDescriptions: string[];
  private _crossReferences: CrossReference[];
  private _efoXRefs: CrossReference[];
  private _chemblXRefs: CrossReference[];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      const crossRef = this._crossReferences[i];
      const database = this._crossReferences[i].database;
      if (database === 'efo') {
        if (this._efoXRefs === undefined) {
          this._efoXRefs = [];
        }
        this._efoXRefs.push(crossRef);
      }
      if (database === 'ChEMBL target') {
        if (this._chemblXRefs === undefined) {
          this._chemblXRefs = [];
        }
        this._chemblXRefs.push(crossRef);
      }
    }
  }

  get diseaseDescriptions(): string[] {
    return this._diseaseDescriptions;
  }

  @Input()
  set diseaseDescriptions(value: string[]) {
    this._diseaseDescriptions = value;
  }


  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get efoXRefs(): CrossReference[] {
    return this._efoXRefs;
  }

  set efoXRefs(value: CrossReference[]) {
    this._efoXRefs = value;
  }

  get chemblXRefs(): CrossReference[] {
    return this._chemblXRefs;
  }

  set chemblXRefs(value: CrossReference[]) {
    this._chemblXRefs = value;
  }
}
