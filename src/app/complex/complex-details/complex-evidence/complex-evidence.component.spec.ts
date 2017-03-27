import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexEvidenceComponent } from './complex-evidence.component';

describe('ComplexEvidenceComponent', () => {
  let component: ComplexEvidenceComponent;
  let fixture: ComponentFixture<ComplexEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
