//Fetch student marks and calculate grade using Promises

function getMarks(){
    return new Promise(function(resolve){
        setTimeout(function(){
            let marks = 85;
            console.log("Marks:", marks);
            resolve(marks);
        }, 1000);
    });
}

function calculateGrade(marks){
    return new Promise(function(resolve){
        setTimeout(function(){
            if(marks >= 90){
                resolve("A");
            }
            else if(marks >= 75){
                resolve("B");
            }
            else if(marks >= 50){
                resolve("C");
            }
            else{
                resolve("Fail");
            }
        }, 1000);
    });
}

getMarks()
    .then(function(marks){
        return calculateGrade(marks);
    })
    .then(function(grade){
        console.log("Grade:", grade);
    }); 