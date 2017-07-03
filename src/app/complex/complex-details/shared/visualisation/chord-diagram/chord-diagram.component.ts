import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';

const MIModel = require('mi-model');
const MiCircle = require('mi-chord');

@Component({
  selector: 'cp-chord-diagram',
  templateUrl: './chord-diagram.component.html',
  styleUrls: ['./chord-diagram.component.css'],
})
export class ChordDiagramComponent implements OnInit, AfterViewInit, OnDestroy {
  private _complexMIJSON: string;
  private mimodel : any;
  private micircle : any;

  constructor() {
    this.mimodel = MIModel;
    this.micircle = MiCircle;
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    let circle;
    let contx = this;
    console.log(this._complexMIJSON);
    new this.mimodel(this._complexMIJSON).load().then(function (m) {
      circle = new contx.micircle('#target', m);
      // console.log('circle', circle);
    });
  }

  ngOnDestroy(): void {
    // document.getElementById('#target').innerHTML = "";

  }

  @Input()
  set complexMIJSON(value: any) {
    this._complexMIJSON = value;
  }
}
