import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-assemblies',
  templateUrl: './assemblies.component.html',
  styleUrls: ['./assemblies.component.scss']
})
export class AssembliesComponent implements OnInit {
  private _assemblies: string[];

  constructor() {
  }

  ngOnInit() {
  }

  get assemblies(): string[] {
    return this._assemblies;
  }

  @Input()
  set assemblies(value: string[]) {
    this._assemblies = value;
  }
}
