import React, { Component, Fragment } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Home'
        }
    };


    changeTitle(newTitle) {
        this.setState({ title: newTitle })
    };

    render() {
        return (
            <Fragment>
                <h1>{this.state.title}</h1>
                <p>Más textito</p>
                <a href="!#" onClick={() => this.changeTitle('Inicio')}>Cambiar</a>
            </Fragment>
        )
    }
};
export default Home