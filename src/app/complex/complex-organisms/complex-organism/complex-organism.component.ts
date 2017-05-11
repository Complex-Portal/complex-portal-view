import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cp-complex-organism',
  templateUrl: './complex-organism.component.html',
  styleUrls: ['./complex-organism.component.css']
})
export class ComplexOrganismComponent implements OnInit {
  private _name: string;
  private _symbol: string;
  private _count: string;

  constructor() {
  }

  ngOnInit() {
  }

  get name(): string {
    return this._name;
  }

  @Input()
  set name(value: string) {
    this._name = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  @Input()
  set symbol(value: string) {
    this._symbol = value;
  }

  get count(): string {
    return this._count;
  }

  @Input()
  set count(value: string) {
    this._count = value;
  }
}
