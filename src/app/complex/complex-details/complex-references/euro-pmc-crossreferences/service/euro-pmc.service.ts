import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../../../../../environments/environment';

const baseURL = environment.europepmc_base_url;

@Injectable()
export class EuroPmcService {

  constructor(private http: Http) {
  }

  getPublicationInformation(id: string) {
    return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) : Observable<any> {
    if (error instanceof Response) {
      return Observable.throw(error);
    } else {
      console.error(error.message ? error.message : error.toString());
    }
  }
}
