export class ReactomePathway {
  private _id : string;
  private _name : string;
  private _complexes : string[] = [];

  constructor(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get complexes(): string[] {
    return this._complexes;
  }

  set complexes(value: string[]) {
    this._complexes = value;
  }
}
