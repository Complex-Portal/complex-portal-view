import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';

@Component({
  selector: 'cp-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _componentIds;

  listView = false;
  navigatorView = true;
  constructor() {
  }

  ngOnInit() {
  }

  get componentIds(): Set<string> {
    return this._componentIds;
  }

  @Input()
  set componentIds( value: Set<string>) {
    this._componentIds = value;
  }

  public doesComplexHaveComponent(complex, componentId): boolean {
    return complex.components.some(component => component.id === componentId);
  }

  public stochiometryOfComponentInComplex(complex, componentId): string {
    const match = complex.components.find(component => component.id === componentId);
    if (!!match) {
      if (!!match.stochiometry) {
        return (match.stochiometry).substring(22,24); //.substring to only select the maxValue
      } else {
        return '1'; //sometimes we don't have the stochiometry value, we put default to 1
      }
    }
    return null;
  }

  public checkForSubcomplexes(complex,complexId):boolean {
    return complex.components.some(component => component.id === complexId);
  }

  public isComponentASubcomplex(component):boolean{
    if ((component.interactorType) === "stable complex"){
      return true;
    }
    return false;
  }

}
