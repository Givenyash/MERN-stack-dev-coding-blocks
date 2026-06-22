function login(getProfile){
    setTimeout(() => {
        console.log("User authenticated");
        getProfile();
    }, 1000);
}

function getProfile(callback){
    setTimeout(() => {
        console.log("Profile fetched");
        callback();
    }, 1000);
}

function callback(){
    console.log("Displaying profile");
}

login(()=> {
    getProfile(callback);
});