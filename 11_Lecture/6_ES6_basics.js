// Advance features in js

// let
//
// Arrow functions

let name = "Yash";
console.log("Hello " + name + " jdjjd"); // Lengthy method...

console.log(`Helloo ${name} Gautam`); // tilde wala button (below Esc button) , also called back tick...
//back tick is used in ES6 version of JavaScript...


let student = {
    name : "Yash",
    age : 21,
    city : "Indore"
};

// default parameters
function greet(name ="Guest"){
    console.log(`hello  ${name}`);
}

greet("yash");    // passing a value...
greet();          // not passing any value...


//Array destruct
let [a,b] = [10,20];
console.log(a);
console.log(b);


// object destruct
let {name1 , age1} = student;
console.log(name1);
console.log(age1);


// spread operator
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];      // copies data

console.log(arr2);


//rest operator
let nums = 1;
function sum(...nums){
    nums++;
    return nums;
}

console.log(sum(nums));

//Enhanced object Literals
let name2 ="Aryan";
let student2 = {
    name2
}
console.log(student2);