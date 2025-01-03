import axios from "axios";

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie/'
});

export const apiKey = '85af3ff9d5ccfa9357b3d3822098da84';