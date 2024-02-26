export class ComplexComponent {
  private _id: string;
  private _stochiometry: string;
  private _interactorType: string;
  private _interactorName: string;

  constructor(_id: string, _stochiometry: string, _interactorType: string, _interactorName: string) {
    this._id = _id;
    this._stochiometry = _stochiometry;
    this._interactorType = _interactorType;
    this._interactorName = _interactorName;
  }

  get id(): string {
    return this._id;
  }

  get stochiometry(): string {
    return this._stochiometry;
  }

  get interactorType(): string {
    return this._interactorType;
  }

  get interactorName(): string {
    return this._interactorName;
  }
}
