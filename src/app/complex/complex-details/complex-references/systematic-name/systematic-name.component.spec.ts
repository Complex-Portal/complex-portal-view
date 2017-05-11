/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SystematicNameComponent} from './systematic-name.component';

describe('SystematicNameComponent', () => {
  let component: SystematicNameComponent;
  let fixture: ComponentFixture<SystematicNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystematicNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystematicNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
