import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntactCrossreferencesComponent } from './intact-crossreferences.component';

describe('IntactCrossreferencesComponent', () => {
  let component: IntactCrossreferencesComponent;
  let fixture: ComponentFixture<IntactCrossreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntactCrossreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntactCrossreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
