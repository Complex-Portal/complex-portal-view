import {Component, input, computed, effect} from '@angular/core';
import {Interactor} from '../../../../shared/model/complex-results/interactor.model';
import {Observable, of} from 'rxjs';
import {ComplexPortalService} from '../../../../shared/service/complex-portal.service';
import {Complex} from '../../../../shared/model/complex-results/complex.model';
import {map} from 'rxjs/operators';
import {NavigatorComplex} from '../navigator-complex.model';
import {NavigatorInteractor, NavigatorInteractors, Range} from '../navigator-interactors.model';
import {ComplexComponent} from '../../../../shared/model/complex-results/complex-component.model';

@Component({
  selector: 'cp-table-interactor-column',
  templateUrl: './table-interactor-column.component.html',
  styleUrls: ['./table-interactor-column.component.css']
})
export class TableInteractorColumnComponent {
  complexes = input<Complex[]>([]);
  interactorsSorting = input<string>();
  interactors = input<Interactor[]>([]);
  organismIconDisplay = input<boolean>(true);
  interactorTypeDisplay = input<boolean>(true);
  idDisplay = input<boolean>(true);

  navigatorInteractors = computed(() => this.enrichInteractors(this.complexes(), this.interactors()));

  navigatorInteractorsArray: NavigatorInteractor[];
  navigatorComplexes: NavigatorComplex[];
  ranges: Range[];

  constructor(private complexPortalService: ComplexPortalService) {
    effect(() => this.sortInteractors(this.navigatorInteractors(), this.complexes(), this.interactorsSorting()));
  }

  private sortInteractors(navigatorInteractors: NavigatorInteractors,
                          complexes: Complex[],
                          interactorsSorting: string): void {
    if (!!navigatorInteractors && !!complexes) {
      // When we sort, we update the local variable in the component instead of just sorting inside the navigatorInteractors object.
      // This way we enforce an update on the objects used in the HTML and angular needs to re-run the signals to draw the table.
      this.navigatorInteractorsArray = navigatorInteractors.classifyInteractors(interactorsSorting);
      this.ranges = navigatorInteractors.ranges;
      this.navigatorComplexes = this.createNavigatorComplexes(complexes, navigatorInteractors);
    }
  }

  private enrichInteractors(complexes: Complex[], interactors: Interactor[]): NavigatorInteractors {
    const navigatorInteractors = new NavigatorInteractors();
    for (const interactor of interactors) {
      const isSubComplex = interactor.interactorType === 'stable complex';
      const newNavigatorInteractor = new NavigatorInteractor(
        interactor,
        isSubComplex,
        complexes.findIndex(complex => complex.componentAcs?.has(interactor.identifier)) || 0);
      if (isSubComplex) {
        this.loadSubInteractors(newNavigatorInteractor, complexes)
          .subscribe(subComponents => newNavigatorInteractor.subComponents = subComponents);
      }
      navigatorInteractors.interactors.push(newNavigatorInteractor);
    }
    navigatorInteractors.calculateTimesAppearing(complexes);
    return navigatorInteractors;
  }

  toggleSubcomplexExpandable(i: number): void {
    this.navigatorInteractors().toggleSubcomplexExpandable(i);
    // Something has been expanded or collapsed, we need to sort and recalculate the start and end indexes for the lines
    this.sortInteractors(this.navigatorInteractors(), this.complexes(), this.interactorsSorting());

  }

  private loadSubInteractors(interactor: NavigatorInteractor, complexes: Complex[]): Observable<ComplexComponent[]> {
    // this function returns the list of subcomponents of an interactor of type stable complex
    const foundComplex: Complex = complexes.find(complex => complex.complexAC === interactor.interactor.identifier);
    if (!!foundComplex) {
      return of(foundComplex.interactors);
    } else {
      // Actually call the back-end to fetch these
      return this.complexPortalService.getSimplifiedComplex(interactor.interactor.identifier)
        .pipe(map(complex => complex?.interactors));
    }
  }

  private createNavigatorComplexes(complexes: Complex[], navigatorInteractors: NavigatorInteractors): NavigatorComplex[] {
    const navigatorComplexes: NavigatorComplex[] = [];
    for (const complex of complexes) {
      navigatorComplexes.push(new NavigatorComplex(complex));
    }
    this.calculateAllStartAndEndIndexes(navigatorInteractors, navigatorComplexes);
    return navigatorComplexes;
  }

  private calculateAllStartAndEndIndexes(navigatorInteractors: NavigatorInteractors, navigatorComplexes: NavigatorComplex[]): void {
    for (const navigatorComplex of navigatorComplexes) {
      navigatorComplex.calculateStartAndEndIndexes(navigatorInteractors);
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
