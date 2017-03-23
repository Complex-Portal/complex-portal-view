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
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var baseURL = environment.complex_ws_base_url;
var ComplexPortalService = (function () {
    function ComplexPortalService(http) {
        this.http = http;
    }
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<R>}
     */
    ComplexPortalService.prototype.getComplex = function (ac) {
        return this.http.get(baseURL + '/details/' + ac)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    /**
     * Get a specif complex from the WS
     * @param ac
     * @returns {Observable<R>}
     */
    ComplexPortalService.prototype.getComplexMIJSON = function (ac) {
        return this.http.get(baseURL + '/export/' + ac)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    /**
     * Find a complex based on indexed term
     * @returns {Observable<R>}
     * @param query
     * @param speciesFilter
     * @param bioRoleFilter
     * @param interactorTypeFilter
     * @param currentPageIndex
     * @param pageSize
     * @param format
     * @param facets
     */
    ComplexPortalService.prototype.findComplex = function (query, speciesFilter, bioRoleFilter, interactorTypeFilter, currentPageIndex, pageSize, format, facets) {
        if (speciesFilter === void 0) { speciesFilter = []; }
        if (bioRoleFilter === void 0) { bioRoleFilter = []; }
        if (interactorTypeFilter === void 0) { interactorTypeFilter = []; }
        if (pageSize === void 0) { pageSize = 10; }
        if (format === void 0) { format = 'json'; }
        if (facets === void 0) { facets = 'species_f,ptype_f,pbiorole_f'; }
        var params = new URLSearchParams();
        var filters = '';
        params.set('first', ((currentPageIndex * pageSize) - pageSize).toString());
        params.set('number', pageSize.toString());
        params.set('format', format);
        params.set('facets', facets);
        if (speciesFilter.length !== 0) {
            filters += 'species_f:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
        }
        if (bioRoleFilter.length !== 0) {
            filters += 'pbiorole_f:(' + '"' + bioRoleFilter.join('"AND"') + '"' + '),';
        }
        if (interactorTypeFilter.length !== 0) {
            filters += 'ptype_f:(' + '"' + interactorTypeFilter.join('"AND"') + '"' + '),';
        }
        params.set('filters', filters);
        return this.http.get(baseURL + '/search/' + query, { search: params })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ComplexPortalService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    };
    return ComplexPortalService;
}());
ComplexPortalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ComplexPortalService);
export { ComplexPortalService };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/service/complex-portal.service.js.map