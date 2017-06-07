var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var SectionService = (function () {
    function SectionService() {
    }
    SectionService.prototype.reset = function () {
        this._participantsSection = false;
        this._functionSection = false;
        this._propertiesSection = false;
        this._expressionSection = false;
        this._diseaseSection = false;
        this._namesSection = false;
    };
    SectionService.prototype.participantsSectionAvailable = function () {
        this._participantsSection = true;
    };
    SectionService.prototype.functionSectionAvailable = function () {
        this._functionSection = true;
    };
    SectionService.prototype.propertiesSectionAvailable = function () {
        this._propertiesSection = true;
    };
    SectionService.prototype.expressionSectionAvailable = function () {
        this._expressionSection = true;
    };
    SectionService.prototype.diseaseSectionAvailable = function () {
        this._diseaseSection = true;
    };
    SectionService.prototype.namesSectionAvailable = function () {
        this._namesSection = true;
    };
    Object.defineProperty(SectionService.prototype, "participantsSection", {
        get: function () {
            return this._participantsSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionService.prototype, "functionSection", {
        get: function () {
            return this._functionSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionService.prototype, "propertiesSection", {
        get: function () {
            return this._propertiesSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionService.prototype, "expressionSection", {
        get: function () {
            return this._expressionSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionService.prototype, "diseaseSection", {
        get: function () {
            return this._diseaseSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SectionService.prototype, "namesSection", {
        get: function () {
            return this._namesSection;
        },
        enumerable: true,
        configurable: true
    });
    return SectionService;
}());
SectionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], SectionService);
export { SectionService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/service/section/section.service.js.map