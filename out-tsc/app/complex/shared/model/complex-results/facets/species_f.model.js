/**
 * Created by mkoch on 31/10/2016.
 */
var Species = (function () {
    function Species(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(Species.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return Species;
}());
export { Species };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets/species_f.model.js.map