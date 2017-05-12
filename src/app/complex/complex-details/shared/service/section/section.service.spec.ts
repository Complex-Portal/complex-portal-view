import { TestBed, inject } from '@angular/core/testing';

import { SectionService } from './section.service';

describe('SectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionService]
    });
  });

  it('should ...', inject([SectionService], (service: SectionService) => {
    expect(service).toBeTruthy();
  }));
});
