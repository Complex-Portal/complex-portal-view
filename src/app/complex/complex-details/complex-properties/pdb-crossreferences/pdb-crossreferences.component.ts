import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-pdb-crossreferences',
  templateUrl: './pdb-crossreferences.component.html',
  styleUrls: ['./pdb-crossreferences.component.scss']
})
export class PdbCrossreferencesComponent implements OnInit {

  private static IDENTITY_MI = 'MI:0356';

  private _crossReferences: CrossReference[];
  private _selectedXRef: string;
  private _isDataLoaded = false;
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
    // Xrefs with identity qualifier should be displayed first
    this._crossReferences.sort((xrefA, xrefB) => {
      if (xrefA.qualifierMI === xrefB.qualifierMI) {
        return 0;
      } else if (xrefA.qualifierMI === PdbCrossreferencesComponent.IDENTITY_MI) {
        return -1;
      } else if (xrefB.qualifierMI === PdbCrossreferencesComponent.IDENTITY_MI) {
        return 1;
      } else {
        return 0;
      }
    });
    this.selectFirstXref();
  }

  private selectFirstXref() {
    if (this._crossReferences[0].identifier) {
      this._selectedXRef = this._crossReferences[0].identifier;
      this._isDataLoaded = true;
    }
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

  get isDataLoaded(): boolean {
    return this._isDataLoaded;
  }

  set isDataLoaded(value: boolean) {
    this._isDataLoaded = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
