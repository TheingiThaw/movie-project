import { ActionTypes } from '../../action';

const initialState = {
    trendingMovies : [],
    playingMovies : [],
    series : [],
    genres : [],
    movie : {}
};

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.FETCH_TRENDING_MOVIES: 
            return {...state, trendingMovies: payload};

        case ActionTypes.FETCH_PLAYING_MOVIES: 
            return {...state, playingMovies: payload};

        case ActionTypes.FETCH_SERIES: 
            return {...state, series: payload};

        case ActionTypes.FETCH_GENRES: 
            return {...state, genres: payload};

        case ActionTypes.SELECT_MOVIE:
            return {...state, movie:payload};
        
        default:
            return state;
    }
}