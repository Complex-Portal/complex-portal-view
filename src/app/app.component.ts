import {Component, OnInit} from '@angular/core';
import * as Logger from 'js-logger';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor() {
    Logger.useDefaults();
    Logger.setLevel(Logger.WARN);
    Logger.debug("Donut machine is out of pink ones");  // Not a peep.
    Logger.warn("Asteroid detected!");
  }
}
