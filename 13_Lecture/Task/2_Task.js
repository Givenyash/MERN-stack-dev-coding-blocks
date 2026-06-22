//Create a login → profile → posts flow using callbacks.

function login(callback){
    setTimeout(function(){
        console.log("Login Successful");
        callback();
    }, 1000);
}

function getProfile(callback){
    setTimeout(function(){
        console.log("Profile Fetched");
        callback();
    }, 1000);
}

function getPosts(){
    setTimeout(function(){
        console.log("Posts Fetched");
    }, 1000);
}

login(function(){
    getProfile(function(){
        getPosts();
    });
});