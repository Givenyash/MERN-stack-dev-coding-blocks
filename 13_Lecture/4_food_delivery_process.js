function order(prepared){
    setTimeout(() => {
        console.log("Order Placed");
        prepared();
    }, 1000);
}

function prepared(delivered){
    setTimeout(() => {
        console.log("Food Prepared");
        delivered();
    }, 2000);
}

function delivered(){
    setTimeout(()=>{
        console.log("Food Delivered");
    },1000);
}

order(()=> {
    prepared(delivered);
});