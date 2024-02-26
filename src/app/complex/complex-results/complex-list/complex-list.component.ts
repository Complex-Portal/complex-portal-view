import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';
import {Router} from '@angular/router';
import {Element} from '../../shared/model/complex-results/element.model';


@Component({
  selector: 'cp-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _components: Set<Interactor>;

  listView = false;
  navigatorView = true;
  SubCompInteractorDisplay = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  get components(): Set<Interactor> {
    return this._components;
  }

  @Input()
  set components(value: Set<Interactor>) {
    this._components = value;
  }

  public doesComplexHaveComponent(complex, componentId): boolean {
    return complex.components.some(component => component.id === componentId);
  }

  public stochiometryOfComponentInComplex(complex, componentId): string {
    const match = complex.components.find(component => component.id === componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        return (match.stochiometry).substring(22, 24); // .substring to only select the maxValue
      } else {
        return '1'; // sometimes we don't have the stoichiometry value, we put default to 1
      }
    }
    return null;
  }

  public stoichiometryOfMainComplex(complex, interactor): string {
    const matchSub = complex.components.find(component => component.interactorType === 'stable complex'); /* look for subcomplexes */
    if (!!matchSub) {
      if (!!interactor.stochiometry) {
        return (interactor.stochiometry).substring(22, 24); // .substring to only select the maxValue
      } else {
        return '1'; // sometimes we don't have the stoichiometry value, we put default to 1
      }
    }
    return null;
  }

  public isComponentASubcomplex(component): boolean {
    return (component.interactorType) === 'stable complex';
  }

  public componentToComplex(component, ComplexSearch): Element {
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

  search(componentId: string) {
    const url = this.router.serializeUrl(this.router.createUrlTree(
      ['complex/search'],
      {queryParams: {query: componentId, page: 1}}));
    window.open(url, '_blank');
  }

  toggleSubCompInteractorDisplay() {
    this.SubCompInteractorDisplay = !this.SubCompInteractorDisplay;
  }

}
