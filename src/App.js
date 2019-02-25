import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './components/About';
import Home from './pages/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
