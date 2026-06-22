function download(url) {
    return new Promise(function (resolve) {
        console.log("Starting Download...");

        setTimeout(function () {
            console.log("Download Completed.");
            resolve();
        }, 2000);
    });
}

download("File.pdf").then(function () {
    console.log("Done");
});

// function downloadFile() {
// return new Promise((resolve) => {
// console.log("Starting download...");
// setTimeout(() => {
// resolve("Download completed");
// }, 2000);
// });
// }
// downloadFile()
// .then(result => {
// console.log(result);
// });  