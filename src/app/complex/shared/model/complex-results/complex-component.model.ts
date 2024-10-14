import {XRef} from './xref.model';

export interface ComplexComponent {
  ac: string;
  identifier: string;
  identifierLink: string;
  name: string;
  description: string;
  stoichiometry: string;
  interactorType: string;
  organismName: string;
  xrefs: XRef[];
}
