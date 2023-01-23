"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const t = true;
console.log(t);
console.log(t && t);
const user = {
    name: "John",
    age: 30,
    isteen() {
        return this.age >= 13 && this.age <= 19;
    }
};
user.name = "Adam";
console.log(user.name);
console.log(user.isteen());
user.age = 15;
console.log(user.isteen());
console.log((0, functions_1.Hello)('Paul'));
let versions = {
    102: true,
    200: false,
};
let result = "";
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
const increment = (num) => num + 1;
console.log(increment(3));
