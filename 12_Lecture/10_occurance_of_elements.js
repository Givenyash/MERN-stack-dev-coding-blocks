//Q.10

const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const q10 = fruits.reduce(function(occ,fruit){
    occ[fruit] = (occ[fruit] || 0) + 1;
    return occ;
},{});

const q10arr = fruits.reduce((occ,fruit) => {occ[fruit] = (occ[fruit] || 0) + 1;
    return occ;
},{});

console.log(q10);
console.log(q10arr);