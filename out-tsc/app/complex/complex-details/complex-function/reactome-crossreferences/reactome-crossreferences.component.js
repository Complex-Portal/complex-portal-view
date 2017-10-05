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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ReactomeService } from './service/reactome.service';
import { ReactomeComplex } from './model/reactome-complex';
import { ReactomePathway } from './model/reactome-pathway';
import { NotificationService } from '../../../../shared/notification/service/notification.service';
import { GoogleAnalyticsService } from '../../../../shared/google-analytics/service/google-analytics.service';
import { Category } from '../../../../shared/google-analytics/types/category.enum';
var ReactomeCrossreferencesComponent = (function () {
    function ReactomeCrossreferencesComponent(reactomeService, notificationService, googleAnalyticsService) {
        this.reactomeService = reactomeService;
        this.notificationService = notificationService;
        this.googleAnalyticsService = googleAnalyticsService;
        this._reactomeComplexes = {};
        this._reactomePathways = {};
        this._isDataLoaded = false;
        this._displayedElements = 5;
        this.diagramLoaded = false;
    }
    ReactomeCrossreferencesComponent.prototype.ngOnInit = function () {
        this.mapComplexeToPathways();
    };
    /**
     * TODO: If possible, this should be removed. This is very heavy lifting for the front end and should be done...
     * TODO: ...in the WS (Either CP-WS or Reactome-WS)
     * This request is doing the following:
     * We have Reactome XRefs in the CP, but Reactome doesn't provide CP XRefs.
     * 1a. Ask Reactome for every XRefs we have for all pathways in Reactome.
     * 1b. Ask Reactome for every XRefs we have for the corresponding name.
     * 2. Create arrays (reactomePathways & reactomeComplexes) to create m:n relationship
     * 3. Map pathways and complexes to each other.
     * *Info: One Complex can be in multiple pathways and one pathway can have multiple complexes.*
     */
    ReactomeCrossreferencesComponent.prototype.mapComplexeToPathways = function () {
        var _this = this;
        var _loop_1 = function (i) {
            Observable.forkJoin(this_1.reactomeService.findRelatedPathways(this_1._crossReferences[i].identifier), this_1.reactomeService.getComplexName(this_1._crossReferences[i].identifier)).subscribe(function (response) {
                var relatedPathways = response[0];
                var complexName = response[1];
                for (var count = 0; count < relatedPathways.length; count++) {
                    var pathway = relatedPathways[count];
                    var currentPathway = _this._reactomePathways[pathway.stId];
                    var currentComplex = _this._reactomeComplexes[_this._crossReferences[i].identifier];
                    if (currentPathway === undefined) {
                        currentPathway = _this._reactomePathways[pathway.stId] = new ReactomePathway(pathway.stId);
                        currentPathway.name = pathway.displayName;
                    }
                    if (currentComplex === undefined) {
                        currentComplex = _this._reactomeComplexes[_this._crossReferences[i].identifier.toString()]
                            = new ReactomeComplex(_this._crossReferences[i].identifier);
                        currentComplex.name = complexName;
                    }
                    currentPathway.complexes.push(_this._crossReferences[i].identifier);
                    currentComplex.pathways.push(pathway.stId);
                    if (i === _this._crossReferences.length - 1 && count === relatedPathways.length - 1) {
                        _this.selectComplexWithFirstPathway(Object.keys(_this._reactomeComplexes).sort()[0]);
                        _this._isDataLoaded = true;
                    }
                }
            }, function (error) {
                _this.notificationService.onAPIRequestError('Reactome');
                _this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.reactome, error.status ? error.status : 'unknown');
            });
        };
        var this_1 = this;
        for (var i = 0; i < this._crossReferences.length; i++) {
            _loop_1(i);
        }
    };
    ReactomeCrossreferencesComponent.prototype.onChildLoaded = function () {
        this.diagramLoaded = true;
    };
    ReactomeCrossreferencesComponent.prototype.selectComplexByPathway = function (complexId, pathwayId) {
        this.selectedComplex = complexId;
        this.selectedPathway = pathwayId;
    };
    ReactomeCrossreferencesComponent.prototype.selectComplexWithFirstPathway = function (complexId) {
        this.selectedComplex = complexId;
        this.selectedPathway = this._reactomeComplexes[complexId].pathways.sort()[0];
    };
    ReactomeCrossreferencesComponent.prototype.getSortedKeys = function (object) {
        return Object.keys(object).sort();
    };
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "crossReferences", {
        set: function (value) {
            this._crossReferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "selectedComplex", {
        get: function () {
            return this._selectedComplex;
        },
        set: function (value) {
            this._selectedComplex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "selectedPathway", {
        get: function () {
            return this._selectedPathway;
        },
        set: function (value) {
            this._selectedPathway = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "reactomeComplexes", {
        get: function () {
            return this._reactomeComplexes;
        },
        set: function (value) {
            this._reactomeComplexes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "reactomePathways", {
        get: function () {
            return this._reactomePathways;
        },
        set: function (value) {
            this._reactomePathways = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "isDataLoaded", {
        get: function () {
            return this._isDataLoaded;
        },
        set: function (value) {
            this._isDataLoaded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeCrossreferencesComponent.prototype, "displayedElements", {
        get: function () {
            return this._displayedElements;
        },
        set: function (value) {
            this._displayedElements = value;
        },
        enumerable: true,
        configurable: true
    });
    return ReactomeCrossreferencesComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ReactomeCrossreferencesComponent.prototype, "crossReferences", null);
ReactomeCrossreferencesComponent = __decorate([
    Component({
        selector: 'cp-reactome-crossreferences',
        templateUrl: './reactome-crossreferences.component.html',
        styleUrls: ['./reactome-crossreferences.component.css']
    }),
    __metadata("design:paramtypes", [ReactomeService, NotificationService,
        GoogleAnalyticsService])
], ReactomeCrossreferencesComponent);
export { ReactomeCrossreferencesComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/reactome-crossreferences/reactome-crossreferences.component.js.map