//Create a movie ticket booking system using Promises.

function selectMovie(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Movie selected");
            resolve();
        }, 1000);
    });
}

function bookSeat(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Seat booked");
            resolve();
        }, 1000);
    });
}

function makePayment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Payment done");
            resolve();
        }, 1000);
    });
}

selectMovie()
    .then(function(){
        return bookSeat();
    })
    .then(function(){
        return makePayment();
    });