class Person {    
    static display(){
        var message = "Static method is invoked from Persons class"
        return message;
    }
    
    show(){
        return Person.display();
    }

}


var message = new Person();
message.show();
module.exports = Person;

