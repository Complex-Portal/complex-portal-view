export class BasketItem {
  private _name: string;
  private _id: string;
  private _date: Date;
  private _organism : string;

  constructor(name: string, id: string, date: Date, organism: string) {
    this._name = name;
    this._id = id;
    this._date = date;
    this._organism = organism;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get organism(): string {
    return this._organism;
  }

  set organism(value: string) {
    this._organism = value;
  }
}
