import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from "../../../../../../../environments/environment";

const baseURL = environment.reactome_base_url;

@Injectable()
export class ReactomeService {

  constructor(private http: Http) {
  }

  findRelatedPathways(id: string) {
    return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  getComplexName(id: string) {
    return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName')
      .map((res: Response) => res.text()).catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error);
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
