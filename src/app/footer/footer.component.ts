import {Component, input, OnInit} from '@angular/core';


@Component({
  selector: 'cp-local-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  environmentName = input<string>();
  version = input<string>();

  constructor() { }

  ngOnInit() {
    $('cp-footer').foundation();
  }
}
