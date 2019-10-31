import React, { Component, Fragment } from 'react';
import Header from '../components/Header'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Título'
        }
    };


    changeTitle(newTitle) {
        this.setState({ title: newTitle })
    };

    render() {
        return (
            <Fragment>
                <Header pageTitle={this.state.title} />
            </Fragment>
        )
    }
};
export default Home