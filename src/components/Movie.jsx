/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from 'flowbite-react'
import { Link } from 'react-router'

const Movie = ({ data }) => {
    console.log(data);
    return (
        <div>
            <Link to={`movies/detail/${data.id}`}>
                <Card
                    className="max-w-sm text-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {data.overview.slice(0, 100).concat('...')}
                    </p>
                    <div className="flex justify-between">
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white"><i className="fa-solid fa-star me-2"></i>{data.vote_average}</div>
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white"><i className="fa-solid fa-calendar-days me-2"></i>{data.release_date}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid fa-user me-2"></i>{data.vote_count}
                        </div>
                        <div className="bg-gray-700 rounded-lg py-1 px-2 text-white">
                            <i className="fa-solid me-2 fa-globe"></i>{data.original_language}
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default Movie