import { async, TestBed } from '@angular/core/testing';
import { EmdbCrossreferencesComponent } from './emdb-crossreferences.component';
describe('EmdbCrossreferencesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmdbCrossreferencesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmdbCrossreferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-properties/emdb-crossreferences/emdb-crossreferences.component.spec.js.map