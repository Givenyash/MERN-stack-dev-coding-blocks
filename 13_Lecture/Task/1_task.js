//Implement your own setTimeout using callbacks.

function mySetTimeout(callback, time){
    setTimeout(function(){
        callback();
    }, time);
}

mySetTimeout(function(){
    console.log("Hello after 2 seconds");
}, 2000);