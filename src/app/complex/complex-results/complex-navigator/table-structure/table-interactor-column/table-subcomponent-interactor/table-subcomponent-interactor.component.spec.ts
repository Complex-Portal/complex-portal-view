import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableSubcomponentInteractorComponent} from './table-subcomponent-interactor.component';

describe('TableSubcomponentInteractorComponent', () => {
  let component: TableSubcomponentInteractorComponent;
  let fixture: ComponentFixture<TableSubcomponentInteractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSubcomponentInteractorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubcomponentInteractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
