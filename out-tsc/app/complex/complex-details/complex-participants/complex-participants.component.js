var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var ComplexParticipantsComponent = (function () {
    function ComplexParticipantsComponent() {
        this._displayedElements = 5;
    }
    ComplexParticipantsComponent.prototype.ngOnInit = function () {
        this.sortParticipants();
    };
    ComplexParticipantsComponent.prototype.sortParticipants = function () {
        // TODO: Sort participants in WS - GH issue #174
        this.participants.sort(function (a, b) {
            if (a.interactorType < b.interactorType) {
                return -1;
            }
            else if (a.interactorType > b.interactorType) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ComplexParticipantsComponent.prototype.getLegendURL = function (interactorType) {
        // TODO: maybe talk to OLS WS on some point, but it was easier to do it like this at the time. - GH issue #172
        switch (interactorType) {
            case 'small molecule':
                return 'assets/images/legend/small-mol.png';
            case 'protein':
                return 'assets/images/legend/protein-blob.png';
            case 'single stranded deoxyribonucleic acid':
                return 'assets/images/legend/dna.png';
            case 'ribonucleic acid':
                return 'assets/images/legend/rna.png';
        }
    };
    ComplexParticipantsComponent.prototype.getConvertedStochiometry = function (stochiometry) {
        // TODO: WS should send Stochiometry in right format already - GH issue #173
        return stochiometry.split(',')[0].split(':')[1].trim();
    };
    Object.defineProperty(ComplexParticipantsComponent.prototype, "participants", {
        get: function () {
            return this._participants;
        },
        set: function (value) {
            this._participants = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexParticipantsComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexParticipantsComponent.prototype, "complexAC", {
        get: function () {
            return this._complexAC;
        },
        set: function (value) {
            this._complexAC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexParticipantsComponent.prototype, "complexMIJSON", {
        get: function () {
            return this._complexMIJSON;
        },
        set: function (value) {
            this._complexMIJSON = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexParticipantsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexParticipantsComponent.prototype, "participants", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexParticipantsComponent.prototype, "complexAC", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexParticipantsComponent.prototype, "complexMIJSON", null);
ComplexParticipantsComponent = __decorate([
    Component({
        selector: 'cp-complex-participants',
        templateUrl: './complex-participants.component.html',
        styleUrls: ['./complex-participants.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexParticipantsComponent);
export { ComplexParticipantsComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-participants/complex-participants.component.js.map