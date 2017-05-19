import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-complex-properties',
  templateUrl: './complex-properties.component.html',
  styleUrls: ['./complex-properties.component.css']
})
export class ComplexPropertiesComponent implements OnInit {
  private _propertiesDescription: string;
  private _crossReferences: CrossReference[];
  private _pdbXRefs: CrossReference[];
  private _emdbXRefs: CrossReference[];
  private _comments: string[];

  constructor() {
  }

  ngOnInit() {
    if(this._propertiesDescription.length === 0){
      this._propertiesDescription = null;
    }
    if(this._comments.length === 0){
      this._comments = null;
    }
    for (let i = 0; i < this.crossReferences.length; i++) {
      const crossRef = this.crossReferences[i];
      const database = this.crossReferences[i].database;

      if (database === 'wwpdb') {
        if (this._pdbXRefs === undefined) {
          this._pdbXRefs = [];
        }
        this._pdbXRefs.push(crossRef);
        console.log(crossRef.identifier)
      }
      if (database === 'emdb') {
        if (this._emdbXRefs === undefined) {
          this._emdbXRefs = [];
        }
        this._emdbXRefs.push(crossRef);
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

  get emdbXRefs(): CrossReference[] {
    return this._emdbXRefs;
  }

  @Input()
  set emdbXRefs(value: CrossReference[]) {
    this._emdbXRefs = value;
  }

  get comments(): string[] {
    return this._comments;
  }

  @Input()
  set comments(value: string[]) {
    this._comments = value;
  }
}
