import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

const baseURL = 'https://wwwdev.ebi.ac.uk/intact/complex-ws';

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

  findComplex(query: string, speciesFilter: string[], bioRoleFilter: string[], interactorTypeFilter: string[], currentPageIndex = 0, pageSize = 10, format = 'json', facets = 'species_f,ptype_f,pbiorole_f') {
    let params = new URLSearchParams();
    let filters: string = "";
    params.set('first', (currentPageIndex-1).toString());
    params.set('number', '10');
    params.set('format', format);
    params.set('facets', facets);
    if (speciesFilter) {
      filters += 'species_f:(' + '"' + speciesFilter.join('" "') + '"' + '),';
    }
    if (bioRoleFilter) {
      filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('" "') + '"' + '),';
    }
    if (interactorTypeFilter) {
      filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('" "') + '"' + '),';
    }
    params.set('filters', filters);
    return this.http.get(baseURL + '/search/' + query, {search: params})
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
