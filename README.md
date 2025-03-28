# Movie Ticket Booking System

This project is a simple movie ticket booking system implemented using HTML, CSS, and JavaScript. It allows users to browse movies, select seats, and proceed to a payment gateway.

## Project Structure

The project consists of the following files:

* `index.html`:  The main dashboard displaying movie options.
* `login.html`:  Handles user login and registration.
* `authenticate.html`:  An alternative authentication implementation (potentially older).
* `Movieticket.html`:  The movie ticket booking interface.
* `payment.html`:  The payment gateway simulation.
* `submit.html`:  A simple submission confirmation page.
* `explore.html`:  Movie exploration/search functionality.
* `style.css`:   General styling for the booking interface.
* `style2.css`:  Styling for the main movie website.
* `authenticate.css`: Styling for authentication pages.
* `movie.css`:   Styling for the movie ticket booking page.
* `login.js`:    JavaScript for login/registration.
* `script.js`:   JavaScript for the movie ticket booking.
* `main.js`:     JavaScript for the main movie website.
* `explore.js`:  JavaScript for the movie exploration.
* `key.js`:      Contains the API key (likely for a movie database).
* `image1.jpeg`, `Poster-1.jpg`, `Poster-2.jpeg`, `Poster-3.jpg`, `Poster-4.jpg`, `image4.jpeg`, `image7.jpg`: Image assets for the project.

## Functionality

* **User Authentication:**
    * Users can log in or register using the provided login and registration pages.
    * The system uses local storage to store user credentials.
* **Movie Browsing:**
    * The main page displays movie options with images.
    * The explore page allows users to search for movies using the OMDB API.
* **Ticket Booking:**
    * Users can select a movie and choose seats from a visual layout.
    * The system calculates the total price based on the selected seats.
* **Payment Gateway:**
    * A simple payment gateway is simulated to collect payment information.
* **Navigation:**
    * The system provides navigation between different pages, such as home, booking, and explore.

## Key Technologies

* HTML:   For structuring the web pages.
* CSS:    For styling the web pages.
* JavaScript: For implementing the functionality, including user authentication, movie browsing, ticket booking, and payment processing.
* OMDB API:  Used to fetch movie information.
* Local Storage: Used for storing user credentials and booking information.

## Setup Instructions

1.  Clone the repository.
2.  Open the `index.html` file in a web browser to start the application.

## Notes

* This project is a simplified implementation and does not include a real database or backend server.
* User credentials and booking information are stored in the browser's local storage.
* The payment gateway is a simulation and does not process actual payments.
* The project uses the OMDB API to fetch movie information. You may need to obtain your own API key and replace the placeholder key in `key.js`.

## Potential Improvements

* Implement a backend server and database to store user data, movie information, and booking details.
* Integrate a real payment gateway.
* Add more features, such as user profiles, booking history, and movie reviews.
* Improve the user interface and user experience.
* Add error handling and input validation.
* Implement better session management.
