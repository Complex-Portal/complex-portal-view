import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';
import {Category} from '../../../shared/google-analytics/types/category.enum';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import * as complexviewer from 'complexviewer';
import {NodeShape} from '../shared/visualisation/node-diagram/node-diagram.component';
import {TextEncoder} from 'util';

let viewer: any;

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

  annotations = {
    'MI Features': true,
    'UniprotKB': false,
    'Superfamily': false,
    'Interactor': true,
  };

  constructor(private googleAnalyticsService: AnalyticsService) {
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
    for (const key of Object.keys(this.annotations)) {
      viewer.showAnnotations(key, this.annotations[key]);
    }
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

  public getLegendShape(interactorType: string): NodeShape {
    // TODO: maybe talk to OLS WS at some point, but it was easier to do it like this at the time. - GH issue #172
    switch (interactorType) {
      case 'small molecule':
        return NodeShape.TRIANGLE;
      case 'protein':
      case 'peptide':
        return NodeShape.ELLIPSE;
      case 'stable complex':
        return NodeShape.HEXAGON;
      case 'molecule set':
        return NodeShape.OCTAGON;
      case 'single stranded deoxyribonucleic acid':
      case 'double stranded deoxyribonucleic acid':
        return NodeShape.PARALLELOGRAM;
      case 'small nuclear rna':
      case 'small nucleolar rna':
      case 'ribosomal rna':
      case 'messenger rna':
      case 'transfer rna':
      case 'signal recognition particle rna':
      case 'ribonucleic acid':
        return NodeShape.DIAMOND;
    }
  }

  public getLegendColor(participant: Participant): string {
    let color;
    // TODO Talk to Colin to try a simple way to retrieve the colors .e.g. only by identifier
    if ((participant.interactorType === 'protein' || participant.interactorType === 'peptide')
      && !participant.identifier.includes('-PRO') && participant.name) {
      color = this.colorLegendGroups.get(participant.name.toUpperCase());
    } else {
      color = this.colorLegendGroups.get(participant.identifier.toUpperCase());
    }
    if (!color) {
      color = '#ffffff';
    }
    return color;
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
          this.colorLegendGroups.set(legendDatum.name.replace(/.*_/, ''), legendDatum.certain.color);
        }
      }
      if (group === 'Interactor') {
        for (const legendDatum of legendData[group]) {
          // Because we only display interactors and complexes colors, we now that are certain.
          // If features are shown in the feature follow the same way that IntAct Portal
          this.colorLegendGroups.set(legendDatum.name.toUpperCase(), legendDatum.certain.color);
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

  public downloadAsSVG() {
    const svgXML = viewer.getSVG();
    this.download(svgXML, 'application/svg', `${this.complexAC}.svg`);
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

  download(content, contentType, fileName) {
    const oldToNewTypes = {
      'application/svg': 'image/svg+xml;charset=utf-8',
      'plain/text': 'plain/text;charset=utf-8',
    };
    const newContentType = oldToNewTypes[contentType] || contentType;

    function dataURItoBlob(binary) {
      let array = [];
      let te;

      try {
        // @ts-ignore
        te = new TextEncoder('utf-8');
      } catch (e) {
        te = undefined;
      }

      if (te) {
        array = te.encode(binary); // html5 encoding api way
      } else {
        // https://stackoverflow.com/a/18729931/368214
        // fixes unicode bug
        for (let i = 0; i < binary.length; i++) {
          let charcode = binary.charCodeAt(i);
          if (charcode < 0x80) {
            array.push(charcode);
          } else if (charcode < 0x800) {
            array.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
          } else if (charcode < 0xd800 || charcode >= 0xe000) {
            array.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
          } else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10) |
              (binary.charCodeAt(i) & 0x3ff));
            array.push(0xf0 | (charcode >> 18),
              0x80 | ((charcode >> 12) & 0x3f),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
          }
        }
      }

      return new Blob([new Uint8Array(array)], {
        type: newContentType
      });
    }

    let blob = dataURItoBlob(content);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      // Give filename you wish to download
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href); // clear up url reference to blob so it can be g.c.'ed
    }

    blob = null;
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
