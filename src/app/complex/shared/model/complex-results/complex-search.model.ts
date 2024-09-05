import {Element} from './element.model';
import {Facets} from './facets.model';

export interface ComplexSearchResult {
  size: number;
  totalNumberOfResults: number;
  elements: Element[];
  facets: Facets;
}
