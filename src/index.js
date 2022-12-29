"use strict";
exports.__esModule = true;
var functions_1 = require("./functions");
var t = true;
console.log(t);
console.log(t && t);
var user = {
    name: "John",
    age: 30,
    isteen: function () {
        return this.age >= 13 && this.age <= 19;
    }
};
user.name = "Adam";
console.log(user.name);
console.log(user.isteen());
user.age = 15;
console.log(user.isteen());
console.log((0, functions_1.Hello)('Paul'));
var versions = {
    102: true,
    200: false
};
var result = "";
while (result.length < 20) {
    result += "Hello";
}
console.log(result);
var Suit;
(function (Suit) {
    Suit[Suit["Spade"] = 0] = "Spade";
    Suit[Suit["Heart"] = 1] = "Heart";
    Suit[Suit["Club"] = 2] = "Club";
    Suit[Suit["Diamond"] = 3] = "Diamond";
})(Suit || (Suit = {}));
console.log(Suit[0]);
console.log((0, functions_1.MSGtest)("ok!"));
var increment = function (num) { return num + 1; };
console.log(increment(3));
