export class ComplexComponent {
  private _identifier: string;
  private _identifierLink: string;
  private _name: string;
  private _description: string;
  private _stochiometry: string;
  private _interactorType: string;

  constructor(identifier: string,
              identifierLink: string,
              name: string,
              description: string,
              stochiometry: string,
              interactorType: string) {
    this._identifier = identifier;
    this._identifierLink = identifierLink;
    this._name = name;
    this._description = description;
    this._stochiometry = stochiometry;
    this._interactorType = interactorType;
  }

  get identifier(): string {
    return this._identifier;
  }

  get identifierLink(): string {
    return this._identifierLink;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get stochiometry(): string {
    return this._stochiometry;
  }

  get interactorType(): string {
    return this._interactorType;
  }
}
