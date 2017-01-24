import {Component, OnInit, Input} from '@angular/core';
import {Participant} from "../../../shared/model/complex-details/participant.model";

@Component({
  selector: 'app-participant-description',
  templateUrl: './participant-description.component.html',
  styleUrls: ['./participant-description.component.css']
})
export class ParticipantDescriptionComponent implements OnInit {

  private _participant: Participant;

  constructor() { }

  ngOnInit() {
  }


  get participant(): Participant {
    return this._participant;
  }

  @Input()
  set participant(value: Participant) {
    this._participant = value;
  }
}
