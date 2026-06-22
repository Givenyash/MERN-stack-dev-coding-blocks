function download(url, callback){
    console.log("Starting Download...");
    callback();
}

function callback(){
    setTimeout(() =>{
        console.log("Download Completed.");
    },2000);
};

download("File.pdf",callback);