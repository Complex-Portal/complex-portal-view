import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {map} from 'rxjs/operators';

class EnrichedInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  partOfComplex: number[];
}

class EnrichedComplex {
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
export class TableInteractorColumnComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _enrichedInteractors: EnrichedInteractor[];
  _enrichedComplexes: EnrichedComplex[];

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

  @Input()
  set interactors(value: Set<Interactor>) {
    this._enrichedInteractors = [];
    for (const interactor of value) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor: EnrichedInteractor = {
        interactor,
        hidden: false,
        isSubComplex,
        expanded: false,
        subComponents: null,
        partOfComplex: []
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      this._enrichedInteractors.push(newEnrichedInteractor);
    }
    this.calculateAllStartAndEndIndexes();
  }

  findInteractorInComplex(complex: Element, componentId: string): ComplexComponent {
    return complex.components.find(component => component.identifier === componentId);
  }

  findInteractorsInSubComplex(complex: Element, interactorId: string): ComplexComponent[] {
    return this._enrichedInteractors
      // filter subcomplexes
      .filter(interactor => interactor.isSubComplex)
      // filter subcomplexes included in complex
      .filter(interactor =>
        complex.components.some(component => component.identifier === interactor.interactor.identifier))
      // filter subcomplexes that match the componentId
      .filter(interactor => !!interactor.subComponents)
      .map(interactor => interactor.subComponents.find(subComponent => subComponent.identifier === interactorId))
      .filter(component => !!component);
  }

  public findInteractorInExpandedSubComplex(interactor: EnrichedInteractor, complex: Element, interactorId: string): ComplexComponent {
    if (complex.components.some(component => component.identifier === interactor.interactor.identifier)) {
      return interactor.subComponents.find(component => component.identifier === interactorId);
    }
    return null;
  }

  stochiometryOfInteractors(complex: Element, interactorId: string): string {
    const match = this.findInteractorInComplex(complex, interactorId);
    if (!!match) {
      return this.formatStochiometryValues(match.stochiometry);
    }
    return null;
  }

