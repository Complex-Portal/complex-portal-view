import {Component, OnInit, AfterViewInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
      $('app-tile-menu').foundation();
  }

}
