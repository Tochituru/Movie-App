import React from 'react';
import './NavBar.scss'

const NavItem = ({element}) => {
    let {href, label} = element;
    return (
    <li>
        <a href={href}>{label}</a>
    </li>)
};

const NavBar = ({data}) => {  
    return (
        <nav className={'mainNav'}>
            <ul>
                {data.map((e, i)=> <NavItem key={i} element={e} />)}
            </ul>
        </nav>
    )
};

export default NavBar;