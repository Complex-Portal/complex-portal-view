import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexNavigatorButtonsComponent} from './complex-navigator-buttons.component';

describe('ComplexNavigatorButtonsComponent', () => {
  let component: ComplexNavigatorButtonsComponent;
  let fixture: ComponentFixture<ComplexNavigatorButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplexNavigatorButtonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNavigatorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
