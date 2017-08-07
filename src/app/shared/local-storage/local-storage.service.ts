import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  public static saveInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }


}
