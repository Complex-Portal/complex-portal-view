import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {NotificationService} from '../../../../../shared/notification/service/notification.service';
import {GoogleAnalyticsService} from '../../../../../shared/google-analytics/service/google-analytics.service';
import {Category} from '../../../../../shared/google-analytics/category.enum';
let xlv: any;
const SvgSaver = require('svgsaver');
const xiNET = require('expose-loader?xiNET!complexviewer');
declare const $: any;

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
  private _hasInteracted: boolean;

  constructor(private notificationService: NotificationService, private googleAnalyticsService: GoogleAnalyticsService) {
    this._svgsaver = new SvgSaver();
    this._hasInteracted = false;
  }

  ngAfterViewInit() {
    $('cp-complex-viewer').foundation();
    xlv = new xiNET('networkContainer');
    xlv.readMIJSON(this._complexMIJSON, true);
    xlv.autoLayout();
  }

  onChangeAnnotation(value: string): void {
    xlv.setAnnotations(value);
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ChangeAnno, this._complexAC);
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_SelectedAnno, value);
  }

  onReset(): void {
    xlv.reset();
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Reset, this._complexAC);
  }

  onExpandAll(): void {
    xlv.expandAll();
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExpandAll, this._complexAC);
  }

  interactedWithViewer(): void {
    if (!this._hasInteracted) {
      this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Interaction, this._complexAC);
      this._hasInteracted = true;
    }
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
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExportSVG, this._complexAC);
  }
}
