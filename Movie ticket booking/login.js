// var loginformnew = document.getElementById("loginform");
// loginformnew.addEventListener("submit", function(event) {
//     event.preventDefault();

// let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;
// let errormsg = document.getElementById("error-msg");

// const validusername = "Rohan5355";
// const validpassword = "Rohan@5355"

// if(username === validusername && password === validpassword){
//     errormsg.style.color = "green";
//     errormsg.textContent = "Login Successful! Redirecting...";

//     setTimeout(() => {
//         window.location.href = "Movieticket.html";
//     }, 3000);
// }else{
//     errormsg.textContent = "Invalid Username or Password";
// }
// });

const images = [
    "image1.jpeg",
    "Poster-1.jpg",
    "image7.jpg",
    "Poster-4.jpg",
    "Poster-3.jpg"
];

let currentIndex = 0;
const slideshowContainer = document.createElement("div");
slideshowContainer.classList.add("slideshow-container");
document.body.appendChild(slideshowContainer);

function changeBackground() {
    slideshowContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000);
changeBackground();

function toggleForm() {
    document.getElementById("loginSection").style.display = 
        document.getElementById("loginSection").style.display === "none" ? "block" : "none";
    document.getElementById("registerSection").style.display = 
        document.getElementById("registerSection").style.display === "none" ? "block" : "none";
}

// Register Functionality
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;
    let msg = document.getElementById("register-msg");

    if (localStorage.getItem(username)) {
        msg.style.color = "red";
        msg.textContent = "Username already exists!";
    } else {
        localStorage.setItem(username, JSON.stringify({ password: password }));
        msg.style.color = "green";
        msg.textContent = "Registration Successful! Redirecting...";
        setTimeout(() => toggleForm(), 2000);
    }
});

// Login Functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let msg = document.getElementById("login-msg");

    let userData = localStorage.getItem(username);
    if (userData) {
        let storedPassword = JSON.parse(userData).password;
        if (password === storedPassword) {
            msg.style.color = "green";
            msg.textContent = "Login Successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "Movieticket.html"; 
            }, 2000);
        } else {
            msg.style.color = "red";
            msg.textContent = "Incorrect Password!";
        }
    } else {
        msg.style.color = "red";
        msg.textContent = "User not found!";
    }
});