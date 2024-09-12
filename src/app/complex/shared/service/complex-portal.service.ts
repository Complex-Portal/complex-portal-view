import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {Observable, throwError} from 'rxjs';

import {ComplexDetails} from '../model/complex-details/complex-details.model';
import {ComplexSearchResult} from '../model/complex-results/complex-search.model';
import {Element} from '../model/complex-results/element.model';
import {Facet} from '../model/complex-results/facet.model';

const baseURL = environment.complex_ws_base_url;

@Injectable()
export class ComplexPortalService {

  private static SPECIES_FACET_FIELD = 'species_f';
  private static COMPONENT_TYPE_FACET_FIELD = 'ptype_f';
  private static BIO_ROLE_FACET_FIELD = 'pbiorole_f';
  private static PREDICTED_FACET_FIELD = 'predicted_complex_f';
  private static CONFIDENCE_SCORE_FACET_FIELD = 'confidence_score_f';

  private static FACETS = [
    ComplexPortalService.SPECIES_FACET_FIELD,
    ComplexPortalService.COMPONENT_TYPE_FACET_FIELD,
    ComplexPortalService.BIO_ROLE_FACET_FIELD,
    ComplexPortalService.PREDICTED_FACET_FIELD,
    ComplexPortalService.CONFIDENCE_SCORE_FACET_FIELD
  ].join(',');

  constructor(private http: HttpClient) {
  }

  /**
   * Get a specific complex from the WS
   * @param ac
   * @returns {Observable<ComplexDetails>}
   */
  getComplex(ac: string): Observable<ComplexDetails> {
    const url = `${baseURL}/details/${ac}`;
    return this.http.get<ComplexDetails>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get a specific complex from the WS
   * @param complexAc
   * @returns {Observable<ComplexDetails>}
   */
  getComplexAc(complexAc: string): Observable<ComplexDetails> {
    const url = `${baseURL}/complex/${complexAc}`;
    return this.http.get<ComplexDetails>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   *
   * @returns {Observable<Facet[]>}
   */
  getComplexOrganisms(): Observable<Facet[]> {
    return this.findComplex('*').pipe(map((complexSearchResult: ComplexSearchResult) => {
      return complexSearchResult.facets['species_f'];
    }));
  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<any>}
   * TODO: Define MI-JSON maybe, but as we don't work with it and only pass it on we never implemented the model
   */
  getComplexMIJSON(ac: string): Observable<any> {
    return this.http.get(baseURL + '/export/' + ac).pipe(catchError(this.handleError));
  }

  findComplexNoFilters(query: string,
                       currentPageIndex = 1,
                       pageSize = 10,
                       format = 'json'): Observable<ComplexSearchResult> {
    return this.findComplex(query, [], [], [], [], 1, currentPageIndex, pageSize, format);
  }

  /**
   * Find a complex based on indexed term
   * @param query
   * @param speciesFilter
   * @param bioRoleFilter
   * @param interactorTypeFilter
   * @param predictedFilter
   * @param confidenceScoreFilter
   * @param currentPageIndex
   * @param pageSize
   * @param format
   * @returns {Observable<ComplexSearchResult>}
   */
  findComplex(query: string,
              speciesFilter: string[] = [],
              bioRoleFilter: string[] = [],
              interactorTypeFilter: string[] = [],
              predictedFilter: string[] = [],
              confidenceScoreFilter = 1,
              currentPageIndex = 1,
              pageSize = 10,
              format = 'json'): Observable<ComplexSearchResult> {

    let filters = '';
    if (speciesFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService.SPECIES_FACET_FIELD, speciesFilter);
    }
    if (bioRoleFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService.BIO_ROLE_FACET_FIELD, bioRoleFilter);
    }
    if (interactorTypeFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService.COMPONENT_TYPE_FACET_FIELD, interactorTypeFilter);
    }
    if (predictedFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService.PREDICTED_FACET_FIELD, predictedFilter);
    }
    if (!isNaN(confidenceScoreFilter) && confidenceScoreFilter !== 1) {
      filters += this.buildFilterParam(ComplexPortalService.CONFIDENCE_SCORE_FACET_FIELD, [confidenceScoreFilter.toString()]);
    }

    /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
    const params = new HttpParams()
      .set('first', ((currentPageIndex * pageSize) - pageSize).toString())
      .set('number', pageSize.toString())
      .set('format', format)
      .set('facets', ComplexPortalService.FACETS)
      .set('filters', filters);

    return this.http.get<ComplexSearchResult>(baseURL + '/search/' + query, {params: params}).pipe(
      catchError(this.handleError));
  }

  private buildFilterParam(filterField: string, filterValues: string[]): string {
    return filterField + ':(' + '"' + filterValues.join('"OR"') + '"' + '),';
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return throwError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }

  getSimplifiedComplex(complexAc: string): Observable<Element> {
    return this.http.get(`${baseURL}/complex-simplified/${complexAc}`).pipe(catchError(this.handleError));
  }

}

function range(start: number, stop?: number, step = 1): number[] {
  const result: number[] = [];

  // If only one argument is provided, treat it as the stop value and set start to 0
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  // Ensure the loop terminates correctly based on positive/negative step values
  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}
