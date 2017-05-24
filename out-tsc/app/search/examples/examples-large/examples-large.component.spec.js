/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ExamplesLargeComponent } from './examples-large.component';
describe('ExamplesLargeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ExamplesLargeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ExamplesLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/search/examples/examples-large/examples-large.component.spec.js.map