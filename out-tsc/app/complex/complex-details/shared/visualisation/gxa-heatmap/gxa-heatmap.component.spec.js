/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { GxaHeatmapComponent } from './gxa-heatmap.component';
describe('GxaHeatmapComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GxaHeatmapComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GxaHeatmapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/gxa-heatmap/gxa-heatmap.component.spec.js.map