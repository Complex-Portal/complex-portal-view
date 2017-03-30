import {Injectable} from '@angular/core';

declare const $: any;


@Injectable()
export class SideMenuService {

  constructor() {
  }

  public static updateSideMenu(elmName): void {
    $('#' + elmName).foundation('_calc', true, scroll);
  }
}
