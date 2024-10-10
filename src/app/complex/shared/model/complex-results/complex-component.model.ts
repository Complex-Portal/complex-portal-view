import {XRef} from './xref.model';

export interface ComplexComponent {
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  stoichiometry: string;
  interactorType: string;
  organismName: string;
  xrefs: XRef[];
}
