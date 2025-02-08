import React from 'react'
import { Carousel } from "flowbite-react";
import { Link } from 'react-router';

const Movies = () => {
    return (
        <div>
            <div className="h-full">
                <Carousel leftControl="left" rightControl="right">
                    <div className="relative">
                        <img
                            src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
                            alt="..."
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute" style={{ top: '50%', left: '45%' }}>
                            <Link to="#" className='bg-red-600 text-white font-bold p-4 rounded-md hover:bg-red-900'>Watch now <i className="fa-solid fa-play"></i></Link>
                        </div>

                        {/* Absolute Positioned Div */}
                        <div className="absolute p-2 text-white z-10 w-1/2" style={{ top: '50%', left: '10%' }}>
                            <h3 className="font-bold text-2xl mb-2">Avatar: The Way of Water</h3>
                            <div className="flex space-x-2 mb-2">
                                <div className="bg-white text-gray-900 rounded-lg py-1 px-2">Action</div>
                                <div className="bg-white text-gray-900 rounded-lg py-1 px-2">Adventure</div>
                                <div className="bg-white text-gray-900 rounded-lg py-1 px-2">Science Fiction</div>
                            </div>
                            <div className="flex space-x-4">
                                <div><i className="fa-solid fa-star"></i> 8.5</div>
                                <div><i className="fa-solid fa-calendar-days"></i> 2022</div>
                                <div><i className="fa-solid fa-clock"></i> 3:12:00</div>
                            </div>
                            <p className="mt-2 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laudantium aut. Nulla error tempora veniam
                                animi culpa aliquam, harum sequi eaque nisi vero, praesentium, dolorum consectetur expedita inventore velit quasi!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* <div className="container my-5 mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {movies.length !== 0 ? movies.map(movie => (
                    <Movie key={movie.id} data={movie} />
                )) : <h1>There is no Movie.</h1>}
            </div> */}
        </div >
    )
}

export default Movies