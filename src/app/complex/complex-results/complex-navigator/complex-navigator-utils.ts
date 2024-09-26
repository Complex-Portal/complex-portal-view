import {INavigatorComponent} from './table-structure/model/navigator-component.model';
import {ComplexComponent} from '../../shared/model/complex-results/complex-component.model';
import {Complex} from '../../shared/model/complex-results/complex.model';

export enum NavigatorComponentSorting {
  DEFAULT = 'Default',
  TYPE = 'Type',
  ORGANISM = 'Organism'
}

export enum NavigatorComponentGrouping {
  DEFAULT = 'Default',
  ORTHOLOGY = 'Orthology'
}

export enum NavigatorDisplayType {
  COMPACT = 'compact',
  DETAILED = 'detailed',
}

export class ComponentWithStoichiometry {
  identifier: string;
  stoichiometryValue: [number, number];
  stoichiometryText?: string;
  stoichiometryValueFormatted?: string;
}

export function findComponentInComplex(complex: Complex,
                                       componentIds: string[],
                                       navigatorComponents: INavigatorComponent[]): ComponentWithStoichiometry {

  const component = findComponentInComplexComponents(complex.interactors, componentIds, navigatorComponents);
  if (!!component) {
    return {
      identifier: component.identifier,
      stoichiometryValue: component.stoichiometryValue,
      stoichiometryText: getStoichiometryText(component.stoichiometryValue),
      stoichiometryValueFormatted: formatStoichiometryValues(component.stoichiometryValue)
    };
  }
  return null;
}

// Private functions

function findComponentInComplexComponents(complexComponents: ComplexComponent[],
                                          componentIds: string[],
                                          navigatorComponents: INavigatorComponent[]): ComponentWithStoichiometry {

  // We look for the interactor in the complex, as one of the components, or as part of any subcomplex of the complex, recursively.
  // Even if we find a match for the interactor as one of the complex components, we keep looking at other components, as the interactor
  // could also be part of a subcomplex, so the stoichiometry would need to be added for all matches.

  let componentFound = false;
  let componentId = '';
  let stoichiometry: [number, number] = null;

  // We iterate through all the components of the complex to find matches
  for (const complexComponent of complexComponents) {
    const componentMatch = findComponentInComplexComponent(complexComponent, componentIds, navigatorComponents);
    if (!!componentMatch) {
      // We found a match for the interactor, on this component, or on a subcomponent of it in the case of a subcomplex
      componentFound = true;
      componentId = componentMatch.identifier;
      // If we have any stoichiometry for the component, we add it to the total stoichiometry
      if (!!componentMatch.stoichiometryValue) {
        if (!!stoichiometry) {
          stoichiometry = [
            stoichiometry[0] + componentMatch.stoichiometryValue[0],
            stoichiometry[1] + componentMatch.stoichiometryValue[1]
          ];
        } else {
          stoichiometry = [
            componentMatch.stoichiometryValue[0],
            componentMatch.stoichiometryValue[1]
          ];
        }
      }
    }
  }

  // If we have found the interactor as part of one of the complex components, or part of a subcomplex, we return it
  if (componentFound) {
    return {
      identifier: componentId,
      stoichiometryValue: stoichiometry
    };
  }

  return null;
}

function findComponentInComplexComponent(complexComponent: ComplexComponent,
                                         componentIds: string[],
                                         navigatorComponents: INavigatorComponent[]): ComponentWithStoichiometry {

  const componentStoichiometry = parseStoichiometryValues(complexComponent.stoichiometry);

  if (componentIds.some(componentId => complexComponent.identifier === componentId)) {
    // The interactor is the complex component we are currently checking
    return {
      identifier: complexComponent.identifier,
      stoichiometryValue: componentStoichiometry
    };
  }

  if (complexComponent.interactorType === 'stable complex') {
    // If the id does not match, and the component is a subcomplex, then we can look for the interactor in the subcomplex components
    const complexComponentInteractor = navigatorComponents.find(interactor =>
      interactor.identifier === complexComponent.identifier);

    if (!!complexComponentInteractor && complexComponentInteractor.hasSubComponents) {
      const subComponentsMatch = findComponentInComplexComponents(
        complexComponentInteractor.complexComponents, componentIds, navigatorComponents);

      if (!!subComponentsMatch) {
        // We have found the interactor in the subcomplex
        if (!!subComponentsMatch.stoichiometryValue) {
          if (!!componentStoichiometry) {
            // If we have stoichiometry for both the component and the subcomponent, we add both
            return {
              identifier: subComponentsMatch.identifier,
              stoichiometryValue: [
                componentStoichiometry[0] * subComponentsMatch.stoichiometryValue[0],
                componentStoichiometry[1] * subComponentsMatch.stoichiometryValue[1]
              ]
            };
          } else {
            // If we only have stoichiometry for the subcomponent, we use that stoichiometry
            return {
              identifier: subComponentsMatch.identifier,
              stoichiometryValue: subComponentsMatch.stoichiometryValue
            };
          }
        } else {
          // If we only have stoichiometry for the component, we use that stoichiometry
          return {
            identifier: subComponentsMatch.identifier,
            stoichiometryValue: componentStoichiometry
          };
        }
      }
    }
  }

  return null;
}

function fetchValuesFromStoichiometry(stoichiometry: string) {
  const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
  return stoichiometry.match(pattern);
}

function parseStoichiometryValues(stoichiometry: string): [number, number] {
  if (!!stoichiometry) {
    const matchedStoichiometry = fetchValuesFromStoichiometry(stoichiometry);
    if (!!matchedStoichiometry) {
      const minValue = parseInt(matchedStoichiometry[1], 10);
      const maxValue = parseInt(matchedStoichiometry[2], 10);
      if (!isNaN(minValue) && !isNaN(maxValue)) {
        return [minValue, maxValue];
      }
    }
  }
  return null;
}

function formatStoichiometryValues(stoichiometry: [number, number]): string {
  if (!!stoichiometry) {
    const minValue = stoichiometry[0];
    const maxValue = stoichiometry[1];
    if (minValue === maxValue) {
      return minValue.toString();
    } else {
      return `${minValue}-${maxValue}`;
    }
  }
  return ' '; // sometimes we don't have the stoichiometry value
}

function getStoichiometryText(stoichiometry: [number, number]): string {
  if (!!stoichiometry) {
    return 'Stoichiometry values: minValue: ' + stoichiometry[0] + ', maxValue: ' + stoichiometry[1];
  } else {
    return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
  }
}
