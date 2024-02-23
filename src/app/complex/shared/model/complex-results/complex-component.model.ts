export class ComplexComponent {
  private _id: string;
  private _stochiometry: string;
  private _interactorType: string;

  constructor(_id: string, _stochiometry: string, _interactorType: string) {
    this._id = _id;
    this._stochiometry = _stochiometry;
    this._interactorType = _interactorType;
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
}
