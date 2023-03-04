// クラスによって作成されたオブジェクトをインスタンスと呼ぶ。
class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }  
}
const michael = new Person('Michael');
console.log(michael);