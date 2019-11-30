import React, { Component, Fragment } from 'react';
import Body from '../components/Body'
import Header from '../components/Header';
import Modal from '../components/Modal/Modal';
import NavBar from '../components/NavBar';
import './Home.scss';

class Home extends Component {
    state = {
        title: 'Título',
        isModalOpen: false,
        nav: [
            { label: 'Home', href: '/home' },
            { label: 'Top Rated', href: '/top' },
            { label: 'Popular', href: '/popular' },
            { label: 'Upcoming', href: '/upcoming' },
        ],
        moviesList: [
            {
                cat: 'Popular', movies: [
                    { title: 'Batman Begins', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },
                    { title: 'Batman Continues', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet.' }, { title: 'Batman Ends', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },]
            },
            {
                cat: 'Top Rated', movies: [
                    { title: 'Batman Begins', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },
                    { title: 'Batman Continues', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet.' }, { title: 'Batman Ends', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },]
            },
            {
                cat: 'Upcoming', movies: [
                    { title: 'Batman Begins', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },
                    { title: 'Batman Continues', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet.' }, { title: 'Batman Ends', synopsis: 'Sed in risus blandit, tristique dui sit amet, scelerisque metus. Etiam ac porta orci. Proin dignissim dignissim ante, a semper nisl egestas sit amet. Sed non venenatis diam. Praesent vehicula luctus turpis, id vulputate ipsum finibus quis.' },]
            }
        ],
    };

    // fetchMovies(){
    //     fetch('moviesApi')
    //     .then(res => this.setState({moviesList: res}))
    // }
    changeTitle = (newTitle) => this.setState({ title: newTitle });
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        console.log(this.state.isModalOpen);

        return (
            <Fragment>
                <Header
                    pageTitle={this.state.title}
                    change={this.changeTitle}
                />
                <NavBar data={this.state.nav} />
                <button
                    onClick={() => this.toggleModal()}>
                    Botón
                    </button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}>
                    <p>El mar</p>
                </Modal>

                {
                    this.state.moviesList.map((element, i) => (
                        <div key={i}>
                            <h3>{element.cat}</h3>
                            <ul>
                                {element.movies.map((movie, index) => (<li key={index}>{movie.title} </li>
                                ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <Body test='probando la vida' />
                {/* {this.state.selectedCAt ? <MoviesCat /> : <MoviesHome/>} */}
                {/* esta es una opción, pero no es una buena práctica. No conviene poner condiciones en el render. */}
                {/* this.state.selectedCat && MoviesCat  --> Esto es uan forma de decir: si existe A, entonces muestra B*/}
            </Fragment>
        )
    }
};
export default Home