import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembliesComponent } from './assemblies.component';

describe('AssembliesComponent', () => {
  let component: AssembliesComponent;
  let fixture: ComponentFixture<AssembliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
