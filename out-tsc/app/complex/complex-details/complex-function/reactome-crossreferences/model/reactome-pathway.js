var ReactomePathway = (function () {
    function ReactomePathway(id) {
        this._complexes = [];
        this._id = id;
    }
    Object.defineProperty(ReactomePathway.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomePathway.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomePathway.prototype, "complexes", {
        get: function () {
            return this._complexes;
        },
        set: function (value) {
            this._complexes = value;
        },
        enumerable: true,
        configurable: true
    });
    return ReactomePathway;
}());
export { ReactomePathway };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/reactome-crossreferences/model/reactome-pathway.js.map