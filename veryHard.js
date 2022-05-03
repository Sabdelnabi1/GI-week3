// create a class first
// create an object constructor to have name, job and age
//create a method (function within a constructor)

class Person {
    constructor(first, job, age) {
        this.name = first;
        this.job = job;
        this.age = age
    }
    exercise() {
        console.log("Lifting is fun!")
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

//create a new person and console log
const peter = new Person("Peter", "Chef", 35);
//console logged the person and then the message from method exersice
console.log(peter);
peter.exercise()
peter.fetchJob()

//Created another object that extends all the properties of person and adds a new one and method
class Programmer extends Person {
    constructor(first, job, age, language) {
        super(first, job, age);
        this.language = language;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true

    }
    offerNewTask() {
        if (this.busy = true) {
            console.log("Mark can't accept any new tasks right now")
        } else if (this.busy = false) {
            console.log("Mark would love to take on a new responsibility.")
        }

    }
    listLanguage() {
        return console.log(this.language);
    }
    learnLanguage() {
        this.language.push("French")
        console.log(this.language)
    }
    // listLanguages() {
    //     console.log(this.learnLanguage)

    // }
}


let programer1 = new Programmer(peter.name, peter.job, peter.age, 'English', this.busy)

let programer2 = new Programmer("Jack", "Dancer", 23, ["English", "Spanish", "Arabic"]);

programer1.offerNewTask()


console.log(programer2.listLanguage());



