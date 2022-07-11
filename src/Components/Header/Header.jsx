import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="logo" />
      
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="bars" style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ) : (
        <ul className='header-menu'>
          <li onClick={() => setMenuOpened(false)}><a href='#'>Home</a></li>
          <li onClick={() => setMenuOpened(false)}><a href='#Programs'>Programs</a></li>
          <li onClick={() => setMenuOpened(false)}><a href='#Reasons'>Why us</a></li>
          <li onClick={() => setMenuOpened(false)}><a href='#Plans'>Plans</a></li>
          <li onClick={() => setMenuOpened(false)}><a href='#Testimonials'>Testimonials</a></li>
        </ul>
      )}
    </div>
  )
}

export default Header;