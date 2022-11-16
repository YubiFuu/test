const examChecked = document.getElementById("passed");
const submit = document.querySelector("button");
const div = document.querySelector("div");
let age = document.getElementById("age");
let fullName = document.getElementById("full-name");

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

class ExamPerson extends Person {
    constructor(name, age, passed = false) {
        super(name, age);
        this.passed = passed;
    }
    write() {
        //event.preventDefault();
        // let text = document.createElement("p");
        // text.innerText = `${this.name}, ${this.age}`;
        // if (examChecked == false) {
        //     text.style.color = "red";
        // }
        // div.appendChild(text);
        return `${this.name}, ${this.age}`;
    }
}

submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    let newPerson = new ExamPerson(
        fullName.value,
        age.value,
        examChecked.checked
    );
    let text = document.createElement("p");
    text.innerHTML = newPerson.write();
    if (examChecked.checked == false) {
        text.style.color = "red";
    }
    div.appendChild(text);
});
