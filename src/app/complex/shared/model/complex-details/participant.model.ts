/**
 * Created by mkoch on 19/07/2016.
 */
export class Participant {
  private _interactorAC: string;
  private _identifier: string;
  private _identifierLink: string;
  private _name: string;
  private _description: string;
  private _stochiometry: string;
  private _bioRole: string;
  private _bioRoleMI: string;
  private _bioRoleDefinition: string;
  private _interactorType: string;
  private _interactorTypeMI: string;
  private _interactorTypeDefinition: string;

  constructor(interactorAC: string, identifier: string, identifierLink: string, name: string, description: string, stochiometry: string, bioRole: string, bioRoleMI: string, bioRoleDefinition: string, interactorType: string, interactorTypeMI: string, interactorTypeDefinition: string) {
    this._interactorAC = interactorAC;
    this._identifier = identifier;
    this._identifierLink = identifierLink;
    this._name = name;
    this._description = description;
    this._stochiometry = stochiometry;
    this._bioRole = bioRole;
    this._bioRoleMI = bioRoleMI;
    this._bioRoleDefinition = bioRoleDefinition;
    this._interactorType = interactorType;
    this._interactorTypeMI = interactorTypeMI;
    this._interactorTypeDefinition = interactorTypeDefinition;
  }

  get interactorAC(): string {
    return this._interactorAC;
  }

  set interactorAC(value: string) {
    this._interactorAC = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get identifierLink(): string {
    return this._identifierLink;
  }

  set identifierLink(value: string) {
    this._identifierLink = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get stochiometry(): string {
    return this._stochiometry;
  }

  set stochiometry(value: string) {
    this._stochiometry = value;
  }

  get bioRole(): string {
    return this._bioRole;
  }

  set bioRole(value: string) {
    this._bioRole = value;
  }

  get bioRoleMI(): string {
    return this._bioRoleMI;
  }

  set bioRoleMI(value: string) {
    this._bioRoleMI = value;
  }

  get bioRoleDefinition(): string {
    return this._bioRoleDefinition;
  }

  set bioRoleDefinition(value: string) {
    this._bioRoleDefinition = value;
  }

  get interactorType(): string {
    return this._interactorType;
  }

  set interactorType(value: string) {
    this._interactorType = value;
  }

  get interactorTypeMI(): string {
    return this._interactorTypeMI;
  }

  set interactorTypeMI(value: string) {
    this._interactorTypeMI = value;
  }

  get interactorTypeDefinition(): string {
    return this._interactorTypeDefinition;
  }

  set interactorTypeDefinition(value: string) {
    this._interactorTypeDefinition = value;
  }
}
