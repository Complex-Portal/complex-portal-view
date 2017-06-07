/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { LitmolViewerComponent } from './litmol-viewer.component';
describe('LitmolViewerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LitmolViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LitmolViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/litmol-viewer/litmol-viewer.component.spec.js.map