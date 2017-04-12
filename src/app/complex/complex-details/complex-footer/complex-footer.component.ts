import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cp-complex-footer',
  templateUrl: './complex-footer.component.html',
  styleUrls: ['./complex-footer.component.css']
})
export class ComplexFooterComponent implements OnInit {
  private _institute;
  private _comment;

  constructor() { }

  ngOnInit() {
  }


  get institute() {
    return this._institute;
  }

  @Input()
  set institute(value) {
    this._institute = value;
  }

  get comment() {
    return this._comment;
  }

  @Input()
  set comment(value) {
    this._comment = value;
  }
}
