import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';

@Component({
  selector: 'cp-complex-participants',
  templateUrl: './complex-participants.component.html',
  styleUrls: ['./complex-participants.component.css']
})
export class ComplexParticipantsComponent implements OnInit {
  private _participants: Participant[];
  private _complexAC: string;
  private _complexMIJSON: string;
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
    this.sortParticipants();
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
    // TODO: maybe talk to OLS WS on some point, but it was easier to do it like this at the time. - GH issue #172
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
}
