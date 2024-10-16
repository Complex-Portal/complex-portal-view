import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexResultsComponent} from './complex-results.component';

describe('ComplexResultsComponent', () => {
  let component: ComplexResultsComponent;
  let fixture: ComponentFixture<ComplexResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplexResultsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
