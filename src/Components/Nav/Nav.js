import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to='/'> Dashboard </Link>
    <Link to='/add'> Form </Link>
  </nav>
)

export default Nav