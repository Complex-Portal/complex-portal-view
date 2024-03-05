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
  _components: Set<Interactor>;

  buttonContainers = [];

  constructor() {
  }

  ngOnInit() {
  }

  get components(): Set<Interactor> {
    return this._components;
  }

  @Input()
  set components(value: Set<Interactor>) {
    this.buttonContainers = [];
    this._components = value;
    for (let i = 0; i < this._components.size; i++) {
      this.buttonContainers.push(false);
    }
  }

  public stochiometryOfInteractors(complex: Element, componentId: string): string {
    const match = complex.components.find(component => component.identifier === componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        return (match.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsExpandable(complex: Element, interactor: ComplexComponent): string {
    /* Retrieve the stoichiometry of the interactors of subcomplexes to display them in the main complex */
    const matchSub = complex.components.find(component => component.interactorType === 'stable complex'); /* look for subcomplexes */
    if (!!matchSub) {
      if (!!interactor.stochiometry) {
        return (interactor.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsMainTable(complex: Element, interactor: Interactor, complexSearch: Element[]): string {
    const subcomplexesArray = complex.components.filter(component => (component.interactorType === 'stable complex'));
    if (!!subcomplexesArray) {
      for (const subcomplex of subcomplexesArray) {
        const subComplexToComplex = this.componentToComplex(subcomplex, complexSearch);
        // convert the elements of the subcomplexes' array into compplexes
        for (const el of subComplexToComplex.components) {
          if (el.identifier === interactor.identifier) {
            if (!!el.stochiometry) {
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

  public getStochiometry(complex: Element, componentId: string): string {
    const match = complex.components.find(component => component.identifier === componentId);
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

  public isComponentASubcomplex(component: Interactor): boolean {
    return (component.interactorType) === 'stable complex';
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

}
