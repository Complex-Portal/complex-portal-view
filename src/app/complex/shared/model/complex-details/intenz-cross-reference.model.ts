import {CrossReference} from './cross-reference.model';

export class IntEnzCrossReference {
  crossReference: CrossReference;
  identifier: string;
  enzymeURL: string;

  constructor(crossReference: CrossReference) {
    this.crossReference = crossReference;
    this.identifier = crossReference.identifier;
    this.enzymeURL = 'https://enzyme.expasy.org/EC/' + crossReference.identifier;
  }

}
