import {CrossReference} from './cross-reference.model';
/**
 * Created by mkoch on 19/07/2016.
 */
export class IntenzCrossReference {
  private _crossReference: CrossReference;
  private _enzymeUrl: string;

  constructor(crossReference: CrossReference) {
    this._crossReference = crossReference;
    this._enzymeUrl = 'https://enzyme.expasy.org/EC/' + crossReference.identifier;
  }

  get crossReference(): CrossReference {
    return this._crossReference;
  }

  set crossReference(value: CrossReference) {
    this._crossReference = value;
  }

  get enzymeUrl(): string {
    return this._enzymeUrl;
  }

  set enzymeUrl(value: string) {
    this._enzymeUrl = value;
  }
}
