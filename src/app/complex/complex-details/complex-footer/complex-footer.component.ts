import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-complex-footer',
  templateUrl: './complex-footer.component.html',
  styleUrls: ['./complex-footer.component.css']
})
export class ComplexFooterComponent implements OnInit {
  @Input()
  institute: string;
  @Input()
  comment: string;
  @Input()
  predicted = false;

  constructor() {
  }

  ngOnInit() {
  }

}
