// const slides = document.querySelectorAll(".slides img"); 
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider() {
//     if (slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 3000); 
//     }
// }

// function showSlide(index) {
//     if (index >= slides.length) {
//         slideIndex = 0; // Loop back to first slide
//     } else if (index < 0) {
//         slideIndex = slides.length - 1; // Loop back to last slide
//     } else {
//         slideIndex = index; // Update slide index
//     }

//     slides.forEach(slide => slide.classList.remove("displaySlide"));
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//     clearInterval(intervalId);
//     showSlide(slideIndex - 1);
// }

// function nextSlide() {
//     showSlide(slideIndex + 1);
// }

const slides = document.querySelectorAll(".slides img"); 
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        showSlide(slideIndex); // Show the initial slide
        intervalId = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    }

    // Add event listeners for navigation buttons
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
}

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length; // Ensure index loops around
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
    });
}

function prevSlide() {
    clearInterval(intervalId); // Stop auto-slide
    showSlide(slideIndex - 1); // Show previous slide
    intervalId = setInterval(nextSlide, 3000); // Restart auto-slide
}

function nextSlide() {
    clearInterval(intervalId); // Stop auto-slide
    showSlide(slideIndex + 1); // Show next slide
    intervalId = setInterval(nextSlide, 3000); // Restart auto-slide
}

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

function logout(){
    window.location.href = "login.html"
}