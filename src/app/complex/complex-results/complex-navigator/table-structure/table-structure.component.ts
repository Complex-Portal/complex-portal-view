import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  HostListener,
  input,
  output,
  ViewChild
} from '@angular/core';
import {ComplexSearchResult} from '../../../shared/model/complex-results/complex-search.model';
import {Complex} from '../../../shared/model/complex-results/complex.model';
import * as tf from '@tensorflow/tfjs';
import {groupByPropertyToArray} from '../../../complex-portal-utils';
import {findComponentInComplex} from '../complex-navigator-utils';
import {INavigatorComponent} from './model/navigator-component.model';
import {NavigatorStateService} from '../service/state/complex-navigator-display.service';

@Component({
  selector: 'cp-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.scss']
})
export class TableStructureComponent implements AfterViewInit {
  complexSearch = input<ComplexSearchResult>();
  navigatorComponents = input<INavigatorComponent[]>();
  onComplexRemovedFromBasket = output<string>();

  /**
   * Define start position for header to become sticky, in px
   */
  scrollStart = input<number>(39);

  @ViewChild('header') headerDiv: ElementRef<HTMLDivElement>;
  shadowTopVisible = false;
  shadowRightVisible = true;
  shadowLeftVisible = false;

  sortedComplexes = computed(() =>
    this.sortComplexBySimilarityClustering(this.complexSearch().elements, this.navigatorComponents()));

  constructor(public state: NavigatorStateService) {
  }

  ngAfterViewInit(): void {
    if (!!this.headerDiv) {
      setTimeout(() => this.setHorizontalShadowVisibility());
      window.addEventListener('scroll', () => this.setVerticalShadowVisibility());
    }
  }

  private calculateSimilarity(complex1: Complex, complex2: Complex, navigatorComponents: INavigatorComponent[]) {
    if (complex1 === complex2) {
      return 1;
    }

    const components1 = this.getComponents(complex1, navigatorComponents);
    const components2 = this.getComponents(complex2, navigatorComponents);

    // @ts-ignore
    return components1.intersection(components2).size / components1.union(components2).size;
  }

  private getComponents(complex: Complex, navigatorComponents: INavigatorComponent[]): Set<string> {
    if (!complex.componentAcs || complex.componentAcs.size === 0) {
      complex.componentAcs = new Set<string>(
        navigatorComponents
          .filter(component => findComponentInComplex(complex, component.componentIds, navigatorComponents))
          .map(component => component.identifier));
    }
    return complex.componentAcs;
  }

  sortComplexBySimilarityClustering(complexesList: Complex[], navigatorComponents: INavigatorComponent[]): Complex[] {
    let sortedComplexesList = complexesList;

    sortedComplexesList.forEach(complex => {
      if (!!complex.componentAcs) {
        complex.componentAcs.clear();
      }
    });

    if (!!navigatorComponents && !!navigatorComponents && navigatorComponents.length > 0) {
      // Group by predicted to cluster only inside the different groups, and place predicted after curated
      const groups = groupByPropertyToArray(
        complexesList,
        'predictedComplex',
        (a, b) => (a as unknown as number) - (b as unknown as number) // Makes false go before true
      );

      sortedComplexesList = groups.flatMap(group => {
        // Calculate Similarity Matrix
        const sm: number[][] = new Array(group.length).fill(null).map(_ => new Array(group.length).fill(null));
        group.forEach((complex, i) => group.forEach((comparedComplex, j) => {
          if (i >= j) { // Avoid useless calculations
            sm[i][j] = this.calculateSimilarity(complex, comparedComplex, navigatorComponents);
            sm[j][i] = sm[i][j]; // Matrix is symmetric
          }
        }));
        return this.getSortedIndexFromChainedSimilarity(tf.tensor2d(sm)).map(i => group[i]);
      });

      // After the complexes have been sorted, we then set the index appearing for all components
      // so they are properly sorted later
      navigatorComponents.forEach(component => {
        component.indexAppearing = sortedComplexesList.findIndex(complex => complex.componentAcs?.has(component.identifier)) || 0;
      });
    }

    return sortedComplexesList;
  }

  /**
   * Uses a similarity matrix to order elements based on how similar one element is to the previous element on the list.<br>
   * Inspired by https://stackoverflow.com/a/64338609
   *
   * @param sm A similarity matrix to be sorted
   * @returns indexes of elements ordered according to their similarity
   */
  getSortedIndexFromChainedSimilarity(sm: tf.Tensor2D): number[] {
    const idx: number[] = [];
    let currentIdx = tf.argMax(sm.sum(0)).arraySync() as number;  // Start with complex with most similarities
    idx.push(currentIdx);

    const currentCluster: Set<number> = new Set<number>();
    for (let i = 1; i < sm.shape[0]; i++) {
      // Mask already selected indices
      const buffer = sm.bufferSync();
      for (let x = 0; x < sm.shape[0]; x++) {
        buffer.set(-Infinity, x, currentIdx);
      }
      sm = buffer.toTensor();

      // Find the closest complex to last selected
      const sm_i = sm.gather([currentIdx]).arraySync()[0] as number[];
      currentIdx = tf.argMax(sm_i).arraySync() as number;
      sm_i.forEach((similarity, i) => {
          if (similarity > 0) {
            currentCluster.add(i);
          }
        }
      );
      // If no similar entities (cluster ends), take the next complex with most similarities
      if (sm_i[currentIdx] === 0) {
        if (currentCluster.size !== 0) {
          currentIdx = currentCluster.values().next().value; // Pick another one from the cluster
        } else {
          currentIdx = tf.argMax(sm.sum(0)).arraySync() as number; // If cluster is empty, take the next biggest cluster seed
        }
      }

      idx.push(currentIdx);
      currentCluster.delete(currentIdx);
    }
    return idx;
  }

  private readonly scrollDetectionMargin = 5;

  syncScroll(source: Scrollable, target: Scrollable) {
    if (target.scrolling) {
      target.scrolling = false;
      return;
    }
    source.scrolling = true;
    target.scrollTo({left: source.scrollLeft, behavior: 'instant'});

    this.setHorizontalShadowVisibility();
  }

  @HostListener('window:resize', ['$event'])
  setHorizontalShadowVisibility() {
    this.shadowRightVisible = this.isShadowRightVisible();
    this.shadowLeftVisible = this.isShadowLeftVisible();
  }

  private setVerticalShadowVisibility() {
    this.shadowTopVisible = this.isShadowTopVisible();
  }

  private isShadowRightVisible(): boolean {
    const header = this.headerDiv.nativeElement;
    return header.scrollLeft + header.offsetWidth + this.scrollDetectionMargin <= header.scrollWidth;
  }

  private isShadowLeftVisible(): boolean {
    return this.headerDiv.nativeElement.scrollLeft >= this.scrollDetectionMargin;
  }

  private isShadowTopVisible(): boolean {
    return this.headerDiv.nativeElement.getBoundingClientRect().top <= this.scrollStart();
  }
}

type Scrollable = HTMLDivElement & { scrolling?: boolean };
