/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Movies from './Movies';
import { api, apiKey } from '../api/apiResource';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchGenres, fetchPlayingMovies, fetchSeries, fetchTrendingMovies } from '../redux/action/movie';

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [nowplayingmovies, setNowPlayingMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [genres, setGenres] = useState([]);
    const dispatch = useDispatch();

    const getMovies = async () => {
        try {
            const [popular, nowplaying, latestSeries, getGenres] = await Promise.all([
                api.get(`movie/popular?api_key=${apiKey}`),
                api.get(`movie/now_playing?api_key=${apiKey}`),
                api.get(`tv/popular?api_key=${apiKey}`),
                api.get(`genre/tv/list?api_key=${apiKey}`)
            ]);

            setTrendingMovies(popular.data.results);
            setNowPlayingMovies(nowplaying.data.results);
            setSeries(latestSeries.data.results);
            setGenres(getGenres.data.genres);

            dispatch(fetchTrendingMovies(popular.data.results));
            dispatch(fetchPlayingMovies(nowplaying.data.results));
            dispatch(fetchSeries(latestSeries.data.results));
            dispatch(fetchGenres(getGenres.data.genres));
        }
        catch (error) {
            console.error("Failed content", error);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='bg-gray-900'>
            <Movies />

            {/* <div className='w-full h-full mx-auto'>
                <h3 className="text-xl text-white">Trending</h3>
                <div className='sm:container mx-auto gap-2 flex lg:w-3/4'>
                    <Card
                        className=" text-sm w-96 h-96 bg-gray-900 text-white border-0"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
                    >
                        <h5 className="text-xl font-bold tracking-tight">
                            Title
                        </h5>
                        <div className="flex space-x-2 mb-2">
                            <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                        </div>
                    </Card>
                    <Card
                        className=" text-sm bg-gray-900 text-white border-0"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
                    >
                        <h5 className="text-xl font-bold tracking-tight">
                            Title
                        </h5>
                        <div className="flex space-x-2 mb-2">
                            <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                        </div>
                    </Card>
                    <Card
                        className=" text-sm bg-gray-900 text-white border-0"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
                    >
                        <h5 className="text-xl font-bold tracking-tight">
                            Title
                        </h5>
                        <div className="flex space-x-2 mb-2">
                            <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                            <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                        </div>
                    </Card>
                </div>
            </div> */}

            {/* trending movies */}
            <div className="w-full max-w-screen-lg mx-auto flex align-middle justify-center my-10">
                <div>
                    <div className="mx-auto my-5 lg:w-3/4 text-white flex justify-between">
                        <h3 className="font-bold font-2xl">Trending</h3>
                        <Link to="#" className=''>View All <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="mx-auto flex flex-wrap gap-4 justify-center lg:w-3/4">

                        {trendingMovies.length !== 0 ?
                            trendingMovies.slice(0, 4).map(movie => (
                                <Link to={`movies/trending/${movie.id}`} key={movie.id}>
                                    <div className="w-52 h-52 text-sm bg-gray-900 text-white border-0 relative">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='rounded-md h-32' alt="" />
                                        <div className="flex justify-between">
                                            <h5 className="text-sm font-bold tracking-tight">{movie.title.slice(0, 10).concat('...')}</h5>
                                            <div className="flex space-x-1 text-sm">
                                                {genres.length !== 0 ?
                                                    genres.map(genre => (
                                                        movie.genre_ids.map(item => (
                                                            item === genre.id ? <div className="rounded-lg bg-red-600 py-1 px-2">{genre.name}</div> : ''
                                                        ))
                                                    ))
                                                    :
                                                    <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>

                                                }

                                            </div>
                                        </div>
                                        <div className="absolute w-full top-0">
                                            <div className="flex justify-between px-4 pt-2">
                                                <div><i className="fa-solid fa-clock"></i> 3:12:00</div>
                                                <div><i className="fa-solid fa-star"></i> {movie.vote_average}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            : <h1 className='text-gray-500'>There is no movies trending</h1>}

                    </div>
                </div>
            </div>

            {/* now_playing movies */}
            <div className="w-full max-w-screen-lg mx-auto flex align-middle justify-center my-10">
                <div>
                    <div className="mx-auto lg:w-3/4 text-white flex justify-between">
                        <h3 className="font-bold font-2xl">New Release- Movies</h3>
                        <Link to="#" className=''>View All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="mx-auto flex flex-wrap gap-4 mt-5 justify-center lg:w-3/4">

                        {nowplayingmovies.length !== 0 ?
                            nowplayingmovies.slice(0, 4).map(movie => (
                                <Link to={`movies/playing/${movie.id}`} key={movie.id}>
                                    <div className="w-52 h-96 text-sm text-white border-0 relative">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='rounded-md w-full h-80' alt="" />
                                        <div className="flex justify-between mt-2">
                                            <h5 className="font-bold tracking-tight">{movie.title.slice(0, 10).concat('...')}</h5>
                                            <div className="flex space-x-1 align-middle">
                                                <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                                <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            : <h1>There is no now_playing movies</h1>}
                    </div>
                </div>
            </div>

            {/* series */}
            <div className="w-full max-w-screen-lg mx-auto flex align-middle justify-center my-10">
                <div>
                    <div className="mx-auto lg:w-3/4 text-white flex justify-between">
                        <h3 className="font-bold font-2xl">New Release- Series</h3>
                        <Link to="#" className=''>View All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="mx-auto flex flex-wrap gap-4 mt-5 justify-center lg:w-3/4">
                        {series.length !== 0 ?
                            series.slice(0, 4).map(movie => (
                                <Link to={`movies/series/${movie.id}`} key={movie.id}>
                                    <div className="w-52 h-96 text-sm text-white border-0 relative">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='rounded-md w-full h-80' alt="" />
                                        <div className="flex justify-between mt-2">
                                            <h5 className="font-bold tracking-tight">{movie.name.slice(0, 12).concat('...')}</h5>
                                            <div className="flex space-x-1 align-middle">
                                                <div className="rounded-lg bg-red-600 py-1 px-2">{movie.origin_country}</div>
                                                <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid mt-1 fa-star text-yellow-300 me-1"></i>{movie.vote_average}</div>
                                            </div>
                                        </div>
                                        <div className="absolute w-full top-0">
                                            <div className="p-2">
                                                <div className='bg-red-500 w-10 p-1 rounded-md'>EP 6</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            : <h1>There is no series playing</h1>}
                    </div>
                </div>
            </div>

            {/* recommendations */}
            <div className="w-full max-w-screen-lg mx-auto flex align-middle justify-center mt-10">
                <div>
                    <div className="mx-auto lg:w-3/4 text-white flex justify-between">
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Recommended</h5>
                            <div className="ms-2 flex space-x-2">
                                <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                            </div>
                        </div>
                        <Link to="#" className=''>View All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="mx-auto flex flex-wrap gap-4 mt-5 justify-center lg:w-3/4">
                        <div className="w-52 h-96 text-sm text-white border-0 relative">
                            <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2&imbypass=on" className='rounded-md w-full h-80' alt="" />
                            <div className="flex justify-between mt-2">
                                <h5 className="text-xl font-bold tracking-tight">Title</h5>
                                <div className="flex space-x-1 align-middle">
                                    <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                    <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                                </div>
                            </div>
                            <div className="absolute w-full top-0">
                                <div className="p-2">
                                    <div className='bg-red-500 w-10 p-1 rounded-md'>EP 6</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-52 h-96 text-sm text-white border-0 relative">
                            <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2" className='rounded-md w-full h-80' alt="" />
                            <div className="flex justify-between mt-2">
                                <h5 className="text-xl font-bold tracking-tight">Title</h5>
                                <div className="flex space-x-1 align-middle">
                                    <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                    <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                                </div>
                            </div>
                            <div className="absolute w-full top-0">
                                <div className="p-2">
                                    <div className='bg-red-500 w-10 p-1 rounded-md'>EP 6</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-52 h-96 text-sm bg-gray-900 text-white border-0 relative">
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg" className='rounded-md w-full h-80' alt="" />
                            <div className="flex justify-between  mt-2">
                                <h5 className="text-xl font-bold tracking-tight">Title</h5>
                                <div className="flex space-x-1 align-middle">
                                    <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                    <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                                </div>
                            </div>
                            <div className="absolute w-full top-0">
                                <div className="p-2">
                                    <div className='bg-red-500 w-10 p-1 rounded-md'>EP 6</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-52 h-96 text-sm bg-gray-900 text-white border-0 relative">
                            <img src="https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2023/04/AGoodPerson_1-Sht_Art-min-min.jpg" className='rounded-md w-full h-80' alt="" />
                            <div className="flex justify-between  mt-2">
                                <h5 className="text-xl font-bold tracking-tight">Title</h5>
                                <div className="flex space-x-1 align-middle">
                                    <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                    <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                                </div>
                            </div>
                            <div className="absolute w-full top-0">
                                <div className="p-2">
                                    <div className='bg-red-500 w-10 p-1 rounded-md'>EP 6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
