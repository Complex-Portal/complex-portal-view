export class Element {
  private _complexAC:string;
  private _complexName:string;
  private _organismName:string;
  private _description:string;


  constructor(complexAC:string, complexName:string, organismName:string, description:string) {
      this._complexAC = complexAC;
      this._complexName = complexName;
      this._organismName = organismName;
      this._description = description;
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
}
