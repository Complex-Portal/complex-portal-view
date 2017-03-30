import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private _searchQuery : string = "Hallo";

  constructor() { }

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(value: string) {
    this._searchQuery = value;
  }
}
