/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'flowbite-react'
import { useNavigate, useParams } from 'react-router'
import { api, apiKey } from '../api/apiResource';
import { Spinner } from "flowbite-react";

const Detail = () => {
    const { id, type, situation } = useParams();
    const [movie, setMovie] = useState('');

    console.log(id, type, situation);

    const getMovie = async () => {
        const response = await api.get(`${type}/${id}?api_key=${apiKey}`);
        setMovie(response.data);
    }

    const navigate = useNavigate();

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div >
            <div className="container mx-auto mt-3 flex align-middle">
                <Button onClick={() => navigate('/')}>
                    <i className="fa-solid fa-arrow-left me-2 "></i>Back
                </Button>
            </div>

            {JSON.stringify(movie) === {} ?
                <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                </div>
                : <Card
                    className="max-w-lg mx-auto"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                >
                    <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                        {movie.title}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-400">
                        {movie.overview}
                    </p>
                    <div className="flex gap-2">
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid fa-star me-2"></i>{movie.vote_average}
                        </div>
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid fa-calendar-days me-2"></i>{movie.release_date}
                        </div>
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid fa-user me-2"></i>{movie.vote_count}
                        </div>
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid me-2 fa-globe"></i>{movie.original_language}
                        </div>
                    </div>

                </Card>}
        </div>
    )
}

export default Detail