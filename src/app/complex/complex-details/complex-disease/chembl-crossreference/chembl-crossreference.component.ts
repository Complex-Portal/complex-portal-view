import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-chembl-crossreference',
  templateUrl: './chembl-crossreference.component.html',
  styleUrls: ['./chembl-crossreference.component.css']
})
export class ChemblCrossreferenceComponent implements OnInit {
  private _crossReferences: CrossReference[];

  constructor() { }

  ngOnInit() {
  }


  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }
}
