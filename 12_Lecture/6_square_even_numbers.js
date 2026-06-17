//Q.6 

const nums = [1,2,3,4,5,6,7,8];
const squared = nums
.filter(num => num % 2 == 0)
.map(num => num * num);

console.log(squared);


// sum the sqaured numbers...
const total = squared
.reduce((sum,i) => sum += i,0); 

console.log(total);