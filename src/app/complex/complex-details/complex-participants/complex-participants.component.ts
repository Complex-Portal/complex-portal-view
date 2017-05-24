import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';
import {SectionService} from '../shared/service/section/section.service';

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

  constructor(private sectionService: SectionService) {
  }

  ngOnInit() {
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
    switch (interactorType) {
      case 'small molecule':
        return 'assets/images/legend/small-mol.png';
      case 'protein':
        return 'assets/images/legend/protein-blob.png';
      case 'single stranded deoxyribonucleic acid':
        return 'assets/images/legend/dna.png';
    }
  }

  public getConvertedStochiometry(stochiometry: string): string {
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
