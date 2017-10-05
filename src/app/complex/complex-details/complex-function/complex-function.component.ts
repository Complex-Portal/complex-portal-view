import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';

declare const $: any;

@Component({
  selector: 'cp-complex-function',
  templateUrl: './complex-function.component.html',
  styleUrls: ['./complex-function.component.css']
})
export class ComplexFunctionComponent implements OnInit, AfterViewInit {
  private _crossReferences: CrossReference[];
  private _functionDescription: string;
  private _goXRefs: CrossReference[];
  private _intenzXRefs: CrossReference[];
  private _reactomeXRefs: CrossReference[];

  private _ligands: string[];
  private _agonists: string[];
  private _antagonists: string[];

  constructor() {
  }

  ngOnInit() {
    this.findXRefs();
  }

  private findXRefs() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      const crossRef = this.crossReferences[i];
      const database = this.crossReferences[i].database;

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
    }
  }


  ngAfterViewInit(): void {
    $('.goToMenu').foundation();
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

  get ligands(): string[] {
    return this._ligands;
  }

  @Input()
  set ligands(value: string[]) {
    this._ligands = value;
  }

  get agonists(): string[] {
    return this._agonists;
  }

  @Input()
  set agonists(value: string[]) {
    this._agonists = value;
  }

  get antagonists(): string[] {
    return this._antagonists;
  }

  @Input()
  set antagonists(value: string[]) {
    this._antagonists = value;
  }
}
