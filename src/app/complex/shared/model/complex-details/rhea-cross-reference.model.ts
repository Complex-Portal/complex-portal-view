import {CrossReference} from './cross-reference.model';
/**
 * Created by mkoch on 19/07/2016.
 */
export class RheaCrossReference {
  private _crossReference: CrossReference;
  private _identifier: string;
  private _displayed: boolean;

  constructor(crossReference: CrossReference) {
    this._crossReference = crossReference;
    this._identifier = crossReference.identifier.replace(/rhea:/gi, '');
    this.displayed = false;
  }

  get crossReference(): CrossReference {
    return this._crossReference;
  }

  set crossReference(value: CrossReference) {
    this._crossReference = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get displayed(): boolean {
    return this._displayed;
  }

  set displayed(value: boolean) {
    this._displayed = value;
  }
}
