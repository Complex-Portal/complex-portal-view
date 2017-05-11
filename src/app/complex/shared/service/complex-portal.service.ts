import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const baseURL = environment.complex_ws_base_url;

@Injectable()
export class ComplexPortalService {

  constructor(private http: Http) {

  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<R>}
   */
  getComplex(ac: string) {
    return this.http.get(baseURL + '/details/' + ac)
      .map((res: Response) => res.json()).catch(this.handleError);
  }


  getComplexOrganisms() {
    return this.findComplex('*').map(res => res.facets.species_f);
  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<R>}
   */
  getComplexMIJSON(ac: string) {
    return this.http.get(baseURL + '/export/' + ac)
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  /**
   * Find a complex based on indexed term
   * @returns {Observable<R>}
   * @param query
   * @param speciesFilter
   * @param bioRoleFilter
   * @param interactorTypeFilter
   * @param currentPageIndex
   * @param pageSize
   * @param format
   * @param facets
   */
  findComplex(query: string, speciesFilter: string[] = [], bioRoleFilter: string[] = [],
              interactorTypeFilter: string[] = [], currentPageIndex: number = 1, pageSize = 10,
              format = 'json', facets = 'species_f,ptype_f,pbiorole_f') {
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

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
