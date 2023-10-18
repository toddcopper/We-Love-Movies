# WeLoveMovies
Live Backend link: https://welovemovies-jrcn.onrender.com/

## Project Overview

Created database and back-end application for an API which returns information about movies, theaters, reviews and critics.
Built using:

- PostgreSQL
- Node.js
- Express.js
- Knex.js

In this project, I demonstrated the following:

- Installed and used common middleware packages.
- Built application that receives requests through routes and accesses relevant information through route and query parameters.
- Run tests from the command line.
- Created an error handler for the case where a route does not exist.
- Built an API following RESTful design principles.
- Created and customize a knexfile.js file.
- Created a connection to the database with knex.
- Write database queries to complete CRUD routes in an Express server.
- Returned joined and nested data with Knex.
- Wrote database migrations using Knex's migration tools.

## Routes

The following routes and methods are available:

### Movies

#### `/movies`

- `GET` returns all columns for each movie in the database

#### `/movies?is_showing=true`

- `GET` returns all columns for each movie in database that is currently showing

#### `/movies/:movieId`

- `GET` returns all columns for requested movie

#### `/movies/:movieId/theaters`

- `GET` returns all columns for theater where the requested movie is playing

#### `/movies/:movieId/reviews`

- `GET` returns all columns, including detailed critic data, for each review of the requested movie

### Reviews

#### `/reviews/:reviewId`

- `PUT` updates data for requested review and returns all columns for that review including updated and detailed critic data

* `DELETE` deletes requested review from database

### Theaters

#### `/theaters`

- `GET` returns all columns for each theater in the database with detailed movie data for each movie showing at that theater

### To run locally

1. Run `npm install`
2. Do `cp .env.sample .env` and paste your database url as the value for the variable `DATABASE_URL` in `.env` file
3. Run `npm run start:dev`