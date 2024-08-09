import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facets} from '../../shared/model/complex-results/facets.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {ecoCodeStar, interactorTypeIcon, organismIcon} from '../../complex-portal-utils';
import {Facet} from '../../shared/model/complex-results/facet.model';

@Component({
  selector: 'cp-complex-filter',
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.css']
})
export class ComplexFilterComponent implements OnInit {

  _facets: Facets;
  @Input() speciesFilter: string[];
  @Input() bioRoleFilter: string[];
  @Input() interactorTypeFilter: string[];
  @Input() predictedFilter: string[];
  _evidenceTypeFilter: string[];

  @Output() onSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onBiologicalRoleFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onPredictedFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onEvidenceTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

  starsFilter: string[];
  starsFacet: {
    name: string;
    starsNumber: number;
    count: number;
    stars: ('empty' | 'full')[];
  }[];

  constructor(private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
  }

  @Input()
  set facets(values: Facets) {
    this._facets = values;
    this.starsFacet = [];

    const countGroupedByStars = new Map<number, number>();
    if (this._facets.evidence_type_f) {
      for (const facet of this._facets.evidence_type_f) {
        const starNumber = ecoCodeStar(facet.name);
        if (!!starNumber) {
          // const starNumberStr = String(starNumber);
          if (countGroupedByStars.has(starNumber)) {
            const number = countGroupedByStars.get(starNumber);
            countGroupedByStars.set(starNumber, number + facet.count);
          } else {
            countGroupedByStars.set(starNumber, facet.count);
          }
        }
      }

      countGroupedByStars.forEach((count, stars) => {
        this.starsFacet.push({
          name: String(stars),
          starsNumber: stars,
          count: count,
          stars: this.getStars(stars)
        });
      });

      this.starsFacet.sort((a, b) => b.starsNumber - a.starsNumber);
    }
  }

  get facets(): Facets {
    return this._facets;
  }

  @Input()
  set evidenceTypeFilter(values: string[]) {
    this._evidenceTypeFilter = values;
    this.starsFilter = [];
    for (const evidenceType of this._evidenceTypeFilter) {
      const starNumber = ecoCodeStar(evidenceType);
      if (starNumber !== null) {
        if (!this.starsFilter.includes(String(starNumber))) {
          this.starsFilter.push(String(starNumber));
        }
      }
    }
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeSpeciesFilter(filter: string, status: boolean) {
    if (status) {
      this.speciesFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.speciesFilter.splice(this.speciesFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onSpeciesFilterChanged.emit(this.speciesFilter);
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeBiologicalRoleFilter(filter: string, status: boolean) {
    if (status) {
      this.bioRoleFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.bioRoleFilter.splice(this.bioRoleFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onBiologicalRoleFilterChanged.emit(this.bioRoleFilter);
  }

  /**
   *
   * @param filter selected filter
   * @param status status if selected filter has been added or removed
   */
  public changeInteractorTypeFilter(filter: string, status: boolean) {
    if (status) {
      this.interactorTypeFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
  }

  public changePredictedFilter(filter: string, status: boolean) {
    if (status) {
      this.predictedFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.predictedFilter.splice(this.predictedFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }
    this.onPredictedFilterChanged.emit(this.predictedFilter);
  }

  // public changeEvidenceTypeFilter(filter: string, status: boolean) {
  //   if (status) {
  //     this._evidenceTypeFilter.push(filter);
  //     this.googleAnalyticsService.fireAddedFilterEvent(filter);
  //   } else {
  //     this._evidenceTypeFilter.splice(this._evidenceTypeFilter.indexOf(filter), 1);
  //     this.googleAnalyticsService.fireRemovedFilterEvent(filter);
  //   }
  //   this.onEvidenceTypeFilterChanged.emit(this._evidenceTypeFilter);
  // }

  public changeStarFilter(filter: string, status: boolean) {
    if (status) {
      this.starsFilter.push(filter);
      this.googleAnalyticsService.fireAddedFilterEvent(filter);
    } else {
      this.starsFilter.splice(this.starsFilter.indexOf(filter), 1);
      this.googleAnalyticsService.fireRemovedFilterEvent(filter);
    }

    for (const evidenceTypeFacet of this._facets.evidence_type_f) {
      const stars = ecoCodeStar(evidenceTypeFacet.name);
      if (!!stars) {
        if (String(stars) === filter) {
          if (status) {
            this._evidenceTypeFilter.push(evidenceTypeFacet.name);
          } else {
            this._evidenceTypeFilter.splice(this._evidenceTypeFilter.indexOf(evidenceTypeFacet.name), 1);
          }
        }
      }
    }

    this.onEvidenceTypeFilterChanged.emit(this._evidenceTypeFilter);
  }

  /**
   * Emit event to parent component to remove all filters
   */
  public resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }

  /**
   *
   * @returns {boolean} true is any filter array contains an filter
   */
  public anyFiltersSelected() {
    return this.speciesFilter.length !== 0 || this.bioRoleFilter.length !== 0 || this.interactorTypeFilter.length !== 0 ||
      this.predictedFilter.length !== 0 || this._evidenceTypeFilter.length !== 0;
  }

  /**
   *
   * @param element filter to check if already selected
   * @param filter selected filters
   * @returns {boolean} true if filter is already in selected filters
   */
  public isSelected(element: string, filter: string[]): boolean {
    return filter.indexOf(element) !== -1;
  }

  public facetTypeIcon(facet: string): string {
    return interactorTypeIcon(facet);
  }

  public facetOrganismIcon(facet): string {
    return organismIcon(facet);
  }

  formatPredictedFacetValue(facetName: string): string {
    if (facetName === 'true') {
      return 'Predicted complex';
    } else {
      return 'Curated complex';
    }
  }

  // formatEvidenceTypeFacetValue(facetName: string): string {
  //   const evidenceTypeName = ecoCodeName(facetName);
  //   return evidenceTypeName || facetName;
  // }

  private getStars(amount: number): ('empty' | 'full')[] {
    const stars: ('empty' | 'full')[] = ['empty', 'empty', 'empty', 'empty', 'empty'];
    stars.fill('full');
    if (amount < stars.length) {
      stars.fill('empty', amount);
    }
    return stars;
  }
}
