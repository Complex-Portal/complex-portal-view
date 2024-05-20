import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexNavigatorRatingComponent} from './complex-navigator-rating.component';

describe('ComplexNavigatorRatingComponent', () => {
  let component: ComplexNavigatorRatingComponent;
  let fixture: ComponentFixture<ComplexNavigatorRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplexNavigatorRatingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNavigatorRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
