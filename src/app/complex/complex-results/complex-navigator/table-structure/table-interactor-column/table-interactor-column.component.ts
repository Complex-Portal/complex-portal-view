import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';

class EnrichedInteractor {
  interactor: Interactor;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
}

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _enrichedInteractors: EnrichedInteractor[];

  constructor() {
  }

  ngOnInit() {
  }

  get enrichedInteractors(): EnrichedInteractor[] {
    return this._enrichedInteractors;
  }

  @Input()
  set interactors(value: Set<Interactor>) {
    this._enrichedInteractors = [];
    for (const interactor of value) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor: EnrichedInteractor = {
        interactor,
        isSubComplex,
        expanded: false,
        subComponents: null
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      this._enrichedInteractors.push(newEnrichedInteractor);
    }
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

  public showExternalLink(component: Interactor | ComplexComponent): boolean {
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
    }
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
    }
    return of();
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
}
