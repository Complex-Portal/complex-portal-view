/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { PdbCrossreferencesComponent } from './pdb-crossreferences.component';
describe('PdbCrossreferencesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PdbCrossreferencesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PdbCrossreferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-properties/pdb-crossreferences/pdb-crossreferences.component.spec.js.map