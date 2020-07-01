import React from 'react';
import { Link } from 'react-router-dom';

import fullyalive from '../../images/fullyalive.png';

export const Navbar = () => {
  return (
    <nav className='text-center'>
      <div className='nav-container'>
        <div className='logo-container'>
          <img src={fullyalive} alt='' />
        </div>
        <div className='links'>
          <ul>
            <li>
              <Link className='home-link link-item' to='/'>
                HOME
              </Link>
            </li>
            <li>
              <Link
                className='prayer-intentions-link link-item'
                to='/prayer-intentions'
              >
                PRAYER INTENTIONS
              </Link>
            </li>
            <li>
              <Link className='contact-us-link link-item' to='contact-us'>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
