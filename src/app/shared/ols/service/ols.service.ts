import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from "../../../../environments/environment";

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

  getEfoName(id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_'))
      .map((response: Response) => response).catch(this.handleError);
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
