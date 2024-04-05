import {ComplexComponent} from './complex-component.model';

export class Element {
  private _complexAC: string;
  private _complexName: string;
  private _organismName: string;
  private _description: string;
  private _interactors: ComplexComponent[];


  constructor(complexAC: string, complexName: string, organismName: string, description: string, interactors: ComplexComponent[]) {
    this._complexAC = complexAC;
    this._complexName = complexName;
    this._organismName = organismName;
    this._description = description;
    this._interactors = interactors;
  }

  get complexAC(): string {
    return this._complexAC;
  }

  get complexName(): string {
    return this._complexName;
  }

  get organismName(): string {
    return this._organismName;
  }

  get description(): string {
    return this._description;
  }

  get interactors(): ComplexComponent[] {
    return this._interactors;
  }
}
