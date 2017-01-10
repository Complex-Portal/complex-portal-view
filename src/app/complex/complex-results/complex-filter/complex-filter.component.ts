import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Facets} from "../../shared/model/complex-results/facets.model";

@Component({
  selector: 'app-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  private _facets: Facets;
  private _spicesFilter: string[];
  private _bioRoleFilter: string[];
  private _interactorTypeFilter: string[];

  @Output() onSpicesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onBiologicalRoleFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTyoeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();


  constructor() {
  }

  ngOnInit() {
    this.spicesFilter = [];
    this.bioRoleFilter = [];
    this.interactorTypeFilter = [];
  }

  public changeSpeciesFilter(filter: string, status: boolean) {
    if (status) {
      this.spicesFilter.push(filter)
    } else {
      this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
    }
    this.onSpicesFilterChanged.emit(this.spicesFilter);
    console.log(this.spicesFilter);
  }

  public changeBiologicalRoleFilter(filter: string, status: boolean) {
    if (status) {
      this.bioRoleFilter.push(filter)
    } else {
      this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
    console.log(this.bioRoleFilter);
  }

  public changeInteractorTyoeFilter(filter: string, status: boolean) {
    if (status) {
      this.interactorTypeFilter.push(filter)
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
    }
    this.onInteractorTyoeFilterChanged.emit(this.interactorTypeFilter);
    console.log(this.interactorTypeFilter);
  }

  get facets(): Facets {
    return this._facets;
  }

  @Input()
  set facets(value: Facets) {
    this._facets = value;
  }

  get spicesFilter(): string[] {
    return this._spicesFilter;
  }

  @Input()
  set spicesFilter(value: string[]) {
    this._spicesFilter = value;
  }

  get bioRoleFilter(): string[] {
    return this._bioRoleFilter;
  }

  @Input()
  set bioRoleFilter(value: string[]) {
    this._bioRoleFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  @Input()
  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }
}
