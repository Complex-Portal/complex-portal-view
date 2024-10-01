import {computed, effect, Injectable, model, ModelSignal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

export enum NavigatorComponentSorting {
  DEFAULT = 'Default',
  TYPE = 'Type',
  ORGANISM = 'Organism'
}

export enum SearchDisplay {
  navigator = 'navigator-view',
  list = 'list-view',
}

@Injectable()
export class NavigatorStateService {
  mergeOrthologs = model<boolean>(false);
  componentsSorting = model<NavigatorComponentSorting>(NavigatorComponentSorting.DEFAULT);
  idDisplay = model<boolean>(true);
  organismIconDisplay = model<boolean>(true);
  typeIconDisplay = model<boolean>(true);

  displayOptions: { name: string, value: ModelSignal<boolean> }[] = [
    {name: 'Component AC', value: this.idDisplay},
    {name: 'Organism', value: this.organismIconDisplay},
    {name: 'Type', value: this.typeIconDisplay}
  ];


  params = computed(() => ({
    mergeOrthologs: this.mergeOrthologs(),
    componentsSorting: this.componentsSorting(),
    idDisplay: this.idDisplay(),
    organismIconDisplay: this.organismIconDisplay(),
    typeIconDisplay: this.typeIconDisplay(),
  }));

  ignore = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(queryParams => {
      const paramKeys = Object.keys(this.params());
      for (const param of paramKeys) {
        let value: any;

        // 1. Check URL params first
        if (queryParams[param] !== undefined) {
          value = this.parseParam(param, queryParams[param]);
          // 2. Then check local storage
        } else if (localStorage.getItem(param) !== null) {
          value = this.parseParam(param, localStorage.getItem(param));
        } else {
          value = this[param]();
        }
        if (value !== this[param]()) {
          this[param].set(value);
        }
      }
    });

    effect(() => {
      if (this.ignore) {
        return;
      }
      this.router.navigate([], {queryParams: this.params(), queryParamsHandling: 'merge'});
    }, {allowSignalWrites: true});


    effect(() => {
      this.updateLocalStorage();
    });
  }

  updateLocalStorage(): void {
    for (const param of Object.keys(this.params())) {
      const value = this.params()[param];
      // Only update localStorage if the value is different or not yet set
      if (!localStorage.getItem(param) || localStorage.getItem(param) !== String(value)) {
        localStorage.setItem(param, String(value));
      }
    }
  }

  private parseParam(paramName: string, paramValue: any): any {
    switch (typeof this[paramName]()) {
      case 'boolean':
        return paramValue === 'true';
      default:
        return paramValue;
    }
  }
}
