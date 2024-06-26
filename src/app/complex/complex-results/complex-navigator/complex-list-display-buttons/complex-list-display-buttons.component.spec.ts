/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexListDisplayButtonsComponent} from './complex-list-display-buttons.component';

describe('ComplexListDisplayButtonsComponent', () => {
  let component: ComplexListDisplayButtonsComponent;
  let fixture: ComponentFixture<ComplexListDisplayButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexListDisplayButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexListDisplayButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
