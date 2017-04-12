import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'cp-complex-references',
  templateUrl: './complex-references.component.html',
  styleUrls: ['./complex-references.component.css']
})
export class ComplexReferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _pubmedXRefs: CrossReference[];
  private _synonyms: string[];
  private _systematicName: string[];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this._crossReferences.length; i++) {
      const crossRef = this._crossReferences[i];
      const database = this._crossReferences[i].database;

      if (database === 'pubmed') {
        if (this._pubmedXRefs === undefined) {
          this._pubmedXRefs = [];
        }
        this._pubmedXRefs.push(crossRef);
        console.log(this.pubmedXRefs)
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
}
