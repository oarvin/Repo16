class Pets  {
    constructor (name, legs) {
        this._name = name;
        this._legs = legs;
    }

    walk(){
        var numberOfLegs = this._name + " is walking on " + this._legs + " legs";
        return numberOfLegs;
    }

}

class Dog extends Pets {
    constructor (name, legs) {
        super(name)
        this._legs = legs;
    }

    bark(){
        var dogSay = this._name + " says WUF-WUF" ;
        return dogSay;
    }


}





let dog = new Dog("Hamid", 4);
console.log(dog.walk());
console.log(dog.bark());


module.exports = {
    Pets,
    Dog
}