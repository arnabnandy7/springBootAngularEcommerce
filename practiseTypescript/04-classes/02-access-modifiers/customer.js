"use strict";
var Customers = /** @class */ (function () {
    function Customers(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customers;
}());
// let's create an instance
var myCustomers = new Customers("Martin", "Dixon");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
