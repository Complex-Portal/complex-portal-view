import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {map} from 'rxjs/operators';
import {formatStoichiometryValues, stoichiometryOfInteractors} from './complex-navigator-utils';
import {Element} from '../../../../shared/model/complex-results/element.model';

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
}

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnChanges {
  @Input() complexes: Element[];
  @Input() interactorsSorting: string;
  @Input() interactors: Interactor[];
  @Input() organismIconDisplay: boolean;
  @Input() interactorTypeDisplay: boolean;
  @Input() IDDisplay: boolean;

  enrichedInteractors: EnrichedInteractor[];
  enrichedComplexes: EnrichedComplex[];
  ranges: number[];


  constructor(private complexPortalService: ComplexPortalService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['interactors']) {
      this.enrichInteractors();
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }

  private classifyInteractors(): void {
    if (!!this.interactorsSorting && !!this.enrichedInteractors && this.enrichedInteractors.length > 0) {
      if (this.interactorsSorting === 'Type') {
        this.classifyInteractorsByType();
      } else if (this.interactorsSorting === 'Organism') {
        this.classifyInteractorsByOrganism();
      } else {
        this.classifyInteractorsByOccurrence();
      }
    }
  }

  private enrichInteractors() {
    this.enrichedInteractors = [];
    for (const interactor of this.interactors) {
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
    const foundComplex: Element = this.complexes.find(complex => complex.complexAC === interactor.interactor.identifier);
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

    for (const complex of this.complexes) {
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
    const subComponentsToCheck: string[] = [];

    const enrichedComplex: EnrichedComplex = {
      complex,
      startInteractorIndex: null,
      endInteractorIndex: null,
      startSubComponentIndex: null,
      endSubComponentIndex: null
    };

    // We iterate through the interactors to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all interactors in the complex
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      if (!this.enrichedInteractors[i].hidden) {
        for (let j = 0; j < complex.interactors.length; j++) {
          if (complex.interactors[j].identifier === this.enrichedInteractors[i].interactor.identifier) {
            // The interactor is part of the complex, we update the start and end indices for the interactors
            // line as it may start in this interactor
            enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
            enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);

            // The interactor is a subcomplex
            if (this.enrichedInteractors[i].isSubComplex && !!this.enrichedInteractors[i].subComponents) {
              // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
              // In that case, the line could start or end there, so we need to also check the position of those
              // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
              this.enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
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
              if (complex.interactors[j].identifier === this.enrichedInteractors[i].subComponents[k].identifier) {
                // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                // line as it may start in this interactor
                enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
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
    }

    // We finally check the position of the subcomponents of subcomplexes part of the complex on the main table.
    // If any is before or after where the lines start and end, then we need to update the start and end indexes,
    // as the line must start or end there
    for (let i = 0; i < this.enrichedInteractors.length; i++) {
      if (!this.enrichedInteractors[i].hidden) {
        if (subComponentsToCheck.includes(this.enrichedInteractors[i].interactor.identifier)) {
          // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
          // line as it may start in this interactor
          enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
          enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
        }
      }
    }
    return enrichedComplex;
  }

  public classifyInteractorsByOrganism() {
    this.enrichedInteractors.sort((a, b) => b.interactor.organismName.localeCompare(a.interactor.organismName));
    // this.calculateAllStartAndEndIndexes();
    this.rangeOfInteractorOrganism();
  }

  public classifyInteractorsByType() {
    this.enrichedInteractors.sort((a, b) => b.interactor.interactorType.localeCompare(a.interactor.interactorType));
    this.rangeOfInteractorType();
  }

  public classifyInteractorsByOccurrence() {
    for (const oneInteractor of this.enrichedInteractors) {
      for (const complex of this.complexes) {
        for (const complexesInteractors of complex.interactors) {
          if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
            const stoichiometryValue = parseInt(stoichiometryOfInteractors(complex, oneInteractor.interactor.identifier), 10);
            if (!isNaN(stoichiometryValue)) {
              oneInteractor.timesAppearing += stoichiometryValue;
            }
          }
        }
        if (oneInteractor.isSubComplex && !!oneInteractor.subComponents) {
          for (const oneSubInteractor of oneInteractor.subComponents) {
            const oneEnrichedInteractor = this.enrichedInteractors.find(
              enrichedInteractor => enrichedInteractor.interactor.identifier === oneSubInteractor.identifier
            );
            if (!!oneEnrichedInteractor) {
              const stoichiometryValue = parseInt(formatStoichiometryValues(oneSubInteractor.stochiometry), 10);
              if (!isNaN(stoichiometryValue)) {
                oneEnrichedInteractor.timesAppearing += stoichiometryValue;
              }
            }
          }
        }
      }
    }
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
          oneType.push(this.enrichedInteractors[i].interactor.organismName, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }

}
