import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexNavigatorComponent} from './complex-navigator.component';

describe('ComplexNavigatorComponent', () => {
  let component: ComplexNavigatorComponent;
  let fixture: ComponentFixture<ComplexNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplexNavigatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
