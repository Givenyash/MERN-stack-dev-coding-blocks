    function download(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Downloaded");
            resolve();
        }, 1000);
    });
}

function compress(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Compressed");
            resolve();
        }, 1000);
    });
}

function upload(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("Uploaded");
            resolve();
        }, 1000);
    });
}

download()
    .then(() => compress())
    .then(() => upload())
    .then(() => console.log("All Tasks Completed"));