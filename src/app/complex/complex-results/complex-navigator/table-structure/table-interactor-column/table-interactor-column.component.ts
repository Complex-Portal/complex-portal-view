import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {map} from 'rxjs/operators';
import {findInteractorInComplex, formatStoichiometryValues} from './complex-navigator-utils';

export class EnrichedInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  partOfComplex: number[];
  timesAppearing: number;
  organismName: string;
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
export class TableInteractorColumnComponent implements OnInit, OnChanges {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactorsSorting: string;
  @Input() interactors: Interactor[];

  _enrichedInteractors: EnrichedInteractor[];
  _enrichedComplexes: EnrichedComplex[];
  _rangesOfInteractorsType: number[];
  _rangesOfInteractorsOrganism: number[];


  constructor(private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
  }

  get enrichedInteractors(): EnrichedInteractor[] {

    return this._enrichedInteractors;
  }

  get enrichedComplexes(): EnrichedComplex[] {
    return this._enrichedComplexes;
  }

  ranges(): number[] {
    if (this.interactorsSorting === 'Type') {
      return this._rangesOfInteractorsType;
    } else if (this.interactorsSorting === 'Organism') {
      return this._rangesOfInteractorsOrganism;
    } else {
      return [];
    }
  }

  get rangesOfInteractorType(): number[] {
    return this._rangesOfInteractorsType;
  }

  get rangesOfInteractorOrganism(): number[] {
    return this._rangesOfInteractorsOrganism;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['interactors']) {
      this.enrichInteractors();
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }

  private classifyInteractors(): void {
    if (!!this.interactorsSorting && !!this._enrichedInteractors && this._enrichedInteractors.length > 0) {
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
    this._enrichedInteractors = [];
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
        organismName: '',
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      this._enrichedInteractors.push(newEnrichedInteractor);
    }
    this.interactorOrganism();
  }

  stoichiometryOfInteractors(complex: Element, interactorId: string): string {
    const match = findInteractorInComplex(complex, interactorId);
    if (!!match) {
      return formatStoichiometryValues(match.stochiometry);
    }
    return null;
  }

  toggleSubcomplexExpandable(i: number): void {
    this._enrichedInteractors[i].expanded = !this._enrichedInteractors[i].expanded;

    if (this._enrichedInteractors[i].expanded) {
      // EnrichedInteractor has been expanded, we need to:

      // 1. Collapse the other ones, in case there is any other expanded
      for (let j = 0; j < this._enrichedInteractors.length; j++) {
        if (i !== j) {
          this._enrichedInteractors[j].expanded = false;
        }
      }

      // 2. Hide any interactor now displayed in the expanded section
      if (!!this._enrichedInteractors[i].subComponents) {
        const subInteractorIds: string[] = this._enrichedInteractors[i].subComponents.map(component => component.identifier);
        for (let j = 0; j < this._enrichedInteractors.length; j++) {
          if (i !== j) {
            this._enrichedInteractors[j].hidden = !!subInteractorIds.includes(this._enrichedInteractors[j].interactor.identifier);
          }
        }
      }
    } else {
      // EnrichedInteractor has been collapsed, we need to:
      // 1. Display any interactor previously hidden
      for (let j = 0; j < this._enrichedInteractors.length; j++) {
        this._enrichedInteractors[j].hidden = false;
      }
    }

    // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();

  }

