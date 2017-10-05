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
var baseURL = environment.europepmc_base_url;
var EuroPmcService = (function () {
    function EuroPmcService(http) {
        this.http = http;
    }
    EuroPmcService.prototype.getPublicationInformation = function (id) {
        return this.http.get(baseURL + '/webservices/rest/search?query=ext_id:' + id + '%20src:med&format=json')
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    EuroPmcService.prototype.handleError = function (error) {
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        else {
            console.error(error.message ? error.message : error.toString());
        }
    };
    return EuroPmcService;
}());
EuroPmcService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EuroPmcService);
export { EuroPmcService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-references/euro-pmc-crossreferences/service/euro-pmc.service.js.map