import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-disease-description',
  templateUrl: './disease-description.component.html',
  styleUrls: ['./disease-description.component.css']
})
export class DiseaseDescriptionComponent implements OnInit {
  private _diseaseDescriptions: string[];

  constructor() { }

  ngOnInit() {
  }


  get diseaseDescriptions(): string[] {
    return this._diseaseDescriptions;
  }

  @Input()
  set diseaseDescriptions(value: string[]) {
    this._diseaseDescriptions = value;
  }
}