  private loadSubInteractors(interactor: EnrichedInteractor): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = this.complexSearch.elements.find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getComplexAc(interactor.interactor.identifier)
        .pipe(map(complex => complex.participants.map(participant => new ComplexComponent(
          participant.identifier,
          participant.identifierLink,
          participant.name,
          participant.description,
          participant.stochiometry,
          participant.interactorType))));
    }
  }

  private calculateAllStartAndEndIndexes(): void {
    this._enrichedComplexes = [];

    for (const complex of this.complexSearch.elements) {
      this._enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
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
    for (let i = 0; i < this._enrichedInteractors.length; i++) {
      if (!this._enrichedInteractors[i].hidden) {
        for (let j = 0; j < complex.interactors.length; j++) {
          if (complex.interactors[j].identifier === this._enrichedInteractors[i].interactor.identifier) {
            // The interactor is part of the complex, we update the start and end indices for the interactors
            // line as it may start in this interactor
            enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
            enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);

            // The interactor is a subcomplex
            if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents) {
              // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
              // In that case, the line could start or end there, so we need to also check the position of those
              // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
              this._enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
              if (this._enrichedInteractors[i].expanded) {
                // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                // of it. That means we need a line connecting all the subcomponents.
                // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                // and not at the first subcomponent
                enrichedComplex.startSubComponentIndex = -1;
                enrichedComplex.endSubComponentIndex = this._enrichedInteractors[i].subComponents.length - 1;
              }
            }
          } else if (this._enrichedInteractors[i].isSubComplex &&
            !!this._enrichedInteractors[i].subComponents &&
            this._enrichedInteractors[i].expanded) {
            // The interactor is not part of the complex, but it is a subcomplex, and it is expanded.
            // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
            // In that case, the line could start or end on any of those subcomponents
            for (let k = 0; k < this._enrichedInteractors[i].subComponents.length; k++) {
              if (complex.interactors[j].identifier === this._enrichedInteractors[i].subComponents[k].identifier) {
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
    for (let i = 0; i < this._enrichedInteractors.length; i++) {
      if (!this._enrichedInteractors[i].hidden) {
        if (subComponentsToCheck.includes(this._enrichedInteractors[i].interactor.identifier)) {
          // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
          // line as it may start in this interactor
          enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
          enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
        }
      }
    }
    return enrichedComplex;
  }

  private interactorOrganism() {
    for (const complex of this.complexSearch.elements) {
      const organismName = complex.organismName;
      for (const complexInteractor of complex.interactors) {
        // tslint:disable-next-line:max-line-length
        const match = this._enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === complexInteractor.identifier);
        match.organismName = organismName;
      }
    }
  }

  public classifyInteractorsByOrganism() {
    this._enrichedInteractors.sort((a, b) => b.organismName.localeCompare(a.organismName));
    // this.calculateAllStartAndEndIndexes();
    this.rangeOfInteractorOrganismV2();
  }

  public classifyInteractorsByType() {
    this._enrichedInteractors.sort((a, b) => b.interactor.interactorType.localeCompare(a.interactor.interactorType));
    // this.calculateAllStartAndEndIndexes();
    this.rangeOfInteractorTypeV2();
  }

  public classifyInteractorsByOccurrence() {
    for (const oneInteractor of this._enrichedInteractors) {
      for (const complex of this.complexSearch.elements) {
        for (const complexesInteractors of complex.interactors) {
          if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
            // tslint:disable-next-line:radix
            if (isNaN(parseInt(this.stoichiometryOfInteractors(complex, oneInteractor.interactor.identifier)))) {
              oneInteractor.timesAppearing = oneInteractor.timesAppearing;
            } else {
              oneInteractor.timesAppearing += parseInt(this.stoichiometryOfInteractors(complex, oneInteractor.interactor.identifier), 10);
            }
          }
        }
        if (oneInteractor.isSubComplex) {
          // tslint:disable-next-line:no-shadowed-variable
          for (const subInteractor of oneInteractor.subComponents) {
            // tslint:disable-next-line:max-line-length no-shadowed-variable
            const enrichedInteractor = this._enrichedInteractors.find(enrichedInteractor => enrichedInteractor.interactor.identifier === subInteractor.identifier);
            // tslint:disable-next-line:radix
            enrichedInteractor.timesAppearing = parseInt(formatStoichiometryValues(subInteractor.stochiometry));
          }
        }
      }
    }
    // tslint:disable-next-line:max-line-length
    this._enrichedInteractors.sort((a, b) => b.timesAppearing - a.timesAppearing /* || a.interactor.name.localeCompare(b.interactor.name) */);
    // this.calculateAllStartAndEndIndexes();
  }

  public rangeOfInteractorTypeV2() {
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
    this._rangesOfInteractorsType = ranges;
  }

  public rangeOfInteractorOrganismV2() {
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
        || this.enrichedInteractors[i].organismName !== this.enrichedInteractors[i + 1].organismName) {
        if (start !== null) {
          oneType.push(this.enrichedInteractors[i].organismName, length, start);
          ranges.push(oneType);
          start = null;
        }
        length = 0;
      }
    }
    this._rangesOfInteractorsOrganism = ranges;
  }
}
