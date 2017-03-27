import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCrossreferencesComponent } from './eco-crossreferences.component';

describe('EcoCrossreferencesComponent', () => {
  let component: EcoCrossreferencesComponent;
  let fixture: ComponentFixture<EcoCrossreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoCrossreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoCrossreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
