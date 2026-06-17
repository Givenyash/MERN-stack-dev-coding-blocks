//Q.4 keep only users ages 18 or above.

const users = [ 

    { name: "A", age: 16 }, 
    { name: "B", age: 22 }, 
    { name: "C", age: 19 }
];

const names = users
.filter(user => user.age >= 18)
.map(user => user.name);

console.log(names);