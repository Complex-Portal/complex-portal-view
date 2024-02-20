import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';

const baseURL = environment.ols_base_url;

@Injectable()
export class OlsService {

  constructor(private http: HttpClient) {

  }

  /**
   * Get the name of a xref from OLS
   * @param ontology xref intology
   * @param id xref identifier
   * @returns {Observable<R>}
   */
  getXrefName(ontology: string, id: string) {
    return this.http.get(baseURL + '/efo/terms?iri=' + this.getOntologyUrl(ontology) + id.replace(':', '_')).pipe(
      catchError(this.handleError));
  }

  private getOntologyUrl(ontology: string): string {
    if (ontology === 'EFO') {
      return 'http://www.ebi.ac.uk/efo/';
    } else if (ontology === 'Orphanet') {
      return 'http://www.orpha.net/ORDO/';
    } else {
      return 'http://purl.obolibrary.org/obo/';
    }
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return throwError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
