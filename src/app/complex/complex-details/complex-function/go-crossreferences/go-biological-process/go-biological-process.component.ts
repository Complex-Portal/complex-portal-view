import {Component, OnInit, Input} from '@angular/core';
import {CrossReference} from "../../../../shared/model/complex-details/cross-reference.model";

@Component({
  selector: 'app-go-biological-process',
  templateUrl: 'go-biological-process.component.html',
  styleUrls: ['go-biological-process.component.css']
})
export class GoBiologicalProcessComponent implements OnInit {
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
