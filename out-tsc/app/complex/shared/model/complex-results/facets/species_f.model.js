/**
 * Created by mkoch on 31/10/2016.
 */
var SpeciesFacet = (function () {
    function SpeciesFacet(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(SpeciesFacet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeciesFacet.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    return SpeciesFacet;
}());
export { SpeciesFacet };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets/species_f.model.js.map