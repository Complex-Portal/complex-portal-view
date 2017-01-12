import {Features} from './features.model';
/**
 * Created by mkoch on 19/07/2016.
 */
export class CrossReference {
  private _database: string;
  private _qualifier: string;
  private _identifier: string;
  private _description: string;
  private _searchURL: string;
  private _dbMI: string;
  private _qualifierMI: string;
  private _dbdefinition: string;
  private _qualifierDefinition: string;
  private _linkedFeatures: Features[];
  private _otherFeatures: Features[];

  constructor(database: string, qualifier: string, identifier: string, description: string, searchURL: string,
              dbMI: string, qualifierMI: string, dbdefinition: string, qualifierDefinition: string,
              linkedFeatures: Features[], otherFeatures: Features[]) {
    this._database = database;
    this._qualifier = qualifier;
    this._identifier = identifier;
    this._description = description;
    this._searchURL = searchURL;
    this._dbMI = dbMI;
    this._qualifierMI = qualifierMI;
    this._dbdefinition = dbdefinition;
    this._qualifierDefinition = qualifierDefinition;
    this._linkedFeatures = linkedFeatures;
    this._otherFeatures = otherFeatures;
  }

  get database(): string {
    return this._database;
  }

  set database(value: string) {
    this._database = value;
  }

  get qualifier(): string {
    return this._qualifier;
  }

  set qualifier(value: string) {
    this._qualifier = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get searchURL(): string {
    return this._searchURL;
  }

  set searchURL(value: string) {
    this._searchURL = value;
  }

  get dbMI(): string {
    return this._dbMI;
  }

  set dbMI(value: string) {
    this._dbMI = value;
  }

  get qualifierMI(): string {
    return this._qualifierMI;
  }

  set qualifierMI(value: string) {
    this._qualifierMI = value;
  }

  get dbdefinition(): string {
    return this._dbdefinition;
  }

  set dbdefinition(value: string) {
    this._dbdefinition = value;
  }

  get qualifierDefinition(): string {
    return this._qualifierDefinition;
  }

  set qualifierDefinition(value: string) {
    this._qualifierDefinition = value;
  }

  get linkedFeatures(): Features[] {
    return this._linkedFeatures;
  }

  set linkedFeatures(value: Features[]) {
    this._linkedFeatures = value;
  }

  get otherFeatures(): Features[] {
    return this._otherFeatures;
  }

  set otherFeatures(value: Features[]) {
    this._otherFeatures = value;
  }
}
