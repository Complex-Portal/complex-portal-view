/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AntagonistsComponent } from './antagonists.component';

describe('AntagonistsComponent', () => {
  let component: AntagonistsComponent;
  let fixture: ComponentFixture<AntagonistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntagonistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntagonistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
