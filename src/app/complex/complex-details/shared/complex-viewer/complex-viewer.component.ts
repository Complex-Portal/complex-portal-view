import {Component, OnInit, Input} from '@angular/core';
let xlv: any;
let SvgSaver = require('svgsaver');
let xiNET = require('expose-loader?xiNET!complexviewer');

@Component({
  selector: 'app-complex-viewer',
  templateUrl: './complex-viewer.component.html',
  styleUrls: ['./complex-viewer.component.css']
})
export class ComplexViewerComponent implements OnInit {
  private _complexAC: string;
  private _complexMIJSON: string;
  private _svgsaver: any;

  constructor() {
    this._svgsaver = new SvgSaver();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    xlv = new xiNET('networkContainer');
    xlv.readMIJSON(this._complexMIJSON, true);
    xlv.autoLayout();
  }

  onChangeAnnotation(value: string): void {
    xlv.setAnnotations(value);
  }

  onReset(): void {
    xlv.reset();
  }

  onExpandAll(): void {
    xlv.expandAll();
  }

  get complexAC(): string {
    return this._complexAC;
  }

  @Input()
  set complexAC(value: string) {
    this._complexAC = value;
  }

  get complexMIJSON(): string {
    return this._complexMIJSON;
  }

  @Input()
  set complexMIJSON(value: string) {
    this._complexMIJSON = value;
  }

  public downloadAsSVG(): void {
    let svg = document.querySelector('#networkContainer');
    this._svgsaver.asSvg(svg, this._complexAC + ".svg");
  }
}
