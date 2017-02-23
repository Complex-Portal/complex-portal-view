import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-systematic-name',
  templateUrl: './systematic-name.component.html',
  styleUrls: ['./systematic-name.component.css']
})
export class SystematicNameComponent implements OnInit {
  private _systematicName: string[];

  constructor() {
  }

  ngOnInit() {
  }

  get systematicName(): string[] {
    return this._systematicName;
  }

  @Input()
  set systematicName(value: string[]) {
    this._systematicName = value;
  }
}
