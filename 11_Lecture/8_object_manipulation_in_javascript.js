//Object Manipulation : means creating, modifying, merging,copying and transforming object...

let student = {
    name : "Yash",
    age : 21,
    city : "Indore"
};

let obj3 = {
    a :1
}

let obj4 = {
    b :2
}

//merging objects...
let merged={...obj3,...obj4};
console.log(merged);


//object.keys()
// object ki saari keys return kr dega...

console.log(Object.keys(student));

//object.values()
//object ki saari values return kr dega...

console.log(Object.values(student));


//object.entries()
// saare key value pairs return kar dega...

console.log(Object.entries(student));


//object.assign()
// pahle wale me dusre wale ki copy bana lega...
let copy = Object.assign({},student);
console.log(copy);


let copy1 = {...student};
console.log(copy1);


//#Checking properties...

// in operator
console.log("name" in student);

//has-own-property
console.log(student.hasOwnProperty("name"));

//object.freeze()
//kuchh bhi change nhi karega...

Object.freeze(student);
student.age = 24;
console.log(student);


let student3 = {
    name : "Yash Gautam",
    age : 20,
    city : "Indore"
}

//object.seal()
Object.seal(student3);
student3.age = 25;
console.log(student3);


// #ShallowCopy vs DeepCopy

// DeepClone
const abcd = structuredClone(student);
console.log(abcd);

// ShallowCopy
let copy2 = {...student};
console.log(copy2);