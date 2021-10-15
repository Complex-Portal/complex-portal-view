import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import {environment} from '../../../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';

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
  public findRelatedPathways(id: string): Observable<Pathway[]> {
    return this.http.get<Pathway[]>(baseURL + '/ContentService/data/pathways/low/entity/' + id)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns the name of a complex by a given complex stable identifier
   * @param id - a complex stable identifier
   * @returns {Observable<R|T>}
   */
  public getComplexName(id: string): Observable<string> {
    return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName', {observe: 'body', responseType: 'text'})
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

export interface Pathway {
  dbId: number;
  displayName: string;
  stId: string;
  stIdVersion: string;
  isInDisease: boolean;
  isInferred: boolean;
  name: string[];
  releaseDate: string;
  speciesName: string;
  hasDiagram: boolean;
  hasEHLD: boolean;
  schemaClass: string;
  className: string;
}
