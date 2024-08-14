import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation, input } from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';
import {Category} from '../../../shared/google-analytics/types/category.enum';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {App as ComplexViewer} from 'complexviewer';
import {ComplexPortalService} from '../../shared/service/complex-portal.service';

let viewer: any;

export class ComplexParticipant {
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  stochiometry: string;
  bioRole: string;
  interactorType: string;
  participants: ComplexParticipant[];
  expanded: boolean;
}

@Component({
  selector: 'cp-complex-participants',
  templateUrl: './complex-participants.component.html',
  styleUrls: ['./complex-participants.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplexParticipantsComponent implements OnInit, AfterViewInit {

  MIN_DISPLAYED_ELEMENTS = 5;

  private _participants: Participant[];
  private _complexAC: string;
  private _complexMIJSON: any;
  private _interactorChecked: boolean;
  private _colorLegendGroups: Map<string, string> = new Map<string, string>();
  private _displayedElements = this.MIN_DISPLAYED_ELEMENTS;
  private _hasInteracted: boolean;

  participantsWithSubcomponents: ComplexParticipant[];

  annotations = {
    'MI Features': true,
    'UniprotKB': false,
    'Superfamily': false,
    'Interactor': true,
  };

  constructor(private googleAnalyticsService: AnalyticsService, private complexPortalService: ComplexPortalService) {
    this._hasInteracted = false;
  }

  ngOnInit() {
    this.participantsWithSubcomponents = [];
    this.loadParticipants(this.participants, this.participantsWithSubcomponents);
  }

  ngAfterViewInit() {
    $('cp-complex-participants').foundation();
    viewer = new ComplexViewer(document.getElementById('networkContainer'));
    viewer.readMIJSON(this.complexMIJSON, true);
    viewer.autoLayout();
    for (const key of Object.keys(this.annotations)) {
      viewer.showAnnotations(key, this.annotations[key]);
    }
    // We need the timeout to avoid that gets checked and changed after because it throws an error
    setTimeout(() => this.updateColorLegend(viewer.getColorKeyJson()), 0);
  }

  private sortParticipants(participants: ComplexParticipant[]) {
    // TODO: Sort participants in WS - GH issue #174
    participants.sort(function (a, b) {
      if (a.interactorType < b.interactorType) {
        return -1;
      } else if (a.interactorType > b.interactorType) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  private loadParticipants(participants: Participant[], complexParticipants: ComplexParticipant[]) {
    // First, we add the complex participants to complexParticipants
    for (const participant of participants) {
      complexParticipants.push(this.createComplexParticipant(participant));
    }

    // And we sort them
    this.sortParticipants(complexParticipants);

    // Then, for each participant, if they are a subcomplex, we load the participants of the subcomplex
    for (const complexParticipant of complexParticipants) {
      if (complexParticipant.interactorType === 'stable complex') {
        this.complexPortalService.getComplexAc(complexParticipant.identifier)
          .subscribe(complex => this.loadParticipants(complex.participants, complexParticipant.participants));
      }
    }
  }

  private createComplexParticipant(participant: Participant): ComplexParticipant {
    return {
      identifier: participant.identifier,
      identifierLink: participant.identifierLink,
      name: participant.name,
      description: participant.description,
      stochiometry: participant.stochiometry,
      bioRole: participant.bioRole,
      interactorType: participant.interactorType,
      participants: [],
      expanded: false,
    };
  }

  onChangeAnnotation(value: string) {
    const display = !this.annotations[value];

    this.annotations[value] = display;
    this.updateColorLegend(viewer.showAnnotations(value, display));

    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ChangeAnno, this._complexAC);
    this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_SelectedAnno, value);
  }

  private updateColorLegend(legendData: Legend) {
    this.colorLegendGroups.clear();
    // Because we only display interactors and complexes colors, we now that are certain.
    // If features are shown in the feature follow the same way that IntAct Portal
    legendData.Complex?.forEach(complex => this.colorLegendGroups.set(complex.name.replace(/complex portal_/, ''), complex.certain.color));
    // Because we only display interactors and complexes colors, we now that are certain.
    // If features are shown in the feature follow the same way that IntAct Portal
    legendData.Interactor?.forEach(interactor => this.colorLegendGroups.set(interactor.name.toUpperCase(), interactor.certain.color));
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


    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    // Give filename you wish to download
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(a.href); // clear up url reference to blob so it can be g.c.'ed

    blob = null;
  }
}


interface Legend {
  Complex?: ColorLegend[];
  Interactor?: ColorLegend[];
  'MI Features'?: ColorLegend[];

  [key: string]: ColorLegend[] | undefined;
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
