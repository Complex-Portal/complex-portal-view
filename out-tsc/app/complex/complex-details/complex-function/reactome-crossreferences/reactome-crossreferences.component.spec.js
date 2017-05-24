/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ReactomeCrossreferencesComponent } from './reactome-crossreferences.component';
describe('ReactomeCrossreferencesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReactomeCrossreferencesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReactomeCrossreferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/reactome-crossreferences/reactome-crossreferences.component.spec.js.map