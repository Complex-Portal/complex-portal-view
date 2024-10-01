import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';

@Component({
  selector: 'cp-go-crossreferences',
  templateUrl: './go-crossreferences.component.html',
  styleUrls: ['./go-crossreferences.component.scss']
})
export class GoCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _molecularFunctions: CrossReference[];
  private _biologicalProcess: CrossReference[];

  constructor() {
  }

  ngOnInit() {
    this.findXRefs();
  }

  private findXRefs() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      const crossRef = this.crossReferences[i];
      const qualifier = this.crossReferences[i].qualifier;

      if (qualifier === 'biological process') {
        if (this._biologicalProcess === undefined) {
          this._biologicalProcess = [];
        }
        this._biologicalProcess.push(crossRef);
      }

      if (qualifier === 'molecular function') {
        if (this._molecularFunctions === undefined) {
          this._molecularFunctions = [];
        }
        this._molecularFunctions.push(crossRef);
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

  get molecularFunctions(): CrossReference[] {
    return this._molecularFunctions;
  }

  set molecularFunctions(value: CrossReference[]) {
    this._molecularFunctions = value;
  }

  get biologicalProcess(): CrossReference[] {
    return this._biologicalProcess;
  }

  set biologicalProcess(value: CrossReference[]) {
    this._biologicalProcess = value;
  }
}
