/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComplexPortalService } from './complex-portal.service';

describe('ComplexPortalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplexPortalService]
    });
  });

  it('should ...', inject([ComplexPortalService], (service: ComplexPortalService) => {
    expect(service).toBeTruthy();
  }));
});
