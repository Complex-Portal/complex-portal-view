import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {environment} from '../../../../environments/environment';


import {ComplexDetails} from '../model/complex-details/complex-details.model';
import {ComplexSearchResult} from '../model/complex-results/complex-search.model';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Element} from '../model/complex-results/element.model';
import {Facet} from '../model/complex-results/facet.model';

// const baseURL = environment.complex_ws_base_url;
const baseURL = 'http://localhost:9090/intact/complex-ws';

@Injectable()
export class ComplexPortalService {

  private static SPECIES_FACET_FIELD = 'species_f';
  private static COMPONENT_TYPE_FACET_FIELD = 'ptype_f';
  private static BIO_ROLE_FACET_FIELD = 'pbiorole_f';
  private static PREDICTED_FACET_FIELD = 'predicted_complex_f';
  private static STARS_FACET_FIELD = 'stars_f';

  private static FACETS = [
    ComplexPortalService.SPECIES_FACET_FIELD,
    ComplexPortalService.COMPONENT_TYPE_FACET_FIELD,
    ComplexPortalService.BIO_ROLE_FACET_FIELD,
    ComplexPortalService.PREDICTED_FACET_FIELD,
    ComplexPortalService.STARS_FACET_FIELD
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
    return this.findComplex(query, [], [], [], [], [], currentPageIndex, pageSize, format);
  }

  /**
   * Find a complex based on indexed term
   * @param query
   * @param speciesFilter
   * @param bioRoleFilter
   * @param interactorTypeFilter
   * @param predictedFilter
   * @param starsFilter
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
              starsFilter: string[] = [],
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
    if (starsFilter.length !== 0) {
      filters += this.buildFilterParam(ComplexPortalService.STARS_FACET_FIELD, starsFilter);
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
    const url = `${baseURL}/complex-simplified/${complexAc}`;
    return this.http.get(url).pipe(
      catchError(this.handleError));
  }

}
