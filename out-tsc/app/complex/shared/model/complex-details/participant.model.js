/**
 * Created by mkoch on 19/07/2016.
 */
var Participant = (function () {
    function Participant(interactorAC, identifier, identifierLink, name, description, stochiometry, bioRole, bioRoleMI, bioRoleDefinition, interactorType, interactorTypeMI, interactorTypeDefinition) {
        this._interactorAC = interactorAC;
        this._identifier = identifier;
        this._identifierLink = identifierLink;
        this._name = name;
        this._description = description;
        this._stochiometry = stochiometry;
        this._bioRole = bioRole;
        this._bioRoleMI = bioRoleMI;
        this._bioRoleDefinition = bioRoleDefinition;
        this._interactorType = interactorType;
        this._interactorTypeMI = interactorTypeMI;
        this._interactorTypeDefinition = interactorTypeDefinition;
    }
    Object.defineProperty(Participant.prototype, "interactorAC", {
        get: function () {
            return this._interactorAC;
        },
        set: function (value) {
            this._interactorAC = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "identifierLink", {
        get: function () {
            return this._identifierLink;
        },
        set: function (value) {
            this._identifierLink = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "stochiometry", {
        get: function () {
            return this._stochiometry;
        },
        set: function (value) {
            this._stochiometry = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "bioRole", {
        get: function () {
            return this._bioRole;
        },
        set: function (value) {
            this._bioRole = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "bioRoleMI", {
        get: function () {
            return this._bioRoleMI;
        },
        set: function (value) {
            this._bioRoleMI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "bioRoleDefinition", {
        get: function () {
            return this._bioRoleDefinition;
        },
        set: function (value) {
            this._bioRoleDefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "interactorType", {
        get: function () {
            return this._interactorType;
        },
        set: function (value) {
            this._interactorType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "interactorTypeMI", {
        get: function () {
            return this._interactorTypeMI;
        },
        set: function (value) {
            this._interactorTypeMI = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participant.prototype, "interactorTypeDefinition", {
        get: function () {
            return this._interactorTypeDefinition;
        },
        set: function (value) {
            this._interactorTypeDefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    return Participant;
}());
export { Participant };
//# sourceMappingURL=/Users/maximiliankoch/IdeaProjects/Complex-Portal/complex-portal-view/src/app/complex/shared/model/complex-details/participant.model.js.map