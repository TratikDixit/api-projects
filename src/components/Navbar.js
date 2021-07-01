import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
       
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/apia' className='nav-links' onClick={closeMobileMenu}>
                BitCoin Price Generator
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/under'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Language Translator
              </Link>
              </li>
              <li>
              <Link
                to='/under'  className='nav-links' onClick={closeMobileMenu}
              >
                Stream Browser
              </Link>
           </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
/*

*/