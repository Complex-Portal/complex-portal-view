import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'app-go-celluar-crossreference',
  templateUrl: './go-celluar-crossreference.component.html',
  styleUrls: ['./go-celluar-crossreference.component.css']
})
export class GoCelluarCrossreferenceComponent implements OnInit {
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
