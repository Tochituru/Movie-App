import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import NavBar from '../components/NavBar/NavBar';

class Home extends Component {
    state = {
        ui: {
            isLoading: '',
            isModalOpen: '',
            isPrimaryActionDisabled: '',
            // para que estén prolijitos ahí
        },
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
    changeTitle = (newTitle) => this.setState({ title: newTitle })
    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen })
    setMovie = (str) => {
        this.setState({ currentMovie: str })
        this.toggleModal()
    }


    render() {
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <p>{this.state.currentMovie}</p>
                </Modal>

            </Fragment>
        )
    }
};
export default Home