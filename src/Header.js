import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = 'walk/create'>Create</Link></li>
                <li><Link to = '/walks/all'>View</Link></li>
                <li><Link to = '/resources'>Resources</Link></li>
                <li><Link to = '/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;