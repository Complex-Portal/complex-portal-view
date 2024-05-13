export class Interactor {
  private _identifier: string;
  private _identifierLink: string;
  private _name: string;
  private _description: string;
  private _interactorType: string;
  private _organismName: string;

  constructor(identifier: string,
              identifierLink: string,
              name: string,
              description: string,
              interactorType: string, organismName: string) {
    this._identifier = identifier;
    this._identifierLink = identifierLink;
    this._name = name;
    this._description = description;
    this._interactorType = interactorType;
    this._organismName = organismName;
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

  get interactorType(): string {
    return this._interactorType;
  }

  get organismName(): string {
    return this._organismName;
  }
}
