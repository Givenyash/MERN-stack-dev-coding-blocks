async function greet(){
    return("hello")
};
console.log(greet());

function fetchdata(){
    setTimeout(() => {
        console.log("data is fetched");
    }, 3000);
}
async function getdata(){
    const data=await fetchdata();
    console.log(data);
}
getdata();