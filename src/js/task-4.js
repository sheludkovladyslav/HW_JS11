const movie = {
  title: "Spider Man",
  director: "Jon Watts",
  year: 2021,
  rating: 9,

  ratingChecker() {
    return this.rating >= 8;
  },
};

const movieInputs = {
  title: document.getElementById("movie-title"),
  director: document.getElementById("movie-director"),
  year: document.getElementById("movie-year"),
  rating: document.getElementById("movie-rating"),
};

movieInputs.title.textContent = movie.title;
movieInputs.director.textContent = movie.director;
movieInputs.year.textContent = movie.year;
movieInputs.rating.textContent = movie.rating;

if (movie.ratingChecker()) {
  movieInputs.title.classList.add("good-rating");
}
