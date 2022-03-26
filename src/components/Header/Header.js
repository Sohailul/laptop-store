import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="brand-name">
            <div className="container-fluid">
                <h3><a className="nav-link" href="/home">Bangla Laptop Store</a></h3>
            </div>
        </nav>
    );
};

export default Header;