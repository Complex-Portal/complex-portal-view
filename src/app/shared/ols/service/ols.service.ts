import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';

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
    return this.http.get(baseURL + '/ordo/terms?iri=http://www.orpha.net/ORDO/' + id.replace(':', '_')).pipe(
      map((response: Response) => response),
      catchError(this.handleError));
  }

  /**
   * Get a name of efo xref
   * @param id
   * @returns {Observable<R>}
   */
  getEfoName(id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=http://www.ebi.ac.uk/efo/' + id.replace(':', '_')).pipe(
      catchError(this.handleError));
  }

  /**
   * Get a name of mondo xref
   * @param id
   * @returns {Observable<R>}
   */
  getOboName(id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=http://purl.obolibrary.org/obo/' + id.replace(':', '_')).pipe(
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
