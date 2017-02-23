import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-go-molecular-function',
  templateUrl: 'go-molecular-function.component.html',
  styleUrls: ['go-molecular-function.component.css']
})
export class GoMolecularFunctionComponent implements OnInit {
  private _crossReferences: CrossReference[];

  constructor() {
  }

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
