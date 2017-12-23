const Person = require('../../src/practice_11/person');

class Teacher extends Person{
    constructor(id,name,age,Class){
        super(id,name,age);
        this.klasses = Class;
    }
    introduce(){
        if(this.klasses){
            let result = [];
            for(var i in this.klasses){
                result.push(this.klasses[i].number)
            }
            return super.introduce() + ' I am a Teacher. I teach Class '+  result.join(', ') + '.'
        }
        else{
            return super.introduce() + ' I am a Teacher. I teach No Class.'
        }
    }
    introduceWith(Student){
        if(Student.klass === this.klass){
            return super.introduce() + " I am a Teacher. I teach "+ Student.name +'.';
        }
        else{
            return  super.introduce() +" I am a Teacher. I don't teach "+ Student.name +'.';
        }
    }
}
module.exports = Teacher;






