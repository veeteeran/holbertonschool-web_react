import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpeg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={holberton_logo} className="logo" alt="logo" />
      <h1 className="title">School dashboard</h1>
    </div>
  );
}

export default Header;
