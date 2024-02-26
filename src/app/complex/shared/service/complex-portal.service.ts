import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {environment} from '../../../../environments/environment';


import {ComplexDetails} from '../model/complex-details/complex-details.model';
import {ComplexSearchResult} from '../model/complex-results/complex-search.model';
import {SpeciesFacet} from '../model/complex-results/facets/species_f.model';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Element} from '../model/complex-results/element.model';
import {combineLatest} from 'rxjs';
import {flatMap} from 'rxjs/internal/operators';


import {Participant} from '../model/complex-details/participant.model';
import {ComplexComponent} from '../model/complex-results/complex-component.model';

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

  // New method with HACK to fetch the components for each complex in the search
  findComplexWithComponents(query: string, speciesFilter: string[] = [], bioRoleFilter: string[] = [],
                            interactorTypeFilter: string[] = [], currentPageIndex = 1, pageSize = 10,
                            format = 'json', facets = 'species_f,ptype_f,pbiorole_f'): Observable<ComplexSearchResult> {
    return this.findComplex(query, speciesFilter, bioRoleFilter, interactorTypeFilter, currentPageIndex, pageSize, format, facets)
      // this.findComplex returns an Observable<ComplexSearchResult>, with no components, so we call flatmap to map the result and
      // add components to each complex
      .pipe(flatMap((complexSearchResult: ComplexSearchResult) => {
        // For each element in the result (for each complex in the result), we call map to update the element and
        // assign all the results to a list of Observable.
        // List of Observable as we're calling this.getComplexAc for each complex, which returns observable
        const searchResultElements: Observable<Element>[] = complexSearchResult.elements
          .map((searchResultElement: Element) => this.getComplexAc(searchResultElement.complexAC)
            .pipe(map((complexDetails: ComplexDetails) => {
              // With the results for each complex (in ComplexDetails), we retrieve the participant identifiers, and
              // assign those to the componentIds member of Element
              searchResultElement.components = complexDetails.participants
                .map(participant => new ComplexComponent(participant.identifier, participant.stochiometry, participant.interactorType, participant.name));
              // If we want to add any other details, apart from the components, this would be the place to do so
              return searchResultElement;
            })));

        // We use combineLatest to:
        // 1. Deal with searchResultElements, which is of type Observable<Element>[] (list of observable), not what we want in the response
        // 2. Update the elements in the response, now that the component ids have been added, and return the response.
        return combineLatest(searchResultElements).pipe((map(elements => {
          complexSearchResult.elements = elements;
          return complexSearchResult;
        })));
      }));
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return throwError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }

}
