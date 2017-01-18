/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComplexFunctionComponent } from './complex-function.component';

describe('ComplexFunctionComponent', () => {
  let component: ComplexFunctionComponent;
  let fixture: ComponentFixture<ComplexFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
