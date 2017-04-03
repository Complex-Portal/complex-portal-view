import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSearchComponent } from './local-search.component';

describe('LocalSearchComponent', () => {
  let component: LocalSearchComponent;
  let fixture: ComponentFixture<LocalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
