//Array creation

//Using Array Literal               -> tradition way
let fruit = ["Apple-1", "Banana-1", "Mango-1", "Anaar-1", "BlueBerry-1"]

//Using Array Constructor           -> Modern way
let fruits = new Array("Apple-2", "Banana-2", "Mango-2", "Anaar-2", "BlueBerry-2");


console.log(fruit);
console.log(fruits);


//Accessing elements in Array --> Through Indexing...

//Funtions in Array......

// 1)- Length     -> array ka size batana...
console.log(fruit.length);

//2)- Push        -> Array ke andar last me element daal dega...
fruits.push("Watermelon");
console.log(fruits);

//3)- Pop         -> Element remove kr dega last se...
fruits.pop();
console.log(fruits);

//4)- unshift     -> element ko shuru me daal dega...
fruits.unshift("Watermelon");
console.log(fruits);

//5)- Shift       -> element suru se hata dega...
fruits.shift();
console.log(fruits);

//6)- includes    -> check krta hai ki element present hai ya nahi (bool)...
console.log(fruits.includes("Mango"));    // true
console.log(fruits.includes("Watermelon"));  // False

//7)- indexof     -> uss element ka index return kr dega...
console.log(fruits.indexOf("Mango"));

//8)- Join        -> saare elements join karega jisse bhi join karwana hai...
console.log(fruits.join(""));

console.log(fruits.join(" - "))

//9)- Slice       -> elements batayega uss range ke jisme left index included hogi aur right index nahi hogi...
console.log(fruits.slice(1,3));

//10)- Splice     -> elements batayega uss range ke jisme left bound and right bound dono included hoga...
console.log(fruits.splice(1,3));