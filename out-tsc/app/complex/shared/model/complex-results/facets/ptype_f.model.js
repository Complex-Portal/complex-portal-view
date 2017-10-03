/**
 * Created by mkoch on 31/10/2016.
 */
var InteractorTypeFacet = (function () {
    function InteractorTypeFacet(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(InteractorTypeFacet.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractorTypeFacet.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return InteractorTypeFacet;
}());
export { InteractorTypeFacet };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets/ptype_f.model.js.map