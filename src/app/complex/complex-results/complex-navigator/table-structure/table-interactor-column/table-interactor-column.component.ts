import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable, of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {findInteractorInComplex} from './complex-navigator-utils';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {map} from 'rxjs/operators';
import {SpeciesPipe} from '../../../../shared/pipe/species.pipe';


export class EnrichedInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  partOfComplex: number[];
  timesAppearing: number;
}

export class EnrichedComplex {
  complex: Element;
  startInteractorIndex: number;
  endInteractorIndex: number;
  startSubComponentIndex: number;
  endSubComponentIndex: number;
  startInteractorIncludedWhenExpanded: boolean;
}

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnChanges {
  complexes = input<Element[]>([]);
  interactorsSorting = input<string>();
  interactors = input<Interactor[]>([]);
  organismIconDisplay = input<boolean>(true);
  interactorTypeDisplay = input<boolean>(true);
  idDisplay = input<boolean>(true);

  // TODO rework bellow to compute when needed from the inputs
  enrichedInteractors: EnrichedInteractor[];
  enrichedComplexes: EnrichedComplex[];
  ranges: [string, number, number, number][]; // [type of interactor, first occurrence, last occurrence, length of the occurrence]

  _timesAppearingByType: Map<string, number>;
  _timesAppearingByOrganism: Map<string, number>;

  constructor(private complexPortalService: ComplexPortalService, private species: SpeciesPipe) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['interactors']) {
      this.enrichInteractors();
      this.calculateTimesAppearing();
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }

  private classifyInteractors(): void {
    if (!!this.interactorsSorting() && !!this.enrichedInteractors && this.enrichedInteractors.length > 0) {
      if (this.interactorsSorting() === 'Type') {
        this.classifyInteractorsByType();
      } else if (this.interactorsSorting() === 'Organism') {
        this.classifyInteractorsByOrganism();
      } else {
        this.classifyInteractorsByOccurrence();
      }
    }
  }

  private enrichInteractors() {
    this.enrichedInteractors = [];
    for (const interactor of this.interactors()) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor: EnrichedInteractor = {
        interactor,
        hidden: false,
        isSubComplex,
        expanded: false,
        subComponents: null,
        partOfComplex: [],
        timesAppearing: 0,
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      this.enrichedInteractors.push(newEnrichedInteractor);
    }
  }

  toggleSubcomplexExpandable(i: number): void {
    this.enrichedInteractors[i].expanded = !this.enrichedInteractors[i].expanded;

    if (this.enrichedInteractors[i].expanded) {
      // EnrichedInteractor has been expanded, we need to:

      // 1. Collapse the other ones, in case there is any other expanded
      for (let j = 0; j < this.enrichedInteractors.length; j++) {
        if (i !== j) {
          this.enrichedInteractors[j].expanded = false;
        }
      }

      // 2. Hide any interactor now displayed in the expanded section
      if (!!this.enrichedInteractors[i].subComponents) {
        const subInteractorIds: string[] = this.enrichedInteractors[i].subComponents.map(component => component.identifier);
        for (let j = 0; j < this.enrichedInteractors.length; j++) {
          if (i !== j) {
            this.enrichedInteractors[j].hidden = !!subInteractorIds.includes(this.enrichedInteractors[j].interactor.identifier);
          }
        }
      }
    } else {
      // EnrichedInteractor has been collapsed, we need to:
      // 1. Display any interactor previously hidden
      for (let j = 0; j < this.enrichedInteractors.length; j++) {
        this.enrichedInteractors[j].hidden = false;
      }
    }

    // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();

  }

  private loadSubInteractors(interactor: EnrichedInteractor): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = this.complexes().find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier)
        .pipe(map(complex => complex?.interactors));
    }
  }

  private calculateAllStartAndEndIndexes(): void {
    this.enrichedComplexes = [];

    for (const complex of this.complexes()) {
      this.enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
    }
  }

  private getMinValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.min(valueA, valueB);
  }

  private getMaxValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.max(valueA, valueB);
  }

  private calculateStartAndEndIndexes(complex: Element): EnrichedComplex {
    const enrichedComplex: EnrichedComplex = {
      complex,
      startInteractorIndex: null,
      endInteractorIndex: null,
      startSubComponentIndex: null,
      endSubComponentIndex: null,
      startInteractorIncludedWhenExpanded: true,
    };

    // We iterate through the interactors to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all interactors in the complex
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      if (!this.enrichedInteractors[i].hidden) {

        if (!!findInteractorInComplex(complex, this.enrichedInteractors[i].interactor.identifier, this.enrichedInteractors)) {
          // The interactor is part of the complex, we update the start and end indices for the interactors
          // line as it may start in this interactor
          enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
          if (enrichedComplex.startInteractorIndex === i) {
            // The line starts in this interactor, so the line always starts in this interactor, even when expanded
            enrichedComplex.startInteractorIncludedWhenExpanded = true;
          }
          enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);

          // The interactor is a subcomplex
          if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
            if (this.enrichedInteractors[i].expanded) {
              // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
              // of it. That means we need a line connecting all the subcomponents.
              // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
              // and not at the first subcomponent
              enrichedComplex.startSubComponentIndex = -1;
              enrichedComplex.endSubComponentIndex = this.enrichedInteractors[i].subComponents.length - 1;
            }
          }
        } else if (this.enrichedInteractors[i].isSubComplex &&
          !!this.enrichedInteractors[i].subComponents &&
          this.enrichedInteractors[i].expanded) {
          // The interactor is not part of the complex, but it is a subcomplex, and it is expanded.
          // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
          // In that case, the line could start or end on any of those subcomponents
          for (let k = 0; k < this.enrichedInteractors[i].subComponents.length; k++) {
            if (!!findInteractorInComplex(complex, this.enrichedInteractors[i].subComponents[k].identifier, this.enrichedInteractors)) {
              // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
              // line as it may start in this interactor
              enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
              if (enrichedComplex.startInteractorIndex === i) {
                // The line starts in a subcomponent of the interactor, but not on the interactor itself,
                // so the line does not start in the interactor when expanded
                enrichedComplex.startInteractorIncludedWhenExpanded = false;
              }
              enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
              // The subcomponent of this interactor is part of the complex, we update the start and end indices for the subcomponents
              // line as it may start in this subcomponent
              enrichedComplex.startSubComponentIndex = this.getMinValue(enrichedComplex.startSubComponentIndex, k);
              enrichedComplex.endSubComponentIndex = this.getMaxValue(enrichedComplex.endSubComponentIndex, k);
            }
          }
        }
      }
    }
    return enrichedComplex;
  }

  public classifyInteractorsByOrganism() {
    this.enrichedInteractors.sort((a, b) => {
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

  public classifyInteractorsByType() {
    this.enrichedInteractors.sort((a, b) => {
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

  public classifyInteractorsByOccurrence() {
    this.enrichedInteractors.sort((a, b) =>
      b.timesAppearing - a.timesAppearing
    );
    this.ranges = [];
  }

  public rangeOfInteractorType() {
    const ranges = [];  // [type of interactor, first occurrence, last occurrence, length of the occurrence]
    let length = 0;
    let start = null;
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      const oneType = [];
      if (!this.enrichedInteractors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this.enrichedInteractors[i + 1]
        || (this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded)
        || this.enrichedInteractors[i].interactor.interactorType !== this.enrichedInteractors[i + 1].interactor.interactorType) {
        if (start !== null) {
          oneType.push(this.enrichedInteractors[i].interactor.interactorType, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }

  public rangeOfInteractorOrganism() {
    const ranges = [];  // [type of interactor, first occurrence, last occurrence, length of the occurrence]
    let length = 0;
    let start = null;
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      const oneType = [];
      if (!this.enrichedInteractors[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      if (!this.enrichedInteractors[i + 1]
        || (this.enrichedInteractors[i].isSubComplex && this.enrichedInteractors[i].expanded)
        || this.enrichedInteractors[i].interactor.organismName !== this.enrichedInteractors[i + 1].interactor.organismName) {
        if (start !== null) {
          oneType.push(this.species.transform(this.enrichedInteractors[i].interactor.organismName), length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }

  isInteractorSortingSet() {
    return this.interactorsSorting() === 'Type' || this.interactorsSorting() === 'Organism';
  }

  getExpandedRowClass(i: number, length: number): string {
    if (i === 0) {
      if (length === 1) {
        return 'singleExpandedRow';
      } else {
        return 'firstExpandedRow';
      }
    } else if (i === length - 1) {
      return 'lastExpandedRow';
    }
    return null;
  }

  private calculateTimesAppearing() {
    // Initialise times appearing by type or organism
    this._timesAppearingByType = new Map();
    this._timesAppearingByOrganism = new Map();
    for (const oneInteractor of this.enrichedInteractors) {
      // Initialise times appearing for each interactor
      oneInteractor.timesAppearing = 0;
      for (const complex of this.complexes()) {
        const match = findInteractorInComplex(complex, oneInteractor.interactor.identifier, this.enrichedInteractors);
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

}
