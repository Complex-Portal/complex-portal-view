import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {Router} from '@angular/router';

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _components: Set<Interactor>;

  DisplayType = true;
  buttonContainers = [];
  SubcomplexExpander: boolean;

  constructor(private router: Router) {
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

  public stochiometryOfInteractors(complex, componentId): string {
    const match = complex.components.find(component => component.id === componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        const stochiometry = (match.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
        console.log(stochiometry);
        // selection of the maxvalue
        return stochiometry; // .substring to only select the maxValue
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsExpandable(complex, interactor): string {
    /* Retrieve the stoichiometry of the interactors of subcomplexes to display them in the main complex */
    const matchSub = complex.components.find(component => component.interactorType === 'stable complex'); /* look for subcomplexes */
    if (!!matchSub) {
      if (!!interactor.stochiometry) {
        const stochiometry = (interactor.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
        // selection of the maxvalue
        return stochiometry;
      } else {
        return ' '; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public stoichiometryOfInteractorsMainTable(complex, interactor, complexSearch): string {
    const subcomplexesArray = complex.components.filter(component => (component.interactorType === 'stable complex'));
    if (!!subcomplexesArray) {
      for (const subcomplex of subcomplexesArray) {
        const subComplexToComplex = this.componentToComplex(subcomplex, complexSearch);
        // convert the elements of the subcomplexes' array into compplexes
        for (const el of subComplexToComplex.components) {
          if (el.id === interactor.id) {
            if (!!el.stochiometry) {
              const stochiometry = (el.stochiometry).replace('minValue: ', '').replace('maxValue: ', '');
              // selection of the maxvalue
              return stochiometry;
            } else {
              return ' '; // sometimes we don't have the stoichiometry value
            }
          }
        }
      }
    }
    return null;
  }
  
  public getStochiometry(complex, componentId): string {
    const match = complex.components.find(component => component.id === componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        const stochiometry = 'Stoichiometry values: ' + (match.stochiometry);
        console.log(stochiometry);
        // selection of the maxvalue
        return stochiometry; // .substring to only select the maxValue
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  public getStoichiometrySubComplex(complex, interactor, complexSearch) {
    const subcomplexesArray = complex.components.filter(component => (component.interactorType === 'stable complex'));
    if (!!subcomplexesArray) {
      for (const subcomplex of subcomplexesArray) {
        const subComplexToComplex = this.componentToComplex(subcomplex, complexSearch);
        // convert the elements of the subcomplexes' array into complexes
        for (const el of subComplexToComplex.components) {
          if (el.id === interactor.id) {
            if (!!el.stochiometry) {
              const stochiometry = el.stochiometry;
              // selection of the maxvalue
              return stochiometry;
            } else {
              return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
            }
          }
        }
      }
    }
    return null;
  }

  public isComponentASubcomplex(component): boolean {
    return (component.interactorType) === 'stable complex';
  }

  public componentToComplex(component, ComplexSearch): Element {
    // this function convert a interactor (subcomplexes) into a complex in order to retrieve its components
    return ComplexSearch.find(complex => complex.complexAC === component.id);
  }

  public showExternalLink(component: Interactor): boolean {
    return (component.interactorType === 'protein' ||
      component.interactorType === 'ribonucleic acid' ||
      component.interactorType === 'small molecule');
  }

  public externalLink(component: Interactor): string {
    if (component.interactorType === 'protein') {
      return 'https://www.uniprot.org/uniprotkb/' + component.id;
    } else if (component.interactorType === 'ribonucleic acid') {
      return 'https://rnacentral.org/rna/' + component.id;
    } else if (component.interactorType === 'small molecule') {
      return 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=' + component.id;
    }
    return '';
  }

  public externalLinkName(component: Interactor): string {
    if (component.interactorType === 'protein') {
      return 'Uniprot';
    } else if (component.interactorType === 'ribonucleic acid') {
      return 'RNA central';
    } else if (component.interactorType === 'small molecule') {
      return 'ChEMBL';
    }
    return '';
  }

  toggleSubcomplexExpandable(i) {
    this.buttonContainers[i] = !this.buttonContainers[i];
  }

}
