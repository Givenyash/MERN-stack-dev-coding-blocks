//Relationship between High order function and Closure...

function multiplier(factor){
    return function(number){
        return dactor *number;
    }
}

const t = multiplier(3);
console.log(t(10));