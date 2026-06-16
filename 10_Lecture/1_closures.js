function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter()
counter()
counter()
counter()



// Check balance 
function createBankAccount(InitialBalance){
    let balance = InitialBalance;

    return{
        deposite(a){
            balance += a;
            console.log(balance);
        },

        withdraw(a){
            balance -=a;
            console.log(balance);
        }
    };
}

const acc = createBankAccount(2000);
console.log(" ");
acc.deposite(500);
acc.withdraw(300);

// with function metioned...
function createBankAccount(InitialBalance){
    let balance = InitialBalance;

        function deposite(a){
            balance += a;
            console.log(balance);
        }

        function withdraw(a){
            balance -=a;
            console.log(balance);
        }

    return {deposite, withdraw};
}

const account = createBankAccount(2000);
console.log(" ");
account.deposite(500);
account.withdraw(300);