  stoichiometryOfInteractorsExpandable(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      return this.formatStochiometryValues(match.stochiometry);
    }
    return null;
  }

  stoichiometryOfInteractorsMainTable(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stochiometryValues = this.addedStoichiometryValues(matches);
      if (!!stochiometryValues) {
        if (stochiometryValues[0] === stochiometryValues[1]) {
          return stochiometryValues[0].toString();
        } else {
          return `${stochiometryValues[0]}, ${stochiometryValues[1]}`;
        }
      } else {
        return ' ';
      }
    }
    return null;
  }

  getStochiometry(complex: Element, componentId: string): string {
    const match = this.findInteractorInComplex(complex, componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        return 'Stoichiometry values: ' + (match.stochiometry);
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  getStoichiometrySubComplex(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stochiometryValues = this.addedStoichiometryValues(matches);
      if (!!stochiometryValues) {
        return `Stoichiometry values: minValue: ${stochiometryValues[0]}, maxValue: ${stochiometryValues[1]}`;
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  getStochiometryInExpandedSubComplex(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      if (!!match.stochiometry) {
        return 'Stoichiometry values: ' + (match.stochiometry);
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  showExternalLink(component: Interactor | ComplexComponent): boolean {
    return component.interactorType !== 'stable complex' && !!component.identifierLink;
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
    this.calculateAllStartAndEndIndexes();
  }

  public interactorTypeIcon(interactor: Interactor): string {
    if (interactor.interactorType === 'protein') {
      return 'icon icon-conceptual icon-proteins';
    } else if (interactor.interactorType === 'ribonucleic acid') {
      return 'icon icon-conceptual icon-dna';
    } else if (interactor.interactorType === 'small molecule') {
      return 'icon icon-conceptual icon-chemical';
    } else if (interactor.interactorType === 'stable complex') {
      return 'icon icon-conceptual icon-systems';
    }
    return '';
  }

  private loadSubInteractors(interactor: EnrichedInteractor): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = this.complexSearch.elements.find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.components);
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

  private findInteractorInSubcomplex(interactor: EnrichedInteractor, interactorId: string): ComplexComponent {
    return interactor.subComponents.find(component => component.identifier === interactorId);
  }

  private fetchValuesFromStochiometry(stochiometry: string) {
    const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
    return stochiometry.match(pattern);
  }

  private formatStochiometryValues(stochiometry: string): string {
    if (!!stochiometry) {
      const matchedStochometry = this.fetchValuesFromStochiometry(stochiometry);
      if (!!matchedStochometry) {
        // tslint:disable-next-line:radix
        const minValue = parseInt(matchedStochometry[1]);
        // tslint:disable-next-line:radix
        const maxValue = parseInt(matchedStochometry[2]);
        if (minValue === maxValue) {
          return minValue.toString();
        } else {
          return `${minValue}, ${maxValue}`;
        }
      }
    }
    return ' '; // sometimes we don't have the stoichiometry value
  }

  private addedStoichiometryValues(components: ComplexComponent[]): [number, number] {
    let minValue: number = null;
    let maxValue: number = null;
    for (const component of components) {
      if (!!component.stochiometry) {
        const matchedStochometry = this.fetchValuesFromStochiometry(component.stochiometry);
        if (!!matchedStochometry) {
          if (minValue === null) {
            minValue = 0;
          }
          if (maxValue === null) {
            maxValue = 0;
          }
          // tslint:disable-next-line:radix
          minValue += parseInt(matchedStochometry[1]);
          // tslint:disable-next-line:radix
          maxValue += parseInt(matchedStochometry[2]);
        }
      }
    }
    if (minValue !== null && maxValue !== null) {
      return [minValue, maxValue];
    }
    return null;
  }

  private calculateAllStartAndEndIndexes(): void {
    this._enrichedComplexes = [];
    for (const complex of this.complexSearch.elements) {
      this._enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
    }
  }

  private calculateStartAndEndIndexes(complex: Element): EnrichedComplex {
    const subComponentsToCheck: string[] = [];

    let startInteractorIndex: number = null;
    let endInteractorIndex: number = null;
    let startSubComponentIndex: number = null;
    let endSubComponentIndex: number = null;

    // We iterate through the interactors to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all interactors in the complex
    for (let i = 0; i < this._enrichedInteractors.length; i++) {
      if (!this._enrichedInteractors[i].hidden) {
        for (let j = 0; j < complex.components.length; j++) {
          if (complex.components[j].identifier === this._enrichedInteractors[i].interactor.identifier) {
            // The interactor is part of the complex
            if (startInteractorIndex === null) {
              // If startInteractorIndex is null, it means it's the first interactor part of the complex we have found,
              // then it is where the line starts
              startInteractorIndex = i;
            }
            // So far this interactor is the last one part of the complex have found,
            // then it is so far where the line ends
            endInteractorIndex = i;

            // If the interactor is a subcomplex, then the subcomponents of that subcomplex could also be displayed in the table
            // as separate interactors. In that case, the line could start or end there, so we need to also check the position of those
            // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
            if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents) {
              this._enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
            }
          }
          if (this._enrichedInteractors[i].isSubComplex &&
            !!this._enrichedInteractors[i].subComponents &&
            this._enrichedInteractors[i].expanded) {
            // The interactor is a subcomplex and it is expanded.
            // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
            // In that case, the line could start or end on any of those subcomponents
            for (let k = 0; k < this._enrichedInteractors[i].subComponents.length; k++) {
              if (complex.components[j].identifier === this._enrichedInteractors[i].interactor.identifier ||
                complex.components[j].identifier === this._enrichedInteractors[i].subComponents[k].identifier) {
                // The subcomponent is part of the complex
                // Or the whole subcomplex is part of the complex, meaning all subcomponents are part of it too
                if (startInteractorIndex === null) {
                  // If startInteractorIndex is null, it means it's the first interactor part of the complex we have found,
                  // then it is where the line joining interactor starts
                  startInteractorIndex = i;
                }
                // If startSubComponentIndex is null, it means it's the first subcomponent part of the complex we have found,
                // then it is where the line joining subcomponents starts
                if (startSubComponentIndex === null) {
                  startSubComponentIndex = k;
                }
                // So far this is the last interactor and subcomponent part of the complex have found,
                // then it is so far where the line ends
                endInteractorIndex = i;
                endSubComponentIndex = k;
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
          if (startInteractorIndex === null || i < startInteractorIndex) {
            startInteractorIndex = i;
          }
          if (endInteractorIndex === null || i > endInteractorIndex) {
            endInteractorIndex = i;
          }
        }
      }
    }

    return {
      complex,
      startInteractorIndex,
      endInteractorIndex,
      startSubComponentIndex,
      endSubComponentIndex
    };
  }

  public displayTopLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex >= interactorIndex) {
        // Normal use case:
        // The line starts before this interactor and it finishes after, or exactly at, this interactor.
        // The top part of the line joining interactors is displayed
        return 'verticalLine';
      }
    }
    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        // Normal use case:
        // The line starts before this interactor and it finishes after this interactor.
        // The bottom part of the line joining interactors is displayed
        return 'verticalLine';
      }

      if (complex.startInteractorIndex === interactorIndex) {
        // The line joining interactors starts in this interactor.
        // This could mean it actually start in this interactor, or that it does start on one of its subcomponents
        if (!this._enrichedInteractors[interactorIndex].isSubComplex) {
          // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
          return 'verticalLine';
        }
        // If the interactor is a subcomplex.
        // If the interactor is actually part of the complex, the line starts in this interactor, and the bottom part of the line
        // joining interactors is displayed.
        // Otherwise, the line actually starts on one of the subcomponets of the complex, but not on the interactor itself, as it is
        // not part of the complex.
        if (complex.complex.components.some(component =>
          this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
          return 'verticalLine';
        }
      }

      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
        // The line joining interactors ends in this interactor.
        // Normally the bottom part of the line is not displayed in this case, but if it is an explanded subcomplex, then the line
        // may continue until one or several of the subcomponents.
        if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
          // The interactor is a subcomplex and it is expanded.
          if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
            // If startSubComponentIndex and endSubComponentIndex are not null, that means there is a line joining subcomponents,
            // The line joining the interactors must join the line joining subcomponents, so the bottom part of the line
            // in this interactor is displayed
            return 'verticalLine';
          }
          if (complex.complex.components.some(component =>
            this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
            // The interactor is actually part of the complex, so the line does not fully end in this interactor, as the line will
            // continue to all the subcomponets of the subcomplex.
            return 'verticalLine';
          }
        }
      }
    }

    return 'transparentVerticalLine';
  }

  public displayTopLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex >= subComponentIndex) {
          // Normal use case:
          // The line starts before this subcomponent and it finishes after, or exactly at, this subcomponent.
          // The top part of the line joining subcomponents is displayed
          return 'verticalLine';
        }
      }

      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        // There are interactors part of the complex before and after this subcomplex.
        // The line goes through the expanded complex and its subcomponents, so we display it
        return 'verticalLine';
      }

      if (complex.endInteractorIndex > interactorIndex &&
        complex.endSubComponentIndex != null &&
        complex.endSubComponentIndex < subComponentIndex) {
        // The line joining subcomponents was supposed to end before this subcomponent, but there are still interactors part of the complex
        // after this subcomplex, so the line actually continues and we need to display it
        return 'verticalLine';
      }
      if (complex.startInteractorIndex < interactorIndex &&
        complex.startSubComponentIndex != null &&
        complex.startSubComponentIndex >= subComponentIndex) {
        // The line joining subcomponents was supposed to start after, or at, this subcomponent, but there are still interactors part of
        // the complex before this subcomplex, so the line actually already started and we need to display it
        return 'verticalLine';
      }

      if (complex.startInteractorIndex === interactorIndex && subComponentIndex === 0) {
        // This interactor is a subcomplex and the line starts in it or in one of its subcomponents
        // If the subcomplex is a component of the complex, the line starts in the cell of the interactor and the line between
        // subcomplexes needs to connect to that line, so we need to display the top part of the line of the first subcomponent.
        // Otherwise, the line will start in one of the subcomponents and it will not connect to the interactor cell.
        if (complex.complex.components.some(component =>
          this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
          return 'verticalLine';
        }
      }
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        if (complex.startSubComponentIndex <= subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
          // Normal use case:
          // The line starts before, or exactly at, this subcomponent and it finishes after, this subcomponent.
          // The bottom part of the line joining subcomponents is displayed
          return 'verticalLine';
        }
      }

      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        // There are interactors part of the complex before and after this subcomplex.
        // The line goes through the expanded complex and its subcomponents, so we display it
        return 'verticalLine';
      }

      if (complex.endInteractorIndex > interactorIndex &&
        complex.endSubComponentIndex != null &&
        complex.endSubComponentIndex <= subComponentIndex) {
        // The line joining subcomponents was supposed to end before this subcomponent, but there are still interactors part of the complex
        // after this subcomplex, so the line actually continues and we need to display it
        return 'verticalLine';
      }
      if (complex.startInteractorIndex < interactorIndex &&
        complex.startSubComponentIndex != null &&
        complex.startSubComponentIndex > subComponentIndex) {
        // The line joining subcomponents was supposed to start after, or at, this subcomponent, but there are still interactors part of
        // the complex before this subcomplex, so the line actually already started and we need to display it
        return 'verticalLine';
      }

    }

    return 'transparentVerticalLine';
  }
}
