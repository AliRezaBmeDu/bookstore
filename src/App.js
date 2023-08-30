import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { getBookItems } from './redux/books/booksSlice';
import './App.css';

const App = () => {
  const { isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
