import {Facet} from '../complex-results/facet.model';

export interface ComplexOrganisms extends Facet {
  scientificName: string;
  nameDetails: string;
  symbol: string;
  type: string;
  psi25: string;
  psi30: string;
  complextab: string;
  taxid: string;
}
