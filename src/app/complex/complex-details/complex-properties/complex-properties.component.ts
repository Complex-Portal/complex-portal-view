import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'app-complex-properties',
  templateUrl: './complex-properties.component.html',
  styleUrls: ['./complex-properties.component.css']
})
export class ComplexPropertiesComponent implements OnInit {
  private _propertiesDescription: string;
  private _crossReferences: CrossReference[];
  private _pdbXRefs: CrossReference[];
  private _comments: string[];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      const crossRef = this.crossReferences[i];
      const database = this.crossReferences[i].database;

      if (database === 'wwpdb') {
        if (this._pdbXRefs === undefined) {
          this._pdbXRefs = [];
        }
        this._pdbXRefs.push(crossRef);
      }
    }
  }

  get propertiesDescription(): string {
    return this._propertiesDescription;
  }

  @Input()
  set propertiesDescription(value: string) {
    this._propertiesDescription = value;
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

  get comments(): string[] {
    return this._comments;
  }

  @Input()
  set comments(value: string[]) {
    this._comments = value;
  }
}
