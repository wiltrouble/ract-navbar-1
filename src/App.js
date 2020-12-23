import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './pages/index'
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
