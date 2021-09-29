class Microsoft {
    constructor (name) {
        this._name = name ;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    ocupation() {
        return this._name + " is a philanthropist!";
    }

}

/* let mic = new Microsoft("jfias");
console.log(mic.ocupation()); */

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this._age = age ;
    }

    studentAge() {
        return this._name + " is " + this._age;
    }
}


let henry = new Microsoft("William Henry Gates III");
let elliot = new Facebook("Mark Elliot Zuckergerg", 23);

console.log(henry.ocupation());
console.log(elliot.ocupation());
console.log(elliot.studentAge());