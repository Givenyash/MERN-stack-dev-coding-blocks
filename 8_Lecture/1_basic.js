// N = 5

// 1               9
// 2 8           8 2
// 3 7 3       7 3 7
// 4 6 4 6   6 4 6 4
// 5 5 5 5 5 5 5 5 5 
// 6 4 6 4   4 6 4 6
// 7 3 7       3 7 3
// 8 2           2 8
// 9               1

//Upper 
for(let i = 1; i <= 5; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {    // upper :  printing
        if(j % 2 === 1){          //Odd 
            row += i + " ";     // increasing order logic with comcatination
        } else {
            row += (10 - i) + " "; // even : decreasing order logic
        }
    }

    for(let j = 1; j <= 2 * (5 - i); j++) {   // middle spaces logic : 8,6,4,2,0
        row += "  "; // spaces de rha hai
    }

    for(let j = 1; j <= i; j++) {  //upper : right printing
        if(j % 2 === 0) {        //Even
            row += i + " ";  
        } else {            // odd
            row += (10 - i) + " ";
        }
    }

    console.log(row);   //prints row
}


//lower
for(let i = 5 - 1; i >= 1; i--) {    // descreasing order me print krra hai
    let row = "";

    for(let j = 1; j <= i; j++) {   // prints number in increasing order
        if(j % 2 === 0) {
            row += i + " ";
        } else {
            row += (10 - i) + " ";
        }
    }

    for(let j = 1; j <= 2 * (5 - i); j++) {    // prints middle spaces
        row += "  ";
    }

    for(let j = 1; j <= i; j++) {  // prints inside the row
        if(j % 2 === 1) {       // odd  
            row += i + " ";
        } else {
            row += (10 - i) + " ";    // even
        }
    }

    console.log(row);
}