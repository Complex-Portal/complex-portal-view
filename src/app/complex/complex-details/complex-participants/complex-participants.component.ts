import {Component, OnInit, Input} from '@angular/core';
import {Participant} from "../../shared/model/complex-details/participant.model";

@Component({
  selector: 'app-complex-participants',
  templateUrl: './complex-participants.component.html',
  styleUrls: ['./complex-participants.component.css']
})
export class ComplexParticipantsComponent implements OnInit {
  private _participants: Participant[];

  constructor() { }

  ngOnInit() {
  }

  get participants(): Participant[] {
    return this._participants;
  }

  @Input()
  set participants(value: Participant[]) {
    this._participants = value;
  }
}