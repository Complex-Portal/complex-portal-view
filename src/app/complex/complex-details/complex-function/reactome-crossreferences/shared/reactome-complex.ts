import {ReactomePathway} from "./reactome-pathway";
export class ReactomeComplex {
  private _id : string;
  private _name : string;
  private _pathways : string[] = [];

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


  get pathways(): string[] {
    return this._pathways;
  }

  set pathways(value: string[]) {
    this._pathways = value;
  }
}
