var ReactomeComplex = (function () {
    function ReactomeComplex(id) {
        this._pathways = [];
        this._id = id;
    }
    Object.defineProperty(ReactomeComplex.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeComplex.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactomeComplex.prototype, "pathways", {
        get: function () {
            return this._pathways;
        },
        set: function (value) {
            this._pathways = value;
        },
        enumerable: true,
        configurable: true
    });
    return ReactomeComplex;
}());
export { ReactomeComplex };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/complex-details/complex-function/reactome-crossreferences/shared/model/reactome-complex.js.map