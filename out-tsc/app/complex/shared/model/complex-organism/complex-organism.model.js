var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SpeciesFacet } from '../complex-results/facets/species_f.model';
var ComplexOrganisms = (function (_super) {
    __extends(ComplexOrganisms, _super);
    function ComplexOrganisms(name, count, symbol, type, psi25, psi30, complextab) {
        var _this = _super.call(this, name, count) || this;
        _this._symbol = symbol;
        _this._type = type;
        _this._psi25 = psi25;
        _this._psi30 = psi30;
        _this._complextab = complextab;
        return _this;
    }
    Object.defineProperty(ComplexOrganisms.prototype, "symbol", {
        get: function () {
            return this._symbol;
        },
        set: function (value) {
            this._symbol = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "psi25", {
        get: function () {
            return this._psi25;
        },
        set: function (value) {
            this._psi25 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "psi30", {
        get: function () {
            return this._psi30;
        },
        set: function (value) {
            this._psi30 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexOrganisms.prototype, "complextab", {
        get: function () {
            return this._complextab;
        },
        set: function (value) {
            this._complextab = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexOrganisms;
}(SpeciesFacet));
export { ComplexOrganisms };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-organism/complex-organism.model.js.map