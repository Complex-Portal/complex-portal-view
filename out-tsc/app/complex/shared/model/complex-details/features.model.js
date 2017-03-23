/**
 * Created by mkoch on 19/07/2016.
 */
var Features = (function () {
    function Features(participantId, featureType, featureTypeMI, featureTypeDefinition, ranges) {
        this._participantId = participantId;
        this._featureType = featureType;
        this._featureTypeMI = featureTypeMI;
        this._featureTypeDefinition = featureTypeDefinition;
        this._ranges = ranges;
    }
    Object.defineProperty(Features.prototype, "participantId", {
        get: function () {
            return this._participantId;
        },
        set: function (value) {
            this._participantId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, "featureType", {
        get: function () {
            return this._featureType;
        },
        set: function (value) {
            this._featureType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, "featureTypeMI", {
        get: function () {
            return this._featureTypeMI;
        },
        set: function (value) {
            this._featureTypeMI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, "featureTypeDefinition", {
        get: function () {
            return this._featureTypeDefinition;
        },
        set: function (value) {
            this._featureTypeDefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, "ranges", {
        get: function () {
            return this._ranges;
        },
        set: function (value) {
            this._ranges = value;
        },
        enumerable: true,
        configurable: true
    });
    return Features;
}());
export { Features };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-details/features.model.js.map