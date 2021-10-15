import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import {environment} from '../../../../../../environments/environment';
import {EuroPMCResponse} from '../model/EuroPMCResponse';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Observable} from 'rxjs/Observable';

const baseURL = environment.europepmc_base_url;

@Injectable()
export class EuroPmcService {

  constructor(private http: HttpClient) {
  }

  getPublicationInformation(id: string): Observable<EuroPMCResponse> {
    return this.http.get<EuroPMCResponse>(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return throwError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
