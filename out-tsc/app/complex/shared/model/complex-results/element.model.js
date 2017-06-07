var Element = (function () {
    function Element(complexAC, complexName, organismName, description) {
        this._complexAC = complexAC;
        this._complexName = complexName;
        this._organismName = organismName;
        this._description = description;
    }
    Object.defineProperty(Element.prototype, "complexAC", {
        get: function () {
            return this._complexAC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "complexName", {
        get: function () {
            return this._complexName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "organismName", {
        get: function () {
            return this._organismName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    return Element;
}());
export { Element };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-results/element.model.js.map