/**
 * Created by mkoch on 19/07/2016.
 */
var CrossReference = (function () {
    function CrossReference(database, qualifier, identifier, description, searchURL, dbMI, qualifierMI, dbdefinition, qualifierDefinition, linkedFeatures, otherFeatures) {
        this._database = database;
        this._qualifier = qualifier;
        this._identifier = identifier;
        this._description = description;
        this._searchURL = searchURL;
        this._dbMI = dbMI;
        this._qualifierMI = qualifierMI;
        this._dbdefinition = dbdefinition;
        this._qualifierDefinition = qualifierDefinition;
        this._linkedFeatures = linkedFeatures;
        this._otherFeatures = otherFeatures;
    }
    Object.defineProperty(CrossReference.prototype, "database", {
        get: function () {
            return this._database;
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "qualifier", {
        get: function () {
            return this._qualifier;
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "searchURL", {
        get: function () {
            return this._searchURL;
        },
        set: function (value) {
            this._searchURL = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "dbMI", {
        get: function () {
            return this._dbMI;
        },
        set: function (value) {
            this._dbMI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "qualifierMI", {
        get: function () {
            return this._qualifierMI;
        },
        set: function (value) {
            this._qualifierMI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "dbdefinition", {
        get: function () {
            return this._dbdefinition;
        },
        set: function (value) {
            this._dbdefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "qualifierDefinition", {
        get: function () {
            return this._qualifierDefinition;
        },
        set: function (value) {
            this._qualifierDefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "linkedFeatures", {
        get: function () {
            return this._linkedFeatures;
        },
        set: function (value) {
            this._linkedFeatures = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrossReference.prototype, "otherFeatures", {
        get: function () {
            return this._otherFeatures;
        },
        set: function (value) {
            this._otherFeatures = value;
        },
        enumerable: true,
        configurable: true
    });
    return CrossReference;
}());
export { CrossReference };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-details/cross-reference.model.js.map