import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }

}
