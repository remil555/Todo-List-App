import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
        <nav>
        <ul className='nav justify-content-end'>
          <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
          <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
          <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
