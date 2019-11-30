import React from 'react'
import './MovieList.scss'

const MovieItem = ({ title, overview, release_date }) => {
    return (
        <li >
            <p className={'movieTitle'}>{title}</p>
            <em className={'date'}>Release date: {release_date}</em>
            <p className={'overview'}>Overview: {overview}</p>
        </li>
    )
}

const MovieList = ({ movies, title, amount }) => {
    let moviesToShow = amount? movies.slice(0, amount) : movies
    return (
        <div className='movies'>
            <h3>{title}</h3>
            <ul className='movieList'>
                {moviesToShow.map((movie, i) =>
                    <MovieItem key={i} {...movie} />
                )}
            </ul>
        </div>
    )
}

export default MovieList;