import {CrossReference} from './cross-reference.model';

export class IntEnzCrossReference {
  private _crossReference: CrossReference;
  private _identifier: string;
  private _enzymeURL: string;

  constructor(crossReference: CrossReference) {
    this._crossReference = crossReference;
    this._identifier = crossReference.identifier;
    this._enzymeURL = 'https://enzyme.expasy.org/EC/' + crossReference.identifier;
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

  get enzymeURL(): string {
    return this._enzymeURL;
  }
}
