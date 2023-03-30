import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'cp-local-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() environmentName: string;
  @Input() version: string;

  constructor() { }

  ngOnInit() {
    $('cp-footer').foundation();
  }

}
