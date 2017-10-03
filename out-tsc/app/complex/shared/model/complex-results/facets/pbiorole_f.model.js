var BiologicalRoleFacet = (function () {
    function BiologicalRoleFacet(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(BiologicalRoleFacet.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiologicalRoleFacet.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return BiologicalRoleFacet;
}());
export { BiologicalRoleFacet };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets/pbiorole_f.model.js.map