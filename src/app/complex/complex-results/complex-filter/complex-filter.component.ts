import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';

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
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  public changeSpeciesFilter(filter: string, status: boolean) {
    if (status) {
      this.spicesFilter.push(filter)
    } else {
      this.spicesFilter.splice(this.spicesFilter.indexOf(filter), 1);
    }
    this.onSpicesFilterChanged.emit(this.spicesFilter);
  }

  public changeBiologicalRoleFilter(filter: string, status: boolean) {
    if (status) {
      this.bioRoleFilter.push(filter)
    } else {
      this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
  }

  public changeInteractorTyoeFilter(filter: string, status: boolean) {
    if (status) {
      this.interactorTypeFilter.push(filter)
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
    }
    this.onInteractorTyoeFilterChanged.emit(this.interactorTypeFilter);
  }

  public resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }

  public anyFiltersSelected() {
    return !!(this._spicesFilter.length !== 0 || this._bioRoleFilter.length !== 0 || this._interactorTypeFilter.length !== 0);
  }

  public isSelected(elmement: string, filter: string[]): boolean {
    return filter.indexOf(elmement) !== -1;
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
