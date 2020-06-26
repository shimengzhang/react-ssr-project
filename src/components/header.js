import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/reset.css';

const Header = () => (
  <div>
    <Link to='/'>Home</Link>
    <br></br>
    <Link to='/login'>Login</Link>
  </div>
);

export default Header;
