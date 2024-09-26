import {XRef} from './interactor.model';
import {INavigatorSubComponent} from '../../../complex-results/complex-navigator/table-structure/model/navigator-component.model';

export interface ComplexComponent extends INavigatorSubComponent {
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  stoichiometry: string;
  interactorType: string;
  organismName: string;
  xrefs: XRef[];
}
