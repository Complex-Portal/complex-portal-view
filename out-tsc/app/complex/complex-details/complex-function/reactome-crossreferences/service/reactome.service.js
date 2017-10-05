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
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../../../environments/environment';
var baseURL = environment.reactome_base_url;
var ReactomeService = (function () {
    function ReactomeService(http) {
        this.http = http;
    }
    /**
     * Returns all related pathways for a given complex stable identifier
     * @param id - a reactome stable identifier
     * @returns {Observable<R|T>}
     */
    ReactomeService.prototype.findRelatedPathways = function (id) {
        return this.http.get(baseURL + '/ContentService/data/pathways/low/entity/' + id)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    /**
     * Returns the name of a complex by a given complex stable identifier
     * @param id - a complex stable identifier
     * @returns {Observable<R|T>}
     */
    ReactomeService.prototype.getComplexName = function (id) {
        return this.http.get(baseURL + '/ContentService/data/query/' + id + '/displayName')
            .map(function (res) { return res.text(); }).catch(this.handleError);
    };
    ReactomeService.prototype.handleError = function (error) {
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        else {
            console.error(error.message ? error.message : error.toString());
        }
    };
    return ReactomeService;
}());
ReactomeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ReactomeService);
export { ReactomeService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/reactome-crossreferences/service/reactome.service.js.map