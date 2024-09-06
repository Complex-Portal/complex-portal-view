import {Component, input, computed, effect} from '@angular/core';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Observable, of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {Element} from '../../../../shared/model/complex-results/element.model';
import {map} from 'rxjs/operators';
import {EnrichedComplex} from '../enriched-complex.model';
import {EnrichedInteractor, EnrichedInteractors, Range} from '../enriched-interactors.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent {
  complexes = input<Element[]>([]);
  interactorsSorting = input<string>();
  interactors = input<Interactor[]>([]);
  organismIconDisplay = input<boolean>(true);
  interactorTypeDisplay = input<boolean>(true);
  idDisplay = input<boolean>(true);

  enrichedInteractors = computed(() => this.enrichInteractors(this.complexes(), this.interactors()));

  enrichedInteractorsArray: EnrichedInteractor[];
  enrichedComplexes: EnrichedComplex[];
  ranges: Range[];

  constructor(private complexPortalService: ComplexPortalService) {
    effect(() => this.sortInteractors(this.enrichedInteractors(), this.complexes(), this.interactorsSorting()));
  }

  private sortInteractors(enrichedInteractors: EnrichedInteractors,
                          complexes: Element[],
                          interactorsSorting: string): void {
    if (!!enrichedInteractors && !!complexes) {
      // When we sort, we update the local variable in the component instead of just sorting inside the enrichedInteractors object.
      // This way we enforce an update on the objects used in the HTML and angular needs to re-run the signals to draw the table.
      this.enrichedInteractorsArray = enrichedInteractors.classifyInteractors(interactorsSorting);
      this.ranges = enrichedInteractors.ranges;
      this.enrichedComplexes = this.createEnrichedComplexes(complexes, enrichedInteractors);
    }
  }

  private enrichInteractors(complexes: Element[], interactors: Interactor[]): EnrichedInteractors {
    const enrichedInteractors = new EnrichedInteractors();
    for (const interactor of interactors) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newEnrichedInteractor = new EnrichedInteractor(
        interactor,
        isSubComplex,
        complexes.findIndex(complex => complex.componentAcs?.has(interactor.identifier)) || 0);
      if (isSubComplex) {
        this.loadSubInteractors(newEnrichedInteractor, complexes)
          .subscribe(subComponents => newEnrichedInteractor.subComponents = subComponents);
      }
      enrichedInteractors.interactors.push(newEnrichedInteractor);
    }
    enrichedInteractors.calculateTimesAppearing(complexes);
    return enrichedInteractors;
  }

  toggleSubcomplexExpandable(i: number): void {
    this.enrichedInteractors().toggleSubcomplexExpandable(i);
    // Something has been expanded or collapsed, we need to sort and recalculate the start and end indexes for the lines
    this.sortInteractors(this.enrichedInteractors(), this.complexes(), this.interactorsSorting());

  }

  private loadSubInteractors(interactor: EnrichedInteractor, complexes: Element[]): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Element = complexes.find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier)
        .pipe(map(complex => complex?.interactors));
    }
  }

  private createEnrichedComplexes(complexes: Element[], enrichedInteractors: EnrichedInteractors): EnrichedComplex[] {
    const enrichedComplexes: EnrichedComplex[] = [];
    for (const complex of complexes) {
      enrichedComplexes.push(new EnrichedComplex(complex));
    }
    this.calculateAllStartAndEndIndexes(enrichedInteractors, enrichedComplexes);
    return enrichedComplexes;
  }

  private calculateAllStartAndEndIndexes(enrichedInteractors: EnrichedInteractors, enrichedComplexes: EnrichedComplex[]): void {
    for (const enrichedComplex of enrichedComplexes) {
      enrichedComplex.calculateStartAndEndIndexes(enrichedInteractors);
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
