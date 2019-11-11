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
            moviesList: [],
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
                <Header pageTitle={this.state.title} />
                <NavBar data={this.state.nav} />
                {/* <Movies list={this.state.moviesList}/> */}
            </Fragment>
        )
    }
};
export default Home