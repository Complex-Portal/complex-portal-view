import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.reactome_base_url;

@Injectable()
export class ReactomeService {

  constructor(private http: HttpClient) {
  }

  /**
   * Returns all related pathways for a given complex stable identifier
   * @param id - a reactome stable identifier
   * @returns {Observable<R|T>}
   */
  public findRelatedPathways(id: string) {
    return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
      .catch(this.handleError);
  }

  /**
   * Returns the name of a complex by a given complex stable identifier
   * @param id - a complex stable identifier
   * @returns {Observable<R|T>}
   */
  public getComplexName(id: string) {
    return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName', {observe: 'response', responseType: 'text'})
      // .map((res: HttpResponse) => res.body.text())
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
