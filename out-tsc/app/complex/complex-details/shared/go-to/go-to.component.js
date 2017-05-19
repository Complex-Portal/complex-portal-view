var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { SectionService } from "../service/section/section.service";
import { PageScrollInstance, PageScrollService } from "ng2-page-scroll";
import { DOCUMENT } from "@angular/platform-browser";
import { GoogleAnalyticsService } from "../../../../shared/google-analytics/google-analytics.service";
import { Action } from "../../../../shared/google-analytics/action.enum";
import { Category } from "../../../../shared/google-analytics/category.enum";
var GoToComponent = (function () {
    function GoToComponent(_sectionService, cdr, pageScrollService, document, ga) {
        this._sectionService = _sectionService;
        this.cdr = cdr;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.ga = ga;
    }
    GoToComponent.prototype.ngOnInit = function () {
        switch (this._sectionName) {
            case 'Participants':
                this._sectionService.participantsSectionAvailable();
                break;
            case 'Function':
                this._sectionService.functionSectionAvailable();
                break;
            case 'Properties':
                this._sectionService.propertiesSectionAvailable();
                break;
            case 'Diseases and Pathologies':
                this._sectionService.diseaseSectionAvailable();
                break;
            case 'Expression and Cellular Location':
                this._sectionService.expressionSectionAvailable();
                break;
            case 'Names and Publications':
                this._sectionService.namesSectionAvailable();
                break;
        }
    };
    GoToComponent.prototype.ngAfterViewInit = function () {
        $('.goToMenu').foundation();
    };
    GoToComponent.prototype.scrollToElement = function (idReference) {
        this.ga.invokeCustomEvent(Action.GoToMenu, Category.details, idReference);
        var pageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#' + idReference);
        this.pageScrollService.start(pageScrollInstance);
    };
    GoToComponent.prototype.doCheckSection = function () {
        this.cdr.detectChanges();
    };
    GoToComponent.prototype.isSelected = function (sectionName) {
        return this._sectionName === sectionName;
    };
    Object.defineProperty(GoToComponent.prototype, "sectionName", {
        get: function () {
            return this._sectionName;
        },
        set: function (value) {
            this._sectionName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToComponent.prototype, "sectionService", {
        get: function () {
            return this._sectionService;
        },
        enumerable: true,
        configurable: true
    });
    return GoToComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GoToComponent.prototype, "sectionName", null);
GoToComponent = __decorate([
    Component({
        selector: 'cp-go-to',
        templateUrl: './go-to.component.html',
        styleUrls: ['./go-to.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [SectionService, ChangeDetectorRef,
        PageScrollService, Object, GoogleAnalyticsService])
], GoToComponent);
export { GoToComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/go-to/go-to.component.js.map