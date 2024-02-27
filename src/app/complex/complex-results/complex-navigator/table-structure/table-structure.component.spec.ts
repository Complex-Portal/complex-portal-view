import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStructureComponent } from './table-structure.component';

describe('TableStructureComponent', () => {
  let component: TableStructureComponent;
  let fixture: ComponentFixture<TableStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
