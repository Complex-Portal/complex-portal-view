export class Interactor {
  private _id: string;
  private _interactorType: string;

  constructor(_id: string, _interactorType: string) {
    this._id = _id;
    this._interactorType = _interactorType;
  }

  get id(): string {
    return this._id;
  }

  get interactorType(): string{
    return this._interactorType;
  }
}
