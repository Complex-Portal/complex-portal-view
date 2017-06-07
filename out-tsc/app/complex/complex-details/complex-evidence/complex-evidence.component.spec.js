import { async, TestBed } from '@angular/core/testing';
import { ComplexEvidenceComponent } from './complex-evidence.component';
describe('ComplexEvidenceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ComplexEvidenceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ComplexEvidenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-evidence/complex-evidence.component.spec.js.map