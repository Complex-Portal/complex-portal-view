import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
describe('LocalStorageService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LocalStorageService]
        });
    });
    it('should be created', inject([LocalStorageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/shared/local-storage/service/local-storage.service.spec.js.map