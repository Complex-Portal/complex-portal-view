import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})

export class TableHeaderComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  //overFlowing: TableStructureComponent['overFlowing'];
  //displayTilted: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }

  /*
set displayTitled(value: boolean) {
  this.displayTilted = this.overFlowing;
}


  isOverFlowing(): boolean {
    const tablePart = document.querySelector<HTMLElement>('.Complex-navigator');
    console.log(tablePart.scrollWidth > tablePart.offsetWidth);
    this.displayTilted = tablePart.scrollWidth > tablePart.offsetWidth;
    return tablePart.scrollWidth > tablePart.offsetWidth;
  }
 */

}
