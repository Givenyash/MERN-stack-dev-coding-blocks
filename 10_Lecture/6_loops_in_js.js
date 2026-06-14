let Array = ["Apple-1", "Banana-1", "Mango-1", "Anaar-1", "BlueBerry-1"]

console.log("Normal loop");
//normal loop
for(let i=0; i<Array.length; i++){
    console.log(Array[i]);
}

console.log("For-of loop");
console.log(" ");

// for of loop
for(let khaaneWaleCheeze of Array){
    console.log(khaaneWaleCheeze);
}

console.log("For-each loop");
console.log(" ");

// for each
Array.forEach(function(i){
    console.log(i);
}) 