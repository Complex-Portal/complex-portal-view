import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';
import {Category} from '../../../shared/google-analytics/types/category.enum';
import {GoogleAnalyticsService} from '../../../shared/google-analytics/service/google-analytics.service';
import * as complexviewer from 'complexviewer';

let viewer: any;
const SvgSaver = require('svgsaver');
declare const $: any;

@Component({
  selector: 'cp-complex-participants',
  templateUrl: './complex-participants.component.html',
  styleUrls: ['./complex-participants.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplexParticipantsComponent implements OnInit, AfterViewInit {
  private _participants: Participant[];
  private _complexAC: string;
  private _complexMIJSON: string;
  private _interactorChecked: boolean;
  private _colorLegendGroups: Map<string, string> = new Map<string, string>();
  private _displayedElements = 5;
  private _hasInteracted: boolean;
  private _svgsaver: any;

  annotations = {
    'MI Features': true,
    'UniprotKB': false,
    'Superfamily': false,
    'Interactor': true,
  };

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    this._svgsaver = new SvgSaver();
    this._hasInteracted = false;
  }

  ngOnInit() {
    this.sortParticipants();
  }

  ngAfterViewInit() {
    $('cp-complex-participants').foundation();
    viewer = new complexviewer.App(document.getElementById('networkContainer'));
    viewer.readMIJSON(this.complexMIJSON, true);
    viewer.autoLayout();

    // We need the timeout to avoid that gets checked and changed after because it throws an error
    setTimeout(() => this.updateColorLegend(viewer.getColorKeyJson()), 0);
  }

  private sortParticipants() {
    // TODO: Sort participants in WS - GH issue #174
    this.participants.sort(function (a, b) {
      if (a.interactorType < b.interactorType) {
        return -1;
      } else if (a.interactorType > b.interactorType) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  public getLegendURL(interactorType: string): string {
    // TODO: maybe talk to OLS WS at some point, but it was easier to do it like this at the time. - GH issue #172
    switch (interactorType) {
      case 'small molecule':
        return 'assets/images/legend/small-mol.png';
      case 'protein':
        return 'assets/images/legend/protein-blob.png';
      case 'stable complex':
        return 'assets/images/legend/complex.png';
      case 'molecule set':
        return 'assets/images/legend/int-set.png';
      case 'single stranded deoxyribonucleic acid':
      case 'double stranded deoxyribonucleic acid':
        return 'assets/images/legend/dna.png';
      case 'small nuclear rna':
      case 'small nucleolar rna':
      case 'ribosomal rna':
      case 'messenger rna':
      case 'transfer rna':
      case 'signal recognition particle rna':
      case 'ribonucleic acid':
        return 'assets/images/legend/rna.png';
    }
  }

  public getConvertedStochiometry(stochiometry: string): string {
    // TODO: WS should send Stochiometry in right format already - GH issue #173
    return stochiometry.split(',')[0].split(':')[1].trim();
  }

  onChangeAnnotation(value: string) {
    const display = !this.annotations[value];

    this.annotations[value] = display;
    this.updateColorLegend(viewer.showAnnotations(value, display));

    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ChangeAnno, this._complexAC);
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_SelectedAnno, value);
  }

  private updateColorLegend(legendData: { [p: string]: ColorLegend[] }) {
    this.colorLegendGroups.clear();
    for (const group of Object.keys(legendData)) {
      if (group === 'Complex') {
        for (const legendDatum of legendData[group]) {
          // Because we only display interactors and complexes colors, we now that are certain.
          // If features are shown in the feature follow the same way that IntAct Portal
          this.colorLegendGroups.set(legendDatum.name.replace(/.*_/, ''), legendDatum.certain.color)
          console.log(legendDatum.name.replace(/.*_/, '').toUpperCase(), legendDatum.certain.color);
        }
      }
      if (group === 'Interactor') {
        for (const legendDatum of legendData[group]) {
          // Because we only display interactors and complexes colors, we now that are certain.
          // If features are shown in the feature follow the same way that IntAct Portal
          this.colorLegendGroups.set(legendDatum.name.toUpperCase(), legendDatum.certain.color)
          console.log(legendDatum.name.toUpperCase(), legendDatum.certain.color);
        }
      }
    }
  }


  onReset(): void {
    viewer.collapseAll();
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Reset, this._complexAC);
  }

  onExpandAll(): void {
    viewer.expandAll();
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExpandAll, this._complexAC);
  }

  public resetLayout() {
    viewer.autoLayout();
  }

  public downloadAsSVG(): void {
    const svg = document.querySelector('#networkContainer');
    this._svgsaver.asSvg(svg, this._complexAC + '.svg');
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExportSVG, this._complexAC);
  }

  interactedWithViewer(): void {
    if (!this._hasInteracted) {
      this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Interaction, this._complexAC);
      this._hasInteracted = true;
    }
  }

  get participants(): Participant[] {
    return this._participants;
  }

  @Input()
  set participants(value: Participant[]) {
    this._participants = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
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


  get interactorChecked(): boolean {
    return this._interactorChecked;
  }

  set interactorChecked(value: boolean) {
    this._interactorChecked = value;
  }


  get colorLegendGroups(): Map<string, string> {
    return this._colorLegendGroups;
  }

  set colorLegendGroups(value: Map<string, string>) {
    this._colorLegendGroups = value;
  }
}

// These classes are needed to map the json coming from the viewer to the object
class ColorLegend {
  public name: string;
  public certain?: Color;
  public uncertain?: Color;

  constructor(name: string, certain?: Color, uncertain?: Color) {
    this.name = name;
    this.certain = certain;
    this.uncertain = uncertain;
  }
}

class Color {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }
}
