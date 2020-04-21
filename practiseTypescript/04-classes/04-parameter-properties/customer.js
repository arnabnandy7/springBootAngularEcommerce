"use strict";
var CustomerP = /** @class */ (function () {
    function CustomerP(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerP.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerP.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerP;
}());
// let's create an instance
var myCustomerP = new CustomerP("Martin", "Dixon");
console.log(myCustomerP.firstName);
console.log(myCustomerP.lastName);
