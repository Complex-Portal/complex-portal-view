import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

const baseURL = 'http://www.reactome.org/ContentService/data';

@Injectable()
export class ReactomeService {

  constructor(private http: Http) {}

  findRelatedPathways(id: string) {
    return this.http.get(baseURL + '/pathways/low/entity/' + id)
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  getComplexName(id: string) {
    return this.http.get(baseURL + '/query/' + id + '/displayName')
      .map((res: Response) => res.text()).catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
