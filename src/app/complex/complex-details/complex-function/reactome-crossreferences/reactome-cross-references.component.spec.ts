import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactomeCrossReferencesComponent} from './reactome-cross-references.component';

describe('ReactomeCrossreferencesComponent', () => {
  let component: ReactomeCrossReferencesComponent;
  let fixture: ComponentFixture<ReactomeCrossReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactomeCrossReferencesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactomeCrossReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
