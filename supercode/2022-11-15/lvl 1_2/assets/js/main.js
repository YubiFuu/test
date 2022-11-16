class Person {
    constructor(name = "name", age = 0) {
        this.name = name;
        this.age = age;
    }
    info() {
        return `${this.name} is ${this.age} years old.`;
    }
}

let jess = new Person("jess", "10");
console.log(jess.info());
