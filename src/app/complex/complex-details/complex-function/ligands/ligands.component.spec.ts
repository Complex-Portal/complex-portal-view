/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LigandsComponent } from './ligands.component';

describe('LigandsComponent', () => {
  let component: LigandsComponent;
  let fixture: ComponentFixture<LigandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
