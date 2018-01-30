import {Participant} from './participant.model';
import {CrossReference} from './cross-reference.model';

export class ComplexDetails {
  private _ac: string;
  private _complexAc: string;
  private _name: string;
  private _systematicName: string;
  private _species: string;
  private _institution: string;
  private _synonyms: string[];
  private _functions: string[];
  private _properties: string[];
  private _ligands: string[];
  private _complexAssemblies: string[];
  private _diseases: string[];
  private _agonists: string[];
  private _antagonists: string[];
  private _comments: string[];
  private _participants: Participant[];
  private _crossReferences: CrossReference[];

  constructor(ac: string, complexAc: string, name: string, systematicName: string, species: string, institution: string,
              synonyms: string[], functions: string[], properties: string[], ligands: string[],
              complexAssemblies: string[], diseases: string[], agonists: string[], antagonists: string[],
              comments: string[], participants: Participant[], crossReferences: CrossReference[]) {
    this._ac = ac;
    this._complexAc = complexAc;
    this._name = name;
    this._systematicName = systematicName;
    this._species = species;
    this._institution = institution;
    this._synonyms = synonyms;
    this._functions = functions;
    this._properties = properties;
    this._ligands = ligands;
    this._complexAssemblies = complexAssemblies;
    this._diseases = diseases;
    this._agonists = agonists;
    this._antagonists = antagonists;
    this._comments = comments;
    this._participants = participants;
    this._crossReferences = crossReferences;
  }

  get ac(): string {
    return this._ac;
  }

  set ac(value: string) {
    this._ac = value;
  }

  get complexAc(): string {
    return this._complexAc;
  }

  set complexAc(value: string) {
    this._complexAc = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get systematicName(): string {
    return this._systematicName;
  }

  set systematicName(value: string) {
    this._systematicName = value;
  }

  get species(): string {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }

  get institution(): string {
    return this._institution;
  }

  set institution(value: string) {
    this._institution = value;
  }

  get synonyms(): string[] {
    return this._synonyms;
  }

  set synonyms(value: string[]) {
    this._synonyms = value;
  }

  get functions(): string[] {
    return this._functions;
  }

  set functions(value: string[]) {
    this._functions = value;
  }

  get properties(): string[] {
    return this._properties;
  }

  set properties(value: string[]) {
    this._properties = value;
  }

  get ligands(): string[] {
    return this._ligands;
  }

  set ligands(value: string[]) {
    this._ligands = value;
  }

  get complexAssemblies(): string[] {
    return this._complexAssemblies;
  }

  set complexAssemblies(value: string[]) {
    this._complexAssemblies = value;
  }

  get diseases(): string[] {
    return this._diseases;
  }

  set diseases(value: string[]) {
    this._diseases = value;
  }

  get agonists(): string[] {
    return this._agonists;
  }

  set agonists(value: string[]) {
    this._agonists = value;
  }

  get antagonists(): string[] {
    return this._antagonists;
  }

  set antagonists(value: string[]) {
    this._antagonists = value;
  }

  get comments(): string[] {
    return this._comments;
  }

  set comments(value: string[]) {
    this._comments = value;
  }

  get participants(): Participant[] {
    return this._participants;
  }

  set participants(value: Participant[]) {
    this._participants = value;
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }
}
