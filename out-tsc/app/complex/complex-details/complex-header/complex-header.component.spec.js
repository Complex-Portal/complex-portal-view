/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ComplexHeaderComponent } from './complex-header.component';
describe('ComplexHeaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ComplexHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ComplexHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-header/complex-header.component.spec.js.map