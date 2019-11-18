import React from 'react';

const NavItem = ({element}) => {
    let {href, label} = element;
    return (
    <li>
        <a href={href}>{label}</a>
    </li>)
};

const NavBar = ({data}) => {  
    return (
        <nav>
            <ul>
                {data.map((e, i)=> <NavItem key={i} element={e} />)}
            </ul>
        </nav>
    )
};

export default NavBar;