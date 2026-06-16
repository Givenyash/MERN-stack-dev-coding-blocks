let student = {
    name : "Yash",
    age : 21,
    city : "Indore"
};

for(key in student){
    console.log(key,student.key);
}

console.log(" ");

for(key in student){
    console.log(key,student[key]);
}

console.log(" ");

// nested object...
let person = {
    name : "Yash",
    age : 20,
    address : {
        city : "Silicon",
        jagah : "Palash Parisar",
        state : "MP"
    }
};

console.log(person);
console.log(person.address);