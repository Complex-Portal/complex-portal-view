/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ChemblCrossreferenceComponent } from './chembl-crossreference.component';
describe('ChemblCrossreferenceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChemblCrossreferenceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChemblCrossreferenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-disease/chembl-crossreference/chembl-crossreference.component.spec.js.map