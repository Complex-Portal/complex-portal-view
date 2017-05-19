/**
 * Created by mkoch on 31/10/2016.
 */
var Facets = (function () {
    function Facets(ptype_f, species_f, pbiorole_f) {
        this._ptype_f = ptype_f;
        this._species_f = species_f;
        this._pbiorole_f = pbiorole_f;
    }
    Object.defineProperty(Facets.prototype, "ptype_f", {
        get: function () {
            return this._ptype_f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Facets.prototype, "species_f", {
        get: function () {
            return this._species_f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Facets.prototype, "pbiorole_f", {
        get: function () {
            return this._pbiorole_f;
        },
        enumerable: true,
        configurable: true
    });
    return Facets;
}());
export { Facets };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets.model.js.map