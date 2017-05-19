var ComplexSearchResult = (function () {
    function ComplexSearchResult(size, totalNumberOfResults, elements, facets) {
        this._size = size;
        this._totalNumberOfResults = totalNumberOfResults;
        this._elements = elements;
        this._facets = facets;
    }
    Object.defineProperty(ComplexSearchResult.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "totalNumberOfResults", {
        get: function () {
            return this._totalNumberOfResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexSearchResult.prototype, "facets", {
        get: function () {
            return this._facets;
        },
        enumerable: true,
        configurable: true
    });
    return ComplexSearchResult;
}());
export { ComplexSearchResult };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/complex-search.model.js.map