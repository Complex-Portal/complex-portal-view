import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../environments/environment';

const baseURL = environment.ols_base_url;

@Injectable()
export class OlsService {

  constructor(private http: HttpClient) {

  }

  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getOrphaNetName(id: string) {
    return this.http.get(baseURL + '/ordo/terms?iri=http://www.orpha.net/ORDO/' + id.replace(':', '_'))
      .map((response: Response) => response)
      .catch(this.handleError);
  }

  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getEfoName(id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_'))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
