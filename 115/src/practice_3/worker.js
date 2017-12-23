const Person = require('../../src/practice_3/person');

class Worker extends Person{
    Person(name,age){
        this.age = age;
        this.name = name;
    }
    introduce(){
        return 'I am a Worker. I have a job.'
    }
}
module.exports = Worker;
