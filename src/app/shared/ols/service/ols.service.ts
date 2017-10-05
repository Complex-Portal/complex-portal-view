import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../environments/environment';

const baseURL = environment.ols_base_url;

@Injectable()
export class OlsService {

  constructor(private http: Http) {

  }

  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getOrphaNetName(id: string) {
    return this.http.get(baseURL + '/ordo/terms?iri=http://www.orpha.net/ORDO/' + id.replace(':', '_'))
      .map((response: Response) => response).catch(this.handleError);
  }

  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getEfoName(id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_'))
      .map((response: Response) => response).catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    if (error instanceof Response) {
      return Observable.throw(error);
    } else {
      console.error(error.message ? error.message : error.toString());
    }
  }
}
