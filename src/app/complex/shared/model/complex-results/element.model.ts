import {ComplexComponent} from './complex-component.model';

export interface Element {
  complexAC: string;
  complexName: string;
  organismName: string;
  description: string;
  interactors: ComplexComponent[];
  predicted?: boolean;
}
