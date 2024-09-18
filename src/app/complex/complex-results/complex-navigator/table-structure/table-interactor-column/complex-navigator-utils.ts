import {Complex} from '../../../../shared/model/complex-results/complex.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {EnrichedInteractor} from './table-interactor-column.component';


export class ComponentWithStoichiometry {
  identifier: string;
  stochiometryValue: [number, number];
  stochiometryText?: string;
  stochiometryValueFormatted?: string;
}

export function findInteractorInComplex(complex: Complex,
                                        interactorId: string,
                                        enrichedInteractors: EnrichedInteractor[]): ComponentWithStoichiometry {

  const interactor = findInteractorInComplexComponents(complex.interactors, interactorId, enrichedInteractors);
  if (!!interactor) {
    return {
      identifier: interactor.identifier,
      stochiometryValue: interactor.stochiometryValue,
      stochiometryText: getStoichiometryText(interactor.stochiometryValue),
      stochiometryValueFormatted: formatStoichiometryValues(interactor.stochiometryValue)
    };
  }
  return null;
}

// Private functions

function findInteractorInComplexComponents(complexComponents: ComplexComponent[],
                                           interactorId: string,
                                           enrichedInteractors: EnrichedInteractor[]): ComponentWithStoichiometry {

  // We look for the interactor in the complex, as one of the components, or as part of any subcomplex of the complex, recursively.
  // Even if we find a match for the interactor as one of the complex components, we keep looking at other components, as the interactor
  // could also be part of a subcomplex, so the stoichiometry would need to be added for all matches.

  let interactorFound = false;
  let stoichiometry: [number, number] = null;

  // We iterate through all the components of the complex to find matches
  for (const complexComponent of complexComponents) {
    const interactorMatch = findInteractorInComplexComponent(complexComponent, interactorId, enrichedInteractors);
    if (!!interactorMatch) {
      // We found a match for the interactor, on this component, or on a subcomponent of it in the case of a subcomplex
      interactorFound = true;
      // If we have any stoichiometry for the component, we add it to the total stoichiometry
      if (!!interactorMatch.stochiometryValue) {
        if (!!stoichiometry) {
          stoichiometry = [
            stoichiometry[0] + interactorMatch.stochiometryValue[0],
            stoichiometry[1] + interactorMatch.stochiometryValue[1]
          ];
        } else {
          stoichiometry = [
            interactorMatch.stochiometryValue[0],
            interactorMatch.stochiometryValue[1]
          ];
        }
      }
    }
  }

  // If we have found the interactor as part of one of the complex components, or part of a subcomplex, we return it
  if (interactorFound) {
    return {
      identifier: interactorId,
      stochiometryValue: stoichiometry
    };
  }

  return null;
}

function findInteractorInComplexComponent(complexComponent: ComplexComponent,
                                          interactorId: string,
                                          enrichedInteractors: EnrichedInteractor[]): ComponentWithStoichiometry {

  const componentStoichiometry = parseStoichiometryValues(complexComponent.stochiometry);

  if (complexComponent.identifier === interactorId) {
    // The interactor is the complex component we are currently checking
    return {
      identifier: interactorId,
      stochiometryValue: componentStoichiometry
    };
  }

  if (complexComponent.interactorType === 'stable complex') {
    // If the id does not match, and the component is a subcomplex, then we can look for the interactor in the subcomplex components
    const complexComponentInteractor = enrichedInteractors.find(interactor =>
      interactor.interactor.identifier === complexComponent.identifier);

    if (!!complexComponentInteractor && !!complexComponentInteractor.subComponents) {
      const subComponentsMatch = findInteractorInComplexComponents(
        complexComponentInteractor.subComponents, interactorId, enrichedInteractors);

      if (!!subComponentsMatch) {
        // We have found the interactor in the subcomplex
        if (!!subComponentsMatch.stochiometryValue) {
          if (!!componentStoichiometry) {
            // If we have stoichiometry for both the component and the subcomponent, we add both
            return {
              identifier: interactorId,
              stochiometryValue: [
                componentStoichiometry[0] * subComponentsMatch.stochiometryValue[0],
                componentStoichiometry[1] * subComponentsMatch.stochiometryValue[1]
              ]
            };
          } else {
            // If we only have stoichiometry for the subcomponent, we use that stoichiometry
            return {
              identifier: interactorId,
              stochiometryValue: subComponentsMatch.stochiometryValue
            };
          }
        } else {
          // If we only have stoichiometry for the component, we use that stoichiometry
          return {
            identifier: interactorId,
            stochiometryValue: componentStoichiometry
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
