const welcomeBtn = document.getElementById("welcomeBtn");
const themeBtn = document.getElementById("themeBtn");
const showBtn = document.getElementById("showBtn");
const browserBtn = document.getElementById("browserBtn");

const welcome = document.getElementById("welcome");
const username = document.getElementById("username");
const movies = document.getElementById("movies");


// DOM Manipulation
welcomeBtn.addEventListener("click", () => {

    let name = username.value;

    welcome.innerHTML =
    "Welcome " + name + " to Netflix";
});


// DOM Manipulation
themeBtn.addEventListener("click", () => {

    document.body.style.background =
    "linear-gradient(to right,#000000,#8B0000)";
});


// DOM Manipulation
showBtn.addEventListener("click", () => {

    movies.style.display = "flex";
});


// BOM Manipulation
browserBtn.addEventListener("click", () => {

    alert("Browser Info:\n" + navigator.userAgent);
});


// BOM
window.onload = () => {

    alert("Welcome to Netflix Landing Page");
};


// BOM
showBtn.addEventListener("dblclick", () => {

    let choice = confirm("Open Netflix Website?");

    if(choice){
        window.location.href =
        "https://www.netflix.com";
    }
});