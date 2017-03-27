/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SynonymsComponent } from './synonyms.component';

describe('SynonymsComponent', () => {
  let component: SynonymsComponent;
  let fixture: ComponentFixture<SynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
