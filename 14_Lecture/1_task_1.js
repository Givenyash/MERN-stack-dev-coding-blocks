//Learn about :-

// 1. Single Inheritence
// 2. Multiple Inheritence
// 3. Multilevel Inheritence 
// 4. Hierarchical Inheritance
// 5. Hybrid Inheritance

//with examples and codes...

// 1 Single Inheritance:

//Definition:
//Single inheritance is an Object-Oriented Programming (OOP) concept where a subclass (child class)
//inherits properties and behaviors from exactly one superclass (parent class). 
//It is the simplest and most commonly used form of inheritance, allowing for code reusability
// without the complexity of multiple parent classes.

// key Concepts:
//Parent Class (Base/Superclass): The class whose features are being inherited.
// Child Class (Derived/Subclass): The class that inherits the parent's features and can add its own unique properties.
// "Is-A" Relationship: The child class represents a more specific type of the parent class (e.g., a Car is a type of Vehicle)

//Real-World example
//Consider a base class called Vehicle. It holds general properties like max_speed and 
// methods like start_engine(). A subclass called Car can inherit these directly, while 
// also adding its own specific properties like number_of_doors or methods like open_trunk()

// Parent Class
class Vehicle{
    constructor(brand){
        this.brand = brand; 
    }
    start(){
        return `${this.brand} engine started.`;
    }
}

// Child Class
class Car extends Vehicle{
    constructor(brand, doors){
        super(brand);
        this.doors = doors;
    }

    honk(){
        return `Beep beep! This ${this.brand} SUV has ${this.doors} doors.`; // Unique child method
    }
}

const myCar = new Car("Mahindra", 4);

console.log(myCar.start()); 
console.log(myCar.honk()); 


// 2. Multiple Inheritence

//Multiple inheritance occurs when a single child class inherits methods and
//properties from more than one parent class simultaneously.

//However, there is a catch with JavaScript: JavaScript does not natively support
//multiple inheritance using classes. Writing class FlyingCar extends Car, 
//Airplane will throw a syntax error.

//To achieve multiple inheritance in JavaScript, developers use a pattern called Mixins,
//which copies properties from multiple source objects onto a single target class.


// Parent 1: Normal Class
class gaadi {
    drive() {
        return "Driving on the road.";
    }
}

// Parent 2: A Mixin Object
const Airplane = {
    fly() {
        return "Flying through the sky!";
    }
};

// Child Class:
class FlyingCar extends gaadi {
    hover() {
        return "Hovering above the ground.";
    }
}

// MULTIPLE INHERITANCE STEP:
Object.assign(FlyingCar.prototype, Airplane);

// Usage
const myVehicle = new FlyingCar();

console.log(myVehicle.drive());
console.log(myVehicle.fly());
console.log(myVehicle.hover());


// 3. Multilevel Inheritence

//Multilevel inheritance occurs when a class inherits from a child class,
//creating a multi-layered chain of inheritance 
//(like a family tree: Grandparent ➔ Parent ➔ Child).

//Even though it has multiple layers, each class in the chain still only has one direct parent,
//meaning it is built entirely out of single inheritance links.

//The 3 Layers ExplainedLayer
//            1: Grandparent (Animal)
//                -> This is the base layer. 
//                -> Every animal can eat.Method: eat() ➔ Prints "Eating".

//            2: Layer 2: Parent (Janwar)
//                -> This inherits from Animal. It adds a hunting instinct.
//                -> Method: prediator() ➔ Prints "I will Hunt YOU".

//            3: Layer 3: Child (shikaari)
//                -> This inherits from Janwar. It represents a skilled hunter at the bottom of the chain.
//                -> Method: skills() ➔ Prints "A Hunter preys its shikaar by his skills"

// Summary Checklist
//    Janwar extends Animal (Layer 1 to Layer 2).
//    shikaari extends Janwar (Layer 2 to Layer 3).


class Animal{
    eat(){
        console.log("Eating");
    }
}

class Janwar extends Animal{
    prediator(){
        console.log("I will Hunt YOU");
    }
}

class shikaari extends Janwar{
    skills(){
        console.log("A Hunter preys its shikaar by his skills");
    }
}

const life = new shikaari();

life.eat();
life.prediator();
life.skills();


// 4. Hierarchical Inheritence

//Hierarchical inheritance is an OOP structure where one parent class has
//multiple child classes inheriting from it.

//Think of it like a parent who has multiple children.
//The children all inherit the parent's traits, but they remain completely separate from 
//each other and have their own unique skills.

//The Family Analogy
//Parent: A father who is an artist.
//Child 1 (Daughter): Inherits the artistic gene, but specializes in painting.
//Child 2 (Son): Inherits the artistic gene, but specializes in sculpting.

class animal{
    eat(){
        console.log("This animal eats Food and flesh as well as vegies");
    }
}

class Dog extends animal{
    bark(){
        console.log("The dog barks");
    }
}

class lion extends animal{
    roar(){
        console.log("the lion roars in the jungle");
    }
}

class fish extends animal{
    swimm(){
        console.log("The fish used to swimm in the Water bodies...");
    }
}

const doggy = new Dog();
doggy.eat();
doggy.bark();

const sheru = new lion();
sheru.eat();
sheru.roar();

const fishhh = new fish();
fishhh.eat();
fishhh.swimm();

// 5. Hybrid Inheritence

//Hybrid inheritance is a combination of two or more types of inheritance 
//(such as Single, Multilevel, or Hierarchical) within a single program structure.

//Because JavaScript classes do not natively support multiple parent classes, 
//achieving hybrid inheritance requires combining standard extends syntax with 
//the Mixin pattern (copying behaviors from extra objects).


// 1. The Grandparent Class
class livingAnimals{
    eat(){
        console.log("Consuming energy...");
    }
}

// 2. Parent Class A (Hierarchical Link 1)
class Lion extends livingAnimals{
    sleep() {
        console.log("sleeping on the ground!");
    }
}

// 3. Standalone Behavior Mixin (To act as Parent B)
const BirdBehavior ={
    fly() {
        console.log("Flying through the sky!");
    }
};

// 4. The Hybrid Child Class 
class newKind extends Lion {
    something(){
        console.log("Unknown feature...");
    }
}

// Apply the Mixin
Object.assign(newKind.prototype, BirdBehavior);

const mythicBeast = new newKind();
mythicBeast.eat();
mythicBeast.sleep();
mythicBeast.fly();
mythicBeast.something();