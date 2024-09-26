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
      for (const param of Object.keys(this.params())) {
        if (!queryParams[param]) {
          continue;
        }

        let newValue: any;
        switch (typeof this[param]()) {
          case 'boolean':
            newValue = queryParams[param] === 'true';
            break;
          default:
            newValue = queryParams[param];
        }
        if (newValue !== this[param]()) {
          this[param].set(newValue);
        }
      }
    });
    effect(() => {
      if (this.ignore) {
        return;
      }
      this.router.navigate([], {queryParams: this.params(), queryParamsHandling: 'merge'});
    }, {allowSignalWrites: true});
  }
}
