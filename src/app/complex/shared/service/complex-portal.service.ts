import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {environment} from '../../../../environments/environment';


import {ComplexDetails} from '../model/complex-details/complex-details.model';
import {ComplexSearchResult} from '../model/complex-results/complex-search.model';
import {SpeciesFacet} from '../model/complex-results/facets/species_f.model';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';

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
    return this.http.get(url).pipe(
      catchError(this.handleError));
  }

  /**
   * Get a specific complex from the WS
   * @param complexAc
   * @returns {Observable<ComplexDetails>}
   */
  getComplexAc(complexAc: string): Observable<ComplexDetails> {
    const url = `${baseURL}/complex/${complexAc}`;
    return this.http.get(url).pipe(
      catchError(this.handleError));
  }

  /**
   *
   * @returns {Observable<SpeciesFacet[]>}
   */
  getComplexOrganisms(): Observable<SpeciesFacet[]> {
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
      filters += 'species_f:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
    }
    if (bioRoleFilter.length !== 0) {
      filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"AND"') + '"' + '),';
    }
    if (interactorTypeFilter.length !== 0) {
      filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"AND"') + '"' + '),';
    }

    /** HttpParams is immutable. Its set() method returns a new HttpParams, without mutating the original one **/
    const params = new HttpParams()
      .set('first', ((currentPageIndex * pageSize) - pageSize).toString())
      .set('number', pageSize.toString())
      .set('format', format)
      .set('facets', facets)
      .set('filters', filters);

    return this.http.get(baseURL + '/search/' + query, {params: params}).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return throwError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }

}
