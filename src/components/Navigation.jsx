import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './Icons';

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
      <CartIcon />
    </nav>
  );
}

export default Navigation;
