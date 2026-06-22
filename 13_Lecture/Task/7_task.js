//Simulate bank transactions using Promises.

let balance = 5000;

function checkBalance(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Current Balance:", balance);
            resolve();
        }, 1000);
    });
}

function debitMoney(amount){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(balance >= amount){
                balance = balance - amount;
                console.log(amount + " debited");
                resolve();
            }
            else{
                reject("Insufficient balance");
            }
        }, 1000);
    });
}

checkBalance()
    .then(function(){
        return debitMoney(2000);
    })
    .then(function(){
        console.log("Transaction successful");
        console.log("Remaining Balance:", balance);
    })
    .catch(function(error){
        console.log(error);
    });