import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import NavBar from '../components/NavBar/NavBar';
import MovieList from '../components/MovieList/MovieList';

class Home extends Component {
    state = {
        apiKey: '8499e5e340f4886fd910c1fc4b904db1',
        isModalOpen: false,
        categories: [
            { catName: 'popular', label: 'Popular', movies: [] },
            { catName: 'top_rated', label: 'Top Rated', movies: [] },
            { catName: 'upcoming', label: 'Upcoming', movies: [] },
        ],
        nav: [
            { label: 'Home', href: '/home' },
            { label: 'Top Rated', href: '/top' },
            { label: 'Popular', href: '/popular' },
            { label: 'Upcoming', href: '/upcoming' },
        ],
        currentMovie: '',
        movies: [],

        // ui: {
        //     isLoading: '',
        //     isModalOpen: '',
        //     isPrimaryActionDisabled: '',
        //     // para que estén prolijitos ahí
        // },
        // title: 'Título',
        // currentCat: '',
        // queryResults: '', //No el criterio de búsqueda, sino el resultado
        // allMovies: '',
        // allCats: '',
    };

    changeTitle = (newTitle) => this.setState({ title: newTitle })

    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen })

    setMovie = (str) => {
        this.setState({ currentMovie: str })
        this.toggleModal()
    }

    getMovies = (cat) => {
        fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
            .then((res) => res.json())
            .then((res) => {
                let aux = this.state.categories.find((e) => e.catName === cat)
                let newCat = { ...aux }
                newCat.movies = res.results
                this.setState({ categories: [...this.state.categories, newCat] })
            })
    }

    componentDidMount() {
        this.getMovies('top_rated')
    }

    render() {
        console.log(this.state.categories);
        return (
            <Fragment>
                <Header pageTitle={this.state.title} change={this.changeTitle}>
                    <NavBar data={this.state.nav} />
                </Header>
                <button onClick={() => this.setMovie('Batman')}>Botón</button>
                <MovieList movies={this.state.movies} title={'Top rated'} className={'movieList'} amount={5}></MovieList>
                <MovieList movies={this.state.movies} title={'Popular'} className={'movieList'} amount={10}></MovieList>
                <MovieList movies={this.state.movies} title={'fantastic'} className={'movieList'}></MovieList>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <p>{this.state.currentMovie}</p>
                </Modal>

            </Fragment>
        )
    }
};
export default Home