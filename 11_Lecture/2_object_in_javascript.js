// An object stores data in key-value pairs...

//example 
let student = {
    name : "Yash",
    age : 21,
    city : "Indore"
};

console.log(student);

//Accessing Properties...

// dot notation...
console.log(student.name);

// bracket notation...
console.log(student["age"]);

// #Adding properties...


// create
student.phone = 466276;   // if exists then will be updated otherwise creates new field....
console.log(student);     // creates new...


// update
student.age = 25;
console.log(student);

//delete
delete student.phone;
console.log(student);