import { TestBed, inject } from '@angular/core/testing';

import { SideMenuService } from './side-menu.service';

describe('SideMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideMenuService]
    });
  });

  it('should ...', inject([SideMenuService], (service: SideMenuService) => {
    expect(service).toBeTruthy();
  }));
});
