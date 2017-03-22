import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

import * as LiteMol from 'litemol';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.pdb_base_url;

@Component({
  selector: 'app-litmol-viewer',
  templateUrl: 'litmol-viewer.component.html',
  styleUrls: ['litmol-viewer.component.css']
})
export class LitmolViewerComponent implements OnInit, OnChanges {
  private _plugin: any;
  private _selectedXRef: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._plugin) {
      if (changes['selectedXRef']) {
        this.loadMolecule();
      }
    }
  }

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
    this.plugin.clear();
    this._plugin.loadMolecule({
      id: this._selectedXRef,
      url: baseURL + '/static/entry/' + this._selectedXRef.toLowerCase() + '_updated.cif',
      format: 'cif' // default
    });
  }

  get plugin(): any {
    return this._plugin;
  }

  set plugin(value: any) {
    this._plugin = value;
  }

  get selectedXRef(): string {
    return this._selectedXRef;
  }

  @Input()
  set selectedXRef(value: string) {
    this._selectedXRef = value;
  }
}
