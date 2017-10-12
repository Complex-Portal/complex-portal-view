import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.reactome_base_url;

@Injectable()
export class ReactomeService {

  constructor(private http: Http) {
  }

  /**
   * Returns all related pathways for a given complex stable identifier
   * @param id - a reactome stable identifier
   * @returns {Observable<R|T>}
   */
  public findRelatedPathways(id: string) {
    return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  /**
   * Returns the name of a complex by a given complex stable identifier
   * @param id - a complex stable identifier
   * @returns {Observable<R|T>}
   */
  public getComplexName(id: string) {
    return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName')
      .map((res: Response) => res.text()).catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    if (error instanceof Response) {
      return Observable.throw(error);
    } else {
      console.error(error.message ? error.message : error.toString());
    }
  }
}
