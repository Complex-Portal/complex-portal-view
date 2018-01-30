import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.europepmc_base_url;

@Injectable()
export class EuroPmcService {

  constructor(private http: HttpClient) {
  }

  getPublicationInformation(id: string) {
    return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
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
