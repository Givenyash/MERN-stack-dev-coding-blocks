const promise= new Promise((res,rej)=>{
    let s=true;
    if(s){
        res("fulfilled");
    }
    else{
        rej("tera password galat hai");
    }
});
promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ho gaya ab");
})