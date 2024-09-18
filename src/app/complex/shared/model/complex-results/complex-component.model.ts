import {XRef} from './interactor.model';

export interface ComplexComponent {
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  stochiometry: string;
  interactorType: string;
  organismName: string;
  xrefs: XRef[];
}
