/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoBiologicalProcessComponent } from './go-biological-process.component';

describe('GoBiologicalProcessComponent', () => {
  let component: GoBiologicalProcessComponent;
  let fixture: ComponentFixture<GoBiologicalProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBiologicalProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBiologicalProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
