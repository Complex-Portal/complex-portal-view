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
var ComplexEvidenceComponent = (function () {
    function ComplexEvidenceComponent() {
    }
    ComplexEvidenceComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this._crossReferences.length; i++) {
            var crossRef = this._crossReferences[i];
            var database = this._crossReferences[i].database;
            if (database === 'evidence ontology') {
                this._ecoXRef = crossRef;
                switch (this._ecoXRef.identifier) {
                    case ('ECO:0000353'):
                        this._ecoXRef.description = 'physical interaction evidence';
                        this._flaskSymbol = 'E';
                        break;
                    case ('ECO:0005610'):
                        this._ecoXRef.description = 'inferred by homology';
                        this._flaskSymbol = 'C';
                        break;
                    case ('ECO:0005544'):
                        this._ecoXRef.description = 'inferred by orthology';
                        this._flaskSymbol = 'C';
                        break;
                    case ('ECO:0005546'):
                        this._ecoXRef.description = 'inferred by paralogy';
                        this._flaskSymbol = 'C';
                        break;
                    case ('ECO:0005547'):
                        this._ecoXRef.description = 'inferred by curator';
                        this._flaskSymbol = 'B';
                        break;
                    case ('ECO:0005543'):
                        this._ecoXRef.description = 'inferred from mixed species evidence';
                        this._flaskSymbol = 'E';
                        break;
                    case ('ECO:0005542'):
                        this._ecoXRef.description = 'inferred from single species evidence';
                        this._flaskSymbol = 'E';
                        break;
                }
            }
            if (database === 'intact') {
                if (this._intactXRefs === undefined) {
                    this._intactXRefs = [];
                }
                this._intactXRefs.push(crossRef);
            }
        }
    };
    Object.defineProperty(ComplexEvidenceComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexEvidenceComponent.prototype, "ecoXRef", {
        get: function () {
            return this._ecoXRef;
        },
        set: function (value) {
            this._ecoXRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexEvidenceComponent.prototype, "intactXRefs", {
        get: function () {
            return this._intactXRefs;
        },
        set: function (value) {
            this._intactXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexEvidenceComponent.prototype, "flaskSymbol", {
        get: function () {
            return this._flaskSymbol;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexEvidenceComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexEvidenceComponent.prototype, "crossReferences", null);
ComplexEvidenceComponent = __decorate([
    Component({
        selector: 'cp-complex-evidence',
        templateUrl: './complex-evidence.component.html',
        styleUrls: ['./complex-evidence.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexEvidenceComponent);
export { ComplexEvidenceComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-evidence/complex-evidence.component.js.map