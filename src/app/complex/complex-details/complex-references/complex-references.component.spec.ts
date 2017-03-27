import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexReferencesComponent } from './complex-references.component';

describe('ComplexReferencesComponent', () => {
  let component: ComplexReferencesComponent;
  let fixture: ComponentFixture<ComplexReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
