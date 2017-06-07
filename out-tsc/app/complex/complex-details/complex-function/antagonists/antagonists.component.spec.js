/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AntagonistsComponent } from './antagonists.component';
describe('AntagonistsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AntagonistsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AntagonistsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/antagonists/antagonists.component.spec.js.map