let moviename = document.getElementById("movie-name");
let searchbtn = document.getElementById("search-btn");
let result = document.getElementById("result");

const key = "6e0eda67";

let getmovie = () => {
    let movienamenew = moviename.value.trim(); // Trim spaces
    if (movienamenew.length === 0) {
        result.innerHTML = `<h3 class="msg">Please enter a Movie name</h3>`;
        return;
    }

    let url = `http://www.omdbapi.com/?t=${encodeURIComponent(movienamenew)}&apikey=${key}`;

    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            if (data.Response === "False") {
                result.innerHTML = `<h3 class="msg">Movie not found. Please try again.</h3>`;
                return;
            }

            result.innerHTML = `<div class="info">
                <img src="${data.Poster !== "N/A" ? data.Poster : 'placeholder.jpg'}" class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.jpg">
                        <h4>${data.imdbRating || "N/A"}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated || "N/A"}</span>
                        <span>${data.Year || "N/A"}</span>
                        <span>${data.Runtime || "N/A"}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre ? data.Genre.split(",").join("</div><div>") : "N/A"}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot || "No plot available."}</p>
            <h3>Cast:</h3>
            <p>${data.Actors || "No cast information available."}</p>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">An error occurred. Please try again later.</h3>`;
        });
};

searchbtn.addEventListener("click", getmovie);
