/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgonistsComponent } from './agonists.component';

describe('AgonistsComponent', () => {
  let component: AgonistsComponent;
  let fixture: ComponentFixture<AgonistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgonistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgonistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
