import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ComplexDetails} from '../model/complex-details/complex-details.model';
import {ComplexSearchResult} from '../model/complex-results/complex-search.model';
import {SpeciesFacet} from '../model/complex-results/facets/species_f.model';

const baseURL = environment.complex_ws_base_url;

@Injectable()
export class ComplexPortalService {

  constructor(private http: Http) {

  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<ComplexDetails>}
   */
  getComplex(ac: string): Observable<ComplexDetails> {
    return this.http.get(baseURL + '/details/' + ac)
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  /**
   *
   * @returns {Observable<SpeciesFacet[]>}
   */
  getComplexOrganisms(): Observable<SpeciesFacet[]> {
    return this.findComplex('*').map((complexSearchResult: ComplexSearchResult) => {
      return complexSearchResult.facets['species_f'];
    });
  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<any>}
   * TODO: Define MI-JSON maybe, but as we don't work with it and only pass it on we never implemented the model
   */
  getComplexMIJSON(ac: string): Observable<any> {
    return this.http.get(baseURL + '/export/' + ac)
      .map((res: Response) => res.json()).catch(this.handleError);
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
    const params = new URLSearchParams();
    let filters = '';
    params.set('first', ((currentPageIndex * pageSize) - pageSize).toString());
    params.set('number', pageSize.toString());
    params.set('format', format);
    params.set('facets', facets);
    if (speciesFilter.length !== 0) {
      filters += 'species_f:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
    }
    if (bioRoleFilter.length !== 0) {
      filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"AND"') + '"' + '),';
    }
    if (interactorTypeFilter.length !== 0) {
      filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"AND"') + '"' + '),';
    }
    params.set('filters', filters);
    // console.log(baseURL + '/search/' + query, {search: params});
    return this.http.get(baseURL + '/search/' + query, {search: params})
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) : Observable<any> {
    if (error instanceof Response) {
      return Observable.throw(error);
    } else {
      console.error(error.message ? error.message : error.toString());
    }
  }

}
