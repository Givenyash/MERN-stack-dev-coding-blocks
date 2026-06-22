//Build an e-commerce checkout process using Promises.

function addToCart(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Product added to cart");
            resolve();
        }, 1000);
    });
}

function payment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Payment successful");
            resolve();
        }, 1000);
    });
}

function placeOrder(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Order placed");
            resolve();
        }, 1000);
    });
}

addToCart()
    .then(function(){
        return payment();
    })
    .then(function(){
        return placeOrder();
    }); 