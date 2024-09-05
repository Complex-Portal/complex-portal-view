import {Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'cp-complex-footer',
  templateUrl: './complex-footer.component.html',
  styleUrls: ['./complex-footer.component.css']
})
export class ComplexFooterComponent implements OnInit {
  institute = input<string>();
  comment = input<string>();
  predicted = input(false);

  constructor() {
  }

  ngOnInit() {
  }
}
