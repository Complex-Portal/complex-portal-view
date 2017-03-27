import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-eco-crossreferences',
  templateUrl: './eco-crossreferences.component.html',
  styleUrls: ['./eco-crossreferences.component.css']
})
export class EcoCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      const identifier = this._crossReferences[i].identifier;
      switch (identifier) {
        case ('ECO:0000353'):
          this._crossReferences[i].description = 'physical interaction evidence';
          break;
        case ('ECO:0005610'):
          this._crossReferences[i].description = 'inferred by homology';
          break;
        case ('ECO:0005544'):
          this._crossReferences[i].description = 'inferred by orthology';
          break;
        case ('ECO:0005546'):
          this._crossReferences[i].description = 'inferred by paralogy';
          break;
        case ('ECO:0005547'):
          this._crossReferences[i].description = 'inferred by curator';
          break;
        case ('ECO:0005543'):
          this._crossReferences[i].description = 'inferred from mixed species evidence';
          break;
        case ('ECO:0005542'):
          this._crossReferences[i].description = 'inferred from single species evidence';
          break;
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
}
