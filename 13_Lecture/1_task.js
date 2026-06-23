function startDownload(callback){
    console.log("Download Started...");
    callback();
}

function callback(){
    setTimeout(() =>{
        console.log("downloading...");

        setTimeout(()=>{
            console.log("Download Completed");
        },2000);
    },3000);
}

startDownload(callback); 