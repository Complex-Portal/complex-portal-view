/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoCelluarCrossreferenceComponent } from './go-celluar-crossreference.component';

describe('GoCelluarCrossreferenceComponent', () => {
  let component: GoCelluarCrossreferenceComponent;
  let fixture: ComponentFixture<GoCelluarCrossreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCelluarCrossreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCelluarCrossreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
