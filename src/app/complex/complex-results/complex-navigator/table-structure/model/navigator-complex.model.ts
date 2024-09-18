import {Complex} from '../../../../shared/model/complex-results/complex.model';

export interface NavigatorComplex {
  complex: Complex;
  startComponentIndex: number;
  endComponentIndex: number;
  startSubComponentIndex: number;
  endSubComponentIndex: number;
}
