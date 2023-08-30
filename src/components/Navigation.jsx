import React from 'react';
import { Link } from 'react-router-dom';
import { HumanLoggedIn } from './Icons';

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
          <Link to="/categories" className="categories-nav">CATEGORIES</Link>
        </li>
      </ul>
      <HumanLoggedIn />
    </nav>
  );
}

export default Navigation;
