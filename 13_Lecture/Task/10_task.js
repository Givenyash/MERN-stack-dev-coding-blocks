//Use Promise.race() to simulate multiple servers responding.

function server1(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Server 1 responded");
        }, 3000);
    });
}

function server2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Server 2 responded");
        }, 1000);
    });
}

function server3(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Server 3 responded");
        }, 2000);
    });
}

Promise.race([server1(), server2(), server3()])
    .then(function(result){
        console.log(result);
    });