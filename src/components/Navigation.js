import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
