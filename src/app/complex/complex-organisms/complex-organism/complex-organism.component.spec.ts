import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexOrganismComponent } from './complex-organism.component';

describe('ComplexOrganismComponent', () => {
  let component: ComplexOrganismComponent;
  let fixture: ComponentFixture<ComplexOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
