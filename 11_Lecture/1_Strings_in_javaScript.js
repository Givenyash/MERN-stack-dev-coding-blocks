// String is a sequence of characters...

// string is immutable...cannot be modified directly...

// #PROPERTIES...
// ye saari properties apply karne par original String kabhi change nahi hoti hai... OG will be remained same...

let name = "Yash";

//Length of the string
console.log(name.length);

// to uppercase()
console.log(name.toUpperCase());

// to lowercase()
console.log(name.toLowerCase());

// trim()
let n = "   Yash      ";
console.log(n.trim());

//Includes()
let q = "JavaScript is awesome";
console.log(q.includes("is"));

//startsWith()
let w = "Yash is smart";
console.log(w.startsWith("Yas"));

//endsWith()
let a = "Placement year is coming soon is";
console.log(w.endsWith("oon"));

// indexof()    -> konse index par word hai ye batayega (starting from)
console.log(a.indexOf("is"));

// lastindexOf()   -> pichhe se uska index dekhega (ends from)
console.log(a.lastIndexOf("is"));

// slice()      -> range me jitne character pade hai including spaces vo return kr dega...
console.log(a.slice(2,12));

//subString()    -> same as slice
console.log(a.substring(1,12));

//replace()       -> sirf ek jagah replace karega agar same substring dikhi to...
console.log(a.replace("is", "iss"));

//replaceAll()      -> jaha poore string me dikhega pure jagah replace kar dega...
console.log(a.replaceAll("is", "iss"));

//split()           -> Jaha jaha space dikhega vaha se split kar dega aur array bana dega string ka...
console.log(a.slice(" "));