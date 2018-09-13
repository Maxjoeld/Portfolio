import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
      <Router>
        <div className="App">
            <Navigation />
          <div className="Container">
            <Sidebar />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Redirect exact from="/" to="/home" component={Home} />
          </div>
        </div>
      </Router>
    );
};

export default App;
