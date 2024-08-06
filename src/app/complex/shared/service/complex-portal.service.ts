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

const baseURL = environment.complex_ws_base_url;

@Injectable()
export class ComplexPortalService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get a specific complex from the WS
   * @param ac
   * @returns {Observable<ComplexDetails>}
   */
  getComplex(ac: string): Observable<ComplexDetails> {
    const url = `${baseURL}/details/${ac}`;
    // TODO Remove random predicted when real predicted complexes available
    return this.http.get<ComplexDetails>(url).pipe(
      // map(data => {
      //   data.predicted = Math.random() < 0.5;
      //   return data;
      // }),
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
    // TODO Remove random predicted when real predicted complexes available
    return this.http.get<ComplexDetails>(url).pipe(
      // map(data => {
      //   data.predicted = Math.random() < 0.5;
      //   return data;
      // }),
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

  /**
   * Find a complex based on indexed term
   * @param query
   * @param speciesFilter
   * @param bioRoleFilter
   * @param interactorTypeFilter
   * @param currentPageIndex
   * @param pageSize
   * @param format
   * @param facets
   * @returns {Observable<ComplexSearchResult>}
   */
  findComplex(query: string, speciesFilter: string[] = [], bioRoleFilter: string[] = [],
              interactorTypeFilter: string[] = [], currentPageIndex = 1, pageSize = 10,
              format = 'json', facets = 'species_f,ptype_f,pbiorole_f'): Observable<ComplexSearchResult> {

    let filters = '';
    if (speciesFilter.length !== 0) {
      filters += 'species_f:(' + '"' + speciesFilter.join('"OR"') + '"' + '),';
    }
    if (bioRoleFilter.length !== 0) {
      filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"OR"') + '"' + '),';
    }
    if (interactorTypeFilter.length !== 0) {
      filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"OR"') + '"' + '),';
    }

    /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
    const params = new HttpParams()
      .set('first', ((currentPageIndex * pageSize) - pageSize).toString())
      .set('number', pageSize.toString())
      .set('format', format)
      .set('facets', facets)
      .set('filters', filters);

    // TODO Remove random predicted when real predicted complexes available
    return this.http.get<ComplexSearchResult>(baseURL + '/search/' + query, {params: params}).pipe(
      // map(result => {
          // result.elements.forEach(e => e.predicted = Math.random() < 0.5);
          // return result;
        // }
      // ),
      catchError(this.handleError));
  }

  findComplexFacets(query: string, facets = 'species_f,ptype_f,pbiorole_f'): Observable<ComplexSearchResult> {
    /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
    const params = new HttpParams()
      .set('facets', facets);

    return this.http.get<ComplexSearchResult>(baseURL + '/search/' + query, {params: params}).pipe(
      catchError(this.handleError));
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
    // const url = `${baseURL}/complex-simplified/${complexAc}`;
    return this.http.get(url).pipe(
      catchError(this.handleError));
  }

}
