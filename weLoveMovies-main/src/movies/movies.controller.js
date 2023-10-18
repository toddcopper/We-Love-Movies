const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const movieExists = async (req, res, next) => {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found." });
};

const read = async (req, res, next) => {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.read(movie) });
};

const readTheatersByMovie = async (req, res, next) => {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.readTheatersByMovie(movie) });
};

const readReviewsByMovie = async (req, res, next) => {
  const movie = res.locals.movie.movie_id;
  res.json({ data: await moviesService.readReviewsByMovie(movie) });
};

const list = async (req, res, next) => {
  const { is_showing } = req.query;
  if (is_showing) {
    res
      .status(200)
      .json({ data: await moviesService.listMoviesCurrentlyShowing() });
  } else {
    res.status(200).json({ data: await moviesService.list() });
  }
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  readTheatersByMovie: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(readTheatersByMovie),
  ],
  readReviewsByMovie: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(readReviewsByMovie),
  ],
};
