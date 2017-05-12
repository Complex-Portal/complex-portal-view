import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-complex-evidence',
  templateUrl: './complex-evidence.component.html',
  styleUrls: ['./complex-evidence.component.css']
})
export class ComplexEvidenceComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _ecoXRef: CrossReference;
  private _intactXRefs: CrossReference[];


  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      const crossRef = this._crossReferences[i];
      const database = this._crossReferences[i].database;

      if (database === 'evidence ontology') {
          this._ecoXRef = crossRef;
          switch (this._ecoXRef.identifier) {
            case ('ECO:0000353'):
              this._ecoXRef.description = 'physical interaction evidence';
              break;
            case ('ECO:0005610'):
              this._ecoXRef.description = 'inferred by homology';
              break;
            case ('ECO:0005544'):
              this._ecoXRef.description = 'inferred by orthology';
              break;
            case ('ECO:0005546'):
              this._ecoXRef.description = 'inferred by paralogy';
              break;
            case ('ECO:0005547'):
              this._ecoXRef.description = 'inferred by curator';
              break;
            case ('ECO:0005543'):
              this._ecoXRef.description = 'inferred from mixed species evidence';
              break;
            case ('ECO:0005542'):
              this._ecoXRef.description = 'inferred from single species evidence';
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

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
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
}
