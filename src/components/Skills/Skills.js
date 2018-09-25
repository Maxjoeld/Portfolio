import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <div className="Skills">
        <div className="about-Larrow">
          <NavLink style={{ color: "white"}} to="/about">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-left fa-fw pulse" />
          </NavLink>
        </div>
        <div className="Skills-box">
          <div className="Skills-title animated bounceInDown">Skills</div>
          <p className="Skills-text">
            My expertise lies in: React, React Native, Python/Django, Express/Node.js, css/sass mongoDB, sqLite, mocha, chai, Apollo and graphQL.
            I’ve developed several applications using these technologies. View my
            <NavLink style={{color: '#74F9D9'}} to="/projects"> work.</NavLink>
          {/* <br />
          <br />
          Additional technologies that I've built applications with are
          listed below css/sass
          mongoDB, sqLite , mocha, chai, Apollo and graphQL */}
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
        <div className="about-arrows">
          <NavLink style={{ color: "white"}} to="/projects">
            <i style={{ cursor: 'pointer'}}className="fas fa-arrow-right fa-fw pulse" />
          </NavLink>
        </div>
      </div>
     );
  }
}
 
export default Skills;