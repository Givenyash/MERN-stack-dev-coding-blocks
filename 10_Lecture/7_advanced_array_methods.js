arr = [1,2,3,4,5,6]

console.log("doubled numbers");
// 1)- Map()    -> saare elements par conditions apply kardega...
const double = arr.map(x => x*2)
console.log(double); // no change in old array...stores in a new variable...


console.log("even numbers");
// 2)- Filter()   ->  jo bhi element condition oass hoga vo new array me aa jayega...
const even = arr.filter(x => x % 2 == 0)
console.log(even);

console.log("Sum of numbers");
// 3)- Reduce()    -> saare elements ko ek variable me convert kardega...
const add1 = arr.reduce(function(sum,x){
    return sum + x;
},0);

const add2 = arr.reduce(function(sum, x){
    return sum+x;
});

const add3 = arr.reduce((sum,x)=> sum + x, 0);

const add4 = arr.reduce((sum,x)=> sum + x);

console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);


// 4)- Find()    -> find the elements in the array... jaise hi condition satisfy ho jayegi...then pahla element return kar dega...
const f = arr.find(x=> x == 3)
console.log(f);


const fdemo = arr.find(x=> x > 3)
console.log(fdemo);


// 5)- some()        -> batata hai ki condition ko elements satisfy kar rahe hai ya nahi...
const s = arr.some(function(x){
    return x>3;
});

const sdemo = arr.some(x=>x>3);

console.log(s);
console.log(sdemo);


// 6)- every()         -> batata hai ki saare elements satisfy conditions kr rhe hai ya nahi...
const e = arr.every(function(x){
    return x>5;
});

const edemo = arr.every(x => x>5);

console.log(e);
console.log(edemo);