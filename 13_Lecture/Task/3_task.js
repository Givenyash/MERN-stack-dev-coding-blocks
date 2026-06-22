//Convert callback hell into Promise chaining.

//callback Hell
function step1(callback){
    setTimeout(function(){
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback){
    setTimeout(function(){
        console.log("Step 2 done");
        callback();
    }, 1000);
}

function step3(callback){
    setTimeout(function(){
        console.log("Step 3 done");
        callback();
    }, 1000);
}

// callback hell -> promises chaining
function step1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 1 done");
            resolve();
        }, 1000);
    });
}

function step2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 2 done");
            resolve();
        }, 1000);
    });
}

function step3(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Step 3 done");
            resolve();
        }, 1000);
    });
}

step1()
    .then(function(){
        return step2();
    })
    .then(function(){
        return step3();
    }); 