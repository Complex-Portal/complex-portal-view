/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { GoBiologicalProcessComponent } from './go-biological-process.component';
describe('GoBiologicalProcessComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GoBiologicalProcessComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GoBiologicalProcessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/go-crossreferences/go-biological-process/go-biological-process.component.spec.js.map