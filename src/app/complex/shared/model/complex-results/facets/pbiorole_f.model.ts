import {Facet} from './facet.model';

export class BiologicalRoleFacet implements Facet {
  private _name: string;
  private _count: number;

  constructor(name: string, count: number) {
    this._name = name;
    this._count = count;
  }

  get name(): string {
    return this._name;
  }

  get count(): number {
    return this._count;
  }
}
