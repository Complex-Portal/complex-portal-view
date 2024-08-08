import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {ComplexDetails} from '../../shared/model/complex-details/complex-details.model';
import {ecoCodeName, ecoCodeSymbol} from '../../complex-portal-utils';

@Component({
  selector: 'cp-complex-evidence',
  templateUrl: './complex-evidence.component.html',
  styleUrls: ['./complex-evidence.component.css']
})
export class ComplexEvidenceComponent implements OnInit {

  private _ecoXRef: CrossReference;
  private _intactXRefs: CrossReference[];
  @Input()
  complex: ComplexDetails;
  private _flaskSymbol: string;


  constructor() {
  }

  ngOnInit() {
    this.findXRefs();
  }

  /**
   * TODO: Enrich the object from the response and may introduce a level for the flask symbol.
   * Currently we do not store any further information in the evidence XRef, this is why we need to extend the object here.
   * Also we add the flask symbol, which is for the icon. (Similar to the organism view)
   */
  private findXRefs(): void {
    for (let i = 0; i < this.complex.crossReferences.length; i++) {
      const crossRef = this.complex.crossReferences[i];
      const database = this.complex.crossReferences[i].database;

      if (database === 'evidence ontology') {
        this._ecoXRef = crossRef;
        this._ecoXRef.description = ecoCodeName(this._ecoXRef.identifier);
        this._flaskSymbol = ecoCodeSymbol(this._ecoXRef.identifier);
      }
      if (database === 'intact') {
        if (this._intactXRefs === undefined) {
          this._intactXRefs = [];
        }
        this._intactXRefs.push(crossRef);
      }
    }
  }


  get ecoXRef(): CrossReference {
    return this._ecoXRef;
  }

  set ecoXRef(value: CrossReference) {
    this._ecoXRef = value;
  }

  get intactXRefs(): CrossReference[] {
    return this._intactXRefs;
  }

  set intactXRefs(value: CrossReference[]) {
    this._intactXRefs = value;
  }

  get flaskSymbol(): string {
    return this._flaskSymbol;
  }
}
