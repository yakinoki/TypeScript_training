"use strict";
// クラスによって作成されたオブジェクトをインスタンスと呼ぶ。
class Person {
    constructor(initName) {
        this.name = initName;
    }
}
const michael = new Person('Michael');
console.log(michael);
