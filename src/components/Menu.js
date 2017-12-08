import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'greven',
        fontSize: '2rem'
    };

    return (
        <div>
            <ui>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
                <li><NavLink to="/users" activeStyle={activeStyle}>Users</NavLink></li>
            </ui>
        </div>
    )
}

export default Menu;