import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

const baseURL = '//www.ebi.ac.uk/europepmc/webservices/rest/search?query=';

@Injectable()
export class EuroPmcService {

  constructor(private http: Http) {}

  getPublicationInformation(id: string) {
    return this.http.get(baseURL + 'ext_id:' + id + '%20src:med&format=json')
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
