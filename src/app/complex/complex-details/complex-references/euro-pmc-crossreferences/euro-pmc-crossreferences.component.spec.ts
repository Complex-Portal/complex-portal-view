/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EuroPmcCrossreferencesComponent } from './euro-pmc-crossreferences.component';

describe('EuroPmcCrossreferencesComponent', () => {
  let component: EuroPmcCrossreferencesComponent;
  let fixture: ComponentFixture<EuroPmcCrossreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroPmcCrossreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroPmcCrossreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
