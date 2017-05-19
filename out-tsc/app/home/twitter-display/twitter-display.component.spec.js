/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TwitterDisplayComponent } from './twitter-display.component';
describe('TwitterDisplayComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TwitterDisplayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TwitterDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/twitter-display/twitter-display.component.spec.js.map