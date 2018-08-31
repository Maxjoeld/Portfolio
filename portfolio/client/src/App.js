import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './styles/layout.css'
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          {/* <Redirect exact from="/" to="/home" component={Home} /> */}
        </Switch>
      </Router>
    );
};

export default App;
