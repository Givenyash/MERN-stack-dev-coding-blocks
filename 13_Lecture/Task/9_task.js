//Use Promise.all() to load user, posts, and comments together.

function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("User loaded");
        }, 1000);
    });
}

function getPosts(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Posts loaded");
        }, 2000);
    });
}

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Comments loaded");
        }, 1500);
    });
}

Promise.all([getUser(), getPosts(), getComments()])
    .then(function(result){
        console.log(result);
    });