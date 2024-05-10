import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexNavigatorSortingComponent} from './complex-navigator-sorting.component';

describe('ComplexNavigatorSortingComponent', () => {
  let component: ComplexNavigatorSortingComponent;
  let fixture: ComponentFixture<ComplexNavigatorSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplexNavigatorSortingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNavigatorSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
