import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _interactors: Set<Interactor>;

  buttonContainers = [];

  constructor() {
  }

  ngOnInit() {
  }

  get interactors(): Set<Interactor> {
    return this._interactors;
  }

  @Input()
  set interactors(value: Set<Interactor>) {
    this.buttonContainers = [];
    this._interactors = value;
    for (let i = 0; i < this._interactors.size; i++) {
      this.buttonContainers.push(false);
    }
  }

  public stochiometryOfInteractors(complex: Element, interactorId: string): string {
    const match = complex.components.find(component => component.identifier === interactorId);
    if (!!match) {
      if (!!match.stochiometry) {
        // selection of the maxvalue
        return (match.stochiometry).replace('minValue: ', '').replace('maxValue: ', ''); // .substring to only select the maxValue
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsExpandable(complex: Element, component: ComplexComponent): string {
    /* Retrieve the stoichiometry of the interactors of subcomplexes to display them in the main complex */
    const matchSub = complex.components.find(component => component.interactorType === 'stable complex'); /* look for subcomplexes */
    if (!!matchSub) {
      if (!!component.stochiometry) {
        // selection of the range
        return (component.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsMainTable(complex: Element, interactor: Interactor, complexSearch: Element[]): string {
    // Add the stoichiometry number of subcomplexes' interactors into the main complex containing them
    const subcomplexesArray = complex.components.filter(component => (component.interactorType === 'stable complex'));
    if (!!subcomplexesArray) {
      for (const subcomplex of subcomplexesArray) {
        const subComplexToComplex = this.componentToComplex(subcomplex, complexSearch);
        // convert the elements of the subcomplexes' array into compplexes
        for (const el of subComplexToComplex.components) {
          if (el.identifier === interactor.identifier) {
            if (!!el.stochiometry) {
              // selection of the range
              return (el.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
            } else {
              return ' '; // sometimes we don't have the stoichiometry value
            }
          }
        }
      }
    }
    return null;
  }

  public getStochiometry(complex: Element, interactorId: string): string {
    // used when hovering on the stoichiometry circle
    const match = complex.components.find(component => component.identifier === interactorId);
    if (!!match) {
      if (!!match.stochiometry) {
        return 'Stoichiometry values: ' + (match.stochiometry);
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public getStoichiometrySubComplex(complex: Element, interactor: Interactor, complexSearch: Element[]): string {
    const subcomplexesArray = complex.components.filter(component => (component.interactorType === 'stable complex'));
    if (!!subcomplexesArray) {
      for (const subcomplex of subcomplexesArray) {
        const subComplexToComplex = this.componentToComplex(subcomplex, complexSearch);
        // convert the elements of the subcomplexes' array into complexes
        for (const el of subComplexToComplex.components) {
          if (el.identifier === interactor.identifier) {
            if (!!el.stochiometry) {
              return el.stochiometry;
            } else {
              return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
            }
          }
        }
      }
    }
    return null;
  }

  public isComponentASubcomplex(interactor: Interactor): boolean {
    return (interactor.interactorType) === 'stable complex';
  }

  public componentToComplex(component: Interactor | ComplexComponent, ComplexSearch: Element[]): Element {
    // this function convert a interactor (subcomplexes) into a complex in order to retrieve its components
    return ComplexSearch.find(complex => complex.complexAC === component.identifier);
  }

  public showExternalLink(component: Interactor | ComplexComponent): boolean {
    return component.interactorType !== 'stable complex' && !!component.identifierLink;
  }

  toggleSubcomplexExpandable(i: number): void {
    this.buttonContainers[i] = !this.buttonContainers[i];
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
}
