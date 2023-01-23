class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }  
}
const michael = new Person('Michael');
console.log(michael);