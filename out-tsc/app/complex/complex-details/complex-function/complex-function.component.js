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
var ComplexFunctionComponent = (function () {
    function ComplexFunctionComponent() {
    }
    ComplexFunctionComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.crossReferences.length; i++) {
            var crossRef = this.crossReferences[i];
            var database = this.crossReferences[i].database;
            if (database === 'gene ontology') {
                if (this.goXRefs === undefined) {
                    this.goXRefs = [];
                }
                this.goXRefs.push(crossRef);
            }
            if (database === 'intenz') {
                if (this.intenzXRefs === undefined) {
                    this.intenzXRefs = [];
                }
                this.intenzXRefs.push(crossRef);
            }
            if (database === 'reactome') {
                if (this.reactomeXRefs === undefined) {
                    this.reactomeXRefs = [];
                }
                this.reactomeXRefs.push(crossRef);
            }
            if (database === 'pubmed') {
                if (this.pubmedXRefs === undefined) {
                    this.pubmedXRefs = [];
                }
                this.pubmedXRefs.push(crossRef);
            }
        }
    };
    Object.defineProperty(ComplexFunctionComponent.prototype, "crossReferences", {
        get: function () {
            return this._crossReferences;
        },
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "functionDescription", {
        get: function () {
            return this._functionDescription;
        },
        set: function (value) {
            this._functionDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "goXRefs", {
        get: function () {
            return this._goXRefs;
        },
        set: function (value) {
            this._goXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "intenzXRefs", {
        get: function () {
            return this._intenzXRefs;
        },
        set: function (value) {
            this._intenzXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "reactomeXRefs", {
        get: function () {
            return this._reactomeXRefs;
        },
        set: function (value) {
            this._reactomeXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "pubmedXRefs", {
        get: function () {
            return this._pubmedXRefs;
        },
        set: function (value) {
            this._pubmedXRefs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "synonyms", {
        get: function () {
            return this._synonyms;
        },
        set: function (value) {
            this._synonyms = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "systematicName", {
        get: function () {
            return this._systematicName;
        },
        set: function (value) {
            this._systematicName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "ligands", {
        get: function () {
            return this._ligands;
        },
        set: function (value) {
            this._ligands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "agonists", {
        get: function () {
            return this._agonists;
        },
        set: function (value) {
            this._agonists = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexFunctionComponent.prototype, "antagonists", {
        get: function () {
            return this._antagonists;
        },
        set: function (value) {
            this._antagonists = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexFunctionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "crossReferences", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexFunctionComponent.prototype, "functionDescription", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "synonyms", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "systematicName", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "ligands", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "agonists", null);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ComplexFunctionComponent.prototype, "antagonists", null);
ComplexFunctionComponent = __decorate([
    Component({
        selector: 'app-complex-function',
        templateUrl: './complex-function.component.html',
        styleUrls: ['./complex-function.component.css']
    }),
    __metadata("design:paramtypes", [])
], ComplexFunctionComponent);
export { ComplexFunctionComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/complex-function.component.js.map