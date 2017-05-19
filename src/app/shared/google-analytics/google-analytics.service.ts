import {Injectable} from '@angular/core';
import {Angulartics2} from "angulartics2";
import {Category} from "./category.enum";
import {Action} from "./action.enum";

@Injectable()
export class GoogleAnalyticsService {

  constructor(private angulartics2: Angulartics2) {
  }

  public invokeCustomEvent(value: Action, category: Category, label: string): void {
    this.angulartics2.eventTrack.next({action: Action[value], properties: {category: Category[category], label: label}});
  }
}
