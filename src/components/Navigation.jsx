import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-icon.png';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="bookstore-cms">Bookstore CMS</h1>
        </li>
        <li>
          <Link to="/" className="books-nav">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="books-nav categories-nav">CATEGORIES</Link>
        </li>
      </ul>
      <img src={profileImage} className="human-icon" alt="logged-in" />
    </nav>
  );
}

export default Navigation;
