import React from 'react'
import './MovieList.scss'

const MovieItem = ({ element }) => {
    let { title, overview, release_date } = element;
    return (
        <h3 className={'title'}>{title}
            <ul>

            </ul>
            <div className={'overview'}>Overview: {overview}</div>
            <div className={'date'}>Release date: {release_date}</div>
        </h3>
    )
}

const MovieList = ({ movies, title }) => {
    return (
        <div className='movieList'>
            <h3>{title}</h3>
            <ul>
                {movies.map((e, i) => <li>{e.title}</li>)}
            </ul>
            {/* {data.map((e, i) => <MovieItem key={i} element={e} />)} */}
        </div>
    )
}

export default MovieList;