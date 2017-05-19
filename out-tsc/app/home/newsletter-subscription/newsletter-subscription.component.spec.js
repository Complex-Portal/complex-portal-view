/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { NewsletterSubscriptionComponent } from './newsletter-subscription.component';
describe('NewsletterSubscriptionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewsletterSubscriptionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewsletterSubscriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/home/newsletter-subscription/newsletter-subscription.component.spec.js.map