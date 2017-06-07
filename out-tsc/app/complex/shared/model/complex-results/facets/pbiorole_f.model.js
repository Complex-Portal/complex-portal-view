var BiologicalRole = (function () {
    function BiologicalRole(name, count) {
        this._name = name;
        this._count = count;
    }
    Object.defineProperty(BiologicalRole.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BiologicalRole.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return BiologicalRole;
}());
export { BiologicalRole };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/facets/pbiorole_f.model.js.map