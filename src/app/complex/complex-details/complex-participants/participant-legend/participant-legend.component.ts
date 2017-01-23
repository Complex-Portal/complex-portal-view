import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-participant-legend',
  templateUrl: './participant-legend.component.html',
  styleUrls: ['./participant-legend.component.css']
})
export class ParticipantLegendComponent implements OnInit {

  @Input() interactorType: string;
  private _legendElementURL: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.interactorType.toLocaleLowerCase()) {
      case 'small molecule':
        this.legendElementURL = 'assets/images/legend/small-mol.png';
        break;
      case 'protein':
        this.legendElementURL = 'assets/images/legend/protein-blob.png';
        break;
      case 'single stranded deoxyribonucleic acid':
        this.legendElementURL = 'assets/images/legend/dna.png';
        break;
    }
  }
  get legendElementURL(): string {
    return this._legendElementURL;
  }

  set legendElementURL(value: string) {
    this._legendElementURL = value;
  }
}
