import {Facet} from './facets/facet.model';
/**
 * Created by mkoch on 31/10/2016.
 */
export class Facets {
  private _ptype_f: Facet;
  private _species_f: Facet;
  private _pbiorole_f: Facet;


  constructor(ptype_f: Facet, species_f: Facet, pbiorole_f: Facet) {
    this._ptype_f = ptype_f;
    this._species_f = species_f;
    this._pbiorole_f = pbiorole_f;
  }


  get ptype_f(): Facet {
    return this._ptype_f;
  }

  get species_f(): Facet {
    return this._species_f;
  }

  get pbiorole_f(): Facet {
    return this._pbiorole_f;
  }
}
