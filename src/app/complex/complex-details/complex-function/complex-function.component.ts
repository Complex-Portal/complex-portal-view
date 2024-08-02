import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {RheaCrossReference} from '../../shared/model/complex-details/rhea-cross-reference.model';
import {IntEnzCrossReference} from '../../shared/model/complex-details/intenz-cross-reference.model';

@Component({
  selector: 'cp-complex-function',
  templateUrl: './complex-function.component.html',
  styleUrls: ['./complex-function.component.css']
})
export class ComplexFunctionComponent implements OnInit, AfterViewInit {
  private _crossReferences: CrossReference[];
  private _functionDescription: string;
  private _goXRefs: CrossReference[];
  private _intenzXRefs: IntEnzCrossReference[];
  private _reactomeXRefs: CrossReference[];
  private _rheaXRefs: RheaCrossReference[];

  private _ligands: string[];
  private _agonists: string[];
  private _antagonists: string[];

  hasFunction = false;

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
        this.hasFunction = true;
        if (this.goXRefs === undefined) {
          this.goXRefs = [];
        }
        this.goXRefs.push(crossRef);
      }
      if (database === 'intenz') {
        this.hasFunction = true;
        if (this.intenzXRefs === undefined) {
          this.intenzXRefs = [];
        }
        this.intenzXRefs.push(new IntEnzCrossReference(crossRef));
      }
      if (database === 'reactome') {
        this.hasFunction = true;
        if (this.reactomeXRefs === undefined) {
          this.reactomeXRefs = [];
        }
        this.reactomeXRefs.push(crossRef);
      }
      if (database === 'rhea') {
        this.hasFunction = true;
        if (this.rheaXRefs === undefined) {
          this.rheaXRefs = [];
        }
        this.rheaXRefs.push(new RheaCrossReference(crossRef));
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

  get intenzXRefs(): IntEnzCrossReference[] {
    return this._intenzXRefs;
  }

  set intenzXRefs(value: IntEnzCrossReference[]) {
    this._intenzXRefs = value;
  }

  get reactomeXRefs(): CrossReference[] {
    return this._reactomeXRefs;
  }

  set reactomeXRefs(value: CrossReference[]) {
    this._reactomeXRefs = value;
  }

  get rheaXRefs(): RheaCrossReference[] {
    return this._rheaXRefs;
  }

  set rheaXRefs(value: RheaCrossReference[]) {
    this._rheaXRefs = value;
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
