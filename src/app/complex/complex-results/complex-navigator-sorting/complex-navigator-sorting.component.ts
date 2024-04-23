import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cp-complex-navigator-sorting',
  templateUrl: './complex-navigator-sorting.component.html',
  styleUrls: ['./complex-navigator-sorting.component.css']
})
export class ComplexNavigatorSortingComponent implements OnInit {
  @Output() interactorsSortingChange = new EventEmitter<string>();
  @Input() interactorsSorting: string;

  constructor() {
  }

  ngOnInit(): void {
    this.setInteractorsSorting('Occurrence');
  }

  setInteractorsSorting(typeOfSorting: string) {
    this.interactorsSortingChange.emit(typeOfSorting);
  }
}
