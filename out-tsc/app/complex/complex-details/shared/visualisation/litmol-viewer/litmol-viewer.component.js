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
import * as LiteMol from 'litemol';
import { environment } from '../../../../../../environments/environment';
var baseURL = environment.pdb_base_url;
var LitmolViewerComponent = (function () {
    function LitmolViewerComponent() {
    }
    LitmolViewerComponent.prototype.ngOnChanges = function (changes) {
        if (this._plugin) {
            if (changes['selectedXRef']) {
                this.loadMolecule();
            }
        }
    };
    LitmolViewerComponent.prototype.ngOnInit = function () {
        this._plugin = LiteMol.default.Plugin.create({
            target: '#litemol',
            viewportBackground: '#000000',
            layoutState: {
                hideControls: true,
                isExpanded: false
            },
            // Knowing how often and how people use LiteMol
            // gives us the motivation and data to futher improve it.
            //
            // This option is OFF by default!
            allowAnalytics: true
        });
        this.loadMolecule();
    };
    LitmolViewerComponent.prototype.loadMolecule = function () {
        this.plugin.clear();
        this._plugin.loadMolecule({
            id: this._selectedXRef,
            url: baseURL + '/static/entry/' + this._selectedXRef.toLowerCase() + '_updated.cif',
            format: 'cif' // default
        });
    };
    Object.defineProperty(LitmolViewerComponent.prototype, "plugin", {
        get: function () {
            return this._plugin;
        },
        set: function (value) {
            this._plugin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LitmolViewerComponent.prototype, "selectedXRef", {
        get: function () {
            return this._selectedXRef;
        },
        set: function (value) {
            this._selectedXRef = value;
        },
        enumerable: true,
        configurable: true
    });
    return LitmolViewerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LitmolViewerComponent.prototype, "selectedXRef", null);
LitmolViewerComponent = __decorate([
    Component({
        selector: 'app-litmol-viewer',
        templateUrl: 'litmol-viewer.component.html',
        styleUrls: ['litmol-viewer.component.css']
    }),
    __metadata("design:paramtypes", [])
], LitmolViewerComponent);
export { LitmolViewerComponent };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/shared/visualisation/litmol-viewer/litmol-viewer.component.js.map