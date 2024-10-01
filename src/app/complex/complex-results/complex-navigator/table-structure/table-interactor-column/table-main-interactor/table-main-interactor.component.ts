import {Component, computed, input} from '@angular/core';
import {findComponentInComplex} from '../../../complex-navigator-utils';
import {NavigatorComplex} from '../../model/navigator-complex.model';
import {INavigatorComponent} from '../../model/navigator-component.model';

@Component({
  selector: 'cp-table-main-interactor',
  templateUrl: './table-main-interactor.component.html',
  styleUrls: ['./table-main-interactor.component.css']
})
export class TableMainInteractorComponent {
  complex = input<NavigatorComplex>();
  i = input<number>();
  navigatorComponents = input<INavigatorComponent[]>();

  navigatorComponent = computed(() =>
    findComponentInComplex(this.complex().complex, this.component.componentIds, this.navigatorComponents()));
  topLineClass = computed(() => this.displayTopLineClass(this.complex(), this.navigatorComponents(), this.i()));
  bottomLineClass = computed(() => this.displayBottomLineClass(this.complex(), this.navigatorComponents(), this.i()));

  get component(): INavigatorComponent {
    return this.navigatorComponents()[this.i()];
  }

  public displayTopLineClass(complex: NavigatorComplex, navigatorComponents: INavigatorComponent[], componentIndex: number): string {
    if (this.doesLineCrossComponentCell(complex, navigatorComponents, componentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineEndOnComponentCell(complex, navigatorComponents, componentIndex) &&
      !this.doesLineStartOnComponentCell(complex, navigatorComponents, componentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: NavigatorComplex, navigatorComponents: INavigatorComponent[], componentIndex: number): string {
    if (this.doesLineCrossComponentCell(complex, navigatorComponents, componentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineStartOnComponentCell(complex, navigatorComponents, componentIndex) &&
      !this.doesLineEndOnComponentCell(complex, navigatorComponents, componentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  private doesLineCrossComponentCell(complex: NavigatorComplex,
                                     navigatorComponents: INavigatorComponent[],
                                     componentIndex: number): boolean {

    if (complex.startComponentIndex != null && complex.endComponentIndex != null) {

      // The line starts before this component and ends after, so it crosses through the component
      if (complex.startComponentIndex < componentIndex && complex.endComponentIndex > componentIndex) {
        return true;
      }

      // The line starts before this component and end at this component or on any of its subcomponents
      if (complex.startComponentIndex < componentIndex && complex.endComponentIndex === componentIndex) {
        // If the component is expanded, and there is any line between the subcomponents, then
        // the line does not end in this component, and it must cross through the component cell to the subcomponents
        if (navigatorComponents[componentIndex].expanded) {
          if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
            return true;
          }
        }
      }
    }

    return false;
  }

  doesLineStartOnComponentCell(complex: NavigatorComplex,
                               navigatorComponents: INavigatorComponent[],
                               componentIndex: number): boolean {

    // The line starts at this component or on any of its subcomponents
    if (complex.startComponentIndex != null && complex.startComponentIndex === componentIndex) {

      if (!navigatorComponents[componentIndex].expanded) {
        // If the component is not expanded, then the line starts in it
        return true;
      }
      // If the component is expanded.
      // If the component is actually part of the complex, the line starts in this component
      // Otherwise, the line actually starts on one of the subcomponents of the complex, but not on the component itself, as it is
      // not part of the complex.
      if (complex.startSubComponentIndex === -1) {
        return true;
      }
    }

    return false;
  }

  private doesLineEndOnComponentCell(complex: NavigatorComplex,
                                     navigatorComponents: INavigatorComponent[],
                                     componentIndex: number): boolean {

    // The line ends at this component or on any of its subcomponents
    if (complex.endComponentIndex != null && complex.endComponentIndex === componentIndex) {

      // If the component is expanded, and there is any line between the subcomponents, then
      // the line does not end in this component, and it must cross through to the subcomponents
      if (navigatorComponents[componentIndex].expanded) {
        if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}
