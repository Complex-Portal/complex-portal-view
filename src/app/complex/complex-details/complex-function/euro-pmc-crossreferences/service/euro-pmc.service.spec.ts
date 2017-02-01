/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EuroPmcService } from './euro-pmc.service';

describe('EuroPmcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuroPmcService]
    });
  });

  it('should ...', inject([EuroPmcService], (service: EuroPmcService) => {
    expect(service).toBeTruthy();
  }));
});
