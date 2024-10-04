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

  /* TILTED HEADER STATS
   * Explanations on https://www.geogebra.org/calculator/jtx3rcs4
   */

  /**
   * Number of columns in the complex navigator.
   */
  numberOfColumns = model<number>(20);
  /**
   * Angle of headers when more than 6 columns, in deg
   */
  angle = model<number>(45);
  /**
   * Minimum width to use for the columns, in px.
   * This is to make that with a large number of columns, columns are still wise enough to be readable.
   */
  minColumnWidth = model<number>(70);
  /**
   * Used to calculate the total width, assuming a maximum number of columns of 20.
   * This is true on the search results, but not on the basket.
   */
  maxNumberOfColumns = model<number>(20);
  /**
   * The total width of all columns, meaning the width of the complex navigator excluding the header column.
   * We calculate this for 20 columns (max number of columns), each with 70px width (min width).
   */
  totalColumnWidth = computed(() => this.minColumnWidth() * this.maxNumberOfColumns());
  /**
   * Width of a single column of complex when more than 6 columns, in px.
   * This is calculated based on the total width and the number of columns.
   */
  columnWidth = computed(() => Math.max(this.totalColumnWidth() / this.numberOfColumns(), this.minColumnWidth()));
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
