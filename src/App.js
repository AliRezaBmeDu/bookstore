import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getBookItems } from './redux/books/booksSlice';
import './App.css';

const App = () => {
  const {books, isLoading} = useSelector((store) => store.books);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBookItems())
  }, []);

  return (
    <Router>
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
