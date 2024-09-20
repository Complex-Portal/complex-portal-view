import {Component, Input, OnInit, input } from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-complex-properties',
  templateUrl: './complex-properties.component.html',
  styleUrls: ['./complex-properties.component.css']
})
export class ComplexPropertiesComponent implements OnInit {
  private _propertiesDescription: string[];
  private _crossReferences: CrossReference[];
  private _pdbXRefs: CrossReference[];
  private _emdbXRefs: CrossReference[];
  private _comments: string[];
  private _assemblies: string[];


  constructor() {
  }

  get hasPropertiesDescriptionsOrXrefs(): boolean {
    return (this.propertiesDescription && this.propertiesDescription.length > 0) ||
      (this.pdbXRefs && this.pdbXRefs.length > 0) ||
      (this.emdbXRefs && this.emdbXRefs.length > 0);
  }

  ngOnInit() {
    this.checkFreeTextContent();
    this.findXRefs();
  }

  private findXRefs() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      const crossRef = this.crossReferences[i];
      const database = this.crossReferences[i].database;

      if (database === 'wwpdb') {
        if (this._pdbXRefs === undefined) {
          this._pdbXRefs = [];
        }
        this._pdbXRefs.push(crossRef);
      }
      if (database === 'emdb') {
        if (this._emdbXRefs === undefined) {
          this._emdbXRefs = [];
        }
        this._emdbXRefs.push(crossRef);
      }
    }
  }

  private checkFreeTextContent() {
    if (this._propertiesDescription.length === 0) {
      this._propertiesDescription = null;
    }
    if (this._comments.length === 0) {
      this._comments = null;
    }
  }

  get propertiesDescription(): string[] {
    return this._propertiesDescription;
  }

  @Input()
  set propertiesDescription(value: string[]) {
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

  get assemblies(): string[] {
    return this._assemblies;
  }

  @Input()
  set assemblies(value: string[]) {
    this._assemblies = value;
  }
}
