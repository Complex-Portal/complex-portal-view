import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';
import {Observable, of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {map} from 'rxjs/operators';
import {SpeciesPipe} from '../../../../shared/pipe/species.pipe';
import {EnrichedComplex} from '../enriched-complex.model';
import {EnrichedInteractor, EnrichedInteractors} from '../enriched-interactors.model';


@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent implements OnChanges {
  complexes = input<Element[]>([]);
  interactorsSorting = input<string>();
  interactors = input<Interactor[]>([]);
  organismIconDisplay = input<boolean>(true);
  interactorTypeDisplay = input<boolean>(true);
  idDisplay = input<boolean>(true);

  // TODO rework bellow to compute when needed from the inputs
  enrichedInteractors: EnrichedInteractors;
  enrichedComplexes: EnrichedComplex[];

  constructor(private complexPortalService: ComplexPortalService, private species: SpeciesPipe) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['interactors']) {
      this.enrichInteractors();
      this.enrichedInteractors.calculateTimesAppearing(this.complexes());
    }
    this.classifyInteractors();
    this.calculateAllStartAndEndIndexes();
  }

  private classifyInteractors(): void {
    if (!!this.enrichedInteractors) {
      this.enrichedInteractors.classifyInteractors(this.interactorsSorting());
    }
  }

  private enrichInteractors() {
    const enrichedInteractors: EnrichedInteractor[] = [];
    for (const interactor of this.interactors()) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor: EnrichedInteractor = {
        interactor,
        hidden: false,
        isSubComplex,
        expanded: false,
        subComponents: null,
        partOfComplex: [],
        timesAppearing: 0,
      };
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor).subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      enrichedInteractors.push(newEnrichedInteractor);
    }
    this.enrichedInteractors = new EnrichedInteractors(enrichedInteractors, this.species);
  }

  toggleSubcomplexExpandable(i: number): void {
    this.enrichedInteractors.toggleSubcomplexExpandable(i);
    // Something has been expanded or collapsed, we need to recalculate the start and end indexes for the lines
    this.enrichedInteractors.classifyInteractors(this.interactorsSorting());
    this.calculateAllStartAndEndIndexes();

  }

  private loadSubInteractors(interactor: EnrichedInteractor): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = this.complexes().find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier)
        .pipe(map(complex => complex?.interactors));
    }
  }

  private calculateAllStartAndEndIndexes(): void {
    this.enrichedComplexes = [];

    for (const complex of this.complexes()) {
      const enrichedComplex: EnrichedComplex = new EnrichedComplex(complex);
      enrichedComplex.calculateStartAndEndIndexes(this.enrichedInteractors);
      this.enrichedComplexes.push(enrichedComplex);
    }
  }

  isInteractorSortingSet() {
    return this.interactorsSorting() === 'Type' || this.interactorsSorting() === 'Organism';
  }

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

}
