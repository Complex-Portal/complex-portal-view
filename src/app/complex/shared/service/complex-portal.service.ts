import { Injectable } from '@angular/core';
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
   * Find a complex based on indexed term
   * @returns {Observable<R>}
   * @param query
   * @param format
   * @param facets
   * @param offset
   * @param pageLength
   * @param filters
   */
  findComplex(query: string, offset = 0, pageLength = 10, format = 'json', facets = 'species_f,ptype_f,pbiorole_f', filters?) {
    let params = new URLSearchParams();
    params.set('first', offset.toString());
    params.set('number', pageLength.toString());
    params.set('format', format);
    params.set('facets', facets);
    // params.set('filters', filters);
    return this.http.get(baseURL + '/search/' + query, { search: params })
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
