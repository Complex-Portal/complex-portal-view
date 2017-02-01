/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReactomeService } from './reactome.service';

describe('ReactomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactomeService]
    });
  });

  it('should ...', inject([ReactomeService], (service: ReactomeService) => {
    expect(service).toBeTruthy();
  }));
});
