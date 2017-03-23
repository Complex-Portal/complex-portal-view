/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SystematicNameComponent } from "./systematic-name.component";
describe('SystematicNameComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SystematicNameComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SystematicNameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/systematic-name/systematic-name.component.spec.js.map