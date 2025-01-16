import { ActionTypes } from "..";

export const fetchTrendingMovies = (movies) => {
   return {
    type : ActionTypes.FETCH_TRENDING_MOVIES,
    payload : movies
   }
};

export const fetchPlayingMovies = (movies) => {
    return {
     type : ActionTypes.FETCH_PLAYING_MOVIES,
     payload : movies
    }
};

export const fetchSeries = (movies) => {
    return {
     type : ActionTypes.FETCH_SERIES,
     payload : movies
    }
};

export const fetchGenres = (movies) => {
    return {
     type : ActionTypes.FETCH_GENRES,
     payload : movies
    }
};

export const selectMovie = (movie) => {
    return {
        type : ActionTypes.SELECT_MOVIE,
        payload : movie
    }
};