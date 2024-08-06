import {CrossReference} from './cross-reference.model';
/**
 * Created by mkoch on 19/07/2016.
 */
export class RheaCrossReference {
  crossReference: CrossReference;
  identifier: string;
  displayed: boolean;

  constructor(crossReference: CrossReference) {
    this.crossReference = crossReference;
    this.identifier = crossReference.identifier.replace(/rhea:/gi, '');
    this.displayed = false;
  }
}
