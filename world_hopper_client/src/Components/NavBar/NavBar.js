import React from 'react';
import { NavLink } from 'reactstrap'
import { NavLink as ReactLink} from 'react-router-dom';


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
      
      
          <NavLink tag={ReactLink}
          to="/"
            exact
            style={link}
            activeStyle={{
              background: 'hotpink'}}
          >Home</NavLink>
          
          <NavLink tag={ReactLink}
          to="/countries"
            style={link}
            activeStyle={{
              background: 'Purple'
            }}
          >Countries</NavLink>

          <NavLink tag={ReactLink}
          to="/flashCards"
            style={link}
            activeStyle={{
              background: 'green'
            }}
          >Flash Cards Game</NavLink>

          <NavLink tag={ReactLink}
          to="/travel"
            style={link}
            activeStyle={{
              background: 'blue'
            }}
          >Where To?</NavLink>


      </div>
    )
  }
}

export default Navbar; 
