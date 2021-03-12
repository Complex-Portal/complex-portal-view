import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDiagramComponent } from './node-diagram.component';

describe('NodeDiagramComponent', () => {
  let component: NodeDiagramComponent;
  let fixture: ComponentFixture<NodeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
