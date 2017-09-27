import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  public static saveInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }


}
