/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Movies from './Movies';
import { api, apiKey } from '../api/apiResource';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movie';

const Home = () => {

    const dispatch = useDispatch();

    const getMovies = async () => {
        const response = await api.get(`now_playing?api_key=${apiKey}`);
        dispatch(fetchMovies(response.data.results));
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <Movies />
        </div>
    )
}

export default Home
