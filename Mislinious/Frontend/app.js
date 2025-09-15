// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`  hi im${this.name}`)
//         },
//     };
// return person;
// }


//Constructer -doesn't return anything & start with capital

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);

// }

// Person.prototype.talk=function (){
//     console.log(`hi may name is ${this.name}`);
// }


class Person{
    constructor(name,age){
        console.log(`person class contrutor`);
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi I am ${this .name}`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
         console.log(`studet class contrutor`);
        super(name,age);//parent class construtor is being called
        this.marks=marks;
    }
}


// let st1=new Student("adam",23,95);



class Teacher extends person{
    constructor(name,age,subject){
         console.log(`teacherclass contrutor`);
         super(name,age);//parent class construtor is being called
        this.subject=subject;
    }
}