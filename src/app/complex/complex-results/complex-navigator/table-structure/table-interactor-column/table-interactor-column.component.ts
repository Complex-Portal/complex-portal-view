import {Component, Input, OnInit} from '@angular/core';
import {ComplexSearchResult} from '../../../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {map} from 'rxjs/operators';

class EnrichedInteractor {
  interactor: Interactor;
  hidden: boolean;
  isSubComplex: boolean;
  expanded: boolean;
  subComponents: ComplexComponent[];
  partOfComplex: number[];
  timesAppearing: number;
}

class EnrichedComplex {
  complex: Element;
  startInteractorIndex: number;
  endInteractorIndex: number;
  startSubComponentIndex: number;
  endSubComponentIndex: number;
}

const BinaryComponentList = [];

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnInit {
  @Input() complexSearch: ComplexSearchResult;
  _enrichedInteractors: EnrichedInteractor[];
  _enrichedComplexes: EnrichedComplex[];

  constructor(private complexPortalService: ComplexPortalService) {
  }

  ngOnInit() {
  }

  get enrichedInteractors(): EnrichedInteractor[] {

    return this._enrichedInteractors;
  }

  get enrichedComplexes(): EnrichedComplex[] {
    return this._enrichedComplexes;
  }

  @Input()
  set interactors(value: Set<Interactor>) {
    this._enrichedInteractors = [];
    for (const interactor of value) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor: EnrichedInteractor = {
        interactor,
        hidden: false,
        isSubComplex,
        expanded: false,
        subComponents: null,
        partOfComplex: [],
        timesAppearing: 1,
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      this._enrichedInteractors.push(newEnrichedInteractor);
    }
    //////////// CLASSIFICATION BEFORE CALCULATIONS
    // this.classifyIntercators();
    this.calculateAllStartAndEndIndexes();

    // this.compactInteractorList();
    // console.log(this.compactInteractorList());
    this.fillBinaryComponent();
  }

  findInteractorInComplex(complex: Element, componentId: string): ComplexComponent {
    return complex.interactors.find(component => component.identifier === componentId);
  }

  findInteractorsInSubComplex(complex: Element, interactorId: string): ComplexComponent[] {
    return this._enrichedInteractors
      // filter subcomplexes
      .filter(interactor => interactor.isSubComplex)
      // filter subcomplexes included in complex
      .filter(interactor =>
        complex.interactors.some(component => component.identifier === interactor.interactor.identifier))
      // filter subcomplexes that match the componentId
      .filter(interactor => !!interactor.subComponents)
      .map(interactor => interactor.subComponents.find(subComponent => subComponent.identifier === interactorId))
      .filter(component => !!component);
  }

  public findInteractorInExpandedSubComplex(interactor: EnrichedInteractor, complex: Element, interactorId: string): ComplexComponent {
    if (complex.interactors.some(component => component.identifier === interactor.interactor.identifier)) {
      return interactor.subComponents.find(component => component.identifier === interactorId);
    }
    return null;
  }

  stochiometryOfInteractors(complex: Element, interactorId: string): string {
    const match = this.findInteractorInComplex(complex, interactorId);
    if (!!match) {
      return this.formatStochiometryValues(match.stochiometry);
    }
    return null;
  }

  stoichiometryOfInteractorsExpandable(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      return this.formatStochiometryValues(match.stochiometry);
    }
    return null;
  }

  stoichiometryOfInteractorsMainTable(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stochiometryValues = this.addedStoichiometryValues(matches);
      if (!!stochiometryValues) {
        if (stochiometryValues[0] === stochiometryValues[1]) {
          return stochiometryValues[0].toString();
        } else {
          return `${stochiometryValues[0]}, ${stochiometryValues[1]}`;
        }
      } else {
        return ' ';
      }
    }
    return null;
  }

  getStochiometry(complex: Element, componentId: string): string {
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

  getStoichiometrySubComplex(complex: Element, interactorId: string): string {
    const matches = this.findInteractorsInSubComplex(complex, interactorId);
    if (matches.length > 0) {
      const stochiometryValues = this.addedStoichiometryValues(matches);
      if (!!stochiometryValues) {
        return `Stoichiometry values: minValue: ${stochiometryValues[0]}, maxValue: ${stochiometryValues[1]}`;
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  getStochiometryInExpandedSubComplex(interactor: EnrichedInteractor, interactorId: string): string {
    const match = this.findInteractorInSubcomplex(interactor, interactorId);
    if (!!match) {
      if (!!match.stochiometry) {
        return 'Stoichiometry values: ' + (match.stochiometry);
      } else {
        return 'No stoichiometry data available'; // sometimes we don't have the stoichiometry value
      }
    }
    return null;
  }

  showExternalLink(component: Interactor | ComplexComponent): boolean {
    return component.interactorType !== 'stable complex' && !!component.identifierLink;
  }

  toggleSubcomplexExpandable(i: number): void {
    this._enrichedInteractors[i].expanded = !this._enrichedInteractors[i].expanded;

    if (this._enrichedInteractors[i].expanded) {
      // EnrichedInteractor has been expanded, we need to:

      // 1. Collapse the other ones, in case there is any other expanded
      for (let j = 0; j < this._enrichedInteractors.length; j++) {
        if (i !== j) {
          this._enrichedInteractors[j].expanded = false;
        }
      }

      // 2. Hide any interactor now displayed in the expanded section
      if (!!this._enrichedInteractors[i].subComponents) {
        const subInteractorIds: string[] = this._enrichedInteractors[i].subComponents.map(component => component.identifier);
        for (let j = 0; j < this._enrichedInteractors.length; j++) {
          if (i !== j) {
            this._enrichedInteractors[j].hidden = !!subInteractorIds.includes(this._enrichedInteractors[j].interactor.identifier);
          }
        }
      }
    } else {
      // EnrichedInteractor has been collapsed, we need to:
      // 1. Display any interactor previously hidden
      for (let j = 0; j < this._enrichedInteractors.length; j++) {
        this._enrichedInteractors[j].hidden = false;
      }
    }

    // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
    this.calculateAllStartAndEndIndexes();
  }

  public interactorTypeIcon(interactor: Interactor): string {
    switch (interactor.interactorType) {
      case 'small molecule':
        return 'icon icon-conceptual icon-chemical';
      case 'protein':
      case 'peptide':
        return 'icon icon-conceptual icon-structures-3d';
      case 'stable complex':
        return 'icon icon-conceptual icon-systems';
      case 'molecule set':
        return 'icon icon-generic icon-math';
      case 'single stranded deoxyribonucleic acid':
      case 'double stranded deoxyribonucleic acid':
      case 'small nuclear rna':
      case 'small nucleolar rna':
      case 'ribosomal rna':
      case 'messenger rna':
      case 'transfer rna':
      case 'signal recognition particle rna':
      case 'ribonucleic acid':
      case 'nucleic acid':
      case 'long non-coding ribonucleic acid':
        return 'icon icon-conceptual icon-dna';
    }
  }

  private loadSubInteractors(interactor: EnrichedInteractor): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = this.complexSearch.elements.find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getComplexAc(interactor.interactor.identifier)
        .pipe(map(complex => complex.participants.map(participant => new ComplexComponent(
          participant.identifier,
          participant.identifierLink,
          participant.name,
          participant.description,
          participant.stochiometry,
          participant.interactorType))));
    }
  }

  private findInteractorInSubcomplex(interactor: EnrichedInteractor, interactorId: string): ComplexComponent {
    return interactor.subComponents.find(component => component.identifier === interactorId);
  }

  private fetchValuesFromStochiometry(stochiometry: string) {
    const pattern = 'minValue: ([0-9+]), maxValue: ([0-9+])';
    return stochiometry.match(pattern);
  }

  private formatStochiometryValues(stochiometry: string): string {
    if (!!stochiometry) {
      const matchedStochometry = this.fetchValuesFromStochiometry(stochiometry);
      if (!!matchedStochometry) {
        // tslint:disable-next-line:radix
        const minValue = parseInt(matchedStochometry[1]);
        // tslint:disable-next-line:radix
        const maxValue = parseInt(matchedStochometry[2]);
        if (minValue === maxValue) {
          return minValue.toString();
        } else {
          return `${minValue}, ${maxValue}`;
        }
      }
    }
    return ' '; // sometimes we don't have the stoichiometry value
  }

  private addedStoichiometryValues(components: ComplexComponent[]): [number, number] {
    let minValue: number = null;
    let maxValue: number = null;
    for (const component of components) {
      if (!!component.stochiometry) {
        const matchedStochometry = this.fetchValuesFromStochiometry(component.stochiometry);
        if (!!matchedStochometry) {
          if (minValue === null) {
            minValue = 0;
          }
          if (maxValue === null) {
            maxValue = 0;
          }
          // tslint:disable-next-line:radix
          minValue += parseInt(matchedStochometry[1]);
          // tslint:disable-next-line:radix
          maxValue += parseInt(matchedStochometry[2]);
        }
      }
    }
    if (minValue !== null && maxValue !== null) {
      return [minValue, maxValue];
    }
    return null;
  }

  private calculateAllStartAndEndIndexes(): void {
    this._enrichedComplexes = [];

    for (const complex of this.complexSearch.elements) {
      this._enrichedComplexes.push(this.calculateStartAndEndIndexes(complex));
    }

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

  public displayTopLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineEndOnInteractorCell(complex, interactorIndex) && !this.doesLineStartOnInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClass(complex: EnrichedComplex, interactorIndex: number): string {
    if (this.doesLineCrossInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineStartOnInteractorCell(complex, interactorIndex) && !this.doesLineEndOnInteractorCell(complex, interactorIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayTopLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
      !this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
  }

  public displayBottomLineClassExpanded(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): string {
    if (this.doesLineCrossSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }
    if (this.doesLineStartOnSubcomponentCell(complex, interactorIndex, subComponentIndex) &&
      !this.doesLineEndOnSubcomponentCell(complex, interactorIndex, subComponentIndex)) {
      return 'verticalLine';
    }

    return 'transparentVerticalLine';
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

  private calculateStartAndEndIndexes(complex: Element): EnrichedComplex {
    const subComponentsToCheck: string[] = [];

    const enrichedComplex: EnrichedComplex = {
      complex,
      startInteractorIndex: null,
      endInteractorIndex: null,
      startSubComponentIndex: null,
      endSubComponentIndex: null
    };

    // We iterate through the interactors to find the first and last one part of the complex
    // We do this to be able to draw a line connecting all interactors in the complex
    for (let i = 0; i < this._enrichedInteractors.length; i++) {
      if (!this._enrichedInteractors[i].hidden) {
        for (let j = 0; j < complex.interactors.length; j++) {
          if (complex.interactors[j].identifier === this._enrichedInteractors[i].interactor.identifier) {
            // The interactor is part of the complex, we update the start and end indices for the interactors
            // line as it may start in this interactor
            enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
            enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);

            // The interactor is a subcomplex
            if (this._enrichedInteractors[i].isSubComplex && !!this._enrichedInteractors[i].subComponents) {
              // The subcomponents of that subcomplex could also be displayed in the table as separate interactors.
              // In that case, the line could start or end there, so we need to also check the position of those
              // interactors. We add those subcomponents to 'subComponentsToCheck' to check their position later
              this._enrichedInteractors[i].subComponents.forEach(subComponent => subComponentsToCheck.push(subComponent.identifier));
              if (this._enrichedInteractors[i].expanded) {
                // If the subcomplex is expanded, as the subcomplex is part of the complex, all its subcomponents are also part
                // of it. That means we need a line connecting all the subcomponents.
                // That line must also connect to the subcomplex, so we start it at -1 to make sure it starts at the interactor cell
                // and not at the first subcomponent
                enrichedComplex.startSubComponentIndex = -1;
                enrichedComplex.endSubComponentIndex = this._enrichedInteractors[i].subComponents.length - 1;
              }
            }
          } else if (this._enrichedInteractors[i].isSubComplex &&
            !!this._enrichedInteractors[i].subComponents &&
            this._enrichedInteractors[i].expanded) {
            // The interactor is not part of the complex but it is a subcomplex and it is expanded.
            // This means the subcomponents of the subcomplex are visible, and any of them could be part of the complex.
            // In that case, the line could start or end on any of those subcomponents
            for (let k = 0; k < this._enrichedInteractors[i].subComponents.length; k++) {
              if (complex.interactors[j].identifier === this._enrichedInteractors[i].subComponents[k].identifier) {
                // The subcomponent of this interactor is part of the complex, we update the start and end indices for the interactors
                // line as it may start in this interactor
                enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
                enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
                // The subcomponent of this interactor is part of the complex, we update the start and end indices for the subcomponents
                // line as it may start in this subcomponent
                enrichedComplex.startSubComponentIndex = this.getMinValue(enrichedComplex.startSubComponentIndex, k);
                enrichedComplex.endSubComponentIndex = this.getMaxValue(enrichedComplex.endSubComponentIndex, k);
              }
            }
          }
        }
      }
    }

    // We finally check the position of the subcomponents of subcomplexes part of the complex on the main table.
    // If any is before or after where the lines start and end, then we need to update the start and end indexes,
    // as the line must start or end there
    for (let i = 0; i < this._enrichedInteractors.length; i++) {
      if (!this._enrichedInteractors[i].hidden) {
        if (subComponentsToCheck.includes(this._enrichedInteractors[i].interactor.identifier)) {
          // The interactor is part of a subcomplex that is part of the complex, we update the start and end indices for the interactors
          // line as it may start in this interactor
          enrichedComplex.startInteractorIndex = this.getMinValue(enrichedComplex.startInteractorIndex, i);
          enrichedComplex.endInteractorIndex = this.getMaxValue(enrichedComplex.endInteractorIndex, i);
        }
      }
    }

    return enrichedComplex;
  }

  private doesLineCrossInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {

      // The line starts before this interactor and ends after, so it crosses through the interactor
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }

      // The line starts before this interactor and end at this interactor or on any of its subcomponents
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex === interactorIndex) {
        // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
        // the line does not end in this interactor and it musy cross through the interactor cell to the subcomponents
        if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
          if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private doesLineStartOnInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {

      if (!this._enrichedInteractors[interactorIndex].isSubComplex) {
        // If the interactor is not a subcomplex, then the interactor has no subcomponents and the line starts in it
        return true;
      }
      // If the interactor is a subcomplex.
      // If the interactor is actually part of the complex, the line starts in this interactor
      // Otherwise, the line actually starts on one of the subcomponets of the complex, but not on the interactor itself, as it is
      // not part of the complex.
      if (complex.complex.interactors.some(component =>
        this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier)) {
        return true;
      }
    }

    return false;
  }

  private doesLineEndOnInteractorCell(complex: EnrichedComplex, interactorIndex: number): boolean {
    // The line ends at this interactor or on any of its subcomponents
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {

      // If the interactor is an expanded subcomplex, and there is any line between the subcomponents, then
      // the line does not end in this interactor and it must cross through to the subcomponents
      if (this._enrichedInteractors[interactorIndex].isSubComplex && this._enrichedInteractors[interactorIndex].expanded) {
        if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  private doesLineCrossSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    if (complex.startInteractorIndex != null && complex.endInteractorIndex != null) {
      // The line starts before this interactor and ends after, so it crosses through all the subcomponents of the interactor
      if (complex.startInteractorIndex < interactorIndex && complex.endInteractorIndex > interactorIndex) {
        return true;
      }

      if (complex.startSubComponentIndex != null && complex.endSubComponentIndex != null) {
        // The line starts before this subcomponent and ends after, so it crosses through the subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this interactor and it ends on a later subcomponent, so it crosses through this subcomponent
        if (complex.startInteractorIndex < interactorIndex && complex.endSubComponentIndex > subComponentIndex) {
          return true;
        }

        // The line started before this subcomponent and it ends on a later interactor, so it crosses through this subcomponent
        if (complex.startSubComponentIndex < subComponentIndex && complex.endInteractorIndex > interactorIndex) {
          return true;
        }
      }
    }

    return false;
  }

  private doesLineStartOnSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    // The line starts at this interactor or on any of its subcomponents
    if (complex.startInteractorIndex != null && complex.startInteractorIndex === interactorIndex) {
      if (complex.startSubComponentIndex != null && complex.startSubComponentIndex === subComponentIndex) {
        // If the subcomplex is a component of the complex, the line starts in the cell of the interactor, meaning it cannot
        // start on any subcomponent.
        // Otherwise, it starts on the subcomponent with the index subComponentIndex
        return !complex.complex.interactors.some(component =>
          this._enrichedInteractors[interactorIndex].interactor.identifier === component.identifier);

      }
    }

    return false;
  }

  private doesLineEndOnSubcomponentCell(complex: EnrichedComplex, interactorIndex: number, subComponentIndex: number): boolean {
    if (complex.endInteractorIndex != null && complex.endInteractorIndex === interactorIndex) {
      // The line ends at this interactor and this subcomponent
      if (complex.endSubComponentIndex != null && complex.endSubComponentIndex === subComponentIndex) {
        return true;
      }
    }
    return false;
  }

  classifyIntercators() {
    for (const oneInteractor of this._enrichedInteractors) {
      let inNComplexes = 0;
      for (const complex of this.complexSearch.elements) {
        for (const complexesInteractors of complex.interactors) {
          if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
            inNComplexes++;
          }
        }
        if (oneInteractor.isSubComplex) {
          for (const subComponent of oneInteractor.subComponents) {
            // tslint:disable-next-line:no-shadowed-variable
            for (const complex of this.complexSearch.elements) {
              for (const complexesInteractors of complex.interactors) {
                if (oneInteractor.interactor.identifier === complexesInteractors.identifier) {
                  inNComplexes++;
                }
              }
            }
          }
        }
        oneInteractor.timesAppearing = inNComplexes;
      }
    }
    // tslint:disable-next-line:max-line-length
    // this._enrichedInteractors.sort((a, b) => a.interactor.interactorType.localeCompare(b.interactor.interactorType) || b.timesAppearing - a.timesAppearing);
    // tslint:disable-next-line:max-line-length
    this._enrichedInteractors.sort((a, b) => b.timesAppearing - a.timesAppearing /* || a.interactor.name.localeCompare(b.interactor.name) */);
  }

  public displayLineInteractorType(interactor): string {
    if (this.interactorFirstOfType(interactor)) {
      return 'verticalLine';
    }
    return 'transparentVerticalLine';
  }

  public interactorFirstOfType(interactor: Interactor): boolean {
    return false;
  }

  public rangeOfInteractorType(interactor: Interactor): number[] {
    let startIndex = 0;
    let endIndex = 0;
    const range = [0, 0];
    for (let i; i < this._enrichedInteractors.length; i++) {
      if (this.enrichedInteractors[i].interactor.interactorType === interactor.interactorType) {
        startIndex = i;
      }
    }
    for (let i = startIndex; i < this._enrichedInteractors.length; i++) {
      if (this.enrichedInteractors[i].interactor.interactorType !== interactor.interactorType) {
        endIndex = i;
      }
    }
    // console.log('startIndex : ' + startIndex + ' endIndex : ' + endIndex);
    range[0] = startIndex;
    range[1] = endIndex;
    // console.log(range);
    return range;
  }

  calculateTotalLengthOfLine(): number {
    let totalLength = 0;
    for (let i = 0; i < this._enrichedComplexes.length; i++) {
      const lengthOfLine = (this._enrichedComplexes[i].endInteractorIndex) - this._enrichedComplexes[i].startInteractorIndex;
      totalLength += lengthOfLine;
    }
    // console.log('total length of line: ' + totalLength);
    return totalLength;
  }

  generateCombinations(interactorsArray) {
    const combinations = [];

    function permuteInteractors(array, tmp = []) {
      if (array.length === 0) {
        combinations.push(tmp);
      } else {
        for (let i = 0; i < array.length; i++) {
          const current = array.slice();
          const next = current.splice(i, 1);
          permuteInteractors(current.slice(), tmp.concat(next));
        }
      }
    }

    permuteInteractors(interactorsArray);
    return combinations;
  }

  compactInteractorList() {
    const listOfCombinations = this.generateCombinations(this._enrichedInteractors);
    let lowestLength = 5000;
    let lowestLengthList = 0;
    for (let n = 0; n < listOfCombinations.length; n++) {
      this._enrichedInteractors = listOfCombinations[n];
      if (this.calculateTotalLengthOfLine() < lowestLength) {
        lowestLength = this.calculateTotalLengthOfLine();
        lowestLengthList = n;
      }
    }
    this._enrichedInteractors = listOfCombinations[lowestLengthList];
  }

  fillBinaryComponent() {
    for (const interactor of this._enrichedInteractors) {
      for (const complex of this._enrichedComplexes) {
        let binaryValue = 0;
        // tslint:disable-next-line:max-line-length
        if (this.getStochiometry(complex.complex, interactor.interactor.identifier) || this.getStoichiometrySubComplex(complex.complex, interactor.interactor.identifier)) {
          binaryValue = 1;
          const binaryComponent = [complex.complex.complexAC, interactor.interactor.identifier, binaryValue];
          BinaryComponentList.push(binaryComponent);
        } else {
          const binaryComponent = [complex.complex.complexAC, interactor.interactor.identifier, binaryValue];
          BinaryComponentList.push(binaryComponent);
        }
      }
    }
    BinaryComponentList.sort();
    console.log(BinaryComponentList);
  }
}
