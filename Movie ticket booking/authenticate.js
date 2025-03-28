// // script.js

// // Store registered candidates
// const registeredCandidates = [];

// // Handle Registration Form
// document.getElementById("registerForm").addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent form submission
  
//   const username = document.getElementById("regUsername").value;
//   const password = document.getElementById("regPassword").value;

//   // Check if username already exists
//   if (registeredCandidates.some(candidate => candidate.username === username)) {
//     document.getElementById("message").textContent = "Username already exists!";
//     return;
//   }

//   // Add the new candidate to the list
//   registeredCandidates.push({ username, password });
//   document.getElementById("message").textContent = "Registration successful!";
  
//   // Clear form inputs
//   document.getElementById("registerForm").reset();
// });

// // Handle Login Form
// document.getElementById("loginForm").addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent form submission
  
//   const username = document.getElementById("loginUsername").value;
//   const password = document.getElementById("loginPassword").value;

//   // Check credentials
//   const candidate = registeredCandidates.find(
//     candidate => candidate.username === username && candidate.password === password
//   );

//   if (candidate) {
//     document.getElementById("message").textContent = "Login successful!";
//   } else {
//     document.getElementById("message").textContent = "Invalid username or password!";
//   }

//   // Clear form inputs
//   document.getElementById("loginForm").reset();
// });

let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinbtn.onclick = function(){
  namefield.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");
}

signupbtn.onclick = function(){
  namefield.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");
}