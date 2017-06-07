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
import { NotificationService } from '../../../../../shared/notification/service/notification.service';
var xlv;
var SvgSaver = require('svgsaver');
var xiNET = require('expose-loader?xiNET!complexviewer');
var ComplexViewerComponent = (function () {
    function ComplexViewerComponent(notificationService) {
        this.notificationService = notificationService;
        this._svgsaver = new SvgSaver();
    }
    ComplexViewerComponent.prototype.ngAfterViewInit = function () {
        xlv = new xiNET('networkContainer');
        xlv.readMIJSON(this._complexMIJSON, true);
        xlv.autoLayout();
    };
    ComplexViewerComponent.prototype.featureNotAvailableYet = function () {
        this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
    };
    ComplexViewerComponent.prototype.onChangeAnnotation = function (value) {
        xlv.setAnnotations(value);
    };
    ComplexViewerComponent.prototype.onReset = function () {
        xlv.reset();
    };
    ComplexViewerComponent.prototype.onExpandAll = function () {
        xlv.expandAll();
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
        styleUrls: ['complex-viewer.component.css']
    }),
    __metadata("design:paramtypes", [NotificationService])
], ComplexViewerComponent);
export { ComplexViewerComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/complex-viewer/complex-viewer.component.js.map