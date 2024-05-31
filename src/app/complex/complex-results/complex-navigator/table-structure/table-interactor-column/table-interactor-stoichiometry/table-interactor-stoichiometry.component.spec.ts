import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableInteractorStoichiometryComponent} from './table-interactor-stoichiometry.component';

describe('TableInteractorStoichiometryComponent', () => {
  let component: TableInteractorStoichiometryComponent;
  let fixture: ComponentFixture<TableInteractorStoichiometryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableInteractorStoichiometryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInteractorStoichiometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
