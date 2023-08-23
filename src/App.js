import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
