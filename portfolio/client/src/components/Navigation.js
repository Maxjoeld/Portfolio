import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

import './Navigation.css'

class Navigation extends Component {
  state = {}
  render () {
    return (
      <div className='Navigation'>
        <div className='Navigation-logo'>Logo goes here</div>
        <div className='Navigation-icons'>
          <div className='Navigation-show'>
            <NavLink className='Navigation-links' to='/home'>
              <i class='fas fa-home' />
            </NavLink>
            <NavLink to='/home'>            
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
            <NavLink to='/projects'>
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
      </div>
    )
  }
}

export default withRouter(Navigation)
