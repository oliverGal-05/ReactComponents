import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <h1 style={headerStyle}>TodoList</h1>
                <div style={linkContainer}>
                    <Link style={linkStyle} to="/">Home</Link> | <Link
                    style={linkStyle} to="about">About</Link>
                </div>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#333',
    textDecoration: 'none',
}

const linkContainer = {
    width: '11%',
    margin: '0 auto'
}

export default Header;
