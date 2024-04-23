import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableInteractorExternalLinkComponent} from './table-interactor-external-link.component';

describe('TableInteractorExternalLinkComponent', () => {
  let component: TableInteractorExternalLinkComponent;
  let fixture: ComponentFixture<TableInteractorExternalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableInteractorExternalLinkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInteractorExternalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
