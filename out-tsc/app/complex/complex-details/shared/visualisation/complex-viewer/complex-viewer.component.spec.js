/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ComplexViewerComponent } from './complex-viewer.component';
describe('ComplexViewerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ComplexViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ComplexViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/complex-viewer/complex-viewer.component.spec.js.map