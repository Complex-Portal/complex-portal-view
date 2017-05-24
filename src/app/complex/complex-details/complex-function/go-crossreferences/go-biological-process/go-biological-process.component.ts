import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-go-biological-process',
  templateUrl: 'go-biological-process.component.html',
  styleUrls: ['go-biological-process.component.css']
})
export class GoBiologicalProcessComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _displayedElements = 5;

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

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
