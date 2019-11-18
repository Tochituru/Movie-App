import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Título',
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
        }
    };

    // fetchMovies(){
    //     fetch('moviesApi')
    //     .then(res => this.setState({moviesList: res}))
    // }
    changeTitle(newTitle) {
        this.setState({ title: newTitle })
    };

    render() {
        return (
            <Fragment>
                <Header pageTitle={this.state.title} menuData={this.state.nav}>
                    Contenido de children
                </Header>
                <NavBar data={this.state.nav} />
                {/* <Movies list={this.state.moviesList}/> */}
                <p>{this.state.title}</p>
                <a href='!#' onClick={() => this.changeTitle('nuevo título')}>btn</a>
            </Fragment>
        )
    }
};
export default Home