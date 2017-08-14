import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {NotificationService} from '../../../../../shared/notification/service/notification.service';
let xlv: any;
const SvgSaver = require('svgsaver');
const xiNET = require('expose-loader?xiNET!complexviewer');
declare const $ : any;
@Component({
  selector: 'cp-complex-viewer',
  templateUrl: 'complex-viewer.component.html',
  styleUrls: ['complex-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplexViewerComponent implements AfterViewInit {
  private _complexAC: string;
  private _complexMIJSON: string;
  private _svgsaver: any;

  constructor(private notificationService: NotificationService) {
    this._svgsaver = new SvgSaver();
  }

  ngAfterViewInit() {
    $('cp-complex-viewer').foundation();
    xlv = new xiNET('networkContainer');
    xlv.readMIJSON(this._complexMIJSON, true);
    xlv.autoLayout();
  }

  featureNotAvailableYet() {
    this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
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
    const svg = document.querySelector('#networkContainer');
    this._svgsaver.asSvg(svg, this._complexAC + '.svg');
  }
}
