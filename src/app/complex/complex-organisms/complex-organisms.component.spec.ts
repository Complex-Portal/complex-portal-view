import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexOrganismsComponent } from './complex-organisms.component';

describe('ComplexOrganismsComponent', () => {
  let component: ComplexOrganismsComponent;
  let fixture: ComponentFixture<ComplexOrganismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexOrganismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexOrganismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
