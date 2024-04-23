import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableMainInteractorComponent} from './table-main-interactor.component';

describe('TableMainInteractorComponent', () => {
  let component: TableMainInteractorComponent;
  let fixture: ComponentFixture<TableMainInteractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMainInteractorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMainInteractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
