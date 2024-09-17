import {Complex} from './complex.model';
import {Facets} from './facets.model';

export interface ComplexSearchResult {
  size: number;
  totalNumberOfResults: number;
  elements: Complex[];
  facets: Facets;
}
