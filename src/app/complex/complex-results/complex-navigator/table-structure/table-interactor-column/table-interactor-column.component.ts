import {Component, computed, effect, input} from '@angular/core';
import {Complex} from '../../../../shared/model/complex-results/complex.model';
import {NavigatorComplex} from '../model/navigator-complex.model';
import {INavigatorComponent} from '../model/navigator-component.model';
import {findComponentInComplex} from '../../complex-navigator-utils';
import {
  NavigatorComponentSorting,
  NavigatorStateService
} from '../../service/state/complex-navigator-display.service';

interface Range {
  value: string;
  start: number;
  length: number;
}

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent {
  complexes = input<Complex[]>([]);
  navigatorComponents = input<INavigatorComponent[]>();
  shadowVisible = input<boolean>(false);

  isSorting = computed(() => this.state.componentsSorting() !== NavigatorComponentSorting.DEFAULT);
  fixedWidth = computed(() => this.complexes().length > 6);

  navigatorComplexes: NavigatorComplex[];
  ranges: Range[] = [];

  timesAppearingBy: { [k: string]: Map<string, number> } = {
    [NavigatorComponentSorting.TYPE]: new Map<string, number>(),
    [NavigatorComponentSorting.ORGANISM]: new Map<string, number>()
  };

  protected readonly NavigatorComponentSorting = NavigatorComponentSorting;

  constructor(public state: NavigatorStateService) {
    effect(() => this.calculateTimesAppearing(this.complexes(), this.navigatorComponents()));
    effect(() => this.sortNavigatorComponents(this.navigatorComponents(), this.complexes(), this.state.componentsSorting()));
  }

  private sortNavigatorComponents(navigatorComponents: INavigatorComponent[],
                                  complexes: Complex[],
                                  componentsSorting: NavigatorComponentSorting): void {
    if (!!navigatorComponents && !!complexes) {
      // When we sort, we update the local variable in the component instead of just sorting inside the navigatorInteractors object.
      // This way we enforce an update on the objects used in the HTML and angular needs to re-run the signals to draw the table.
      this.classifyComponents(componentsSorting);
      this.navigatorComplexes = this.createNavigatorComplexes(complexes);
    }
  }

  private classifyComponents(componentsSorting: NavigatorComponentSorting): void {
    if (!!componentsSorting && !!this.navigatorComponents() && this.navigatorComponents().length > 0) {
      if (componentsSorting === NavigatorComponentSorting.TYPE || componentsSorting === NavigatorComponentSorting.ORGANISM) {
        this.classifyBy(componentsSorting);
      } else {
        this.classifyComponentsByOccurrence();
      }
    }
  }

  toggleSubcomplexExpandable(i: number): void {
    this.navigatorComponents()[i].expanded = !this.navigatorComponents()[i].expanded;

    if (this.navigatorComponents()[i].expanded) {
      this.collapseAllButOne(i);
      this.hideRowsDisplayedAsSubcomponents(i);
    } else {
      this.displayAllRows();
    }

    // Something has been expanded or collapsed, we need to sort and recalculate the start and end indexes for the lines
    this.sortNavigatorComponents(this.navigatorComponents(), this.complexes(), this.state.componentsSorting());
  }

  private collapseAllButOne(rowIndex: number): void {
    for (let i = 0; i < this.navigatorComponents().length; i++) {
      if (rowIndex !== i) {
        this.navigatorComponents()[i].expanded = false;
      }
    }
  }

  private hideRowsDisplayedAsSubcomponents(rowIndex: number): void {
    if (!!this.navigatorComponents()[rowIndex].subComponents) {
      const subInteractorIds: string[] =
        this.navigatorComponents()[rowIndex].subComponents.map(component => component.identifier);
      for (let i = 0; i < this.navigatorComponents().length; i++) {
        if (rowIndex !== i) {
          this.navigatorComponents()[i].hidden =
            !!subInteractorIds.includes(this.navigatorComponents()[i].identifier);
        }
      }
    }
  }

  private displayAllRows(): void {
    for (let i = 0; i < this.navigatorComponents().length; i++) {
      this.navigatorComponents()[i].hidden = false;
    }
  }

  private createNavigatorComplexes(complexes: Complex[]): NavigatorComplex[] {
    const navigatorComplexes: NavigatorComplex[] = [];
    for (const complex of complexes) {
      navigatorComplexes.push(this.calculateStartAndEndIndexes(complex));
    }
    return navigatorComplexes;
  }

  private getMinValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.min(valueA, valueB);
  }

  private getMaxValue(valueA: number, valueB: number) {
    if (valueB === null) {
      return valueA;
    }
    if (valueA === null) {
      return valueB;
    }
    return Math.max(valueA, valueB);
  }

  private calculateStartAndEndIndexes(complex: Complex): NavigatorComplex {
    const navigatorComplex: NavigatorComplex = {
      complex,
      startComponentIndex: null,
      endComponentIndex: null,
      startSubComponentIndex: null,
      endSubComponentIndex: null
    };

    // We iterate through the components to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all components in the complex
    for (let i = 0; i < this.navigatorComponents().length; i++) {
      if (!this.navigatorComponents()[i].hidden) {
        if (!!findComponentInComplex(complex, this.navigatorComponents()[i].componentIds(), this.navigatorComponents())) {
          this.updateComponentIndexes(navigatorComplex, i);
        } else if (this.navigatorComponents()[i].expanded) {
          // The component is not part of the complex, but it has subcomponents and it is expanded.
          // This means the subcomponents are visible, and any of them could be part of the complex.
          // In that case, the line could start or end on any of those subcomponents
          for (let j = 0; j < this.navigatorComponents()[i].subComponents.length; j++) {
            if (!!findComponentInComplex(
              complex, [this.navigatorComponents()[i].subComponents[j].identifier], this.navigatorComponents())) {

              this.updateSubcomponentIndexes(navigatorComplex, i, j);
            }
          }
        }
      }
    }

    return navigatorComplex;
  }

  private updateComponentIndexes(navigatorComplex: NavigatorComplex,
                                 componentIndex: number): void {

    // The component is part of the complex, we update the start and end indices for the component
    // line as it may start in this component
    navigatorComplex.startComponentIndex = this.getMinValue(navigatorComplex.startComponentIndex, componentIndex);
    navigatorComplex.endComponentIndex = this.getMaxValue(navigatorComplex.endComponentIndex, componentIndex);

    const navigatorComponent: INavigatorComponent = this.navigatorComponents()[componentIndex];
    if (navigatorComponent.expanded) {
      // If the component has subcomponents, as the component is part of the complex, the line started at the component or before,
      // so it must connect from the component to the subcomponents, so we start it at -1 to make sure it starts at the component cell
      // and not at the first subcomponent
      navigatorComplex.startSubComponentIndex = -1;

      if (navigatorComponent.interactorType === 'stable complex') {
        // If the expanded component is a subcomplex, as the subcomplex is part of the complex, all its subcomponents are also part
        // of it. That means the line will connect to all the subcomponents
        navigatorComplex.endSubComponentIndex = navigatorComponent.subComponents.length - 1;
      } else {
        // The component is not a subcomplex, so we need to find the subcomponents that are part of the complex
        // to know where the line ends
        for (let j = 0; j < navigatorComponent.subComponents.length; j++) {
          if (!!findComponentInComplex(
            navigatorComplex.complex, [navigatorComponent.subComponents[j].identifier], this.navigatorComponents())) {
            this.updateSubcomponentIndexes(navigatorComplex, componentIndex, j);
          }
        }
      }
    }
  }

  private updateSubcomponentIndexes(navigatorComplex: NavigatorComplex, componentIndex: number, subcomponentIndex: number): void {
    // The subcomponent of this component is part of the complex, we update the start and end indices for the components
    // line as it may start in this component
    navigatorComplex.startComponentIndex = this.getMinValue(navigatorComplex.startComponentIndex, componentIndex);
    navigatorComplex.endComponentIndex = this.getMaxValue(navigatorComplex.endComponentIndex, componentIndex);
    // The subcomponent of this component is part of the complex, we update the start and end indices for the subcomponents
    // line as it may start in this subcomponent
    navigatorComplex.startSubComponentIndex = this.getMinValue(navigatorComplex.startSubComponentIndex, subcomponentIndex);
    navigatorComplex.endSubComponentIndex = this.getMaxValue(navigatorComplex.endSubComponentIndex, subcomponentIndex);
  }

  private compareFn(a: INavigatorComponent, b: INavigatorComponent) {
    return -(b.indexAppearing - a.indexAppearing) || // First by order of appearance (staircase effect)
      -(b.timesAppearing - a.timesAppearing); // Then by reversed occurrence, in order to minimize edge length
  }

  private classifyComponentsByOccurrence() {
    this.navigatorComponents().sort(this.compareFn.bind(this));
    this.ranges = [];
  }

  public classifyBy(componentsSorting: NavigatorComponentSorting) {
    const key = componentsSorting.valueOf();
    this.navigatorComponents().sort((a, b) => {
      const aValue = this.getValueOfSortingField(a, componentsSorting);
      const bValue = this.getValueOfSortingField(b, componentsSorting);
      return this.timesAppearingBy[key].get(bValue) - this.timesAppearingBy[key].get(aValue) ||
        bValue.localeCompare(aValue) ||
        this.compareFn(a, b);
    });
    this.calculateRangesBy(componentsSorting);
  }

  private calculateRangesBy(componentsSorting: NavigatorComponentSorting) {
    const ranges: Range[] = [];
    let length = 0;
    let start = null;
    for (let i = 0; i < this.navigatorComponents().length; i++) {
      if (!this.navigatorComponents()[i].hidden) {
        length += 1;
        if (start === null) {
          start = i;
        }
      }
      const value = this.getValueOfSortingField(this.navigatorComponents()[i], componentsSorting);
      if (!this.navigatorComponents()[i + 1]
        || (this.navigatorComponents()[i].expanded)
        || value !== this.getValueOfSortingField(this.navigatorComponents()[i + 1], componentsSorting)) {
        if (start !== null) {
          ranges.push({value, start, length});
          start = null;
        }
        length = 0;
      }
    }
    this.ranges = ranges;
  }

  // isComponentsSortingSet() {
  //   return this.state.componentsSorting() === 'Type' || this.state.componentsSorting() === 'Organism';
  // }

  getExpandedRowClass(i: number, length: number): string {
    if (i === 0) {
      if (length === 1) {
        return 'singleExpandedRow';
      } else {
        return 'firstExpandedRow';
      }
    } else if (i === length - 1) {
      return 'lastExpandedRow';
    }
    return null;
  }

  private calculateTimesAppearing(complexes: Complex[], navigatorComponents: INavigatorComponent[]) {
    // Initialise times appearing by type or organism
    for (const map of Object.values(this.timesAppearingBy)) {
      map.clear();
    }

    for (const component of navigatorComponents) {
      // Initialise times appearing for each interactor
      component.timesAppearing = 0;
      for (const complex of complexes) {
        const match = findComponentInComplex(complex, component.componentIds(), navigatorComponents);
        if (!!match) {
          // Update times appearing for the interactor
          component.timesAppearing = component.timesAppearing + 1;
          // Update times appearing for the different properties
          for (const key of Object.keys(this.timesAppearingBy)) {
            const map = this.timesAppearingBy[key];
            const value = this.getValueOfSortingField(component, key);
            map.set(value, (map.get(value) || 0) + 1);
          }
        }
      }
    }
  }

  private getValueOfSortingField(component: INavigatorComponent, componentsSorting: string): string {
    if (componentsSorting === NavigatorComponentSorting.TYPE) {
      return component.interactorType;
    } else if (componentsSorting === NavigatorComponentSorting.ORGANISM) {
      return component.organismName;
    }
    return null;
  }
}
