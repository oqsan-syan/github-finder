import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import logo from './images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" className="logo"/> 
      <SearchPanel />
    </div>
  );
};

export default Header;