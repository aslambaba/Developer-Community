import React from 'react';
import Style from './style/header.module.css';

function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.logo}>
        <h3>Developer Community</h3>
      </div>
      <div className={Style.link}>
        <a href='/'>Home</a>
        <a href='/developers'>Developers</a>
        <a href='/about'>About Us</a>
      </div>
    </div>
  )
}

export default Header