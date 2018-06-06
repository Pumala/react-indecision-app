class Person {
    constructor(name = "Default", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return  `${this.name} says hello!`;
    }
    getBio() {
        return  `Name: ${this.name}\nAge: ${this.age} years old`;
    }
}

const me = new Person("Lyn", 27);
const other = new Person("Morris");

console.log(me);
console.log(me.getGreeting());
console.log(me.getBio());

console.log(other);
console.log(other.getGreeting());
console.log(other.getBio());

class Student extends Person {
    constructor(name, age, major = "") {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getBio() {
        const bio = super.getBio();
        return bio + `\nMajor: ${this.major ? this.major : "Undecided"}`;
    }
}

const he = new Student("Adrian", 29, "English");
const she = new Student("Molly", 25, "");

console.log(he);
console.log(he.getGreeting());
console.log(he.getBio());
console.log(he.hasMajor());

console.log(she);
console.log(she.getGreeting());
console.log(she.getBio());
console.log(she.hasMajor());

class Traveler extends Person {
    constructor(name, age, homeState = "") {
        super(name, age);
        this.homeState = homeState
    }
    getBio() {
        const bio = super.getBio();
        return bio + `\nHome State: ${this.homeState ? this.homeState : 'Unknown'}`;
    }
}

const traveler = new Traveler("Brent", 29, "Arkansas");
console.log(traveler);
console.log(traveler.getGreeting());
console.log(traveler.getBio());

const nomad = new Traveler("Frankie", 51, "");
console.log(nomad);
console.log(nomad.getGreeting());
console.log(nomad.getBio());