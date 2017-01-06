import {Element} from './element.model';
import {Facets} from './facets.model';

export class ComplexSearchResult {
  private _size: number;
  private _totalNumberOfResults: number;
  private _elements: Element[];
  private _facets: Facets[];


  constructor(size: number, totalNumberOfResults: number, elements: Element[], facets: Facets[]) {
    this._size = size;
    this._totalNumberOfResults = totalNumberOfResults;
    this._elements = elements;
    this._facets = facets;
  }


  get size(): number {
    return this._size;
  }

  get totalNumberOfResults(): number {
    return this._totalNumberOfResults;
  }

  get elements(): Element[] {
    return this._elements;
  }

  get facets(): Facets[] {
    return this._facets;
  }
}
