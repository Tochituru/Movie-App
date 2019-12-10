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

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            totalMovies: this.props.amount,
        }
    }

    showMore = (e) => {
        e.preventDefault()
        let num = this.state.currentPage
        let newState = {
            currentPage: num + 1,
            totalMovies: this.props.amount * this.state.currentPage,
        }
        this.setState({ ...newState })
    }

    render() {
        let { movies, title, amount } = this.props
        let moviesToShow = amount ? movies.slice(0, this.state.totalMovies) : movies

        return (
            <div className='movies'>
                <h3>{title}</h3>
                <ul className='movieList'>
                    {moviesToShow.map((movie, i) =>
                        <MovieItem key={i} {...movie} />
                    )}
                </ul>
                <button onClick={(e) => this.showMore(e)}>Show more</button>
            </div>
        )
    }
}

export default MovieList;