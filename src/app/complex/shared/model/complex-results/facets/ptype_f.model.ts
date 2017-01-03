import {Facet} from './facet.model';
/**
 * Created by mkoch on 31/10/2016.
 */
export class InteractorTyoe implements Facet {

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
