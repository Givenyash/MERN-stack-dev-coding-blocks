//Q.8

const results = [
    { name: "A", marks: 35 }, 
    { name: "B", marks: 75 }, 
    { name: "C", marks: 45 },
    { name: "D", marks: 25} 
];

const passStudents = results
.filter(num =>num.marks >= 40)
.map(num => num.name);

console.log(passStudents);