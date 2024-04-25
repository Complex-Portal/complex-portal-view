import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';

export function formatStoichiometryValues(stoichiometry: string): string {
  if (!!stoichiometry) {
    const matchedStoichiometry = fetchValuesFromStoichiometry(stoichiometry);
    if (!!matchedStoichiometry) {
      const minValue = parseInt(matchedStoichiometry[1], 10);
      const maxValue = parseInt(matchedStoichiometry[2], 10);
      if (minValue === maxValue) {
        return minValue.toString();
      } else {
        return `${minValue}, ${maxValue}`;
      }
    }
  }
  return ' '; // sometimes we don't have the stoichiometry value
}

export function fetchValuesFromStoichiometry(stoichiometry: string) {
  const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
  return stoichiometry.match(pattern);
}

export function findInteractorInComplex(complex: Element, componentId: string): ComplexComponent {
  return complex.interactors.find(component => component.identifier === componentId);
}

export function getStoichiometry(complex: Element, componentId: string): string {
  const match = this.findInteractorInComplex(complex, componentId);
  if (!!match) {
    if (!!match.stochiometry) {
      return 'Stoichiometry values: ' + (match.stochiometry);
    } else {
      return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
    }
  }
  return null;
}

export function stoichiometryOfInteractors(complex: Element, interactorId: string): string {
  const match = findInteractorInComplex(complex, interactorId);
  if (!!match) {
    return formatStoichiometryValues(match.stochiometry);
  }
  return null;
}
