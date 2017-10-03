var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { ReactomeService } from '../../../complex-function/reactome-crossreferences/shared/service/reactome.service';
import { Category } from '../../../../../shared/google-analytics/category.enum';
import { GoogleAnalyticsService } from '../../../../../shared/google-analytics/service/google-analytics.service';
var baseURL = environment.reactome_base_url;
var ReactomeDiagramComponent = (function () {
    function ReactomeDiagramComponent(reactomeService, googleAnalyticsService) {
        this.reactomeService = reactomeService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._reactomeComplexe = {};
        this._reactomePathways = {};
        this.onLoaded = new EventEmitter();
    }
    ReactomeDiagramComponent.prototype.ngOnInit = function () {
        this.loadScript();
        this._hasInteracted = false;
    };
    ReactomeDiagramComponent.prototype.ngOnChanges = function (changes) {
        if (this.diagramContext) {
            if (changes['selectedPathway']) {
                this.loadDiagram();
            }
            else if (changes['selectedComplex']) {
                this.selectComplex(this.selectedComplex);
            }
        }
    };
    ReactomeDiagramComponent.prototype.loadScript = function () {
        var node = document.createElement('script');
        node.src = baseURL + '/DiagramJs/diagram/diagram.nocache.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    ReactomeDiagramComponent.prototype.onReactomeDiagramReadyListener = function (event) {
        this.diagramContext = event.detail;
        this.initReactomeDiagram();
    };
    ReactomeDiagramComponent.prototype.initReactomeDiagram = function () {
        this.globelDiagram = this.diagramContext.Diagram.create({
            'proxyPrefix': baseURL,
            'placeHolder': 'diagramHolder',
            'width': this.diagramHolder.nativeElement.clientWidth,
            'height': this.diagramHolder.nativeElement.clientWidth * 0.5,
        });
        this.loadDiagram();
    };
    ReactomeDiagramComponent.prototype.onResize = function () {
        this.globelDiagram.resize(this.diagramHolder.nativeElement.clientWidth, this.diagramHolder.nativeElement.clientWidth * 0.8);
        this.selectComplex(this.selectedComplex);
    };
    ReactomeDiagramComponent.prototype.loadDiagram = function () {
        var context = this;
        this.globelDiagram.loadDiagram(this.selectedPathway);
        this.globelDiagram.onDiagramLoaded(function (loaded) {
            context.selectComplex(context.selectedComplex);
        });
        this._hasInteracted = false;
        this.globelDiagram.onObjectSelected(function (e) {
            context.interactedWithViewer();
            return;
        });
    };
    ReactomeDiagramComponent.prototype.selectComplex = function (reactomeComplexId) {
        this.selectedComplex = reactomeComplexId;
        this.globelDiagram.resetFlaggedItems();
        this.globelDiagram.flagItems(reactomeComplexId);
    };
    ;
    ReactomeDiagramComponent.prototype.getReactomeURL = function () {
        return baseURL + '/PathwayBrowser/#/' + this._selectedPathway + '&SEL=' + this._selectedComplex;
    };
    ReactomeDiagramComponent.prototype.interactedWithViewer = function () {
        if (!this._hasInteracted) {
            this.googleAnalyticsService.fireInteractionWithViewerEvent(Category.PathwayDiagram, this._selectedComplex);
            this._hasInteracted = true;
        }
    };
    Object.defineProperty(ReactomeDiagramComponent.prototype, "reactomePathways", {
        get: function () {
            return this._reactomePathways;
        },
        set: function (value) {
            this._reactomePathways = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeDiagramComponent.prototype, "reactomeComplexe", {
        get: function () {
            return this._reactomeComplexe;
        },
        set: function (value) {
            this._reactomeComplexe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeDiagramComponent.prototype, "selectedComplex", {
        get: function () {
            return this._selectedComplex;
        },
        set: function (value) {
            this._selectedComplex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeDiagramComponent.prototype, "selectedPathway", {
        get: function () {
            return this._selectedPathway;
        },
        set: function (value) {
            this._selectedPathway = value;
        },
        enumerable: true,
        configurable: true
    });
    return ReactomeDiagramComponent;
}());
__decorate([
    ViewChild('diagramHolder'),
    __metadata("design:type", Object)
], ReactomeDiagramComponent.prototype, "diagramHolder", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ReactomeDiagramComponent.prototype, "onLoaded", void 0);
__decorate([
    HostListener('window:onReactomeDiagramReady', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReactomeDiagramComponent.prototype, "onReactomeDiagramReadyListener", null);
__decorate([
    HostListener('window:resize', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReactomeDiagramComponent.prototype, "onResize", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ReactomeDiagramComponent.prototype, "reactomePathways", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ReactomeDiagramComponent.prototype, "reactomeComplexe", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ReactomeDiagramComponent.prototype, "selectedComplex", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ReactomeDiagramComponent.prototype, "selectedPathway", null);
ReactomeDiagramComponent = __decorate([
    Component({
        selector: 'cp-reactome-diagram',
        templateUrl: 'reactome-diagram.component.html',
        styleUrls: ['reactome-diagram.component.css']
    }),
    __metadata("design:paramtypes", [ReactomeService, GoogleAnalyticsService])
], ReactomeDiagramComponent);
export { ReactomeDiagramComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/reactome-diagram/reactome-diagram.component.js.map