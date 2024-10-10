import {Component, input, computed} from '@angular/core';
import {findComponentInComplex} from '../../../complex-navigator-utils';
import {NavigatorComplex} from '../../model/navigator-complex.model';
import {INavigatorComponent, INavigatorSubComponent} from '../../model/navigator-component.model';

@Component({
  selector: 'cp-table-subcomponent-interactor',
  templateUrl: './table-subcomponent-interactor.component.html',
  styleUrls: ['./table-subcomponent-interactor.component.scss']
})

export class TableSubcomponentInteractorComponent {
  complex = input<NavigatorComplex>();
  i = input<number>();
  j = input<number>();
  navigatorComponents = input<INavigatorComponent[]>();

  navigatorComponent = computed(() =>
    findComponentInComplex(this.complex().complex, [this.subcomponent.identifier], this.navigatorComponents()));
  displayTopLineClass = computed(() =>
    this.displayTopLineClassExpanded(this.complex(), this.navigatorComponents(), this.i(), this.j()));
  displayBottomLineClass = computed(() =>
    this.displayBottomLineClassExpanded(this.complex(), this.navigatorComponents(), this.i(), this.j()));

  get subcomponent(): INavigatorSubComponent {
    return this.navigatorComponents()[this.i()].subComponents[this.j()];
  }

  public displayTopLineClassExpanded(complex: NavigatorComplex,
                                     navigatorComponents: INavigatorComponent[],
                                     componentIndex: number,
                                     subComponentIndex: number): string {

    if (this.doesLineCrossSubcomponentCell(complex, componentIndex, subComponentIndex)) {
      return 'vertical-line';
    }
    if (this.doesLineEndOnSubcomponentCell(complex, componentIndex, subComponentIndex) &&
      !this.doesLineStartOnSubcomponentCell(complex, navigatorComponents, componentIndex, subComponentIndex)) {
      return 'vertical-line';
    }

    return 'transparent-vertical-line';
  }

  public displayBottomLineClassExpanded(complex: NavigatorComplex,
                                        navigatorComponents: INavigatorComponent[],
                                        componentIndex: number,
                                        subComponentIndex: number): string {

    if (this.doesLineCrossSubcomponentCell(complex, componentIndex, subComponentIndex)) {
      return 'vertical-line';
    }
    if (this.doesLineStartOnSubcomponentCell(complex, navigatorComponents, componentIndex, subComponentIndex) &&
      !this.doesLineEndOnSubcomponentCell(complex, componentIndex, subComponentIndex)) {
      return 'vertical-line';
    }

    return 'transparent-vertical-line';
  }

  private doesLineCrossSubcomponentCell(complex: NavigatorComplex, componentIndex: number, subComponentIndex: number): boolean {
    if (complex.startComponentIndex != null && complex.endComponentIndex != null) {
      // The line starts before this component and ends after, so it crosses through all the subcomponents of the component
      if (complex.startComponentIndex < componentIndex && complex.endComponentIndex > componentIndex) {
        return true;
      }

      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this component, and it ends on a later subcomponent, so it crosses through this subcomponent
        if (complex.startComponentIndex < componentIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this subcomponent, and it ends on a later component, so it crosses through this subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endComponentIndex > componentIndex) {
          return true;
        }
      }
    }

    return false;
  }

  private doesLineStartOnSubcomponentCell(complex: NavigatorComplex,
                                          navigatorComponents: INavigatorComponent[],
                                          componentIndex: number,
                                          subComponentIndex: number): boolean {
    // The line starts at this component or on any of its subcomponents
    if (complex.startComponentIndex != null && complex.startComponentIndex === componentIndex) {
      if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
        // If the expanded component is part of the complex, the line starts in the cell of the component, meaning it cannot
        // start on any subcomponent.
        // Otherwise, it starts on the subcomponent with the index subComponentIndex
        return !complex.complex.interactors.some(component =>
          navigatorComponents[componentIndex].identifier === component.identifier);

      }
    }

    return false;
  }

  private doesLineEndOnSubcomponentCell(complex: NavigatorComplex, componentIndex: number, subComponentIndex: number): boolean {
    if (complex.endComponentIndex != null && complex.endComponentIndex === componentIndex) {
      // The line ends at this component and this subcomponent
      if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
        return true;
      }
    }
    return false;
  }
}
