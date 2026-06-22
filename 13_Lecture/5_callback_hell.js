function startDownload(DownloadCompleted){
    console.log("Start Download...");
    DownloadCompleted();
}

function DownloadCompleted(compressingFile){
    setTimeout(() => {
        console.log("Download Completed");
        compressingFile();
    }, 3000);
}

function compressingFile(compressionCompleted){
    setTimeout(()=>{
        console.log("Compressing File");
        compressionCompleted();
    },2000);
}

function compressionCompleted(uploadingFile){
    setTimeout(()=>{
        console.log("Compression Completed");
        uploadingFile();
    },2000);
}

function uploadingFile(uploadCompleted){
    setTimeout(()=>{
        console.log("Uploading File...");
        uploadCompleted();
    },1000);
}

function uploadCompleted(){
    setTimeout(()=>{
        console.log("Upload Completed");
    },2000);
}

startDownload(()=>{
    DownloadCompleted(()=>{
        compressingFile(()=>{
            compressionCompleted(()=>{
                uploadingFile(uploadCompleted);
            });
        });
    });
});