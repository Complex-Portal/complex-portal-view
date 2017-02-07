import { Component, OnInit } from '@angular/core';

import * as LiteMol from 'litemol'

@Component({
  selector: 'app-litmol-viewer',
  templateUrl: './litmol-viewer.component.html',
  styleUrls: ['./litmol-viewer.component.css']
})
export class LitmolViewerComponent implements OnInit {
  private _plugin : any;

  constructor() { }

  ngOnInit() {
    this._plugin = LiteMol.default.Plugin.create({
      target: '#litemol',
      viewportBackground: '#000000',
      layoutState: {
        hideControls: true,
        isExpanded: false
      },
      // Knowing how often and how people use LiteMol
      // gives us the motivation and data to futher improve it.
      //
      // This option is OFF by default!
      allowAnalytics: true
    });
    this.loadMolecule();
  }

  loadMolecule(): void {
    this._plugin.loadMolecule({
      id: '1cbs',
      url: 'https://www.ebi.ac.uk/pdbe/static/entry/' + '1cbs' + '_updated.cif',
      format: 'cif' // default
    });
  }

  get plugin(): any {
    return this._plugin;
  }

  set plugin(value: any) {
    this._plugin = value;
  }
}
