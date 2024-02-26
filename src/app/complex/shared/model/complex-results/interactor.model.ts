export class Interactor {
  private _id: string;
  private _interactorType: string;
  private _interactorName: string;

  constructor(_id: string, _interactorType: string, _interactorName: string) {
    this._id = _id;
    this._interactorType = _interactorType;
    this._interactorName = _interactorName;
  }

  get id(): string {
    return this._id;
  }

  get interactorType(): string {
    return this._interactorType;
  }

  get interactorName(): string {
    return this._interactorName;
  }

}
