import React from 'react';

const Header = props => {
    return(
        <header>
            <h1>{props.pageTitle} </h1>
            {props.children}
        </header>
    )
}

export default Header