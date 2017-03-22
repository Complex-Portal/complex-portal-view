import {Component, OnInit, Input} from '@angular/core';
import {Participant} from '../../shared/model/complex-details/participant.model';

@Component({
  selector: 'app-complex-participants',
  templateUrl: './complex-participants.component.html',
  styleUrls: ['./complex-participants.component.css']
})
export class ComplexParticipantsComponent implements OnInit {
  private _participants: Participant[];
  private _displayedElements = 5;

  constructor() {
  }

  ngOnInit() {
  }

  getLegendURL(interactorType: string): string {
    switch (interactorType) {
      case 'small molecule':
        return 'assets/images/legend/small-mol.png';
      case 'protein':
        return 'assets/images/legend/protein-blob.png';
      case 'single stranded deoxyribonucleic acid':
        return 'assets/images/legend/dna.png';
    }
  }

  getConvertedStochiometry(stochiometry : string) : string {
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
}
