import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-participant-stochiometry',
  templateUrl: './participant-stochiometry.component.html',
  styleUrls: ['./participant-stochiometry.component.css']
})
export class ParticipantStochiometryComponent implements OnInit {
  private _stochiometry: string;
  private _customizedStochiometry: string;

  constructor() { }

  ngOnInit() {
    if (this._stochiometry) {
      this.customizedStochiometry = this._stochiometry.split(',')[0].split(':')[1].trim();
    }
  }

  get stochiometry(): string {
    return this._stochiometry;
  }

  @Input()
  set stochiometry(value: string) {
    this._stochiometry = value;
  }

  get customizedStochiometry(): string {
    return this._customizedStochiometry;
  }

  set customizedStochiometry(value: string) {
    this._customizedStochiometry = value;
  }
}
