import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-pdb-crossreferences',
  templateUrl: './pdb-crossreferences.component.html',
  styleUrls: ['./pdb-crossreferences.component.css']
})
export class PdbCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _selectedXRef: string;

  constructor() {
  }

  ngOnInit() {
    this._selectedXRef = this._crossReferences[0].identifier;
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  public selectXRef(id: string): void {
    this._selectedXRef = id;
  }

  get selectedXRef(): string {
    return this._selectedXRef;
  }

  set selectedXRef(value: string) {
    this._selectedXRef = value;
  }
}
