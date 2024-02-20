import {Participant} from '../complex-details/participant.model';
import {ComplexComponent} from './complex-component.model';

export class Element {
  private _complexAC: string;
  private _complexName: string;
  private _organismName: string;
  private _description: string;
  private _components: ComplexComponent[];


  constructor(complexAC: string, complexName: string, organismName: string, description: string, components: ComplexComponent[]) {
    this._complexAC = complexAC;
    this._complexName = complexName;
    this._organismName = organismName;
    this._description = description;
    this._components = components;
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

  set components(ids:ComplexComponent[]){
    this._components=ids;
  }
  get components(): ComplexComponent[]{
    return this._components;
  }
}
