import {Component, OnInit, Input} from '@angular/core';
let xlv: any;
let xiNET = require('expose?xiNET!complexviewer');

@Component({
  selector: 'app-complex-viewer',
  templateUrl: './complex-viewer.component.html',
  styleUrls: ['./complex-viewer.component.css']
})
export class ComplexViewerComponent implements OnInit {
  private _complexMIJSON: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    xlv = new xiNET('networkContainer');
    xlv.readMIJSON(this._complexMIJSON, true);
    xlv.autoLayout();
  }

  onChangeAnnotation(value : string): void {
    xlv.setAnnotations(value);
  }

  get complexMIJSON(): string {
    return this._complexMIJSON;
  }
  @Input()
  set complexMIJSON(value: string) {
    this._complexMIJSON = value;
  }
}
