import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableInteractorNameComponent} from './table-interactor-name.component';

describe('TableInteractorNameComponent', () => {
  let component: TableInteractorNameComponent;
  let fixture: ComponentFixture<TableInteractorNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableInteractorNameComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInteractorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
