import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const date = new Date();
  return (
    <nav>
      <p className="timestamp">{date.toLocaleTimeString()}</p>
      <Link to={'/'} className="title">Weather NOW</Link>
    </nav>
  );
}

export default Nav;
