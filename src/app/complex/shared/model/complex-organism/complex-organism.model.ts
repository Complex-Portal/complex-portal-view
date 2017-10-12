import {SpeciesFacet} from '../complex-results/facets/species_f.model';

export class ComplexOrganisms extends SpeciesFacet {

  private _symbol: string;
  private _type: string;
  private _psi25: string;
  private _psi30: string;
  private _complextab: string;

  constructor(name: string, count: number, symbol: string, type: string, psi25: string, psi30: string, complextab: string) {
    super(name, count);
    this._symbol = symbol;
    this._type = type;
    this._psi25 = psi25;
    this._psi30 = psi30;
    this._complextab = complextab;
  }

  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get psi25(): string {
    return this._psi25;
  }

  set psi25(value: string) {
    this._psi25 = value;
  }

  get psi30(): string {
    return this._psi30;
  }

  set psi30(value: string) {
    this._psi30 = value;
  }

  get complextab(): string {
    return this._complextab;
  }

  set complextab(value: string) {
    this._complextab = value;
  }
}
