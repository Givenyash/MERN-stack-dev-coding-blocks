//Implement a traffic light sequence (Red → Yellow → Green) using Promises.

function redLight(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Red Light");
            resolve();
        }, 1000);
    });
}

function yellowLight(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Yellow Light");
            resolve();
        }, 1000);
    });
}

function greenLight(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Green Light");
            resolve();
        }, 1000);
    });
}

redLight()
    .then(function(){
        return yellowLight();
    })
    .then(function(){
        return greenLight();
    }); 