import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountriesContainer from '../CountriesContainer';
import Home from '../Home'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'orange',
  textDecoration: 'none',
  color: 'white',
}
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavLink to="/"
            exact
            style={link}
            activeStyle={{
              background: 'hotpink'}}
          >Home</NavLink>
          
          <NavLink to="/countries"
            style={link}
            activeStyle={{
              background: 'Purple'
            }}
          >Countries</NavLink>
        </Router>
      </div>
    )
  }
}

export default Navbar; 
