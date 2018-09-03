import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Skills.css'
import C from './C.png';
import javascript from './javascript.png';
import mongo from './mongo.png';
import sass from './sass.png';
import sequelize from './sequelize.png';
import python from './python.png';
import graph from './graphql.png';
import nodejs from './nodejs.png';
import django from './djangogr.png';
import redux from './redux.png';
import express from './Expressjs.png';

class Skills extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <div className="Container">
          <div className="Skills">
            <div className="Skills-box">
              <div className="Skills-title animated bounceInDown">Skills</div>
              <p className="Skills-text">I’ve built several projects with different technologies. I’ve used React/React native as 
                the front-end framework for all of my apps. More technologies that I used are 
                listed below react, react native, redux, css/sass, node, express, 
                mongoDB, SQL,mocha, chai, python, django, C, and graphQL
              </p>
            </div>
            <div className="Project">
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={C} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={javascript} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={mongo} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={sass} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={sequelize} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={python} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={graph} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={nodejs} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={django} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={redux} alt="C" />
              <img className="icon animated bounceInDown" style={{maxWidth: '4rem', margin: '0.5rem'}}src={express} alt="C" />
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Skills;