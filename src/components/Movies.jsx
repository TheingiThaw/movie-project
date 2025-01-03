import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux'

const Movies = () => {
    const movies = useSelector(state => state.movies.movies);

    return (
        <div>
            <div className="container mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {movies.length !== 0 ? movies.map(movie => (
                    <Movie key={movie.id} data={movie} />
                )) : <h1>There is no Movie.</h1>}
            </div>
        </div>
    )
}

export default Movies