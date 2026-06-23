class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    study(){
        console.log(`${this.name} is studing js`);
    }
}

let s1=new student("kapil",20);
let s2=new student("Rishabh",22);
let s3=new student("Deepak",21);
console.log(s1);
console.log(s2);
console.log(s3);
s1.study();

class Animal{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
    makesound(){
        console.log("makes sound of animal");
    }
}

class Dog extends Animal{
    bark(){
        console.log("barking");
    }
    makesound(){
        console.log("dog can bark");
    }
}
const dog=new Dog();

dog.eat();
dog.sleep();
dog.bark();
dog.makesound();

class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class cat extends animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed=breed;
    }
}
const c=new cat("simba",2,"p");
console.log(c);