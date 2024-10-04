import {computed, effect, Injectable, input, model, ModelSignal} from '@angular/core';
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
      this.updateLocalStorage(this.params());
      this.router.navigate([], {queryParams: this.params(), queryParamsHandling: 'merge'});
    }, {allowSignalWrites: true});
  }

  private updateLocalStorage(params: any): void {
    for (const param of Object.keys(params)) {
      const value = params[param];
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

  interactorWidth = model<number>(230);
  isSorted = computed(() => this.componentsSorting() !== NavigatorComponentSorting.DEFAULT);
  sortingWidth = computed(() => this.isSorted() ? 20 : 0);
  interactorHeaderWidth = computed(() => this.interactorWidth() + this.sortingWidth());

  adjustColumnWidth(totalComponentWidth: number, numberOfColumns: number) {
    this.columnWidth.set(
      Math.max(
        (totalComponentWidth - this.interactorHeaderWidth() - this.spaceHolderWidth()) / numberOfColumns,
        70
      )
    );
  }

  /* TILTED HEADER STATS
   * Explanations on https://www.geogebra.org/calculator/jtx3rcs4
   */

  /**
   * Angle of headers when more than 6 columns, in deg
   */
  angle = model<number>(45);

  /**
   * Width of a single column of complex when more than 6 columns, in px.
   * This is calculated based on the total width and the number of columns.
   */
  columnWidth = model<number>(70);
  /**
   * Height of the displayed part of the tilted headers after rotation, in px
   */
  displayedHeight = model<number>(200);

  /**
   * JS trigo function are working in rad, so we need to convert them into rad
   */
  _angleRad = computed(() => this.angle() * Math.PI / 180);
  /**
   * For some reason the upper header is shifted by one pixel left to the rest of the table.
   * This translateX fix that.
   * The rotate is the real important bit
   */
  transform = computed(() => `translateX(1px) rotate(${this.angle()}deg)`);
  /**
   * Length of the right side of the hidden triangle after rotation.<br>
   * Used to know the real height of the inner element, and to place padding.<br>
   * Illustration at https://www.geogebra.org/calculator/jtx3rcs4
   */
  opposite = computed(() => this.columnWidth() * Math.sin(this._angleRad()));
  /**
   * Length of the left side of the hidden triangle after rotation.<br>
   * Used to know the width of the inner element<br>
   * Illustration at https://www.geogebra.org/calculator/jtx3rcs4
   */
  adjacent = computed(() => this.columnWidth() * Math.cos(this._angleRad()));
  /**
   * Real height of the inner element.<br>
   * Illustration at https://www.geogebra.org/calculator/jtx3rcs4
   */
  contentHeight = computed(() => this.displayedHeight() / Math.cos(this._angleRad()) + this.opposite());
  /**
   * Width of the slope, used for the terminal placeholder.<br>
   * Illustration at https://www.geogebra.org/calculator/jtx3rcs4
   */
  spaceHolderWidth = computed(() => this.displayedHeight() * Math.tan(this._angleRad()));
}
