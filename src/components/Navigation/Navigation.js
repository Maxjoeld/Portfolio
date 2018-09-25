import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import img from './logo.png';
import './Navigation.css'

class Navigation extends Component {
  state = {}
  render () {
    return (
      <div className='Navigation'>
        <div className="Navigation-layout">
            <p className="Navlogo">M<span style={{ marginLeft: '-7px'}}>D</span></p>
          <div className='Navigation-icons'>
            <div className='Navigation-show'>
              <NavLink className='Navigation-links' to='/home'>
                <i class='fas fa-home' />
              </NavLink>
              <NavLink className='Navigation-text' to='/home'>            
                <p className='Navigation-hover'>Home</p>
              </NavLink>
            </div>
            <div className='Navigation-show'>
              <NavLink className='Navigation-links' to='/about'>
                <i class='fas fa-user' />
              </NavLink>
              <NavLink to='/about'>
              <p className='Navigation-hover'>About</p>
              </NavLink>
            </div>
            <div className='Navigation-show'>
              <NavLink className='Navigation-links' to='/skills'>
                <i class='fas fa-cog' />
              </NavLink>
              <NavLink to='/skills'>
                <p className='Navigation-hover'>Skills</p>
              </NavLink>
            </div>
            <div className='Navigation-show'>
              <NavLink className='Navigation-links' to='/projects'>
                <i class='fas fa-code' />
              </NavLink>
              <NavLink  to='/projects'>
                <p className='Navigation-hover'>Projects</p>
              </NavLink>
            </div>
            <div className='Navigation-show'>
              <NavLink className='Navigation-links' to='/contact'>
                <i class='far fa-envelope' />
              </NavLink>
              <NavLink to='/contact'>          
              <p className='Navigation-hover'>Contact</p>
              </NavLink>
            </div>
          </div>
          <div className="bottomNav-icons">
            <a style={{ color: '#47494b'}} href="https://www.linkedin.com/in/maximo-delarosa/" target="_blank"  rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a style={{ color: '#47494b'}} href="https://github.com/maxjoeld" target="_blank"  rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a style={{ color: '#47494b'}} href="https://medium.com/@mjd809" target="_blank"  rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation)
