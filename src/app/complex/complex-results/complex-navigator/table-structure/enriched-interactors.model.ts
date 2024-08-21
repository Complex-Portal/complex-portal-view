import {Interactor} from '../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../shared/model/complex-results/complex-component.model';
import {Element} from '../../../shared/model/complex-results/element.model';
import {ComponentWithStoichiometry, findInteractorInComplex} from './table-interactor-column/complex-navigator-utils';
import {SpeciesPipe} from '../../../shared/pipe/species.pipe';

export class EnrichedInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  timesAppearing: number;

  constructor(interactor: Interactor, isSubComplex: boolean) {
    this.interactor = interactor;
    this.isSubComplex = isSubComplex;
    this.hidden = false;
    this.expanded = false;
    this.timesAppearing = 0;
    this.subComponents = null;
  }

  isExpandedSubComplex(): boolean {
    return this.isSubComplex && !!this.subComponents && this.expanded;
  }
}

export class EnrichedInteractors {
  _interactors: EnrichedInteractor[];
  _timesAppearingByType: Map<string, number>;
  _timesAppearingByOrganism: Map<string, number>;
  _ranges: [string, number, number, number][]; // [type of interactor, first occurrence, last occurrence, length of the occurrence]

  constructor(interactors: EnrichedInteractor[], private species: SpeciesPipe) {
    this._interactors = interactors;
  }

  get interactors(): EnrichedInteractor[] {
    return this._interactors;
  }

  get ranges(): [string, number, number, number][] {
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

  findInteractorInComplex(interactorIndex: number, complex: Element): ComponentWithStoichiometry {
    return findInteractorInComplex(complex, this._interactors[interactorIndex].interactor.identifier, this._interactors);
  }

  findSubcomponentInComplex(interactorIndex: number, subcomponentIndex: number, complex: Element): ComponentWithStoichiometry {
    return findInteractorInComplex(
      complex,
      this._interactors[interactorIndex].subComponents[subcomponentIndex].identifier,
      this._interactors);
  }

  calculateTimesAppearing(complexes: Element[]) {
    // Initialise times appearing by type or organism
    this._timesAppearingByType = new Map();
    this._timesAppearingByOrganism = new Map();
    for (const oneInteractor of this._interactors) {
      // Initialise times appearing for each interactor
      oneInteractor.timesAppearing = 0;
      for (const complex of complexes) {
        const match = findInteractorInComplex(complex, oneInteractor.interactor.identifier, this._interactors);
        if (!!match) {
          // Update times appearing for the interactor
          oneInteractor.timesAppearing += 1;
          // Update times appearing for the interactor type
          this._timesAppearingByType.set(
            oneInteractor.interactor.interactorType,
            (this._timesAppearingByType.get(oneInteractor.interactor.interactorType) || 0) + 1);
          // Update times appearing for the interactor organism
          this._timesAppearingByOrganism.set(
            oneInteractor.interactor.organismName,
            (this._timesAppearingByOrganism.get(oneInteractor.interactor.organismName) || 0) + 1);
        }
      }
    }
  }

  classifyInteractors(interactorsSorting: string): void {
    if (!!interactorsSorting && !!this._interactors && this._interactors.length > 0) {
      if (interactorsSorting === 'Type') {
        this.classifyInteractorsByType();
      } else if (interactorsSorting === 'Organism') {
        this.classifyInteractorsByOrganism();
      } else {
        this.classifyInteractorsByOccurrence();
      }
    }
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

  private classifyInteractorsByOrganism() {
    this._interactors.sort((a, b) => {
      if (b.interactor.organismName === a.interactor.organismName) {
        return b.timesAppearing - a.timesAppearing;
      } else {
        const organismBTimesAppearing = this._timesAppearingByOrganism.get(b.interactor.organismName);
        const organismATimesAppearing = this._timesAppearingByOrganism.get(a.interactor.organismName);
        if (organismBTimesAppearing === organismATimesAppearing) {
          return b.interactor.organismName.localeCompare(a.interactor.organismName);
        } else {
          return organismBTimesAppearing - organismATimesAppearing;
        }
      }
    });
    this.rangeOfInteractorOrganism();
  }

  private classifyInteractorsByType() {
    this._interactors.sort((a, b) => {
      if (b.interactor.interactorType === a.interactor.interactorType) {
        return b.timesAppearing - a.timesAppearing;
      } else {
        const typeBTimesAppearing = this._timesAppearingByType.get(b.interactor.interactorType);
        const typeATimesAppearing = this._timesAppearingByType.get(a.interactor.interactorType);
        if (typeBTimesAppearing === typeATimesAppearing) {
          return b.interactor.interactorType.localeCompare(a.interactor.interactorType);
        } else {
          return typeBTimesAppearing - typeATimesAppearing;
        }
      }
    });
    this.rangeOfInteractorType();
  }

  private classifyInteractorsByOccurrence() {
    this._interactors.sort((a, b) =>
      b.timesAppearing - a.timesAppearing
    );
    this._ranges = [];
  }

  private rangeOfInteractorType() {
    const ranges = [];  // [type of interactor, first occurrence, last occurrence, length of the occurrence]
    let length = 0;
    let start = null;
    for (let i = 0; i < this._interactors.length; i++) {
      const oneType = [];
      if (!this._interactors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this._interactors[i + 1]
        || (this._interactors[i].isExpandedSubComplex())
        || this._interactors[i].interactor.interactorType !== this._interactors[i + 1].interactor.interactorType) {
        if (start !== null) {
          oneType.push(this._interactors[i].interactor.interactorType, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this._ranges = ranges;
  }

  private rangeOfInteractorOrganism() {
    const ranges = [];  // [type of interactor, first occurrence, last occurrence, length of the occurrence]
    let length = 0;
    let start = null;
    for (let i = 0; i < this._interactors.length; i++) {
      const oneType = [];
      if (!this._interactors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this._interactors[i + 1]
        || (this._interactors[i].isExpandedSubComplex())
        || this._interactors[i].interactor.organismName !== this._interactors[i + 1].interactor.organismName) {
        if (start !== null) {
          oneType.push(this.species.transform(this._interactors[i].interactor.organismName), length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this._ranges = ranges;
  }
}
