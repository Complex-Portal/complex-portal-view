/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossreferencesQualifierComponent } from './crossreferences-qualifier.component';

describe('CrossreferencesQualifierComponent', () => {
  let component: CrossreferencesQualifierComponent;
  let fixture: ComponentFixture<CrossreferencesQualifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossreferencesQualifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossreferencesQualifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
