var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from '../../../../../shared/google-analytics/service/google-analytics.service';
import { Category } from '../../../../../shared/google-analytics/types/category.enum';
var xlv;
var SvgSaver = require('svgsaver');
var xiNET = require('expose-loader?xiNET!complexviewer');
var ComplexViewerComponent = (function () {
    function ComplexViewerComponent(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this._svgsaver = new SvgSaver();
        this._hasInteracted = false;
    }
    ComplexViewerComponent.prototype.ngAfterViewInit = function () {
        $('cp-complex-viewer').foundation();
        xlv = new xiNET('networkContainer');
        xlv.readMIJSON(this._complexMIJSON, true);
        xlv.autoLayout();
    };
    ComplexViewerComponent.prototype.onChangeAnnotation = function (value) {
        xlv.setAnnotations(value);
        this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ChangeAnno, this._complexAC);
        this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_SelectedAnno, value);
    };
    ComplexViewerComponent.prototype.onReset = function () {
        xlv.reset();
        this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Reset, this._complexAC);
    };
    ComplexViewerComponent.prototype.onExpandAll = function () {
        xlv.expandAll();
        this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExpandAll, this._complexAC);
    };
    ComplexViewerComponent.prototype.interactedWithViewer = function () {
        if (!this._hasInteracted) {
            this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_Interaction, this._complexAC);
            this._hasInteracted = true;
        }
    };
    Object.defineProperty(ComplexViewerComponent.prototype, "complexAC", {
        get: function () {
            return this._complexAC;
        },
        set: function (value) {
            this._complexAC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexViewerComponent.prototype, "complexMIJSON", {
        get: function () {
            return this._complexMIJSON;
        },
        set: function (value) {
            this._complexMIJSON = value;
        },
        enumerable: true,
        configurable: true
    });
    ComplexViewerComponent.prototype.downloadAsSVG = function () {
        var svg = document.querySelector('#networkContainer');
        this._svgsaver.asSvg(svg, this._complexAC + '.svg');
        this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.InteractionViewer_ExportSVG, this._complexAC);
    };
    return ComplexViewerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexViewerComponent.prototype, "complexAC", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ComplexViewerComponent.prototype, "complexMIJSON", null);
ComplexViewerComponent = __decorate([
    Component({
        selector: 'cp-complex-viewer',
        templateUrl: 'complex-viewer.component.html',
        styleUrls: ['complex-viewer.component.css'],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [GoogleAnalyticsService])
], ComplexViewerComponent);
export { ComplexViewerComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/complex-viewer/complex-viewer.component.js.map