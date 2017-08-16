/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ReactomeDiagramComponent } from './reactome-diagram.component';
describe('ReactomeDiagramComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReactomeDiagramComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReactomeDiagramComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/reactome-diagram/reactome-diagram.component.spec.js.map