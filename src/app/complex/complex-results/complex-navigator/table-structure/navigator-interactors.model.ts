import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';
import {Complex} from '../../../shared/model/complex-results/complex.model';
import {ComponentWithStoichiometry, findInteractorInComplex} from './table-interactor-column/complex-navigator-utils';

export interface Range {
  value: string;
  start: number;
  length: number;
}

export class NavigatorInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  timesAppearing: number;
  indexAppearing: number;

  constructor(interactor: Interactor, isSubComplex: boolean, indexAppearing: number) {
    this.interactor = interactor;
    this.isSubComplex = isSubComplex;
    this.hidden = false;
    this.expanded = false;
    this.timesAppearing = 0;
    this.indexAppearing = indexAppearing;
    this.subComponents = null;
  }

  isExpandedSubComplex(): boolean {
    return this.isSubComplex && !!this.subComponents && this.expanded;
  }
}

export class NavigatorInteractors {
  _interactors: NavigatorInteractor[];
  _timesAppearingBy: { [k in keyof Interactor]?: Map<string, number> } = {
    interactorType: new Map<string, number>(),
    organismName: new Map<string, number>()
  };
  _ranges: Range[];

  constructor() {
    this._interactors = [];
  }

  get interactors(): NavigatorInteractor[] {
    return this._interactors;
  }

  get ranges(): Range[] {
    return this._ranges;
  }

  toggleSubcomplexExpandable(interactorIndex: number): void {
    this._interactors[interactorIndex].expanded = !this._interactors[interactorIndex].expanded;

    if (this._interactors[interactorIndex].expanded) {
      this.collapseAllButOne(interactorIndex);
      this.hideInteractorsDisplayedAsSubComponents(interactorIndex);
    } else {
      this.displayAllInteractors();
    }
  }

  findInteractorInComplex(interactorIndex: number, complex: Complex): ComponentWithStoichiometry {
    return findInteractorInComplex(complex, this._interactors[interactorIndex].interactor.identifier, this._interactors);
  }

  findSubcomponentInComplex(interactorIndex: number, subcomponentIndex: number, complex: Complex): ComponentWithStoichiometry {
    return findInteractorInComplex(
      complex,
      this._interactors[interactorIndex].subComponents[subcomponentIndex].identifier,
      this._interactors);
  }

  calculateTimesAppearing(complexes: Complex[]) {
    // Initialise times appearing by type or organism
    for (const map of Object.values(this._timesAppearingBy)) {
      map.clear();
    }

    for (const oneInteractor of this._interactors) {
      // Initialise times appearing for each interactor
      oneInteractor.timesAppearing = 0;
      for (const complex of complexes) {
        const match = findInteractorInComplex(complex, oneInteractor.interactor.identifier, this._interactors);
        if (!!match) {
          // Update times appearing for the interactor
          oneInteractor.timesAppearing += 1;
          // Update times appearing for the different properties
          for (const key of Object.keys(this._timesAppearingBy)) {
            const map = this._timesAppearingBy[key];
            const value = oneInteractor.interactor[key];
            map.set(value, (map.get(value) || 0) + 1);
          }
        }
      }
    }
  }

  classifyInteractors(interactorsSorting: string): NavigatorInteractor[] {
    if (!!interactorsSorting && !!this._interactors && this._interactors.length > 0) {
      if (interactorsSorting === 'Type') {
        this.classifyBy('interactorType');
      } else if (interactorsSorting === 'Organism') {
        this.classifyBy('organismName');
      } else {
        this.classifyInteractorsByOccurrence();
      }
    }
    return this._interactors;
  }

  private collapseAllButOne(interactorIndex: number): void {
    for (let i = 0; i < this._interactors.length; i++) {
      if (interactorIndex !== i) {
        this._interactors[i].expanded = false;
      }
    }
  }

  private hideInteractorsDisplayedAsSubComponents(interactorIndex: number): void {
    if (!!this._interactors[interactorIndex].subComponents) {
      const subInteractorIds: string[] = this._interactors[interactorIndex].subComponents.map(component => component.identifier);
      for (let i = 0; i < this._interactors.length; i++) {
        if (interactorIndex !== i) {
          this._interactors[i].hidden = !!subInteractorIds.includes(this._interactors[i].interactor.identifier);
        }
      }
    }
  }

  private displayAllInteractors(): void {
    for (let i = 0; i < this._interactors.length; i++) {
      this._interactors[i].hidden = false;
    }
  }

  private classifyInteractorsByOccurrence() {
    this._interactors.sort(this.compareFn.bind(this));
    this._ranges = [];
  }

  public classifyBy(key: keyof Interactor) {
    this._interactors.sort((a, b) =>
      this._timesAppearingBy[key].get(b.interactor[key]) - this._timesAppearingBy[key].get(a.interactor[key]) ||
      b.interactor[key].localeCompare(a.interactor[key]) ||
      this.compareFn(a, b));
    this.calculateRangesBy(key);
  }

  public calculateRangesBy(key: keyof Interactor) {
    const ranges: Range[] = [];
    let length = 0;
    let start = null;
    for (let i = 0; i < this._interactors.length; i++) {
      if (!this._interactors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      const value = this._interactors[i].interactor[key];
      if (!this._interactors[i + 1]
        || (this._interactors[i].isExpandedSubComplex())
        || value !== this._interactors[i + 1].interactor[key]) {
        if (start !== null) {
          ranges.push({value, start, length});
          start = null;
        }
        length = 0;
      }
    }
    this._ranges = ranges;
  }

  private compareFn(a: NavigatorInteractor, b: NavigatorInteractor) {
    return -(b.indexAppearing - a.indexAppearing) || // First by order of appearance (staircase effect)
      -(b.timesAppearing - a.timesAppearing); // Then by reversed occurrence, in order to minimize edge length
  }
}
