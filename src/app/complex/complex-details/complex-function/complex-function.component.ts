import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-complex-function',
  templateUrl: './complex-function.component.html',
  styleUrls: ['./complex-function.component.css']
})
export class ComplexFunctionComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _functionDescription: string;
  private _goXRefs: CrossReference[];
  private _intenzXRefs: CrossReference[];
  private _reactomeXRefs: CrossReference[];
  private _pubmedXRefs: CrossReference[];
  private _synonyms: string[];
  private _systematicName: string[];
  private _ligands: string[];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      let crossRef = this.crossReferences[i];
      let database = this.crossReferences[i].database;

      if (database === 'gene ontology') {
        if (this.goXRefs === undefined) {
          this.goXRefs = [];
        }
        this.goXRefs.push(crossRef);
      }
      if (database === 'intenz') {
        if (this.intenzXRefs === undefined) {
          this.intenzXRefs = [];
        }
        this.intenzXRefs.push(crossRef);
      }
      if (database === 'reactome') {
        if (this.reactomeXRefs === undefined) {
          this.reactomeXRefs = [];
        }
        this.reactomeXRefs.push(crossRef);
      }
      if (database === 'pubmed') {
        if (this.pubmedXRefs === undefined) {
          this.pubmedXRefs = [];
        }
        this.pubmedXRefs.push(crossRef);
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

  get functionDescription(): string {
    return this._functionDescription;
  }

  @Input()
  set functionDescription(value: string) {
    this._functionDescription = value;
  }

  get goXRefs(): CrossReference[] {
    return this._goXRefs;
  }

  set goXRefs(value: CrossReference[]) {
    this._goXRefs = value;
  }

  get intenzXRefs(): CrossReference[] {
    return this._intenzXRefs;
  }

  set intenzXRefs(value: CrossReference[]) {
    this._intenzXRefs = value;
  }

  get reactomeXRefs(): CrossReference[] {
    return this._reactomeXRefs;
  }

  set reactomeXRefs(value: CrossReference[]) {
    this._reactomeXRefs = value;
  }

  get pubmedXRefs(): CrossReference[] {
    return this._pubmedXRefs;
  }

  set pubmedXRefs(value: CrossReference[]) {
    this._pubmedXRefs = value;
  }

  get synonyms(): string[] {
    return this._synonyms;
  }

  @Input()
  set synonyms(value: string[]) {
    this._synonyms = value;
  }

  get systematicName(): string[] {
    return this._systematicName;
  }

  @Input()
  set systematicName(value: string[]) {
    this._systematicName = value;
  }

  get ligands(): string[] {
    return this._ligands;
  }

  @Input()
  set ligands(value: string[]) {
    this._ligands = value;
  }
}
