import {ComplexComponent} from './complex-component.model';

export interface Element {
  complexAC: string;
  complexName: string;
  organismName: string;
  description: string;
  interactors: ComplexComponent[];
  componentAcs?: Set<string>;
  predictedComplex?: boolean;
}
