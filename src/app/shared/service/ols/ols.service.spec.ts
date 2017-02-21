/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OlsService } from './ols.service';

describe('OlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OlsService]
    });
  });

  it('should ...', inject([OlsService], (service: OlsService) => {
    expect(service).toBeTruthy();
  }));
});
