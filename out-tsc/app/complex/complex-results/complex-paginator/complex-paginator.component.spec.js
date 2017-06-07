/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ComplexPaginatorComponent } from './complex-paginator.component';
describe('ComplexPaginatorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ComplexPaginatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ComplexPaginatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-results/complex-paginator/complex-paginator.component.spec.js.map