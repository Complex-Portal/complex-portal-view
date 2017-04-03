import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdbCrossreferencesComponent } from './emdb-crossreferences.component';

describe('EmdbCrossreferencesComponent', () => {
  let component: EmdbCrossreferencesComponent;
  let fixture: ComponentFixture<EmdbCrossreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdbCrossreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdbCrossreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
