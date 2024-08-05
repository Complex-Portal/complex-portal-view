import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {ComplexDetails} from '../../shared/model/complex-details/complex-details.model';

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
        switch (this._ecoXRef.identifier) {
          case ('ECO:0000353'):
            this._ecoXRef.description = 'physical interaction evidence';
            this._flaskSymbol = 'E'; // Full
            break;
          case ('ECO:0005610'):
            this._ecoXRef.description = 'inferred by homology';
            this._flaskSymbol = 'C'; // 40%
            break;
          case ('ECO:0005544'):
            this._ecoXRef.description = 'inferred by orthology';
            this._flaskSymbol = 'C'; // 40%
            break;
          case ('ECO:0005546'):
            this._ecoXRef.description = 'inferred by paralogy';
            this._flaskSymbol = 'C'; // 40%
            break;
          case ('ECO:0005547'):
            this._ecoXRef.description = 'inferred by curator';
            this._flaskSymbol = 'B'; // Empty
            break;
          case ('ECO:0005543'):
            this._ecoXRef.description = 'inferred from mixed species evidence';
            this._flaskSymbol = 'E'; // Full
            break;
          case ('ECO:0005542'):
            this._ecoXRef.description = 'inferred from single species evidence';
            this._flaskSymbol = 'E'; // Full
            break;
          case ('ECO:0007653'):
            this._ecoXRef.description = 'machine-learning prediction';
            this._flaskSymbol = '';
            // TODO remove this setter once the API support predicted field
            this.complex.predicted = true;
            break;
          case ('ECO:0008006'):
            this._ecoXRef.description = 'deep-learning prediction';
            this._flaskSymbol = '';
            // TODO remove this setter once the API support predicted field
            this.complex.predicted = true;
            break;
        }
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
