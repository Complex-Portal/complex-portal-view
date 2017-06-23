import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

const MiCircle = require('mi-chord');
const MIModel = require('mi-model');

@Component({
  selector: 'cp-chord-diagram',
  templateUrl: './chord-diagram.component.html',
  styleUrls: ['./chord-diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChordDiagramComponent implements OnInit {
  private _complexMIJSON: string;


  constructor() {
  }

  ngOnInit() {
      console.log(this._complexMIJSON);

    let circle;
    new MIModel(this._complexMIJSON).load().then(function (m) {
      console.log(m);
      circle = new MiCircle('#target', m);
      // console.log('circle', circle);
    });
  }

  @Input()
  set complexMIJSON(value: any) {
    this._complexMIJSON = value;
  }
}
