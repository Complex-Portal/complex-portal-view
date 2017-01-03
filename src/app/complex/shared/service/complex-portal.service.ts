import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

const baseURL = 'https://wwwdev.ebi.ac.uk/intact/complex-ws';

@Injectable()
export class ComplexPortalService {

  constructor(private http: Http) {

  }

  /**
   * Get a specif complex from the WS
   * @param ac
   * @returns {Observable<R>}
   */
  getComplex(ac: string) {
    return this.http.get(baseURL + '/details/' + ac)
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
