const movies = [
  { title: "Spider Man", director: "Jon Watts", year: 2021, rating: 9 },
  { title: "Dune", director: "Jon Watts", year: 2022, rating: 5 },
  { title: "One love", director: "Jon Watts", year: 2023, rating: 9 },
  { title: "Inside Out", director: "Jon Watts", year: 2024, rating: 10 },
  { title: "The Fall Guy", director: "Jon Watts", year: 2019, rating: 4 },
  { title: "IF", director: "Jon Watts", year: 2024, rating: 10 },
];

const ratingChecker = function (rating) {
  return rating >= 8;
};

function updateMovieInfo(movie, index) {
  const movieInputs = {
    title: document.getElementById(`movie-title-${index}`),
    director: document.getElementById(`movie-director-${index}`),
    year: document.getElementById(`movie-year-${index}`),
    rating: document.getElementById(`movie-rating-${index}`),
  };

  movieInputs.title.textContent = movie.title;
  movieInputs.director.textContent = movie.director;
  movieInputs.year.textContent = movie.year;
  movieInputs.rating.textContent = movie.rating;

  if (ratingChecker(movie.rating)) {
    movieInputs.title.classList.add("good-rating");
  }
}

let index = 0;
for (const movie of movies) {
  updateMovieInfo(movie, index);
  index += 1;
}
