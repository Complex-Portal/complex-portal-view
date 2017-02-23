import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ligands',
  templateUrl: './ligands.component.html',
  styleUrls: ['./ligands.component.css']
})
export class LigandsComponent implements OnInit {
  private _ligands: string[];

  constructor() {
  }

  ngOnInit() {
  }

  get ligands(): string[] {
    return this._ligands;
  }

  @Input()
  set ligands(value: string[]) {
    this._ligands = value;
  }
}
