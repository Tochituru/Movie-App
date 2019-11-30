import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import NavBar from '../components/NavBar/NavBar';
import MovieList from '../components/MovieList/MovieList';

class Home extends Component {
    state = {
        ui: {
            isLoading: '',
            isModalOpen: '',
            isPrimaryActionDisabled: '',
            // para que estén prolijitos ahí
        },
        apiKey: '8499e5e340f4886fd910c1fc4b904db1',
        title: 'Título',
        isModalOpen: false,
        currentMovie: '',
        currentCat: '',
        queryResults: '', //No el criterio de búsqueda, sino el resultado
        allMovies: '',
        allCats: '',
        nav: [
            { label: 'Home', href: '/home' },
            { label: 'Top Rated', href: '/top' },
            { label: 'Popular', href: '/popular' },
            { label: 'Upcoming', href: '/upcoming' },
        ],
        movies: [],
    };

    // fetchMovies(){
    //     fetch('moviesApi')
    //     .then(res => this.setState({moviesList: res}))
    // }
    changeTitle = (newTitle) => this.setState({ title: newTitle })
    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen })
    setMovie = (str) => {
        this.setState({ currentMovie: str })
        this.toggleModal()
    }

    getMovies = (cat) => {
        fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
            .then((res) => res.json())
            .then((res) => this.setState({ movies: res.results }))

    }
    componentDidMount() {
        this.getMovies('top_rated')
    }


    render() {
        console.table(this.state.movies)
        return (
            <Fragment>
                <Header pageTitle={this.state.title} change={this.changeTitle}>
                    <NavBar data={this.state.nav} />
                </Header>
                <div className={'container'}>
                    <button onClick={() => this.setMovie('Batman')}>
                        Botón
                    </button>
                </div>
                {/* {this.state.movies.map((e, i) => {
                    return (<ul className={'movie'} key={`container-${i}`}>
                        <li className={'movieTitle'} key={`title-${i}`}>{e.title}</li>
                        <li className={'movieOverview'} key={`overview-${i}`}>{e.overview}</li>
                        <li className={'movieDate'} key={`releasedate-${i}`}>{e.release_date}</li>
                    </ul>)
                })} */}
                <MovieList movies={this.state.movies} title={'Top rated'} className={'movieList'}></MovieList>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <p>{this.state.currentMovie}</p>
                </Modal>

            </Fragment>
        )
    }
};
export default Home