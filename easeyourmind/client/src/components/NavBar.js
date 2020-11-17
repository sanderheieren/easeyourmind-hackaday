import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="link">Guided Meditation</Link>
        </li>
        <li>
          <Link to="/quote" className="link">Inspiring Quotes</Link>
        </li>
        <li>
          <Link to="/nasaphoto" className="link">Picture of the day</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;

