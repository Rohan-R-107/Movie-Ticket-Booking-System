// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// let ticketPrice = +movieSelect.value;

// // Update total and count
// function updateSelectedCount() {
//     const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
//     const selectedSeatsCount = selectedSeats.length;
    
//     count.innerText = selectedSeatsCount;
//     total.innerText = selectedSeatsCount * ticketPrice;
// }

// // Movie select event
// movieSelect.addEventListener('change', e => {
//     ticketPrice = +e.target.value;
//     updateSelectedCount();
// });

// // Seat click event
// container.addEventListener('click', e => {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//         e.target.classList.toggle('selected');
        
//         updateSelectedCount();
//     }
// });

// function book() {
//     const selectedSeats = document.querySelectorAll('.row .seat.selected');

//     selectedSeats.forEach(seat => {
//         seat.classList.remove('selected');
//         seat.classList.add('occupied');  
//     });

//     updateSelectedCount();
// }

// var showpopup = document.getElementById("btn-book");
// showpopup.addEventListener('click', function(){
//     alert("Successfully Booked")
// });

// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');
// const timerDisplay = document.getElementById('timer'); // Timer display element

// let ticketPrice = +movieSelect.value;
// let selectedSeats = new Set();
// let bookingTimer;
// let timeLeft = 30; // 30 seconds booking time

// // Function to update selected seat count and total price
// function updateSelectedCount() {
//     count.innerText = selectedSeats.size;
//     total.innerText = selectedSeats.size * ticketPrice;
// }

// // Function to handle movie selection event
// movieSelect.addEventListener('change', e => {
//     ticketPrice = +e.target.value;
//     updateSelectedCount();
// });

// // Function to start the booking timer
// function startBookingTimer() {
//     timeLeft = 30;
//     timerDisplay.innerText = `Time left: ${timeLeft}s`;

//     bookingTimer = setInterval(() => {
//         timeLeft--;
//         timerDisplay.innerText = `Time left: ${timeLeft}s`;

//         if (timeLeft <= 0) {
//             clearInterval(bookingTimer);
//             releaseSeats();
//         }
//     }, 1000);
// }

// // Function to handle seat selection
// container.addEventListener('click', e => {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//         if (selectedSeats.has(e.target)) {
//             // Deselect seat
//             e.target.classList.remove('selected');
//             selectedSeats.delete(e.target);
//         } else {
//             // Select seat
//             e.target.classList.add('selected');
//             selectedSeats.add(e.target);

//             // Start timer when first seat is selected
//             if (selectedSeats.size === 1) {
//                 startBookingTimer();
//             }
//         }
//         updateSelectedCount();
//     }
// });

// // Function to book tickets
// function book() {

//     clearInterval(bookingTimer);

//     selectedSeats.forEach(seat => {
//         seat.classList.remove('selected');
//         seat.classList.add('occupied');
//     });

//     selectedSeats.clear();
//     updateSelectedCount();
//     alert("Successfully Booked");
// }

// // Function to release seats if time expires
// function releaseSeats() {
//     selectedSeats.forEach(seat => {
//         seat.classList.remove('selected');
//     });

//     selectedSeats.clear();
//     updateSelectedCount();
//     alert("Booking time expired. Seats released.");
// }

// // Attach event listener to the Book Now button
// document.getElementById("btn-book").addEventListener('click', book);

const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const btnBook = document.getElementById('btn-book');

let ticketPrice = +movieSelect.value;
let selectedSeats = new Set();

const movieSeatLayouts = {
    "90": [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ],
    "110": [
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ],
    "150": [
        [0, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0]
    ],
    "500": [
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
};

function updateSelectedCount() {
    count.innerText = selectedSeats.size;
    total.innerText = selectedSeats.size * ticketPrice;
}

function generateSeats(moviePrice) {
    container.innerHTML = "";
    selectedSeats.clear();
    updateSelectedCount();

    const layout = movieSeatLayouts[moviePrice];

    const storedBookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || {};
    const movieBookedSeats = storedBookedSeats[moviePrice] || [];

    layout.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.classList.add("row");

        rowData.forEach((seatType, seatIndex) => {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            const seatId = `${rowIndex}-${seatIndex}`;

            if (seatType === 1 || movieBookedSeats.includes(seatId)) {
                seat.classList.add("occupied");
            }

            seat.dataset.row = rowIndex;
            seat.dataset.index = seatIndex;
            row.appendChild(seat);
        });

        container.appendChild(row);
    });

    addSeatClickEvent();
}

function addSeatClickEvent() {
    document.querySelectorAll('.row .seat:not(.occupied)').forEach(seat => {
        seat.addEventListener('click', (e) => {
            if (selectedSeats.has(e.target)) {
                e.target.classList.remove('selected');
                selectedSeats.delete(e.target);
            } else {
                if (!e.target.classList.contains('occupied')) {
                    e.target.classList.add('selected');
                    selectedSeats.add(e.target);
                }
            }
            updateSelectedCount();
        });
    });
}

function book() {
    if (selectedSeats.size === 0) {
        alert("Please select at least one seat before proceeding to the payment page.");
        return; 
    }

    const bookedSeats = Array.from(selectedSeats).map(seat => `${seat.dataset.row}-${seat.dataset.index}`);
    const moviePrice = movieSelect.value;

    const storedBookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || {};
    storedBookedSeats[moviePrice] = bookedSeats;
    localStorage.setItem('bookedSeats', JSON.stringify(storedBookedSeats));

    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
    });

    let totalPrice = selectedSeats.size * ticketPrice;
    localStorage.setItem("totalPrice", totalPrice); 

    selectedSeats.clear();
    updateSelectedCount();

    alert("Seats selected successfully! Redirecting to the payment page...");
    window.location.href = "payment.html"; 
}

movieSelect.addEventListener("change", () => {
    ticketPrice = +movieSelect.value;
    generateSeats(ticketPrice);
    updateSelectedCount();
});

generateSeats(movieSelect.value);
