/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Movies from './Movies';
import { api, apiKey } from '../api/apiResource';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movie';
import { Link } from 'react-router';

const Home = () => {

    const dispatch = useDispatch();

    const getMovies = async () => {
        const response = await api.get(`popular?api_key=${apiKey}`);
        dispatch(fetchMovies(response.data.results));
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

            <div className="w-full max-w-screen-lg mx-auto">
                <div className="mx-auto lg:w-3/4 text-white flex justify-between">
                    <h3 className="">Trending</h3>
                    <Link to="#" className=''>View All <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="mx-auto flex flex-wrap gap-4 justify-center lg:w-3/4">
                    <div className="w-80 h-80 text-sm bg-gray-900 text-white border-0 relative">
                        <img src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg" className='rounded-md' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1">
                                <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                            </div>
                        </div>
                        <div className="absolute w-full top-0">
                            <div className="flex justify-between px-4 pt-2">
                                <div><i className="fa-solid fa-clock"></i> 3:12:00</div>
                                <div><i className="fa-solid fa-star"></i> 8.5</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-80 h-80 text-sm bg-gray-900 text-white border-0 relative">
                        <img src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg" className='rounded-md' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1">
                                <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                            </div>
                        </div>
                        <div className="absolute w-full top-0">
                            <div className="flex justify-between px-4 pt-2">
                                <div><i className="fa-solid fa-clock"></i> 3:12:00</div>
                                <div><i className="fa-solid fa-star"></i> 8.5</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-80 h-80 text-sm bg-gray-900 text-white border-0 relative">
                        <img src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg" className='rounded-md' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1">
                                <div className="rounded-lg bg-red-600 py-1 px-2">Action</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Adventure</div>
                                <div className="rounded-lg bg-red-600 py-1 px-2">Science Fiction</div>
                            </div>
                        </div>
                        <div className="absolute w-full top-0">
                            <div className="flex justify-between px-4 pt-2">
                                <div><i className="fa-solid fa-clock"></i> 3:12:00</div>
                                <div><i className="fa-solid fa-star"></i> 8.5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-lg mx-auto">
                <div className="mx-auto lg:w-3/4 text-white flex justify-between">
                    <h3 className="">New Release- Movies</h3>
                    <Link to="#" className=''>View All <i class="fa-solid fa-arrow-right"></i></Link>
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
                    </div>

                    <div className="w-52 h-96 text-sm text-white border-0 relative">
                        <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2" className='rounded-md w-full h-80' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1 align-middle">
                                <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-52 h-96 text-sm bg-gray-900 text-white border-0 relative">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*iQhzIW0ZffqWaTI10ywLsA.jpeg" className='rounded-md w-full h-80' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1 align-middle">
                                <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-52 h-96 text-sm bg-gray-900 text-white border-0 relative">
                        <img src="https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2023/04/AGoodPerson_1-Sht_Art-min-min.jpg" className='rounded-md w-full h-80' alt="" />
                        <div className="flex justify-between">
                            <h5 className="text-xl font-bold tracking-tight">Title</h5>
                            <div className="flex space-x-1 align-middle">
                                <div className="rounded-lg bg-red-600 py-1 px-2">HD</div>
                                <div className='flex align-middle py-1 px-2 border rounded-md border-red-300'><i className="fa-solid fa-clock me-1 mt-1"></i> 3:12:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
