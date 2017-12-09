import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'greven',
        fontSize: '2rem'
    };

    return (
        <div>
            <NavLink exact to="/" activeStyle={activeStyle}>홈입니다</NavLink>
            <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink>
            <NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink>
            <NavLink to="/users" GactiveStyle={activeStyle}>Users</NavLink>
        </div>
    )
}

export default Menu;