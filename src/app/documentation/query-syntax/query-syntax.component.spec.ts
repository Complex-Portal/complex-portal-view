import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySyntaxComponent } from './query-syntax.component';

describe('QuerySyntaxComponent', () => {
  let component: QuerySyntaxComponent;
  let fixture: ComponentFixture<QuerySyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerySyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
